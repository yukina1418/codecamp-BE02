import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { BoardsService } from './boards.service';

@Module({
  //   imports: [],
  //   controllers: [AppController],
  providers: [BoardsResolver, BoardsService],
})
export class BoardModule {}

// 모듈에서 함수를 서로 이어주는 역할을 지정한다
