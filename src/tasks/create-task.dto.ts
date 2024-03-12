import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Faire les courses' })
  title: string;

  @ApiProperty({ example: 'Acheter du lait et des œufs.' })
  description: string;

  @ApiProperty({ example: false })
  isCompleted: boolean;
}
