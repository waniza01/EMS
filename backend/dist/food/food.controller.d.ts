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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { FoodService } from './food.service';
import { CreateFoodDto } from './dtos/create-food.dto';
import { UpdateFoodDto } from './dtos/update-food.dto';
export declare class FoodController {
    private readonly fs;
    constructor(fs: FoodService);
    add(body: CreateFoodDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../schemas/food.schema").Food> & import("../schemas/food.schema").Food & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/food.schema").Food> & import("../schemas/food.schema").Food & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/food.schema").Food> & import("../schemas/food.schema").Food & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/food.schema").Food, "find">;
    getById(id: string): Promise<import("../schemas/food.schema").Food>;
    update(id: string, body: UpdateFoodDto, file: Express.Multer.File): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("../schemas/food.schema").Food> & import("../schemas/food.schema").Food & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/food.schema").Food, "deleteOne">;
}
