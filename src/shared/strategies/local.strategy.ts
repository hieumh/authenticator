import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SessionBaseAuthService } from 'src/modules/auth/application/session-based-auth.service';
import { User } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly sessionBaseAuthService: SessionBaseAuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.sessionBaseAuthService.validate({
      username,
      password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
