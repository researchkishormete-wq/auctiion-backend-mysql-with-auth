import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';
import { Bid } from '../../bids/entities/bid.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() title: string;
  @CreateDateColumn() createdAt: Date;
  @Column('datetime') startsAt: Date;
  @Column('datetime') endsAt: Date;
  @ManyToOne(() => User, (u) => u.auctions) createdBy: User;
  @OneToMany(() => Task, (t) => t.auction, { cascade: true, eager: true }) tasks?: Partial<Task>[];
  @OneToMany(() => Bid, (b) => b.auction) bids: Bid[];
  @Column({ default: false }) isClosed: boolean;
}