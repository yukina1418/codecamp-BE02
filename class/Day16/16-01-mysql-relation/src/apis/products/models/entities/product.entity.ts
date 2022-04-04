import { ProductCategory } from 'src/apis/productsCategory/models/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/models/entities/productsSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTag/models/entities/productsTag.entity';
import { User } from 'src/apis/users/models/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // { type: 'varchar' }
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean; // soldedAt:Date;

  @JoinColumn() // 1:1 매칭할때는 이렇게 달아줘야함
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  // 문어발 달린 쪽이 Many // 여기서는 조인컬럼이 필요없음
  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  // 다대다 매칭할때는 양쪽에 달아줘야함 !
  // 서로가 누구인지 정의를 해줘야함
  // 조인 테이블은 한곳만 해줘도 댐~

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[];
}
