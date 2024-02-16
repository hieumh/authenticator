import { User } from '@prisma/client';

export interface IAuthenticationUser
  extends Pick<User, 'username' | 'password'> {
  username: string;
  password: string;
}
