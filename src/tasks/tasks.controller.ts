import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

class CreateTaskDto {
  title: string;
  description: string;
}

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateTaskDto, @Request() req: any) {
    const payload = { ...dto };
    return this.tasksService.create(payload);
  }
}