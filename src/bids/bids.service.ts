import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { Auction } from '../auctions/entities/auction.entity';

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid) private bidsRepo: Repository<Bid>,
    @InjectRepository(Auction) private auctionsRepo: Repository<Auction>,
  ) {}

  async placeBid(auctionId: string, userId: string, price: number, metadata?: string) {
    const auction = await this.auctionsRepo.findOne({ where: { id: auctionId } });
    if (!auction) throw new NotFoundException('Auction not found');
    if (auction.isClosed) throw new BadRequestException('Auction is closed');
    const bid = this.bidsRepo.create({
      auction: { id: auctionId } as any,
      user: { id: userId } as any,
      price,
      metadata,
    });
    return this.bidsRepo.save(bid);
  }
}