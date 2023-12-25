import { UserRepository } from 'src/modules/user/infracstructure/repository/user.repository';

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}
}
