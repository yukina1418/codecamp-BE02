import { Field, InputType, Int } from '@nestjs/graphql';
import { ProductSaleslocationInput } from 'src/apis/productsSaleslocation/dto/productSaleslocation.input';

@InputType()
export class CreateProductInput {
  @Field(() => String, { nullable: true }) // 이러면 !가 빠짐~
  name: string;
  @Field(() => String)
  description: string;
  @Field(() => Int)
  price: number;

  @Field(() => ProductSaleslocationInput)
  productSaleslocation: ProductSaleslocationInput;

  @Field(() => String)
  productCategoryId: string;

  @Field(() => [String]) // 그래프큐엘
  productTags: string[]; // 타입스크립트
}

// 1:1로 연결할때 사용하는 방법