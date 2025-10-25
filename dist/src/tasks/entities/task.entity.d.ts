import { Auction } from '../../auctions/entities/auction.entity';
export declare class Task {
    id: string;
    title: string;
    description: string;
    isAllocated: boolean;
    auction?: Auction;
}
