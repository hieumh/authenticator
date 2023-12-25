import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindUserQuery } from '../application/queries/find-user.query';
import { User } from '@prisma/client';
import { CreateUserCommand } from '../application/commands/create-user.command';
import { RemoveUserCommand } from '../application/commands/remove-user.command';
import { UpdateUserCommand } from '../application/commands/update-user.command';
import { JoiValidationPipe } from 'src/shared/middleware/pipes/joi-validation.pipe';
import {
  createUserSchema,
  updateUserSchema,
} from '../domain/validation-schema/user.schema';

@Controller('user')
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get(':id')
  findUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.queryBus.execute(new FindUserQuery(id));
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createUserSchema))
  createUser(@Body() user: User): Promise<User> {
    return this.commandBus.execute(new CreateUserCommand(user));
  }

  @Patch()
  @UsePipes(new JoiValidationPipe(updateUserSchema))
  updateUser(@Body() user: User): Promise<User> {
    return this.commandBus.execute(new UpdateUserCommand(user));
  }

  @Delete(':id')
  removeUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.commandBus.execute(new RemoveUserCommand(id));
  }
}
