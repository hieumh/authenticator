import { Provider } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export const prismaProvider: Provider<PrismaClient> = {
  provide: PrismaClient,
  useValue: new PrismaClient(),
};
