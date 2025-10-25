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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auction = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("../../tasks/entities/task.entity");
const bid_entity_1 = require("../../bids/entities/bid.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Auction = class Auction {
};
exports.Auction = Auction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Auction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Auction.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Auction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Auction.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Auction.prototype, "endsAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (u) => u.auctions),
    __metadata("design:type", user_entity_1.User)
], Auction.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (t) => t.auction, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], Auction.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bid_entity_1.Bid, (b) => b.auction),
    __metadata("design:type", Array)
], Auction.prototype, "bids", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Auction.prototype, "isClosed", void 0);
exports.Auction = Auction = __decorate([
    (0, typeorm_1.Entity)()
], Auction);
//# sourceMappingURL=auction.entity.js.map