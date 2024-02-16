import { IAuthenticationUser } from 'src/shared/interfaces/user.interface';

export class CreateUserCommand {
  constructor(public readonly user: IAuthenticationUser) {}
}
