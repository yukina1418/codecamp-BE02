import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { nullable: true }) // 이러면 !가 빠짐~
  name: string;
  @Field(() => String)
  description: string;
  @Field(() => Int)
  price: number;
}
