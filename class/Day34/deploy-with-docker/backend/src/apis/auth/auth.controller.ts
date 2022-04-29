//auth.controller.ts
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../users/models/entities/user.entity';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.servicer';

interface IOAuthUser {
  user: Pick<User, 'email' | 'password' | 'name' | 'age'>;
}

@Controller('/')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    // 가입확인
    let user = await this.userService.findOne({ email: req.user.email });

    // 회원가입
    if (!user) {
      const { password, ...rest } = req.user;
      const createUser = { ...rest, hashedPassword: password };
      user = await this.userService.create({ ...createUser });
    }

    // 로그인
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/class/Day22/22-03-login-oauth-google/frontend/social-login.html',
    );
    console.log(res);
  }
}
