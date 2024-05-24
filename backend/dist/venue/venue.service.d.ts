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
import { Model } from 'mongoose';
import { Venue } from 'src/schemas/venue.schema';
import { UpdateVenueDto } from './dtos/update-venue.dto';
import { CreateVenueDto } from './dtos/create-venue.dto';
export declare class VenueService {
    private venueModel;
    constructor(venueModel: Model<Venue>);
    add(data: CreateVenueDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Venue> & Venue & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Venue> & Venue & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Venue, "deleteOne">;
    update(id: string, data: UpdateVenueDto, file: Express.Multer.File): Promise<import("mongoose").UpdateWriteOpResult>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Venue> & Venue & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Venue> & Venue & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Venue, "find">;
    getById(id: string): Promise<Venue>;
}
