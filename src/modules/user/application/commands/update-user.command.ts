import { User } from '@prisma/client';

export class UpdateUserCommand {
  constructor(public readonly user: User) {}
}
