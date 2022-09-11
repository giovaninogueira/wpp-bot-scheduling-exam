import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsInt,
  IsDate,
  ValidateNested,
  IsDefined,
  IsNotEmptyObject,
} from 'class-validator';

class SchedulingDTO {
  @IsInt()
  @IsNotEmpty()
  public examId: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  public date: string;
}

export class CreateSchedulingDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  public phone: string;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => SchedulingDTO)
  public scheduling: SchedulingDTO;
}
