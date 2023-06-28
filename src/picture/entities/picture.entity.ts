import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Picture {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    picture1: string

    @Column()
    picture2: string
}
