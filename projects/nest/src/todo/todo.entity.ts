import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ITodo } from './todo.interface';

@Entity()
export class Todo implements ITodo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: String})
    text: string;

    @Column({type: Boolean, default: false})
    done: boolean;
}
