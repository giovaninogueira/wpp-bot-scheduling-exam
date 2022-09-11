import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: join(__dirname, '..', '..', 'src', 'database', 'database'),
        entities: [
          join(__dirname, '..', 'app', 'models', '**', '*.entity.{js,ts}'),
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
