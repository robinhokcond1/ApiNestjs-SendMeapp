import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mensagem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nick: string;

    @Column()
    mensagem: string;
}
