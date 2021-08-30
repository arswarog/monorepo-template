import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private repository: Repository<Todo>,
    ) {}

    findAll(): Promise<Todo[]> {
        return this.repository.find();
    }

    findOne(id: number): Promise<Todo> {
        return this.repository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async update(id: number, text: string): Promise<Todo> {
        await this.repository.update(id, {
            text,
        });
        return this.findOne(id);
    }

    create(text: string): Promise<Todo> {
        return this.repository.save({
            text,
        });
    }
}
