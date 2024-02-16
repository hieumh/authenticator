import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import {
  loginSchema,
  registerSchema,
} from '../domain/validation-schema/register.schema';
import { JoiValidationPipe } from 'src/shared/middleware/pipes/joi-validation.pipe';
import { IAuthenticationUser } from 'src/shared/interfaces/user.interface';
import { UserDto } from 'src/shared/dtos/user.dto';
import { mapper } from 'src/shared/mapping/mapper.mapping';
import { UserEntity } from 'src/shared/entities/user.entity';
import { SessionBaseAuthService } from '../application/session-based-auth.service';

@Controller('auth/session-based')
export class SessionBasedAuthController {
  constructor(
    private readonly sessionBaseAuthService: SessionBaseAuthService,
  ) {}

  @Post('register')
  @UsePipes(new JoiValidationPipe(registerSchema))
  async register(@Body() registerUser: IAuthenticationUser): Promise<UserDto> {
    const responseUser =
      await this.sessionBaseAuthService.register(registerUser);
    return mapper.map(responseUser, UserEntity, UserDto);
  }

  @Post('login')
  @UsePipes(new JoiValidationPipe(loginSchema))
  async login(@Body() loginUser: IAuthenticationUser): Promise<UserDto> {
    const responseUser = await this.sessionBaseAuthService.validate(loginUser);
    return mapper.map(responseUser, UserEntity, UserDto);
  }
}
