import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  app.useLogger(app.get(Logger));
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
