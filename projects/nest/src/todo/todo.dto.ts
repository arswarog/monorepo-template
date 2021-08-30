import { ApiProperty, PickType } from '@nestjs/swagger';
import { ITodo } from './todo.interface';

export class TodoDto implements ITodo {
    @ApiProperty({
        type: Number,
        description: 'ID',
    })
    id: number;
    @ApiProperty({
        type: String,
        description: 'Text of task',
        minimum: 3,
        required: true,
    })
    text: string;
    @ApiProperty({
        type: Boolean,
        description: 'Done flag',
    })
    done: boolean;
}

export class CreateTodoDto extends PickType(TodoDto, ['text'] as const) {}
