import { Injectable } from '@nestjs/common';
import { UserRepository } from '../infracstructure/repository/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }
}
