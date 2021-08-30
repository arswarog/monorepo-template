import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { TodoController } from './todo.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo]),
    ],
    providers: [
        TodoService,
    ],
    exports: [
        TodoService,
        TypeOrmModule,
    ],
    controllers: [TodoController],
})
export class TodoModule {}
