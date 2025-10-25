"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auctions_service_1 = require("./auctions.service");
const auctions_controller_1 = require("./auctions.controller");
const auction_entity_1 = require("./entities/auction.entity");
const task_entity_1 = require("../tasks/entities/task.entity");
const bid_entity_1 = require("../bids/entities/bid.entity");
let AuctionsModule = class AuctionsModule {
};
exports.AuctionsModule = AuctionsModule;
exports.AuctionsModule = AuctionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([auction_entity_1.Auction, task_entity_1.Task, bid_entity_1.Bid])],
        providers: [auctions_service_1.AuctionsService],
        controllers: [auctions_controller_1.AuctionsController],
        exports: [auctions_service_1.AuctionsService],
    })
], AuctionsModule);
//# sourceMappingURL=auctions.module.js.map