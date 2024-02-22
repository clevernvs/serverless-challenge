import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'funcionario' })
export class Funcionario {

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'nome', nullable: false })
    nome: string;

    @Column({ name: 'idade', nullable: false })
    idade: number;

    @Column({ name: 'cargo', nullable: false })
    cargo: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
