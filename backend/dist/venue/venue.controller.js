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
exports.VenueController = void 0;
const common_1 = require("@nestjs/common");
const AuthGuard_1 = require("../guards/AuthGuard");
const venue_service_1 = require("./venue.service");
const AdminGuard_1 = require("../guards/AdminGuard");
const platform_express_1 = require("@nestjs/platform-express");
const create_venue_dto_1 = require("./dtos/create-venue.dto");
const validation_1 = require("../utils/validation");
const update_venue_dto_1 = require("./dtos/update-venue.dto");
let VenueController = class VenueController {
    constructor(vs) {
        this.vs = vs;
    }
    add(body, file) {
        (0, validation_1.isFile)(file);
        return this.vs.add(body, file);
    }
    getAll() {
        return this.vs.getAll();
    }
    getById(id) {
        return this.vs.getById(id);
    }
    update(id, body, file) {
        return this.vs.update(id, body, file);
    }
    delete(id) {
        return this.vs.delete(id);
    }
};
exports.VenueController = VenueController;
__decorate([
    (0, common_1.UseGuards)(AdminGuard_1.AdminGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venue_dto_1.CreateVenueDto, Object]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "add", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "getById", null);
__decorate([
    (0, common_1.UseGuards)(AdminGuard_1.AdminGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_venue_dto_1.UpdateVenueDto, Object]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(AdminGuard_1.AdminGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "delete", null);
exports.VenueController = VenueController = __decorate([
    (0, common_1.Controller)('venue'),
    (0, common_1.UseGuards)(AuthGuard_1.AuthGuard),
    __metadata("design:paramtypes", [venue_service_1.VenueService])
], VenueController);
//# sourceMappingURL=venue.controller.js.map