import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let PORT = app.get(ConfigService).get('PORT')
  app.use(cookieParser())
  await app.listen(PORT || 3000)
}
bootstrap();
