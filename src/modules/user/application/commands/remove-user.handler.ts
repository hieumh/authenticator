import { Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveUserCommand } from './remove-user.command';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';

@Injectable()
@CommandHandler(RemoveUserCommand)
export class RemoveUserHandler implements ICommandHandler<RemoveUserCommand> {
  constructor(private readonly userService: UserService) {}

  execute(command: RemoveUserCommand): Promise<User> {
    return this.userService.remove(command.id);
  }
}
