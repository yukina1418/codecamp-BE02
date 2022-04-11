import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './models/entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
// 암호화 라이브러리

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
}
