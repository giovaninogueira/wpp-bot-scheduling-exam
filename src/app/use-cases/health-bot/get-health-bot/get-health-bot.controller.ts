import { Controller, Get, Render } from '@nestjs/common';
import { WhatsappService } from '../../../../app/providers/whatsapp/whatsapp.service';
import { GetHealthBotService } from './get-health-bot.service';

@Controller('health')
export class GetHealthBotController {
  /**
   *
   * @param { GetHealthBotService } getHealthBotService
   */
  constructor(private readonly getHealthBotService: GetHealthBotService) {}

  @Get()
  @Render('health-bot/index')
  async index() {
    const isConnected = await this.getHealthBotService.isConnected();
    if (isConnected) {
      await WhatsappService.clientBot.sendText(
        '5517996526315@c.us',
        'Eu te amo mtoo!',
      );
      return { isConnected };
    }
    const qrCodeBase64 = this.getHealthBotService.getQrCode();
    return { isConnected, qrCodeBase64 };
  }

  @Get('status')
  async status() {
    const isConnected = await this.getHealthBotService.isConnected();
    if (isConnected) {
      return { isConnected };
    }
    const qrCodeBase64 = this.getHealthBotService.getQrCode();
    return { isConnected, qrCodeBase64 };
  }
}
