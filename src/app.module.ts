import { Module } from '@nestjs/common';
import { WhatsappModule } from './app/providers/whatsapp/whatsapp.module';
import { SchedulingModule } from './app/use-cases/scheduling/scheduling.module';
import { HealthBotModule } from './app/use-cases/health-bot/health-bot.module';

@Module({
  imports: [WhatsappModule, SchedulingModule, HealthBotModule],
})
export class AppModule {}
