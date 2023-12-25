import { UserRepository } from 'src/modules/user/infrastructure/repository/user.repository';

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}
}
