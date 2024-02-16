import { Module } from '@nestjs/common';
import { SessionBaseAuthService } from '../application/session-based-auth.service';
import { UserModule } from 'src/modules/user/infrastructure/user.module';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { SessionBasedAuthController } from '../presentation/session-based-auth.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [UserModule, PrismaModule, CqrsModule],
  controllers: [SessionBasedAuthController],
  providers: [SessionBaseAuthService],
})
export class AuthModule {}
