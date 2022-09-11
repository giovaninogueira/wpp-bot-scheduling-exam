import { Module } from '@nestjs/common';
import { CreateSchedulingModule } from './create-scheduling/create-scheduling.module';

@Module({
  imports: [CreateSchedulingModule],
})
export class SchedulingModule {}
