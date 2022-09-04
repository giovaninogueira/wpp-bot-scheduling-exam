import { Injectable } from '@nestjs/common';
import { create, Whatsapp } from 'venom-bot';

@Injectable()
export class WhatsappService {
  /**
   * @var configuration of whatsapp
   */
  private optionsBot = {
    session: 'session-name',
    multidevice: true,
    logQR: true,
  };

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
  start() {
    create(
      'session-name', //Pass the name of the client you want to start the bot
      //catchQR
      (base64Qrimg) => {
        WhatsappService.qrCode = base64Qrimg;
      },
      null,
      {
        multidevice: true,
        logQR: false,
      },
    )
      .then((client) => (WhatsappService.clientBot = client))
      .catch((erro) => {
        console.log(erro);
      });
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
