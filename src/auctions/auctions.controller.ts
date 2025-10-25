import { Controller, Post, Body, UseGuards, Request, Param, Get } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

class CreateAuctionDto {
  title: string;
  startsAt: string;
  endsAt: string;
  tasks?: Array<{ title: string; description: string }>;
}

@Controller('auctions')
export class AuctionsController {
  constructor(private auctionsService: AuctionsService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateAuctionDto, @Request() req: any) {
    return this.auctionsService.create({
      ...dto,
      startsAt: new Date(dto.startsAt),
      endsAt: new Date(dto.endsAt),
      tasks: dto.tasks,
    }, req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auctionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/close')
  close(@Param('id') id: string) {
    return this.auctionsService.close(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/allocate')
  allocate(@Param('id') id: string) {
    return this.auctionsService.allocate(id);
  }
}