import { Funcionario } from "./funcionario.entity";

describe('Funcionario Testes', () => {
    it('Criar um funcionario', () => {
        const funcionario = new Funcionario({
            nome: 'Fulano',
            idade: 35,
            cargo: 'Desenvolvedor',
        });

        expect(funcionario.nome).toBe('Fulano');
        expect(funcionario.idade).toBe(35);
        expect(funcionario.cargo).toBe('Desenvolvedor');
    })
})