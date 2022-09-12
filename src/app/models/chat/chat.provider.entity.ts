import { DataSource } from 'typeorm';
import { ChatEntity } from './chat.entity';

export const customerProviders = [
  {
    provide: 'CHAT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ChatEntity),
    inject: ['DATA_SOURCE'],
  },
];
