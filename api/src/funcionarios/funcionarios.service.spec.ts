import { Test, TestingModule } from '@nestjs/testing';
import { FuncionarioRepository } from './entities/funcionario.repository';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { NotFoundException, UnprocessableEntityException } from '@nestjs/common';

const mockFuncionarioRepository = () => ({
    create: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    findAll: jest.fn(),
});

describe('FuncionariosService', () => {

    let funcionarioRepository;
    let service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FuncionariosService,
                {
                    provide: FuncionarioRepository,
                    useFactory: mockFuncionarioRepository,
                },
            ],
        }).compile();

        funcionarioRepository = await module.get<FuncionarioRepository>(FuncionarioRepository);
        service = await module.get<FuncionariosService>(FuncionariosService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(funcionarioRepository).toBeDefined();
    });

    describe('createFuncionario', () => {
        let mockCreateFuncionarioDto: CreateFuncionarioDto;

        beforeEach(() => {
            mockCreateFuncionarioDto = {
                nome: 'Mock Funcionario',
                idade: 35,
                cargo: 'Engenheiro de Software',
            };
        });

        // it('should create an user if passwords match', async () => {
        //     funcionarioRepository.create.mockResolvedValue('mockFuncionario');
        //     const result = await service.createAdminUser(mockCreateFuncionarioDto);

        //     expect(funcionarioRepository.create).toHaveBeenCalledWith(
        //         mockCreateFuncionarioDto
        //     );
        //     expect(result).toEqual('mockFuncionario');
        // });

        // it('should throw an error if passwords doesnt match', async () => {
        //     mockCreateFuncionarioDto.passwordConfirmation = 'wrongPassword';
        //     expect(service.createAdminUser(mockCreateFuncionarioDto)).rejects.toThrow(
        //         UnprocessableEntityException,
        //     );
        // });
    });

    describe('findOne', () => {
        it('Deve retornar o funcionario encontrado', async () => {
            funcionarioRepository.findOne.mockResolvedValue('mockFuncionario');
            expect(funcionarioRepository.findOne).not.toHaveBeenCalled();

            const result = await service.findOne('mockId');
            const select = ['nome', 'idade', 'cargo'];
            expect(funcionarioRepository.findOne).toHaveBeenCalledWith('mockId', { select });
            expect(result).toEqual('mockFuncionario');
        });

        it('Deve gerar um erro porque o usuario não foi encontrado', async () => {
            funcionarioRepository.findOne.mockResolvedValue(null);
            expect(service.findOne('mockId')).rejects.toThrow(NotFoundException);
        });
    });

})