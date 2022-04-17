import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class IamportService {
  constructor(
    //
    private readonly httpService: HttpService,
  ) {}
  //
  async getToken() {
    const token = await this.httpService
      .post('https://api.iamport.kr/users/getToken', {
        imp_key: '6404604046350897', // REST API키
        imp_secret:
          'w4jaMSbrWUQrSrJOErYHlMa63uwNeRLKV5VHY69V00nTs6H6xGOTtZZwtwkIn6tjbo1ava6vbtpDz7K7', // REST API Secret
      })
      .toPromise();

    return token.data.response.access_token;
  }

  async get_data_with_impUid({ token, impUid }) {
    const check = await this.httpService
      .get(`https://api.iamport.kr/payments/${impUid}`, {
        headers: {
          authorization: token,
        },
      })
      .toPromise();

    return check.data.response;
  }

  async get_Data_with_merchant_uid({ token, merchant_uid }) {
    const check = await this.httpService
      .get(`https://api.iamport.kr/payments/find/${merchant_uid}`, {
        headers: {
          authorization: token,
        },
      })
      .toPromise();

    return check.data.response;
  }

  async CancelPayment({ token, imp_uid, amount, reason }) {
    const cancel = await this.httpService
      .post(
        'https://api.iamport.kr/payments/cancel',
        {
          imp_uid,
          reason,
          amount,
        },
        {
          headers: {
            authorization: token,
          },
        },
      )
      .toPromise();

    return cancel.data;
  }
}
