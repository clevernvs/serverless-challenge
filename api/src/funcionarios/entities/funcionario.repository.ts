import { EntityRepository, Repository } from 'typeorm';
import { Funcionario } from './funcionario.entity';
import { CreateFuncionarioDto } from '../dto/create-funcionario.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Funcionario)
export class FuncionarioRepository extends Repository<Funcionario> {

    async createFuncionario(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {

        const { nome, idade, cargo } = createFuncionarioDto;

        const funcionario = this.create();
        funcionario.nome = nome;
        funcionario.idade = idade;
        funcionario.cargo = cargo;

        try {
            await funcionario.save();
            return funcionario;
        } catch (error) {
            throw new InternalServerErrorException('Erro ao salvar o usuário no banco de dados');
        }
    }

}