import { Injectable } from '@nestjs/common';
import { CreateUserCommand } from './create-user.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';

@Injectable()
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly userService: UserService) {}

  execute(command: CreateUserCommand): Promise<User> {
    return this.userService.create({ ...command.user } as User);
  }
}
