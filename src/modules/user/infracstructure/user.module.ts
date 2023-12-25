import { Module } from '@nestjs/common';
import { UserController } from '../presentation/user.controller';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { UserService } from '../application/services/user.service';
import { UserRepository } from './repository/user.repository';
import { CreateUserHandler } from '../application/commands/create-user.handler';
import { FindUserHandler } from '../application/queries/find-user.handler';
import { RemoveUserHandler } from '../application/commands/remove-user.handler';
import { UpdateUserHandler } from '../application/commands/update-user.handler';
import { CqrsModule } from '@nestjs/cqrs';

const cqrsHandler = [
  CreateUserHandler,
  RemoveUserHandler,
  UpdateUserHandler,

  FindUserHandler,
];

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...cqrsHandler],
  exports: [UserService],
})
export class UserModule {}
