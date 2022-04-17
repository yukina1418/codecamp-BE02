import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../User/models/entities/user.entity';
import { PointTransaction } from './models/entities/pointTransaction.entity';
import { PointTransactionResolver } from './pointTransaction.resolver';
import { PointTransactionService } from './pointTransaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([PointTransaction, User])],
  providers: [
    ,
    PointTransactionResolver, //
    PointTransactionService,
  ],
})
export class pointTransactionModule {}
