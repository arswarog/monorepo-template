import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Get(':id')
  getHelloWithName(@Param('id') id: string): object {
    return this.appService.getHelloWithName(id);
  }
}
