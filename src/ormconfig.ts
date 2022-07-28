import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'mediumclone',
  port: 5432,
  username: 'postgres',
  password: 'changeme',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
};

export default config;
