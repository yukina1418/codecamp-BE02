import { Query } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  //   @Query(() => str)
  //   aaa(): string {
  //     return '성공!';
  //   }

  @Mutation(() => String)
  login(): string {
    return 'login 성공!!';
  }
}
