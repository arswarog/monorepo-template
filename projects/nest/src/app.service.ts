import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): object {
        return {
            data: 'Hello World!',
        };
    }

    getHelloWithName(id: string): object {
        return {
            data: `Hello ${id}!`,
        };
    }
}