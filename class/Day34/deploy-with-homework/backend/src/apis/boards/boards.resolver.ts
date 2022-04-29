// rest-api에서 사용하는 controller가 resolver의 이름을 가지고 있다.

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { CreateBoardsInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardsService.findAll();
  }
  @Mutation(() => String)
  async createBoards(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardsInput,
  ) {
    // 캐시 저장하는 테스트 //
    // 저장하고 조회하는 연습 //
    //
    // 캐시에 저장하는 방법
    // key value 의 방식으로 저장한다
    await this.cacheManager.set('작성자', writer);
    await this.cacheManager.set('게시글 정보 ', createBoardInput, {
      ttl: 10, // <- 10초간 저장 0이면 계속 저장, 재부팅하면 사라짐 프로미스라서 await 있어야함
    }); // <- 객체 자체도 저장할 수 있다.
    // -1이면 영구 저장
    // -2면 사라진 것
    //
    //
    // 캐시에 있는거 가져오는 방법
    // aaa에 있는거 꺼내와줘
    const mycache = await this.cacheManager.get('작성자');
    console.log(mycache);

    return '지금은 캐시 테스트 중!!';
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //
    //
    // console.log(writer);
    // console.log(contents);
    // console.log(title);
    // console.log(createBoardInput);
    // redis 연습을 위해서 주석 걸어둠
    // return this.boardsService.create();
  }
}
// localhost:3000/
// @ 는 데코레이터
// : 는타입 스크립트

// 그래프큐엘 String, Int Boolean
// 타입스크립트 string, number boolean

// 그래프큐엘은 [Board]
// 타입스크립트는 Board[]
