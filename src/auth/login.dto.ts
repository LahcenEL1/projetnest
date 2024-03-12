import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com' })
  username: string;

  @ApiProperty({ example: 'changeMe' })
  password: string;
}
