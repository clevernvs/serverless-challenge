import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: `${process.env.POSTGRES_HOST}`,
    port: parseInt(`${process.env.POSTGRES_PORT}`),
    username: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`,
    database: `${process.env.POSTGRES_DB}`,
    entities: [`{${__dirname}/**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/migrations/{.ts,*.js}`],
    migrationsRun: true,
    autoLoadEntities: true,
    synchronize: true,
};

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);