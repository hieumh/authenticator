import { AutoMap } from '@automapper/classes';
import { User } from '@prisma/client';

export class UserDto implements Omit<User, 'password'> {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phone: string;
}
