import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './create-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('tasks') 
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  
  @Get()
  @ApiOperation({ summary: 'Récupère toutes les tâches' }) 
  @ApiResponse({ status: 200, description: 'Succès', type: [Task] }) 
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crée une nouvelle tâche' })
  @ApiBody({ type: CreateTaskDto, description: 'Données pour créer une nouvelle tâche' })
  @ApiResponse({ status: 201, description: 'Tâche créée', type: Task })
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mise à jour d\'une tâche' })
  @ApiParam({ name: 'id', type: 'number', description: 'Identifiant de la tâche' })
  @ApiBody({ type: Task, description: 'Données de la tâche à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Tâche mise à jour', type: Task })
  update(@Param('id') id: number, @Body() taskUpdates: Partial<Task>): Task {
    return this.tasksService.update(+id, taskUpdates);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Suppression d\'une tâche' })
  @ApiParam({ name: 'id', type: 'number', description: 'Identifiant de la tâche' })
  @ApiResponse({ status: 200, description: 'Tâche supprimée' })
  remove(@Param('id') id: number): void {
    this.tasksService.remove(+id);
  }
}
