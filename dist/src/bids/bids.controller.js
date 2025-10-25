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
exports.BidsController = void 0;
const common_1 = require("@nestjs/common");
const bids_service_1 = require("./bids.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
class CreateBidDto {
}
let BidsController = class BidsController {
    constructor(bidsService) {
        this.bidsService = bidsService;
    }
    place(auctionId, body, req) {
        return this.bidsService.placeBid(auctionId, req.user.id, body.price, body.metadata);
    }
};
exports.BidsController = BidsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('auctionId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateBidDto, Object]),
    __metadata("design:returntype", void 0)
], BidsController.prototype, "place", null);
exports.BidsController = BidsController = __decorate([
    (0, common_1.Controller)('auctions/:auctionId/bids'),
    __metadata("design:paramtypes", [bids_service_1.BidsService])
], BidsController);
//# sourceMappingURL=bids.controller.js.map