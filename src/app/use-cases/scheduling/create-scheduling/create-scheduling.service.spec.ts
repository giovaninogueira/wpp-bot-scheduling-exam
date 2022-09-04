import { Test, TestingModule } from '@nestjs/testing';
import { CreateSchedulingService } from './create-scheduling.service';

describe('CreateSchedulingService', () => {
  let service: CreateSchedulingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateSchedulingService],
    }).compile();

    service = module.get<CreateSchedulingService>(CreateSchedulingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
