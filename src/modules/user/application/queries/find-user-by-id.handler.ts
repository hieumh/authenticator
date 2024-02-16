import { Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByIdQuery } from './find-user-by-id.query';
import { User } from '@prisma/client';
import { UserService } from '../services/user.service';

@Injectable()
@QueryHandler(FindUserByIdQuery)
export class FindUserByIdHandler implements IQueryHandler<FindUserByIdQuery> {
  constructor(private readonly userService: UserService) {}

  execute(query: FindUserByIdQuery): Promise<User> {
    return this.userService.findById(query.userId);
  }
}
