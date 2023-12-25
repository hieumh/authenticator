import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database/database.config';
import { ENV_FILE_PATH } from './config/env/env.config';
import { TaskModule } from './modules/task-management/infrastructure/task.module';
import { AuthModule } from './modules/auth/infrastructure/auth.module';

@Module({
  imports: [
    TaskModule,
    AuthModule,
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
