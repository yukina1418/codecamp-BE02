import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}

// PartialType 있어도 되고 없어도 되고 상속으로 가져옴
// OmitType 몇개만 골라서 쓸 때 사용함
// PickType 몇개만 픽해서 씀 뭐지 같은거아냐?
