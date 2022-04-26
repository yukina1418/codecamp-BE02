import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './models/entities/product.entity';
import { ProductService } from './product.service';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Resolver()
export class ProductResolver {
  constructor(
    //
    private readonly productService: ProductService,
    private readonly elasticsearchService: ElasticsearchService,
  ) {} // 이렇게 쓰면 서비스 ts에 있는 클래스를 가져다가 쓸 수 있음

  @Query(() => Product)
  fetchProduct(
    //
    @Args('productId') productId: string,
  ) {
    return this.productService.findOne({ productId });
  }

  @Query(() => [Product])
  async fetchProducts(
    //
    @Args('search') search: string,
  ) {
    // 엘라스틱 서치에서 조회 연습하기!!
    const result = await this.elasticsearchService.search({
      index: 'myproduct0222',
      query: {
        match: {
          description: search,
        },
      },
    });
    console.log(result);
    console.log(JSON.stringify(result, null, ' '));

    // 엘라스틱 서치에서 조회해보기 위해 임시로 주석
    //return this.productService.findAll();
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput, // args == 주는쪽
  ) {
    // 엘라스틱서치에서 등록 연습하기!! 실제로는 Mysql에 저장할 예정
    // console.log(5);
    // await this.elasticsearchService.create({
    //   id: 'myiud',
    //   index: 'myproduct',
    //   document: {
    //     name: '철3수',
    //     age: 13,
    //     school: '다람쥐초등학교',
    //   },
    // });
    // console.log(5);
    // 엘라스틱 서치에서는 테이블 이름을 index라고 부른다, 잊지말자!
    // 엘라스틱 서치에서 등록해보기 위해 임시로 주석
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
