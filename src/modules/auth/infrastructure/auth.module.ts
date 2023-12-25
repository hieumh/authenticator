import { Module } from '@nestjs/common';
import { AuthService } from '../application/auth.service';
import { AuthController } from '../presentation/auth.controller';
import { UserModule } from 'src/modules/user/infracstructure/user.module';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
