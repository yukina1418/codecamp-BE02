import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { IamportService } from '../iamport/iamport.service';
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

    private readonly iamportService: IamportService,
  ) {}

  async create({ currentUser, impUid, amount }) {
    const token = await this.iamportService.getToken();

    const getData = await this.iamportService.get_data_with_impUid({
      token,
      impUid,
    });

    const overlapPeyment = await this.pointTransactionRepository.findOne({
      where: { impUid },
    });

    // if (!overlapPeyment)
    //   throw new ConflictException('중복된 결제가 존재하여 결제를 취소합니다.');
    // await this.iamportService.CancelPayment({
    //   token,
    //   imp_uid: impUid,
    //   amount: getData.amount,
    //   reason: '중복 결제',
    // });

    // if (amount !== getData.amount)
    //   throw new ConflictException(
    //     '비정상적인 결제가 확인되어 강제 환불이 진행됩니다.',
    //   );
    // await this.iamportService.CancelPayment({
    //   token,
    //   imp_uid: impUid,
    //   amount: getData.amount,
    //   reason: '강제 환불',
    // });

    if (overlapPeyment) {
      await this.iamportService.CancelPayment({
        token,
        imp_uid: impUid,
        amount: getData.amount,
        reason: '중복 결제',
      });
      throw new ConflictException('중복된 결제가 존재하여 결제를 취소합니다.');
    } else if (amount !== getData.amount) {
      await this.iamportService.CancelPayment({
        token,
        imp_uid: impUid,
        amount: getData.amount,
        reason: '비정상 거래',
      });
      throw new ConflictException(
        '비정상적인 결제가 확인되어 강제 환불이 진행됩니다.',
      );
    } else {
      console.log('aaa');
      console.log(impUid, amount);
      const pointTransaction = await this.pointTransactionRepository.save({
        impUid,
        amount,
        checksum: amount,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
        user: { user_id: currentUser.user_id },
      });

      const user = await this.userRepository.findOne({
        where: { user_email: currentUser.user_email },
      });

      await this.userRepository.update(
        { user_email: currentUser.user_email },
        { point: user.point + amount },
      );

      return pointTransaction;
    }
  }

  async cancel({ currentUser, impUid, amount, reason }) {
    const token = await this.iamportService.getToken();
    //
    const Payment_history = await this.iamportService.get_data_with_impUid({
      token,
      impUid,
    });

    if (!Payment_history)
      throw new ConflictException('결제 내역이 존재하지 않습니다.');

    const Payment_data = await this.pointTransactionRepository.findOne({
      where: { impUid },
    });

    const userdata = await this.userRepository.findOne({
      where: { user_email: currentUser.user_email },
    });

    if (Payment_data.checksum - amount < 0)
      throw new ConflictException(
        `부분 환불이 진행되어 현재 입력한 포인트는 환불이 불가능합니다. 최대 환불 포인트는 ${Payment_data.checksum} 입니다.`,
      );

    if (amount > userdata.point)
      throw new ConflictException(
        `소유한 포인트가 부족하여 환불이 불가능합니다. 최대 환불 포인트는 ${userdata.point} 입니다.`,
      );

    if (amount === 0) {
      // 전액 환불

      await this.iamportService.CancelPayment({
        token,
        imp_uid: impUid,
        reason,
        amount: Payment_history.amount,
      });
      await this.pointTransactionRepository.save({
        impUid,
        amount: -Payment_data.amount,
        checksum: Payment_data.checksum - Payment_data.amount,
        status: POINT_TRANSACTION_STATUS_ENUM.CANCELLED,
        user: { user_id: currentUser.user_id },
      });
      await this.userRepository.update(
        { user_email: currentUser.user_email },
        { point: userdata.point - Payment_data.amount },
      );
    } else {
      // 부분 환불

      const check = await this.iamportService.CancelPayment({
        token,
        imp_uid: impUid,
        reason,
        amount,
      });

      if (check.code === -1) {
        throw new ConflictException(
          `결제취소에 실패하였습니다. 취소금액이 미정산 금액보다 큽니다.`,
        );
      } else {
        await this.pointTransactionRepository.save({
          impUid,
          amount: -amount,
          checksum: Payment_data.checksum - amount,
          status: POINT_TRANSACTION_STATUS_ENUM.CANCELLED,
          user: { user_id: currentUser.user_id },
        });

        await this.userRepository.update(
          { user_email: currentUser.user_email },
          { point: userdata.point - amount },
        );
      }
    }
  }
}

// 과정이 복잡해보일수도 있지만, 결제는 중요한만큼 복잡하더라도 문제는 되지 않는다.
// 물론 줫나 느리면 ㅎㅎ;
