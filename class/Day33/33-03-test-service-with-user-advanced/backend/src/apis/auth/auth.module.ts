import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../users/user.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.servicer';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../users/models/entities/user.entity';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { AuthController } from './auth.controller';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';

@Module({
  imports: [
    //
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [
    //
    JwtRefreshStrategy,
    AuthResolver,
    AuthService,
    UserService,
    JwtGoogleStrategy,
  ],
})
export class AuthModule {}
