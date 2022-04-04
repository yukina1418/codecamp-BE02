import { Product } from 'src/apis/products/models/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (products) => products.productTags)
  products: Product[];
}
