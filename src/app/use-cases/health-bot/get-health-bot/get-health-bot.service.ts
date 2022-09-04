import { Injectable } from '@nestjs/common';
import { WhatsappService } from '../../../providers/whatsapp/whatsapp.service';

@Injectable()
export class GetHealthBotService {
  /**
   * Is Connected
   * @returns { Promise<boolean> }
   */
  async isConnected(): Promise<boolean> {
    return WhatsappService.isConnected();
  }

  /**
   * Get Qr Code
   * @returns { string }
   */
  getQrCode(): string {
    return WhatsappService.getQrCode();
  }
}
