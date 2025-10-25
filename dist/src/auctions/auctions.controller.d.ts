import { AuctionsService } from './auctions.service';
declare class CreateAuctionDto {
    title: string;
    startsAt: string;
    endsAt: string;
    tasks?: Array<{
        title: string;
        description: string;
    }>;
}
export declare class AuctionsController {
    private auctionsService;
    constructor(auctionsService: AuctionsService);
    create(dto: CreateAuctionDto, req: any): Promise<import("./entities/auction.entity").Auction>;
    findOne(id: string): Promise<import("./entities/auction.entity").Auction>;
    close(id: string): Promise<import("./entities/auction.entity").Auction>;
    allocate(id: string): Promise<{
        winner: import("../users/entities/user.entity").User;
        bid: import("../bids/entities/bid.entity").Bid;
    }>;
}
export {};
