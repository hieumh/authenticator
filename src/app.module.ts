import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database/database.config';
import { ENV_FILE_PATH } from './config/env/env.config';
import { AuthModule } from './modules/auth/infrastructure/auth.module';
import { UserModule } from './modules/user/infrastructure/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: ENV_FILE_PATH[process.env.NODE_ENV || 'development'],
      load: [databaseConfig],
      cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
