import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByNameQuery } from './find-user-by-name.query';
import { User } from '@prisma/client';

@Injectable()
@QueryHandler(FindUserByNameQuery)
export class FindUserByNameHandler
  implements IQueryHandler<FindUserByNameQuery>
{
  constructor(private readonly userService: UserService) {}

  execute(query: FindUserByNameQuery): Promise<User> {
    return this.userService.findByName(query.username);
  }
}
