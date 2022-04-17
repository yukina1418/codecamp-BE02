import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../item/models/entities/item.entity';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';
import { Cart } from './modules/entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Item])],
  providers: [CartService, CartResolver],
})
export class CartModule {}
