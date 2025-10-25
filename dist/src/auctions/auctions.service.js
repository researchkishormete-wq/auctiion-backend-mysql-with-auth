"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auction_entity_1 = require("./entities/auction.entity");
const task_entity_1 = require("../tasks/entities/task.entity");
let AuctionsService = class AuctionsService {
    constructor(auctionsRepo, tasksRepo) {
        this.auctionsRepo = auctionsRepo;
        this.tasksRepo = tasksRepo;
    }
    async create(dto, creatorId) {
        const a = this.auctionsRepo.create({
            title: dto.title,
            startsAt: dto.startsAt,
            endsAt: dto.endsAt,
            createdBy: { id: creatorId },
            tasks: dto.tasks?.map(t => this.tasksRepo.create(t)) || [],
        });
        return this.auctionsRepo.save(a);
    }
    async findOne(id) {
        const a = await this.auctionsRepo.findOne({ where: { id }, relations: ['tasks', 'bids', 'createdBy', 'bids.user'] });
        if (!a)
            throw new common_1.NotFoundException('Auction not found');
        return a;
    }
    async close(id) {
        const a = await this.findOne(id);
        a.isClosed = true;
        return this.auctionsRepo.save(a);
    }
    async allocate(id) {
        const a = await this.findOne(id);
        if (!a.bids || a.bids.length === 0)
            return null;
        const lowest = a.bids.reduce((prev, cur) => (Number(cur.price) < Number(prev.price) ? cur : prev));
        for (const t of a.tasks) {
            t.isAllocated = true;
            await this.tasksRepo.save(t);
        }
        a.isClosed = true;
        await this.auctionsRepo.save(a);
        return { winner: lowest.user, bid: lowest };
    }
};
exports.AuctionsService = AuctionsService;
exports.AuctionsService = AuctionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auction_entity_1.Auction)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AuctionsService);
//# sourceMappingURL=auctions.service.js.map