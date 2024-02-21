export type FuncionarioProps = {
    nome: string;
    idade: number;
    cargo: string;
};

export class Funcionario {

    constructor(props: FuncionarioProps) {
        // this.nome = props.nome;
        // this.idade = props.idade;
        // this.cargo = props.cargo;

        Object.assign(this, props);
    }

    nome: string;
    idade: number;
    cargo: string;

}
