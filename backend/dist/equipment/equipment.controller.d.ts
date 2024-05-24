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
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dtos/create-equipment.dto';
import { UpdateEquipmentDto } from './dtos/update-equipment.dto';
export declare class EquipmentController {
    private readonly equipService;
    constructor(equipService: EquipmentService);
    add(body: CreateEquipmentDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../schemas/equipment.schema").Equipment> & import("../schemas/equipment.schema").Equipment & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/equipment.schema").Equipment> & import("../schemas/equipment.schema").Equipment & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/equipment.schema").Equipment> & import("../schemas/equipment.schema").Equipment & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/equipment.schema").Equipment, "find">;
    getById(id: string): Promise<import("../schemas/equipment.schema").Equipment>;
    update(id: string, body: UpdateEquipmentDto, file: Express.Multer.File): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("../schemas/equipment.schema").Equipment> & import("../schemas/equipment.schema").Equipment & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/equipment.schema").Equipment, "deleteOne">;
}
