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
exports.BidsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bid_entity_1 = require("./entities/bid.entity");
const auction_entity_1 = require("../auctions/entities/auction.entity");
let BidsService = class BidsService {
    constructor(bidsRepo, auctionsRepo) {
        this.bidsRepo = bidsRepo;
        this.auctionsRepo = auctionsRepo;
    }
    async placeBid(auctionId, userId, price, metadata) {
        const auction = await this.auctionsRepo.findOne({ where: { id: auctionId } });
        if (!auction)
            throw new common_1.NotFoundException('Auction not found');
        if (auction.isClosed)
            throw new common_1.BadRequestException('Auction is closed');
        const bid = this.bidsRepo.create({
            auction: { id: auctionId },
            user: { id: userId },
            price,
            metadata,
        });
        return this.bidsRepo.save(bid);
    }
};
exports.BidsService = BidsService;
exports.BidsService = BidsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bid_entity_1.Bid)),
    __param(1, (0, typeorm_1.InjectRepository)(auction_entity_1.Auction)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BidsService);
//# sourceMappingURL=bids.service.js.map