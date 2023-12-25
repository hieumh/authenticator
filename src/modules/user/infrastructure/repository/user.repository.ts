import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  create(user: User): Promise<User> {
    return this.prismaClient.user.create({ data: user });
  }

  find(id: number): Promise<User> {
    return this.prismaClient.user.findFirst({ where: { id } });
  }

  update(user: User): Promise<User> {
    return this.prismaClient.user.update({
      where: { id: user.id },
      data: user,
    });
  }

  remove(id: number): Promise<User> {
    return this.prismaClient.user.delete({
      where: {
        id,
      },
    });
  }
}
