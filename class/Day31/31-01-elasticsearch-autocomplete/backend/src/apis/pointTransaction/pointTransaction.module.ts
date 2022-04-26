import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/models/entities/user.entity';
import { PointTransaction } from './models/entities/pointTransaction.entity';
import { PointTransactionResolver } from './pointTransaction.resolver';
import { PointTransactionService } from './pointTransaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([PointTransaction, User])],
  providers: [
    PointTransactionResolver, //
    PointTransactionService,
  ],
})
export class pointTransactionModule {}

// apply_num: ""
// bank_name: null
// buyer_addr: "서울특별시 강남구 신사동"
// buyer_email: "gildong@gmail.com"
// buyer_name: "홍길동"
// buyer_postcode: "01181"
// buyer_tel: "010-4242-4242"
// card_name: null
// card_number: "****"
// card_quota: 0
// currency: "KRW"
// custom_data: null
// imp_uid: "imp_489466239235"
// merchant_uid: "nobody_1649925466074"
// name: "노르웨이 회전 의자"
// paid_amount: 100
// paid_at: 1649925500
// pay_method: "point"
// pg_provider: "nice"
// pg_tid: "nictest00m01012204141738195491"
// pg_type: "payment"
// receipt_url: "https://npg.nicepay.co.kr/issue/IssueLoader.do?TID=nictest00m01012204141738195491&type=0&InnerWin=Y"
// status: "paid"

// 그래프큐엘은 모든 것들이 post 방식으로 restapi 형식으로 보내진다
// 엔드포인트가 한개로 합쳐졌다 함수로 불러올 수 있기 떄문에

// rest는 api를 요청할 때마다 한번씩 보내야한다
// rest-api의 under-fetching문제
// 원하는것만 받아오지못하는 문제 over-fetching 문제
// 하지만 그래프큐엘은 한번에 묶음처리를 해서 보낼 수 있고 골라서 받아올 수 있다.
