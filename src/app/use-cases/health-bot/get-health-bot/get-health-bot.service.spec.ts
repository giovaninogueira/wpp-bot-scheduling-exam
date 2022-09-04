import { Test, TestingModule } from '@nestjs/testing';
import { GetHealthBotService } from './get-health-bot.service';

describe('GetHealthBotService', () => {
  let service: GetHealthBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetHealthBotService],
    }).compile();

    service = module.get<GetHealthBotService>(GetHealthBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
