import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './models/entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  async create({ name }) {
    // 카테고리를 데이터베이스에 저장한다
    const result = await this.productCategoryRepository.save({ name }); // 주는 이름과 받는 이름이 같으면 한개로 쓸 수 있다.
    console.log(result);
    // save쓰면 저장댐~
    return result;
    // 리턴으로 반환해야한다
  }
}

// 레파지토리타입은 디비에 연결할 수 있게 해준다
