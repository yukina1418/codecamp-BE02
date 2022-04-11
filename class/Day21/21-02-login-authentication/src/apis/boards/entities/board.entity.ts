import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType() // 그래프큐엘 객체 타입이야
export class Board {
  // PrimaryGeneratedColumn 유니크 키
  // "increment" 생성될 때 마다 +1 // 무작위 변수 "uuid"
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;
}
