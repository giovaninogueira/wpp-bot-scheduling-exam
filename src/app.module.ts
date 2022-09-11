import { Module } from '@nestjs/common';
import { WhatsappModule } from './app/providers/whatsapp/whatsapp.module';
import { UseCasesModule } from './app/use-cases/use-cases.module';
import { DatabaseModule } from './config/database.module';

@Module({
  imports: [DatabaseModule, WhatsappModule, UseCasesModule],
})
export class AppModule {}
