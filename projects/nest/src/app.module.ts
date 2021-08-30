import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { RouterModule } from '@nestjs/core';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        TodoModule,
        RouterModule.register([
            {
                path: 'todo',
                module: TodoModule,
            },
        ]),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
