import { Module } from '@nestjs/common';
import { HealthBotModule } from './health-bot/health-bot.module';
import { SchedulingModule } from './scheduling/scheduling.module';

@Module({
  imports: [SchedulingModule, HealthBotModule],
})
export class UseCasesModule {}
