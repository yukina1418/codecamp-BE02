import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './models/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  // 계정 생성 api // 계정 생성 api // 계정 생성 api // 계정 생성 api // 계정 생성 api // 계정 생성 api // 계정 생성 api
  async create({ createUserInput }) {
    const overlap = await this.UserRepository.findOne({
      where: {
        user_email: createUserInput.user_email,
      },
    });
    if (overlap)
      throw new ConflictException('동일한 이메일로 생성된 계정이 존재합니다.');
    createUserInput.password = await bcrypt.hash(createUserInput.password, 10);
    const result = await this.UserRepository.save({
      ...createUserInput,
    });
    return result;
  }
  //
  async socialCreate({ user }) {
    const social_user = await this.UserRepository.findOne({
      where: { user_email: user.user_email },
    });

    if (!social_user) {
      const result = await this.UserRepository.save({
        user_email: user.user_email,
        social_site: user.social_site,
        user_nickname: user.user_nickname,
        user_phone: user.user_phone,
        password: await bcrypt.hash(
          String(Math.floor(Math.random() * 1000000)).padStart(6, '0'),
          10,
        ),

        // member_since: date.format('YYYY-MM-DD kk:mm:ss'),
      });
      return result;
    } else {
      return await this.UserRepository.findOne({
        where: { user_email: user.user_email },
      });
    }
  }

  async passwordFind({ password, user_email }) {
    const PwFind = await this.UserRepository.findOne({
      where: { user_email },
    });

    if (PwFind) {
      const NewPW = {
        ...PwFind,
        password: await bcrypt.hash(password, 10),
      };
      return await this.UserRepository.save(NewPW);
    }
  }

  // 계정 읽기 api // 계정 읽기 api // 계정 읽기 api // 계정 읽기 api // 계정 읽기 api // 계정 읽기 api // 계정 읽기 api // 계정 읽기 api
  async findOne({ user_email }) {
    return await this.UserRepository.findOne({ where: { user_email } }); // 쿼리문 조건문
  }

  async findAll() {
    return await this.UserRepository.find({});
  }

  async finDeleteAll() {
    return await this.UserRepository.find({ withDeleted: true });
  }

  // 계정 업데이트 api  // 계정 업데이트 api  // 계정 업데이트 api  // 계정 업데이트 api  // 계정 업데이트 api  // 계정 업데이트 api
  async update({ user_email, updateUserInput }) {
    const user = await this.UserRepository.findOne({ where: { user_email } });

    const newProduct = {
      ...user,
      ...updateUserInput,
    };
    return await this.UserRepository.save(newProduct);
  }

  async loginUpdate({ user_email, password }) {
    const user = await this.UserRepository.findOne({ where: { user_email } });
    user.password = await bcrypt.hash(password, 10);

    const newUserData = {
      ...user,
    };
    return await this.UserRepository.save(newUserData);
  }

  async SocialUpdate({ user_email, updateSocilaInput }) {
    const user = await this.UserRepository.findOne({ where: { user_email } });

    const newProduct = {
      ...user,
      ...updateSocilaInput,
    };
    return await this.UserRepository.save(newProduct);
  }

  //계정 삭제, 철약철회(?) api  //계정 삭제, 철약철회(?) api  //계정 삭제, 철약철회(?) api  //계정 삭제, 철약철회(?) api  //계정 삭제, 철약철회(?) api
  async delete({ user_email }) {
    const result = await this.UserRepository.softDelete({ user_email }); // 다양한 조건으로 삭제 가능
    return result.affected ? true : false;
  }

  async restore({ user_email }) {
    const result = await this.UserRepository.restore({ user_email }); // 다양한 조건으로 삭제 가능
    return result.affected ? true : false;
  }
}
