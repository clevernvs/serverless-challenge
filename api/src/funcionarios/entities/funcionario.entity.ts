import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Funcionario extends BaseEntity {

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 200 })
    nome: string;

    @Column({ type: 'integer', nullable: false })
    idade: number;

    @Column({ type: 'varchar', nullable: false, length: 100 })
    cargo: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
