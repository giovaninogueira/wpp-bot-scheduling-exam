import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { CustomerEntity } from '../customer/customer.entity';
import { ExamEntity } from '../exam/exam.entity';

export type scheduleStatus = 'closed' | 'waiting' | 'canceled';

@Entity('schedules')
export class ScheduleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.schedules)
  customer: CustomerEntity;

  @ManyToOne(() => ExamEntity, (exam) => exam.schedules)
  exams: ExamEntity;

  @Column({
    type: 'varchar',
    length: 20,
    default: 'waiting',
  })
  status: scheduleStatus;

  @Column({ type: 'datetime' })
  dateTime: Date;

  @Column({ type: 'varchar', nullable: true })
  fileResult: scheduleStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
