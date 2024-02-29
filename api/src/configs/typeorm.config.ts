import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: "192.168.128.3",
    port: 5432,
    username: "userdesafio",
    password: "passdesafio54321",
    database: "desafio",
    entities: [`{${__dirname}/**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/migrations/{.ts,*.js}`],
    migrationsRun: true,
    synchronize: true,
    // type: 'postgres',
    // host: process.env.POSTGRES_HOST,
    // port: parseInt(process.env.POSTGRES_PORT),
    // username: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DB,
    // entities: [`{${__dirname}/**/*.entity{.ts,.js}`],
    // migrations: [`${__dirname}/migrations/{.ts,*.js}`],
    // migrationsRun: true,
    // synchronize: true,
};