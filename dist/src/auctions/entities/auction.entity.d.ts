import { Task } from '../../tasks/entities/task.entity';
import { Bid } from '../../bids/entities/bid.entity';
import { User } from '../../users/entities/user.entity';
export declare class Auction {
    id: string;
    title: string;
    createdAt: Date;
    startsAt: Date;
    endsAt: Date;
    createdBy: User;
    tasks?: Partial<Task>[];
    bids: Bid[];
    isClosed: boolean;
}
