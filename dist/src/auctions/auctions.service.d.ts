import { Repository } from 'typeorm';
import { Auction } from './entities/auction.entity';
import { Task } from '../tasks/entities/task.entity';
export declare class AuctionsService {
    private auctionsRepo;
    private tasksRepo;
    constructor(auctionsRepo: Repository<Auction>, tasksRepo: Repository<Task>);
    create(dto: Partial<Auction>, creatorId: string): Promise<Auction>;
    findOne(id: string): Promise<Auction>;
    close(id: string): Promise<Auction>;
    allocate(id: string): Promise<{
        winner: import("../users/entities/user.entity").User;
        bid: import("../bids/entities/bid.entity").Bid;
    }>;
}
