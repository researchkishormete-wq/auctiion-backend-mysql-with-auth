import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bid } from '../../bids/entities/bid.entity';
import { Auction } from '../../auctions/entities/auction.entity';

export enum UserRole {
  WORKER = 'worker',
  REQUESTER = 'requester',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ unique: true }) email: string;

  @Column() password: string;

  @Column({ default: UserRole.WORKER }) role: UserRole;

  @OneToMany(() => Bid, (b) => b.user) bids: Bid[];

  @OneToMany(() => Auction, (a) => a.createdBy) auctions: Auction[];
}