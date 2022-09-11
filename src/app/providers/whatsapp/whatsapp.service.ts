import { Injectable } from '@nestjs/common';
import { create, Whatsapp } from 'venom-bot';

const SESSION_NAME = 'chat_scheduling';

@Injectable()
export class WhatsappService {
  /**
   * @var Whatsapp
   */
  static clientBot: Whatsapp;

  /**
   * @var string
   */
  private static qrCode: string;

  /**
   * Start application venom-bot
   */
  async start() {
    const client = await create(
      SESSION_NAME,
      (base64Qrimg) => {
        WhatsappService.qrCode = base64Qrimg;
      },
      null,
      {
        multidevice: true,
        logQR: false,
      },
    );

    WhatsappService.clientBot = client;
  }

  /**
   * Get Qr Code
   * @returns { string }
   */
  static getQrCode(): string {
    return WhatsappService.qrCode;
  }

  /**
   * Is Connected
   * @returns { Promise<boolean> }
   */
  static async isConnected(): Promise<boolean> {
    if (WhatsappService.clientBot) {
      return WhatsappService.clientBot.isConnected();
    }
    return false;
  }
}
