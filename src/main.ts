import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundExceptionFilter } from './shared/middleware/exceptions/filters/not-found.filter';
import { createMap } from '@automapper/core';
import { mapper } from './shared/mapping/mapper.mapping';
import { UserEntity } from './shared/entities/user.entity';
import { UserDto } from './shared/dtos/user.dto';
import session from 'express-session';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5173/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  createMap(mapper, UserEntity, UserDto);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new NotFoundExceptionFilter(httpAdapter));
  app.setGlobalPrefix('api/v1');

  await app.listen(3001);
}
bootstrap();
