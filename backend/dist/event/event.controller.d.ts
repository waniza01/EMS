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
import { EventService } from './event.service';
import { CreateEventDto } from './dtos/create-event.dto';
import { MyRequest } from 'src/GlobalTypes/Request';
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    add(body: CreateEventDto, request: MyRequest): Promise<import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(request: MyRequest): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Event, "find">;
    getbyId(id: String): import("mongoose").Query<import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Event, "findOne">;
}
