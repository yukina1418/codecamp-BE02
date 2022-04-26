import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './models/entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {} // 이렇게 쓰면 서비스 ts에 있는 클래스를 가져다가 쓸 수 있음

  @Mutation(() => ProductCategory)
  createProductCategory(
    @Args('name') name: string, // args == 주는쪽
  ) {
    return this.productCategoryService.create({ name });
    //실행 된 것을 프론트로 보내기 위해 리턴을 해야한다
  }
}

// 구조분해 할당으로 데이터를 넘겨주는 편이 더 좋다.
// 그렇게 할 경우에는 순서가 틀려도 알아서 잘 들어간다
