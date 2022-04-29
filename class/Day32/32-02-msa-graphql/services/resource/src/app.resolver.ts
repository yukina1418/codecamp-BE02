import { AppService } from './app.service';
import { Resolver, Query, Mutation } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  fetchBoards(): string {
    return 'fetchBoards에서 데이터 보내기 성공!.';
  }
}
