import { DataSource } from 'typeorm';
import { ExamEntity } from './exam.entity';

export const examProviders = [
  {
    provide: 'EXAM_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ExamEntity),
    inject: ['DATA_SOURCE'],
  },
];
