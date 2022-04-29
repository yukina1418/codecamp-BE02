import { ConflictException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../models/entities/user.entity';
import { UserService } from '../user.service';
//
//

class MonkUserRepository<User> {
  mydb = [{ email: 'a@aa.com', password: '0000', name: '짱구', age: 8 }];
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

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
// keyof 속에 있는 정보를 뽑아서 나열해놓은 것을
// Record를 나열해놓은 것들의 속성을 키를 뽑아서 jest.Mock을 주입시켰다
// Partial 그리고 그것 중 있을 수 있고 없을 수 없도록 속성을 만들어서 사용했다.

describe('UserService', () => {
  let userService: UserService;
  let userRepository: MonkUserRepository<User>;

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
    userRepository = userModule.get<MonkUserRepository<User>>(
      getRepositoryToken(User),
    );
  });

  describe('create', () => {
    it('이미 존재하는 이메일 검증하기!!', async () => {
      const userRepositorySpyFindOne = jest.spyOn(userRepository, 'findOne');
      const userRepositorySpySave = jest.spyOn(userRepository, 'save');
      // 스파이를 붙인다, 이곳이 몇번 실행(활성화)됐는지
      const myData = {
        email: 'a@a.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };
      try {
        await userService.findOne({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
        // toBeInstanceOf 웹서비스 오류
      }
      expect(userRepositorySpyFindOne).toBeCalledTimes(1);
      expect(userRepositorySpySave).toBeCalledTimes(0);
    });

    it('회원 등록이 잘 됐는지 검증', async () => {
      const userRepositorySpyFindOne = jest.spyOn(userRepository, 'findOne');
      const userRepositorySpySave = jest.spyOn(userRepository, 'save');
      const myData = {
        email: 'bbb@bbb.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };

      const myResultData = {
        email: 'bbb@bbb.com',
        password: '1234',
        name: '철수',
        age: 13,
      };
      const result = await userService.create({ ...myData });
      expect(result).toStrictEqual(myResultData);
      expect(userRepositorySpyFindOne).toBeCalledTimes(1);
      expect(userRepositorySpySave).toBeCalledTimes(1);
      // 객체나 배열은 메모리에 저장이 되기 때문에
      // toStrictEqual로 비교를 해야한다
    });
    //   userService.create();
  });

  //describe('findOne', () => {});
});
