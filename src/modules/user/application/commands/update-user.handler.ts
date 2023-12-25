import { Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from './update-user.command';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';

@Injectable()
@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly userService: UserService) {}

  execute(command: UpdateUserCommand): Promise<User> {
    return this.userService.update(command.user);
  }
}
