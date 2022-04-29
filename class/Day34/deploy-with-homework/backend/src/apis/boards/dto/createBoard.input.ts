import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardsInput {
  @Field(() => String)
  writer: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  contents: string;
}
