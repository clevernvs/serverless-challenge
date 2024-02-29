import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Funcionario } from './entities/funcionario.entity';
import { FuncionarioRepository } from './entities/funcionario.repository';

@Injectable()
export class FuncionariosService {

  constructor(
    @InjectRepository(FuncionarioRepository)
    private funcionariosRepository: FuncionarioRepository
  ) { }

  async create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    // return JSON.stringify('This action adds a new funcionario');
    return this.funcionariosRepository.createFuncionario(createFuncionarioDto);
  }

  // async findAll(): Promise<Funcionario[]> {
  findAll() {
    // return `Retornando todos os funcionários.`;
    // const funcionarios = await this.funcionariosRepository.find();
    // return funcionarios.map(funcionario => ({
    //   id: funcionario.id,
    //   nome: funcionario.nome,
    //   idade: funcionario.idade,
    //   cargo: funcionario.cargo,
    //   createdAt: funcionario.createdAt,
    //   updatedAt: funcionario.updatedAt,
    // }));
  }

  findOne(id: number) {
    return `Retornando um funcionário pelo seu #${id}.`;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `Atualizando um funcionário pelo seu #${id}.`;
  }

  remove(id: number) {
    return `Deletando um funcionário pelo seu #${id}.`;
  }
}
