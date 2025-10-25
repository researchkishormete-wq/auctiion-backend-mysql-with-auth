import { User } from '../../users/entities/user.entity';
import { Auction } from '../../auctions/entities/auction.entity';
export declare class Bid {
    id: string;
    user: User;
    auction: Auction;
    price: number;
    metadata: string;
    createdAt: Date;
}
