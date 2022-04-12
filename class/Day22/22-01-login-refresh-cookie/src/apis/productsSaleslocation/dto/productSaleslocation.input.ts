import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../models/entities/productsSaleslocation.entity';

@InputType() //
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation,
  ['id'],
  InputType,
) {
  // mycolumn: string;
} //

// OmitType 원하는걸 제거할 때 사용한다
// 제거는 여러개가 가능하다
// 어떤 타입인지 지정을 해줘야한다
// 상속이라서 추가로 가져올 수도 있다
