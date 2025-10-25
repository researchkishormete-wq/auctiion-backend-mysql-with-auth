import { TasksService } from './tasks.service';
declare class CreateTaskDto {
    title: string;
    description: string;
}
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    create(dto: CreateTaskDto, req: any): Promise<import("./entities/task.entity").Task>;
}
export {};
