import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../users/user.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.servicer';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../users/models/entities/user.entity';

@Module({
  imports: [
    //
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    //
    AuthResolver,
    AuthService,
    UserService,
  ],
})
export class AuthModule {}
