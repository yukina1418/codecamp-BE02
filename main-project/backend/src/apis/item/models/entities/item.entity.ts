import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cart } from 'src/apis/cart/modules/entities/cart.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Int)
  amount: number;

  @Column()
  @Field(() => String)
  pick: string;

  @Column()
  @Field(() => Int)
  volume: number;

  @CreateDateColumn()
  @Field(() => Date)
  createAt: Date;

  @ManyToMany(() => Cart, (carts) => carts.items)
  @Field(() => [Cart])
  carts: Cart[];
}
