import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Faire les courses',
      description: 'Acheter du lait, des œufs et du pain.',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Réviser pour l\'examen',
      description: 'Réviser les chapitres 4 à 6 du livre de mathématiques.',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Séance de sport',
      description: 'Faire une heure de jogging au parc.',
      isCompleted: true,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const newTask = new Task();
    newTask.id = Date.now(); // Génère un ID sommaire, à remplacer par votre logique d'ID
    Object.assign(newTask, createTaskDto);
    this.tasks.push(newTask);
    return newTask;
  }
  update(id: number, taskUpdates: Partial<Task>): Task {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    Object.assign(task, taskUpdates);
    return task;
  }

  remove(id: number): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    this.tasks.splice(taskIndex, 1);
  }
}
