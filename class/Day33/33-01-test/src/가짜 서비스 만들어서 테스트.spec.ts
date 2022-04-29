import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test } from '@nestjs/testing';

class MockAppService {
  // 테스트에 사용하는 함수의 이름은 바뀌면 안된다
  // 내용은 바꿔도 무관하다
  // 실제 디비에 접근을 한다면 만든 가짜 디비에 접속을 하는 식으로 사용한다.
  getHello() {
    return 'Hello World!';
  }
}

describe('AppController', () => {
  let appController: AppController;

  // let appService: AppService;
  beforeEach(async () => {
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          // 원본은 앱서비스인데
          useClass: MockAppService,
          // 실행은 목 앱서비스에서 실행시켜줘
        },
      ],
    }).compile();
    //
    //;
    appModule.get<AppController>(AppController);

    appController = appModule.get<AppController>(AppController);
    // 사전 작업
    // 조금 더 알아봐야할듯
  });

  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야함', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });

    //    it('검증2', () => {});
  });

  // describe('createBoard', () => {
  //     it('검증1', () => {});

  //     it('검증2', () => {});
  //   });
});
