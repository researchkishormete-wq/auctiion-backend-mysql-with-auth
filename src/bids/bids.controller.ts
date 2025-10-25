import { Controller, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { BidsService } from './bids.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

class CreateBidDto { price: number; metadata?: string; }

@Controller('auctions/:auctionId/bids')
export class BidsController {
  constructor(private bidsService: BidsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  place(@Param('auctionId') auctionId: string, @Body() body: CreateBidDto, @Request() req: any) {
    return this.bidsService.placeBid(auctionId, req.user.id, body.price, body.metadata);
  }
}