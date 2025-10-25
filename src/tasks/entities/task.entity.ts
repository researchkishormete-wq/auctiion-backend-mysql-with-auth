import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Auction } from '../../auctions/entities/auction.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() title: string;

  @Column('text') description: string;

  @Column({ default: false }) isAllocated: boolean;

  @ManyToOne(() => Auction, (a) => a.tasks, { nullable: true }) auction?: Auction;
}