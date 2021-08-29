import { Injectable } from '@nestjs/common';
import { IHelloResponse } from './app.types';
import { HelloDto } from './dto/hello.dto';

@Injectable()
export class AppService {
    getHellos(): HelloDto[] {
        return [{
            data: 'Hello World!',
        }];
    }

    getHelloWithName(id: string): IHelloResponse {
        return {
            data: `Hello ${id}!`,
        };
    }
}
