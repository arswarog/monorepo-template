import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IHelloResponse } from './app.types';
import { HelloDto } from './dto/hello.dto';
import { ApiHeader, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @ApiHeader({
        name: 'X-MyHeader',
        description: 'Custom header',
    })
    @ApiOkResponse({type: [HelloDto], description: 'List of all hello\'s'})
    getHello(): HelloDto[] {
        return this.appService.getHellos();
    }

    @Post()
    @ApiResponse({status: 201, type: HelloDto, description: 'The record has been successfully created.'})
    @ApiResponse({status: 403, description: 'Forbidden.'})
    sendHello(@Body() body: HelloDto): HelloDto {
        return this.appService.getHelloWithName('World');
    }

    @Get(':id')
    getHelloWithName(@Param('id') id: string): IHelloResponse {
        return this.appService.getHelloWithName(id);
    }
}
