import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategory/models/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/models/entities/productsSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTag/models/entities/productsTag.entity';
import { User } from 'src/apis/users/models/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column() // { type: 'varchar' }
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false }) // nullable 빈 값이 들어가도 괜찮다.
  @Field(() => Boolean)
  isSoldout: boolean; // soldedAt:Date;

  // @Column({ default: null })
  // @Field(() => Date)
  // deleteAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @JoinColumn() // 1:1 매칭할때는 이렇게 달아줘야함
  @OneToOne(() => ProductSaleslocation)
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  // 문어발 달린 쪽이 Many // 여기서는 조인컬럼이 필요없음
  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  // 다대다 매칭할때는 양쪽에 달아줘야함 !
  // 서로가 누구인지 정의를 해줘야함
  // 조인 테이블은 한곳만 해줘도 댐~

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => ProductTag)
  productTags: ProductTag[];
}
