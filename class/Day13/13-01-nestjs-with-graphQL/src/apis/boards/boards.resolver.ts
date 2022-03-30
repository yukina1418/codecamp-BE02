// rest-api에서 사용하는 controller가 resolver의 이름을 가지고 있다.

import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

@Resolver()
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  @Query(() => String) // 여기서 선언하는건 그래프큐엘의 타입 여긴 대문자
  getHello(): string {
    // 여기서 선언하는건 타입스크립트의 타입 여기는 소문자
    return this.boardsService.getHello();
  }
}
// localhost:3000/
// @ 는 데코레이터
// : 는타입 스크립트

// 그래프큐엘 String, Int Boolean
// 타입스크립트 string, number boolean
