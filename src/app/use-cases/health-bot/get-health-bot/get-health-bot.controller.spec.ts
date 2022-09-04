import { Test, TestingModule } from '@nestjs/testing';
import { GetHealthBotController } from './get-health-bot.controller';

describe('GetHealthBotController', () => {
  let controller: GetHealthBotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetHealthBotController],
    }).compile();

    controller = module.get<GetHealthBotController>(GetHealthBotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
