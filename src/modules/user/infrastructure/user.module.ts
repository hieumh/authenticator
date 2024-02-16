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
import { FindUserByIdHandler } from '../application/queries/find-user-by-id.handler';
import { FindUserByNameHandler } from '../application/queries/find-user-by-name.handler';

export const cqrsHandler = [
  CreateUserHandler,
  RemoveUserHandler,
  UpdateUserHandler,

  FindUserHandler,
  FindUserByIdHandler,
  FindUserByNameHandler,
];

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...cqrsHandler],
  exports: [UserService, ...cqrsHandler],
})
export class UserModule {}
