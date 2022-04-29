import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;
  // let appService: AppService;
  beforeEach(async () => {
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
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
