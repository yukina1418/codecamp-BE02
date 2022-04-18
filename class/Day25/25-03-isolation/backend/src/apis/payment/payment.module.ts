import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './models/entities/payment.entity';
import { PaymentResolver } from './payment.resolver';
import { PaymentService } from './payment.service.04.serializable';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [
    PaymentResolver, //
    PaymentService,
  ],
})
export class PaymentModule {}
