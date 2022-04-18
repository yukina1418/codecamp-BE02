import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../item/models/entities/item.entity';
import { User } from '../User/models/entities/user.entity';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';
import { Cart } from './modules/entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Item, User])],
  providers: [CartService, CartResolver],
})
export class CartModule {}
