import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../User/models/entities/user.entity';

import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './models/entities/pointTransaction.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ currentUser, impUid, amount }) {
    // 포인트트랜젝션 테이블에 거래기록 1줄 생성
    const uuid = await this.userRepository.findOne({
      where: { user_email: currentUser },
    });

    const pointTransaction = await this.pointTransactionRepository.save({
      impUid,
      amount,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      user: { user_id: uuid.user_id },
    });
    //. 유저의 돈 찾아오기

    const user = await this.userRepository.findOne({
      where: { user_email: currentUser },
    });
    // console.log(user);

    // // 3. 유저가 가지고 있는 돈 업데이트
    await this.userRepository.update(
      { user_email: currentUser },
      { point: user.point + amount },
    );
    // save를 하면 결과를 리턴할 수 있다
    // update를 하면 결과가 리턴이 없다
    // 4. 최종결과 프론트엔드에 돌려줌
    return pointTransaction;
  }
}
