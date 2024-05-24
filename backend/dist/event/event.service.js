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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
let EventService = class EventService {
    constructor(eventModel, userService) {
        this.eventModel = eventModel;
        this.userService = userService;
    }
    async add(data, userId) {
        const previousEvent = await this.eventModel.findOne({
            date: data.date,
            'venue._id': data.venue._id,
        });
        if (previousEvent) {
            throw new common_1.BadRequestException('Venue is already booked at this date');
        }
        const user = await this.userService.getById(userId);
        data.user = user;
        return this.eventModel.create(data);
    }
    getAll(userID, role) {
        console.log(userID, '\n', role);
        let filterObject = {};
        if (role !== 'admin') {
            filterObject = { 'user._id': userID };
        }
        return this.eventModel.find(filterObject);
    }
    getById(id) {
        return this.eventModel.findById(id);
    }
    delete(id) {
        return this.eventModel.deleteOne({ _id: id });
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], EventService);
//# sourceMappingURL=event.service.js.map