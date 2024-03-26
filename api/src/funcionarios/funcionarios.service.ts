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
    private funcionarioRepository: FuncionarioRepository
  ) { }

  async create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    return this.funcionarioRepository.createFuncionario(createFuncionarioDto);
  }

  async findAll() {
    await this.funcionarioRepository.find();
  }


  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOneBy({ id: id });

    if (!funcionario) throw new NotFoundException('Funcionário não encontrado.');

    return funcionario;
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {

    const resultado = await this.funcionarioRepository.update({ id }, updateFuncionarioDto);

    if (resultado.affected > 0) {
      const funcionario = await this.findOne(id);
      return funcionario;
    } else {
      throw new NotFoundException('Funcionário não encontrado.');
    }

  }

  async remove(id: number) {
    // return `Deletando um funcionário pelo seu #${id}.`;

    const result = await this.funcionarioRepository.delete({ id: id });

    if (result.affected === 0) {
      throw new NotFoundException('Funcionário não encontrado.');
    }
  }

}
