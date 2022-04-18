import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from '../users/models/entities/user.entity';
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

    private readonly connection: Connection,
  ) {}

  async create({ currentUser, impUid, amount }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    //
    // transaction 시작!
    await queryRunner.startTransaction();

    // queryRunner.manager.save() 의 형식으로 저장을 하면 임시 저장을 준비하는 형태가 된다.
    // 그리고 commit을 날리면 그것들이 전부 저장이 입력이 되고
    // 한개라도 실패를 할 경우에는 임시저장된 내용을 모조리 날려버린다
    // 일반 find 같은 것들에는 영향을 주지 않는다

    // 포인트트랜젝션 테이블에 거래기록 1줄 생성
    try {
      // const pointTransaction = await this.pointTransactionRepository.save({
      //   impUid,
      //   amount,
      //   status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      //   user: currentUser,
      // });

      const pointTransaction = this.pointTransactionRepository.create({
        impUid,
        amount,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
        user: currentUser,
      });

      await queryRunner.manager.save(pointTransaction);

      // throw new Error('에러발생!');

      // 유저의 돈 찾아오기
      const user = await this.userRepository.findOne({
        where: { id: currentUser.id },
      });

      // 3. 유저가 가지고 있는 돈 업데이트
      // await this.userRepository.update(
      //   { id: user.id },
      //   { point: user.point + amount },
      // );

      const updatedUser = this.userRepository.create({
        ...user,
        point: user.point + amount,
      });

      await queryRunner.manager.save(updatedUser);

      // 성공 확정!! -> commit <-
      await queryRunner.commitTransaction();

      // 4. 최종결과 프론트엔드에 돌려줌
      return pointTransaction;
      //
    } catch (error) {
      // rollback 되돌리기
      await queryRunner.rollbackTransaction();
    } finally {
      // 연결 해제
      await queryRunner.release();
    }
  }
}
// save를 하면 결과를 리턴할 수 있다
// update를 하면 결과가 리턴이 없다

// show variables; // mysql 내부의 함수를 확인하기

// set GLOBAL max_connections = 15; // 커넥팅 최대 갯수 변경

// show status; // 현재 디비 상태 보기

// show processlist; // 프로세스 상태 보기

// kill 56; // 특정 로그 죽이기
