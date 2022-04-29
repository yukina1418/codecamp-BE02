import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  aaa() {
    return '성공!';
  }

  @Mutation(() => String)
  login(): string {
    return 'login 성공!!';
  }
}
