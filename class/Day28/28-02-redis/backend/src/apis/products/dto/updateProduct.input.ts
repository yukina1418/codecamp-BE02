import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}

// PartialType 있어도 되고 없어도 되고 상속으로 가져옴
// OmitType 원하는걸 제거할 때
// PickType 몇개만 픽해서
// 유틸리티타입이라고 부른다
