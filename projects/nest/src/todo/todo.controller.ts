import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, TodoDto } from './todo.dto';
import {
    ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

@ApiTags('todos')
@Controller()
export class TodoController {
    constructor(private readonly service: TodoService) {}

    @Get()
    @ApiOkResponse({
        type: [TodoDto],
        description: 'List of all todos',
    })
    getAll(): Promise<TodoDto[]> {
        return this.service.findAll();
    }

    @Post()
    @ApiCreatedResponse({
        type: TodoDto,
        description: 'Create new todo',
    })
    @ApiUnprocessableEntityResponse({
        type: CreateTodoDto,
        description: 'Invalid payload',
    })
    createNew(@Body() body: CreateTodoDto): Promise<TodoDto> {
        return this.service.create(body.text);
    }

    @Get(':id')
    @ApiOkResponse({
        type: [TodoDto],
        description: 'Get todo by id',
    })
    @ApiNotFoundResponse({
        description: 'Todo not found',
    })
    getOne(@Param('id') id: number): Promise<TodoDto> {
        return this.service.findOne(id);
    }

    @Patch(':id')
    @ApiOkResponse({
        type: TodoDto,
        description: 'Updated todo',
    })
    @ApiUnprocessableEntityResponse({
        type: TodoDto,
        description: 'Invalid payload',
    })
    @ApiNotFoundResponse({
        description: 'Todo not found',
    })
    updateExists(
        @Param('id') id: number,
        @Body() body: CreateTodoDto,
    ): Promise<TodoDto> {
        return this.service.update(id, body.text);
    }

    @Delete(':id')
    @ApiNoContentResponse({
        description: 'Todo deleted',
    })
    @ApiNotFoundResponse({
        description: 'Todo not found',
    })
    deleteTodo(
        @Param('id') id: number,
        @Body() body: CreateTodoDto,
    ): Promise<TodoDto> {
        return this.service.update(id, body.text);
    }
}
