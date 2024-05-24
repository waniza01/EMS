/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateFoodDto } from './dtos/create-food.dto';
import { Food } from 'src/schemas/food.schema';
import { Model } from 'mongoose';
import { UpdateFoodDto } from './dtos/update-food.dto';
export declare class FoodService {
    private foodModel;
    constructor(foodModel: Model<Food>);
    add(data: CreateFoodDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Food> & Food & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Food> & Food & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Food, "deleteOne">;
    update(id: string, data: UpdateFoodDto, file: Express.Multer.File): Promise<import("mongoose").UpdateWriteOpResult>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Food> & Food & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Food> & Food & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Food, "find">;
    getById(id: string): Promise<Food>;
}
