import { Module } from '@nestjs/common';
import { UserController } from '../presentation/user.controller';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { UserService } from '../application/user.service';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
