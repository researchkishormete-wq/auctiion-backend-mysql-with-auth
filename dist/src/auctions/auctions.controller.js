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
exports.AuctionsController = void 0;
const common_1 = require("@nestjs/common");
const auctions_service_1 = require("./auctions.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
class CreateAuctionDto {
}
let AuctionsController = class AuctionsController {
    constructor(auctionsService) {
        this.auctionsService = auctionsService;
    }
    create(dto, req) {
        return this.auctionsService.create({
            ...dto,
            startsAt: new Date(dto.startsAt),
            endsAt: new Date(dto.endsAt),
            tasks: dto.tasks,
        }, req.user.id);
    }
    findOne(id) {
        return this.auctionsService.findOne(id);
    }
    close(id) {
        return this.auctionsService.close(id);
    }
    allocate(id) {
        return this.auctionsService.allocate(id);
    }
};
exports.AuctionsController = AuctionsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAuctionDto, Object]),
    __metadata("design:returntype", void 0)
], AuctionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuctionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/close'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuctionsController.prototype, "close", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/allocate'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuctionsController.prototype, "allocate", null);
exports.AuctionsController = AuctionsController = __decorate([
    (0, common_1.Controller)('auctions'),
    __metadata("design:paramtypes", [auctions_service_1.AuctionsService])
], AuctionsController);
//# sourceMappingURL=auctions.controller.js.map