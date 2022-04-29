import { ConflictException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { User } from '../models/entities/user.entity';
import { UserService } from '../user.service';
//
//

class MonkUserRepository {
  mydb = [
    //
    { email: 'a@aa.com', password: '0000', name: '짱구', age: 8 },
    {},
    {},
  ];
  findOne({ email }) {
    //   this.mydb.map((ele)=> ele.email.includes(email))
    const users = this.mydb.filter((el) => el.email === email);
    if (users.length) return users[0];
    return null;
  }

  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const userModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: MonkUserRepository,
          // 디비만 가짜로 사용해서 하는 방법이다
        },
      ],
    }).compile();

    userService = userModule.get<UserService>(UserService);
  });

  describe('create', () => {
    it('이미 존재하는 이메일 검증하기!!', async () => {
      const myData = {
        email: 'a@a.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };
      try {
        await userService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
        // toBeInstanceOf 웹서비스 오류
      }
    });

    it('회원 등록이 잘 됐는지 검증', async () => {
      const myData = {
        email: 'bbb@bbb.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };

      const myResultData = {
        email: 'bbb@bbb.com',
        Password: '1234',
        name: '철수',
        age: 13,
      };
      const result = await userService.create({ ...myData });
      expect(result).toStrictEqual(myResultData);
      // 객체나 배열은 메모리에 저장이 되기 때문에
      // toStrictEqual로 비교를 해야한다
    });
    //   userService.create();
  });

  //describe('findOne', () => {});
});
