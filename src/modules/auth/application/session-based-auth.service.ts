import { compare, hash } from 'bcrypt';
import { User } from '@prisma/client';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/modules/user/application/commands/create-user.command';
import { IAuthenticationUser } from 'src/shared/interfaces/user.interface';
import { FindUserByNameQuery } from 'src/modules/user/application/queries/find-user-by-name.query';
import {
  ConflictException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { FindUserByIdQuery } from 'src/modules/user/application/queries/find-user-by-id.query';

@Injectable()
export class SessionBaseAuthService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async register(user: IAuthenticationUser): Promise<User> {
    const { username, password } = user;

    const currentUser = await this.queryBus.execute(
      new FindUserByNameQuery(username),
    );
    if (currentUser) {
      throw new ConflictException();
    }

    const hashedPassword = await hash(password, process.env.SALT_OR_ROUND);

    return this.commandBus.execute(
      new CreateUserCommand({
        username,
        password: hashedPassword,
      }),
    );
  }

  async validate(user: IAuthenticationUser): Promise<User> {
    const { username, password } = user;

    const currentUser: User = await this.queryBus.execute(
      new FindUserByNameQuery(username),
    );
    const passwordValid = await compare(password, currentUser.password);

    if (!passwordValid || !currentUser) {
      throw new NotAcceptableException();
    }

    return currentUser;
  }

  async validateByUserId(userId: number): Promise<User> {
    const currentUser: User = await this.queryBus.execute(
      new FindUserByIdQuery(userId),
    );

    if (!currentUser) {
      throw new NotFoundException();
    }

    return currentUser;
  }
}
