import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});

    app.setGlobalPrefix('api');
    swagger(app);
    cors(app);

    await app.listen(3000);
}

bootstrap();

function swagger(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('Todo example')
        .setDescription('The todo API description')
        .setVersion('0.1')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
}

function cors(app: INestApplication) {
    app.enableCors({
        origin: ['localhost:3010'],
        methods: ['GET', 'POST', 'DELETE'],
        allowedHeaders: ['X-MyHeader'],
        exposedHeaders: ['X-MyHeader', 'X-Pagination'],
    });
}
