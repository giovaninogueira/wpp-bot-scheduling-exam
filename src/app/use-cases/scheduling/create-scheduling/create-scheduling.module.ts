import { Module } from '@nestjs/common';
import { CreateSchedulingService } from './create-scheduling.service';
import { CreateSchedulingController } from './create-scheduling.controller';

@Module({
  providers: [CreateSchedulingService],
  controllers: [CreateSchedulingController]
})
export class CreateSchedulingModule {}
