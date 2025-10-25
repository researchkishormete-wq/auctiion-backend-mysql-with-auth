import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { Auction } from '../auctions/entities/auction.entity';
export declare class BidsService {
    private bidsRepo;
    private auctionsRepo;
    constructor(bidsRepo: Repository<Bid>, auctionsRepo: Repository<Auction>);
    placeBid(auctionId: string, userId: string, price: number, metadata?: string): Promise<Bid>;
}
