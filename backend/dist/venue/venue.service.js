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
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const venue_schema_1 = require("../schemas/venue.schema");
let VenueService = class VenueService {
    constructor(venueModel) {
        this.venueModel = venueModel;
    }
    add(data, file) {
        const { name, cost, contact, place } = data;
        const image = {
            name: file.originalname,
            contentType: file.mimetype,
            data: file.buffer,
        };
        return this.venueModel.create({ name, cost, contact, place, image });
    }
    delete(id) {
        return this.venueModel.deleteOne({ _id: id });
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
        return this.venueModel.updateOne({ _id: id }, updateData, { new: true });
    }
    getAll() {
        return this.venueModel.find();
    }
    getById(id) {
        return this.venueModel.findById(id);
    }
};
exports.VenueService = VenueService;
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(venue_schema_1.Venue.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VenueService);
//# sourceMappingURL=venue.service.js.map