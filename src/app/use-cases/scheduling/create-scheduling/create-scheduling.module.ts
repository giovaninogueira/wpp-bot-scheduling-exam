import { Module } from '@nestjs/common';
import { CreateSchedulingService } from './create-scheduling.service';
import { CreateSchedulingController } from './create-scheduling.controller';
import { DatabaseModule } from '../../../../config/database.module';
import { customerProviders } from '../../../models/customer/customer.provider.entity';

@Module({
  imports: [DatabaseModule],
  providers: [CreateSchedulingService, ...customerProviders],
  controllers: [CreateSchedulingController],
})
export class CreateSchedulingModule {}
