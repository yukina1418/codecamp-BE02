import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
// 암호화 라이브러리

import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user-param';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}
  @Mutation(() => User)
  createUser(
    //
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = bcrypt.hash(password, 10); // 여기에 await 걸어두댐~

    return this.userService.create({ email, hashedPassword, name, age });
  }

  @UseGuards(GqlAuthAccessGuard)
  // @UseGuards(AuthGuard('access')) // 여기까지는 Restapi의 방식
  @Query(() => String)
  fetchUser(
    @CurrentUser() currentUser: ICurrentUser, //
  ) {
    console.log(currentUser);
    console.log('fetchUser 실행 완료');
    return currentUser.email;
  }
}

//@nestjs/passport
