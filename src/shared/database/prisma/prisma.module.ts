import { Module } from '@nestjs/common';
import { prismaProvider } from './prisma.provider';

@Module({
  controllers: [],
  providers: [prismaProvider],
  exports: [prismaProvider],
})
export class PrismaModule {}
