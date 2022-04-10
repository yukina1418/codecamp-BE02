import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/models/entities/productsSaleslocation.entity';
import { Product } from './models/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    // 1:1 연결을 위해 제공되어있는 값을 가져오려고 새로운 디비를 불러온다
    @InjectRepository(ProductSaleslocation)
    private readonly ProductSaleslocation: Repository<ProductSaleslocation>,
  ) {}

  async findOne({ productId }) {
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory'],
    }); // 쿼리문 조건문
  }
  async findAll() {
    return await this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory'],
    });
  }
  async create({ createProductInput }) {
    // 1. 상품만 등록하는 경우
    // 상품을 데이터베이스에 저장한다
    // const result = await this.productRepository.save({
    //   ...createProductInput,
    //   // 하나하나 직접 나열하기
    //   // name: createProductInput.name,
    //   // description: createProductInput.description,
    //   // price: createProductInput.price,
    //   // isSoldout: createProductInput.isSoldout,
    // }); //앞은 디비에 저장된 컬럼, 뒤는 프론트에서 받아온 값
    // // save쓰면 저장댐~
    // return result;
    // 리턴으로 반환해야한다
    //
    //
    //
    // 2. 상품과 상품 거래 위치를 함께 등록하는 경우

    // rest 파라미터 앞에 명시된 것들은 제외하고 ...에 다 들어감
    const { productSaleslocation, productCategoryId, ...product } =
      createProductInput;

    // 세일즈 로케이션의 id를 프로덕트에 엮을거라 순서를 바꿔야함
    const result = await this.ProductSaleslocation.save({
      ...productSaleslocation,
    });

    return await this.productRepository.save({
      ...product,
      productSaleslocation: result, // { id: result.id } 디비에는 영향이 없지만 프론트로 돌아갈때 확인을 못함
      productCategory: { id: productCategoryId }, // 카테고리 추가 (result 통쨰로 넣기 vs id만 넣기)
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
