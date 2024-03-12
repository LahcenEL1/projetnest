import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private readonly user = {
    userId: 1,
    username: 'user@example.com',
    password: 'changeMe', 
  };

  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.user;
    if (user.username === username && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      return null;
    }

    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
