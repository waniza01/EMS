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
import { CreateEventDto } from './dtos/create-event.dto';
import { UsersService } from 'src/users/users.service';
export declare class EventService {
    private eventModel;
    private userService;
    constructor(eventModel: Model<Event>, userService: UsersService);
    add(data: CreateEventDto, userId: String): Promise<import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(userID?: String, role?: String): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Event, "find">;
    getById(id: String): import("mongoose").Query<import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Event, "findOne">;
    delete(id: String): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Event, "deleteOne">;
}
