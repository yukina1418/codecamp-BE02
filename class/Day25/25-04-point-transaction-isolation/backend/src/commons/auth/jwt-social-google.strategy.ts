//jwt-social-google.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '610165289590-aelpsc1pb8d70b1861ch5ej2t7ialt12.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string, //
    refreshToken: string,
    profile: Profile,
  ) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    return {
      email: profile.emails[0].value,
      password: '1111',
      name: profile.displayName,
      age: 0,
    };
  }
}
