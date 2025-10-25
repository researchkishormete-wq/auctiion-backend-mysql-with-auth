import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  create(data: Partial<Task>) {
    const t = this.repo.create(data);
    return this.repo.save(t);
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }
}