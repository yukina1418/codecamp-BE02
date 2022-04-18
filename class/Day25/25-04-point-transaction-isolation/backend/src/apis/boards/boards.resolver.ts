// rest-api에서 사용하는 controller가 resolver의 이름을 가지고 있다.

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { CreateBoardsInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardsService.findAll();
  }
  @Mutation(() => String)
  createBoards(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardsInput,
  ) {
    console.log(writer);
    console.log(contents);
    console.log(title);
    console.log(createBoardInput);
    return this.boardsService.create();
  }
}
// localhost:3000/
// @ 는 데코레이터
// : 는타입 스크립트

// 그래프큐엘 String, Int Boolean
// 타입스크립트 string, number boolean

// 그래프큐엘은 [Board]
// 타입스크립트는 Board[]
