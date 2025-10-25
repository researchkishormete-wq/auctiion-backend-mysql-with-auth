import { Bid } from '../../bids/entities/bid.entity';
import { Auction } from '../../auctions/entities/auction.entity';
export declare enum UserRole {
    WORKER = "worker",
    REQUESTER = "requester",
    ADMIN = "admin"
}
export declare class User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    bids: Bid[];
    auctions: Auction[];
}
