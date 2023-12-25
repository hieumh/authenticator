import { Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';
import { FindUserQuery } from './find-user.query';

@Injectable()
@QueryHandler(FindUserQuery)
export class FindUserHandler implements IQueryHandler<FindUserQuery> {
  constructor(private readonly userService: UserService) {}

  execute(query: FindUserQuery): Promise<User> {
    return this.userService.find(query.id);
  }
}
