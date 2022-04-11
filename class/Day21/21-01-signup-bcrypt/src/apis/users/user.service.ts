import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  // 아래처럼 쓰면 변형 가능. 해시패스워드를 패스워드로 변경해서 사용함
  async create({ email, hashedPassword, name, age }) {
    const password = await hashedPassword;

    const user = await this.userRepository.findOne({ where: { email } });
    if (user) throw new ConflictException('이미 등록된 이메일 입니다');

    return await this.userRepository.save({ email, password, name, age });
  }
}
