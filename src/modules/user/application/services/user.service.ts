import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  find(id: number): Promise<User> {
    return this.userRepository.find(id);
  }

  update(user: User): Promise<User> {
    return this.userRepository.update(user);
  }

  remove(id: number): Promise<User> {
    return this.userRepository.remove(id);
  }
}
