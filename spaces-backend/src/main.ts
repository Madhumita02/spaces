import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // optional, for DTO validation
  app.enableCors(); // if frontend will call API
  app.use(express.json()); // <-- THIS IS IMPORTANT

  await app.listen(3000);
}
bootstrap();
