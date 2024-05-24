"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModule = void 0;
const common_1 = require("@nestjs/common");
const food_controller_1 = require("./food.controller");
const food_service_1 = require("./food.service");
const mongoose_1 = require("@nestjs/mongoose");
const food_schema_1 = require("../schemas/food.schema");
const config_1 = require("@nestjs/config");
let FoodModule = class FoodModule {
};
exports.FoodModule = FoodModule;
exports.FoodModule = FoodModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: food_schema_1.Food.name,
                    useFactory() {
                        return food_schema_1.FoodSchema;
                    },
                    inject: [config_1.ConfigService],
                },
            ]),
        ],
        controllers: [food_controller_1.FoodController],
        providers: [food_service_1.FoodService],
    })
], FoodModule);
//# sourceMappingURL=food.module.js.map