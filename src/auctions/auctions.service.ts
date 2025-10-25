import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auction } from './entities/auction.entity';
import { Task } from '../tasks/entities/task.entity';

@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction) private auctionsRepo: Repository<Auction>,
    @InjectRepository(Task) private tasksRepo: Repository<Task>,
  ) { }

  async create(dto: Partial<Auction>, creatorId: string) {
    const a = this.auctionsRepo.create({
      title: dto.title,
      startsAt: dto.startsAt,
      endsAt: dto.endsAt,
      createdBy: { id: creatorId } as any,
      tasks: dto.tasks?.map(t => this.tasksRepo.create(t)) || [],
    });
    return this.auctionsRepo.save(a);
  }

  async findOne(id: string) {
    const a = await this.auctionsRepo.findOne({ where: { id }, relations: ['tasks', 'bids', 'createdBy', 'bids.user'] });
    if (!a) throw new NotFoundException('Auction not found');
    return a;
  }

  async close(id: string) {
    const a = await this.findOne(id);
    a.isClosed = true;
    return this.auctionsRepo.save(a);
  }

  async allocate(id: string) {
    const a = await this.findOne(id);
    if (!a.bids || a.bids.length === 0) return null;
    const lowest = a.bids.reduce((prev, cur) => (Number(cur.price) < Number(prev.price) ? cur : prev));
    for (const t of a.tasks) {
      t.isAllocated = true;
      await this.tasksRepo.save(t);
    }
    a.isClosed = true;
    await this.auctionsRepo.save(a);
    return { winner: lowest.user, bid: lowest };
  }
}