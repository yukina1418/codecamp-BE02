import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { User } from './models/entities/user.entity';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user-param';
import { UpdateSocialInput } from './dto/updateSocial.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {} // 이렇게 쓰면 서비스 ts에 있는 클래스를 가져다가 쓸 수 있음

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  fetchLoginUser(
    //
    @CurrentUser() currentUser: any,
  ) {
    const user_email = currentUser.user_email;
    return this.userService.findOne({ user_email });
  }
  //
  //
  //
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updateLoginUser(
    //
    @CurrentUser() currentUser: any,
    @Args('password') password: string,
  ) {
    const user_email = currentUser.user_email;
    return this.userService.loginUpdate({ user_email, password });
  }
  ////////
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updateSocialUser(
    //
    @CurrentUser() currentUser: any,
    @Args('updateSocilaInput') updateSocilaInput: UpdateSocialInput,
  ) {
    const user_email = currentUser.user_email;
    return this.userService.SocialUpdate({ user_email, updateSocilaInput });
  }

  //
  //
  //
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  deleteLoginUser(
    //
    @CurrentUser() currentUser: any,
  ) {
    const user_email = currentUser.user_email;
    return this.userService.delete({ user_email });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @Query(() => User)
  fetchUser(
    //
    @Args('user_email') user_email: string,
  ) {
    return this.userService.findOne({ user_email });
  }

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput, // args == 주는쪽
  ) {
    return this.userService.create({ createUserInput });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  @Mutation(() => User)
  async updateUser(
    @Args('user_email') user_email: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return await this.userService.update({ user_email, updateUserInput });
  }

  @Mutation(() => User)
  async PasswordChange(
    @Args('user_email') user_email: string,
    @Args('password') password: string,
  ) {
    return await this.userService.passwordFind({ user_email, password });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  @Mutation(() => Boolean)
  deleteUser(
    @Args('user_email') user_email: string, //
  ) {
    return this.userService.delete({ user_email });
  }

  @Mutation(() => Boolean)
  restoreUser(
    @Args('user_email') user_email: string, //
  ) {
    return this.userService.restore({ user_email });
  }
}
