import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});

    addSwagger(app);
    enableCors(app);

    await app.listen(3000);
}

bootstrap();

function addSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
}

function enableCors(app: INestApplication) {
    app.enableCors({
        origin: ['localhost:3010'],
        methods: ['GET', 'POST', 'DELETE'],
        allowedHeaders: ['X-MyHeader'],
        exposedHeaders: ['X-MyHeader', 'X-Pagination'],
    });
}
