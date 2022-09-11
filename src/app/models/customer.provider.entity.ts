import { DataSource } from 'typeorm';
import { CustomerEntity } from './customer.entity';

export const customerProviders = [
  {
    provide: 'CUSTOMER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CustomerEntity),
    inject: ['DATA_SOURCE'],
  },
];
