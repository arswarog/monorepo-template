import { ApiProperty } from '@nestjs/swagger';

export class HelloDto {
    @ApiProperty({
        type: String,
        description: 'Hello text',
        minimum: 1,
        default: 'Hello!',
    })
    data: string;
}
