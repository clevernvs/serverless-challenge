import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateFuncionarioDto {
    @IsNotEmpty({ message: 'Informe o nome do funcionário.' })
    @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres.' })
    @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres.' })
    nome: string;

    @IsNotEmpty({ message: 'Informe a idade do funcionário.' })
    idade: number;

    @IsNotEmpty({ message: 'Informe o cargo do funcionário.' })
    @MinLength(3, { message: 'O cargo deve ter no mínimo 3 caracteres.' })
    cargo: string;
}
