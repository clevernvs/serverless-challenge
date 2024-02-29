import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Funcionario } from './entities/funcionario.entity';

@Controller('funcionarios')
export class FuncionariosController {

  constructor(private readonly funcionariosService: FuncionariosService) { }

  @Post()
  async create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
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
  findOne(@Param('id') id: string) {
    return this.funcionariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionariosService.update(+id, updateFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionariosService.remove(+id);
  }
}
