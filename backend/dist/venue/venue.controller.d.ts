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
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dtos/create-venue.dto';
import { UpdateVenueDto } from './dtos/update-venue.dto';
export declare class VenueController {
    private readonly vs;
    constructor(vs: VenueService);
    add(body: CreateVenueDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../schemas/venue.schema").Venue> & import("../schemas/venue.schema").Venue & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/venue.schema").Venue> & import("../schemas/venue.schema").Venue & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/venue.schema").Venue> & import("../schemas/venue.schema").Venue & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/venue.schema").Venue, "find">;
    getById(id: string): Promise<import("../schemas/venue.schema").Venue>;
    update(id: string, body: UpdateVenueDto, file: Express.Multer.File): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("../schemas/venue.schema").Venue> & import("../schemas/venue.schema").Venue & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/venue.schema").Venue, "deleteOne">;
}
