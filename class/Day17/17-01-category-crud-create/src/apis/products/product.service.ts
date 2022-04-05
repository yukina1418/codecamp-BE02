import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './models/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findOne({ productId }) {
    return await this.productRepository.findOne({ where: { id: productId } }); // 쿼리문 조건문
  }
  async findAll() {
    return await this.productRepository.find();
  }
  async create({ createProductInput }) {
    // 상품을 데이터베이스에 저장한다
    const result = await this.productRepository.save({
      ...createProductInput,
      // 하나하나 직접 나열하기
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,
      // isSoldout: createProductInput.isSoldout,
    }); //앞은 디비에 저장된 컬럼, 뒤는 프론트에서 받아온 값

    // save쓰면 저장댐~
    return result;
    // 리턴으로 반환해야한다
  }

  async update({ productId, updateProductInput }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    const newProduct = {
      ...product,
      ...updateProductInput,
      // id: product.id,
      // name: product.name,
      // description: product.description,
      // price: product.price,
      // isSoldout: product.isSoldout,

      // description:updateProductInput.description
      // price:updateProductInput.price
    }; // 수정하기
    return await this.productRepository.save(newProduct);
  }

  async checkSoldout({ productId }) {
    // try {
    // } catch (error) {
    //   throw error.message;
    // } finally {
    //   // 특정 로직 // 에러가 발생하던, 안하던 무조건 발생을 하게 하는 함수?
    // }

    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldout)
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');

    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매가 완료된 상품입니다',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
    // 예외처리 throw new HttpException를 사용하면 에러코드를 프론트로 뱉을 수 있다
    // HttpStatus를 쓰면 단어로 처리할 수 있다
  }
}

// 레파지토리타입은 디비에 연결할 수 있게 해준다
