import { AutoMap } from '@automapper/classes';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  password: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phone: string;
}
