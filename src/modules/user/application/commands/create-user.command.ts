import { User } from '@prisma/client';

export class CreateUserCommand {
  constructor(public readonly user: User) {}
}
