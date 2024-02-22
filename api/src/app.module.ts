import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: ['.env.development.local']
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   database: process.env.POSTGRES_DB,
    //   host: process.env.POSTGRES_HOST,
    //   password: process.env.POSTGRES_PASSWORD,
    //   username: process.env.POSTGRES_USER,
    //   port: Number(process.env.POSTGRES_PORT),
    //   entities: [`{${__dirname}/**/*.entity{.ts,.js}`],
    //   migrations: [`${__dirname}/migrations/{.ts,*.js}`],
    //   migrationsRun: true,
    //   synchronize: true
    // }),
    FuncionariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
