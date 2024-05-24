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
exports.FoodService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const food_schema_1 = require("../schemas/food.schema");
const mongoose_2 = require("mongoose");
let FoodService = class FoodService {
    constructor(foodModel) {
        this.foodModel = foodModel;
    }
    add(data, file) {
        const { name, cost } = data;
        const image = {
            name: file.originalname,
            contentType: file.mimetype,
            data: file.buffer,
        };
        return this.foodModel.create({ name, cost, image });
    }
    delete(id) {
        return this.foodModel.deleteOne({ _id: id });
    }
    async update(id, data, file) {
        const image = {
            name: file?.originalname,
            contentType: file?.mimetype,
            data: file?.buffer,
        };
        let updateData = data;
        if (image.name) {
            updateData = { ...updateData, image };
        }
        return this.foodModel.updateOne({ _id: id }, updateData, { new: true });
    }
    getAll() {
        return this.foodModel.find();
    }
    getById(id) {
        return this.foodModel.findById(id);
    }
};
exports.FoodService = FoodService;
exports.FoodService = FoodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(food_schema_1.Food.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FoodService);
//# sourceMappingURL=food.service.js.map