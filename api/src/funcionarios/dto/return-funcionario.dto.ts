import { Funcionario } from '../entities/funcionario.entity';

export class ReturnFuncionarioDto {
    funcionario: Funcionario;
    mensagem: string;
}