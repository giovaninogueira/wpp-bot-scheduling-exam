import { Module } from '@nestjs/common';
import { GetHealthBotService } from './get-health-bot.service';
import { GetHealthBotController } from './get-health-bot.controller';

@Module({
  providers: [GetHealthBotService],
  controllers: [GetHealthBotController],
})
export class GetHealthBotModule {}
