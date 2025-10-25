import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionsService } from './auctions.service';
import { AuctionsController } from './auctions.controller';
import { Auction } from './entities/auction.entity';
import { Task } from '../tasks/entities/task.entity';
import { Bid } from '../bids/entities/bid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auction, Task, Bid])],
  providers: [AuctionsService],
  controllers: [AuctionsController],
  exports: [AuctionsService],
})
export class AuctionsModule {}