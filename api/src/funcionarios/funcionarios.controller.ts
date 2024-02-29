import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Funcionario } from './entities/funcionario.entity';
import { ReturnFuncionarioDto } from './dto/return-funcionario.dto';

@Controller('funcionarios')
export class FuncionariosController {

  constructor(private readonly funcionariosService: FuncionariosService) { }

  @Post()
  async create(@Body() createFuncionarioDto: CreateFuncionarioDto): Promise<ReturnFuncionarioDto> {
    const funcionario = await this.funcionariosService.create(createFuncionarioDto);

    return {
      funcionario,
      mensagem: "Funcionario cadastrado com sucesso.",
    };
  }

  @Get()
  // async findAll(): Promise<Funcionario[]> {
  findAll() {
    return this.funcionariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ReturnFuncionarioDto> {
    const funcionario = await this.funcionariosService.findOne(+id);

    return {
      funcionario,
      mensagem: 'Usuário encontrado.'
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionariosService.update(+id, updateFuncionarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.funcionariosService.remove(+id);
    return {
      message: 'Funcionário removido com sucesso',
    };
  }
}
