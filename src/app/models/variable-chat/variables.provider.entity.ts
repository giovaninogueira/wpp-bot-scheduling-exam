import { DataSource } from 'typeorm';
import { VariableChatEntity } from './variables-chat.entity';

export const customerProviders = [
  {
    provide: 'VARIABLE_CHAT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(VariableChatEntity),
    inject: ['DATA_SOURCE'],
  },
];
