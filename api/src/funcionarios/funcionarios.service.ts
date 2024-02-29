import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionariosRepository.findOne(id, {
      select: ['nome', 'idade', 'cargo', 'id'],
    });

    if (!funcionario) throw new NotFoundException('Funcionário não encontrado.');

    return funcionario;
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    const funcionario = await this.findOne(id);

    const { nome, idade, cargo } = updateFuncionarioDto;

    funcionario.nome = nome ? nome : funcionario.nome;
    funcionario.idade = idade ? idade : funcionario.idade;
    funcionario.cargo = cargo ? cargo : funcionario.cargo;

    try {
      await funcionario.save();
      return funcionario;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao salvar os dados do funcionário.');
    }


  }

  async remove(id: number) {
    // return `Deletando um funcionário pelo seu #${id}.`;

    const result = await this.funcionariosRepository.delete({ id: id });

    if (result.affected === 0) {
      throw new NotFoundException('Funcionário não encontrado.');
    }
  }

}
