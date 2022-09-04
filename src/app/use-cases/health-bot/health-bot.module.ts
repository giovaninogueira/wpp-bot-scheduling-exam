import { Module } from '@nestjs/common';
import { GetHealthBotModule } from './get-health-bot/get-health-bot.module';

@Module({
  imports: [GetHealthBotModule]
})
export class HealthBotModule {}
