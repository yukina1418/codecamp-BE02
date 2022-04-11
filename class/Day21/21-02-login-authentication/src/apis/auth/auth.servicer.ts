import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    //

    private readonly jwtService: JwtService,
  ) {}
  getAccessToken({ user }) {
    // JWT는 누구나 열어볼 수 있기 때문에 최대한 적은 데이터로 사용하는게 좋다
    return this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: 'myAccessKey', expiresIn: '1h' },
    );
  }
}

// expiresIn 이건 토큰의 만료기간을 이야기한다
// 1분 1m
// 1시간 1h
// 1일 1d
// 1주일 1w
