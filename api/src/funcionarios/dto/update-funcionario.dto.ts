import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioDto } from './create-funcionario.dto';

import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {

    @IsOptional()
    @IsString({ message: 'Informe um nome de funcionário válido.' })
    nome: string;

    @IsOptional()
    idade: number;

    @IsOptional()
    @IsString({ message: 'Informe um cargo válido.' })
    cargo: string;

}
