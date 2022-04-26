import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/models/entities/productsSaleslocation.entity';
import { ProductTag } from '../productsTag/models/entities/productsTag.entity';
import { Product } from './models/entities/product.entity';
import { ProductSubscriber } from './models/entities/product.subscriber';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

// 레파지토리 추가하려면 임포트에 적어야함
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
      ProductTag,
    ]),
  ],
  providers: [
    ProductResolver, //
    ProductService,
    ProductSubscriber,
  ],
})
export class ProductModule {}
