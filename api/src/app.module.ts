import { Module } from '@nestjs/common';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    FuncionariosModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
