import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Auction } from '../../auctions/entities/auction.entity';

@Entity()
export class Bid {
  @PrimaryGeneratedColumn('uuid') id: string;
  @ManyToOne(() => User, (u) => u.bids) user: User;
  @ManyToOne(() => Auction, (a) => a.bids) auction: Auction;
  @Column('decimal', { precision: 12, scale: 2 }) price: number;
  @Column('text', { nullable: true }) metadata: string;
  @CreateDateColumn() createdAt: Date;
}