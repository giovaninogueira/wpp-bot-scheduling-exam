import { Body, Controller, Post } from '@nestjs/common';
import { CreateSchedulingDTO } from './create-scheduling.dto';
import { CreateSchedulingService } from './create-scheduling.service';

@Controller('scheduling')
export class CreateSchedulingController {
  constructor(
    private readonly createSchedulingService: CreateSchedulingService,
  ) {}

  @Post()
  async handler(@Body() body: CreateSchedulingDTO) {
    console.log(new Date(body.scheduling.date));
    return this.createSchedulingService.create(body);
  }
}
