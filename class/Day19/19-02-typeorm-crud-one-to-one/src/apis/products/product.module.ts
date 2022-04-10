import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/models/entities/productsSaleslocation.entity';
import { Product } from './models/entities/product.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

// 레파지토리 추가하려면 임포트에 적어야함
@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductSaleslocation])],
  providers: [
    ProductResolver, //
    ProductService,
  ],
})
export class ProductModule {}
