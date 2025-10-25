import { BidsService } from './bids.service';
declare class CreateBidDto {
    price: number;
    metadata?: string;
}
export declare class BidsController {
    private bidsService;
    constructor(bidsService: BidsService);
    place(auctionId: string, body: CreateBidDto, req: any): Promise<import("./entities/bid.entity").Bid>;
}
export {};
