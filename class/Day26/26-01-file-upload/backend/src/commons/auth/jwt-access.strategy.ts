import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      //
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 헤더단에서 "authorization":"Bearer token"를 받아와서 Bearer를 지우고 토큰만 읽어온다
      secretOrKey: 'myAccessKey',
    }); // 여기는 토큰 비밀번호
  } // 검증부

  validate(payload) {
    console.log(payload);
    return {
      id: payload.sub,
      email: payload.email,
    };
    // 리턴되면 실행 context.req.user에 담겨져있음
  } // 검증 완료시 실행
}

// 쿼리가 실행이 되기 전에 검증
// guard 라는 나만의 전략을 검증이 되야만 쿼리문이 실행된다
// 토큰방식으로 인증을 하게 된다
// 컨스트럭터가 1번, 검증부
// 검증이 완료가 되면 2번, validate가 실행된다
// payload는 복호화된 정보를 받아온다
