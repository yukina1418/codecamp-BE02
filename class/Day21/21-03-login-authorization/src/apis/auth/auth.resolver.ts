import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.servicer';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService, // 유저 서비스에 만들어놓은 api 끌어와서 쓰는 방법
  ) {}
  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
  ) {
    // 1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기
    const user = await this.userService.findOne({ email });
    // 2. 일치하는 유저가 없으면 || 에러 던지기
    if (!user)
      throw new UnprocessableEntityException(
        '가입된 이메일이 존재하지 않습니다',
      );
    // 3. 일치하는 유저가 있지만 || 비밀번호가 틀린다면 에러던지기
    const isAuth = await bcrypt.compare(password, user.password);
    // compare 쓰면 암호화된 비번이랑 내가 넣은 비번이랑 일치하는지 불린값으로 반환해줌
    if (!isAuth) throw new UnprocessableEntityException('비밀번호가 다릅니다');

    // 4. 일치하는 유저가 있으면 || 그 유저를 위한 accessToken(=JWT)만들어서 프론트엔드에 넘겨주기
    return this.authService.getAccessToken({ user });
  }
}
