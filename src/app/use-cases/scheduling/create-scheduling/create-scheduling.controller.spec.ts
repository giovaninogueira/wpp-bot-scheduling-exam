import { Test, TestingModule } from '@nestjs/testing';
import { CreateSchedulingController } from './create-scheduling.controller';

describe('CreateSchedulingController', () => {
  let controller: CreateSchedulingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateSchedulingController],
    }).compile();

    controller = module.get<CreateSchedulingController>(CreateSchedulingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
