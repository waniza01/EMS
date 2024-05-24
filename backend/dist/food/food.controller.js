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
exports.FoodController = void 0;
const common_1 = require("@nestjs/common");
const food_service_1 = require("./food.service");
const create_food_dto_1 = require("./dtos/create-food.dto");
const update_food_dto_1 = require("./dtos/update-food.dto");
const platform_express_1 = require("@nestjs/platform-express");
const validation_1 = require("../utils/validation");
const AuthGuard_1 = require("../guards/AuthGuard");
const AdminGuard_1 = require("../guards/AdminGuard");
let FoodController = class FoodController {
    constructor(fs) {
        this.fs = fs;
    }
    add(body, file) {
        (0, validation_1.isFile)(file);
        console.log(body);
        return this.fs.add(body, file);
    }
    getAll() {
        return this.fs.getAll();
    }
    getById(id) {
        return this.fs.getById(id);
    }
    update(id, body, file) {
        return this.fs.update(id, body, file);
    }
    delete(id) {
        return this.fs.delete(id);
    }
};
exports.FoodController = FoodController;
__decorate([
    (0, common_1.UseGuards)(AdminGuard_1.AdminGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_dto_1.CreateFoodDto, Object]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "add", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "getById", null);
__decorate([
    (0, common_1.UseGuards)(AdminGuard_1.AdminGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_food_dto_1.UpdateFoodDto, Object]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(AdminGuard_1.AdminGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FoodController.prototype, "delete", null);
exports.FoodController = FoodController = __decorate([
    (0, common_1.Controller)('food'),
    (0, common_1.UseGuards)(AuthGuard_1.AuthGuard),
    __metadata("design:paramtypes", [food_service_1.FoodService])
], FoodController);
//# sourceMappingURL=food.controller.js.map