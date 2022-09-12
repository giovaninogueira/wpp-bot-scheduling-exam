import { DataSource } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';

export const customerProviders = [
  {
    provide: 'SCHEDULE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ScheduleEntity),
    inject: ['DATA_SOURCE'],
  },
];
