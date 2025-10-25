import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
export declare class TasksService {
    private repo;
    constructor(repo: Repository<Task>);
    create(data: Partial<Task>): Promise<Task>;
    findById(id: string): Promise<Task>;
}
