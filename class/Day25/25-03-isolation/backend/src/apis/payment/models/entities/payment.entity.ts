import { Int, ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Int)
  amount: number;
}
// Isolation-Level 격리 레벨

// Read-Uncommitted 커밋이 되기 전에 읽기, 사라질수도 있는 정보를 읽게 된다 (Dirty-Read)
//
//
// Read-Committed 커밋되고 난 후 읽기 반복적이지 않는 읽기가 발생된다 (Non-Repeatable-Read)
// 커밋이 종료되기 전에 새로운 정보가 추가되면, 원래 읽던 정보를 읽어야하는데 새로 추가된 정보를 읽게 되는 상태가 발생한다.
//
//
// Repeatable-Read 없던 데이터가 읽혀짐, mysql은 문제가 없다. (Phantom-Read)
//
//
// Serializable
//
// select * for update from board < 비관적 lock
// 한개를 누군가 작업을 하고 있으면 그것을 다른 사람이 접근을 못하게 하는 장치
// 공유락 Shared Lock // SLock // 읽기 전용 쓰기 잠금  // pessimistic_read
// 베타락 Exclusive Lock // xLock // 읽기 쓰기 모두 잠금 // pessimistic_write
