import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/models/entities/productsSaleslocation.entity';
import { ProductTag } from '../productsTag/models/entities/productsTag.entity';
import { Product } from './models/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,

    // 1:1 연결을 위해 제공되어있는 값을 가져오려고 새로운 디비를 불러온다
    @InjectRepository(ProductSaleslocation)
    private readonly ProductSaleslocation: Repository<ProductSaleslocation>,
  ) {}

  async findOne({ productId }) {
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    }); // 쿼리문 조건문
  }
  async findAll() {
    return await this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }
  async create({ createProductInput }) {
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput;

    // 세일즈 로케이션의 id를 프로덕트에 엮을거라 순서를 바꿔야함
    const result = await this.ProductSaleslocation.save({
      ...productSaleslocation,
    });

    // productTags // [ "#전자제품","#영등포","#컴퓨터"]
    const result2 = [];
    for (let i = 0; i < productTags.length; i++) {
      const tagname = productTags[i].replace('#', '');

      // 이미 등록된 태그인지 확인해보기
      const prevTag = await this.productTagRepository.findOne({
        where: { name: tagname },
      });

      // 기존에 태그가 존재한다면
      if (prevTag) {
        result2.push(prevTag);
      } else {
        // 기존에 태그가 없었다면
        const newTag = await this.productTagRepository.save({
          name: `${tagname}`,
        });
        result2.push(newTag);
      }
    }

    // this.productTagRepository.save({ name: '전자제품' });
    // this.productTagRepository.save({ name: '영등포' });
    // this.productTagRepository.save({ name: '컴퓨터' });

    return await this.productRepository.save({
      ...product,
      productSaleslocation: result, // { id: result.id } 디비에는 영향이 없지만 프론트로 돌아갈때 확인을 못함
      productCategory: { id: productCategoryId }, // 카테고리 추가 (result 통쨰로 넣기 vs id만 넣기)
      productTags: result2,
    });
  }

  async update({ productId, updateProductInput }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    const newProduct = {
      ...product,
      ...updateProductInput,
    };
    return await this.productRepository.save(newProduct);
  }

  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldout)
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
  }
  async delete({ productId }) {
    // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId });
    // result.affected 영향받은 여부를 보내줌
    // return result.affected ? true : false;

    // 2. 소프트 삭제(직접 구현) - isDeleted

    // this.productRepository.update({ id: productId }, { isDeleted: true });

    // 3. 소프트 삭제 직접 구현 - deleteAt

    // this.productRepository.update({ id: productId }, { deleteAt: new Date() });

    // 4. 소프트 삭제 TypeORM 제공 - softRemove 기본 값은 널로 주고 알아서 다해줌
    // this.productRepository.softRemove({ id: productId }); // id로만 삭제 가능

    // 5. 소프트 삭제 TypeORM 제공 - softDelete
    const result = await this.productRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능
    return result.affected ? true : false;
  }
}

// 반복문 속에 await가 있을 경우에는 forEach가 좋다
// for문은 await를 한번한번 계속 멈추기 때문에 좋지 않다.
// 하지만 일반적인 경우에서는 for문이 더 빠르긴 하다
