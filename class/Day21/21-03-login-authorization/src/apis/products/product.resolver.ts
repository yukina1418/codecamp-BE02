import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './models/entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {} // 이렇게 쓰면 서비스 ts에 있는 클래스를 가져다가 쓸 수 있음

  @Query(() => Product)
  fetchProduct(
    //
    @Args('productId') productId: string,
  ) {
    return this.productService.findOne({ productId });
  }

  @Query(() => [Product])
  fetchProducts() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput, // args == 주는쪽
  ) {
    return this.productService.create({ createProductInput });
    //실행 된 것을 프론트로 보내기 위해 리턴을 해야한다
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매가 완료가 되었는지 확인해보기
    await this.productService.checkSoldout({ productId });

    // 수정하기
    return await this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }
}

// 구조분해 할당으로 데이터를 넘겨주는 편이 더 좋다.
// 그렇게 할 경우에는 순서가 틀려도 알아서 잘 들어간다
