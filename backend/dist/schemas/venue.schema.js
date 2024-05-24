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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueSchema = exports.Venue = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Venue = class Venue {
};
exports.Venue = Venue;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Venue.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Venue.prototype, "place", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Venue.prototype, "cost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Venue.prototype, "contact", void 0);
__decorate([
    (0, mongoose_1.Prop)((0, mongoose_1.raw)({ name: String, data: Buffer, contentType: String })),
    __metadata("design:type", Object)
], Venue.prototype, "image", void 0);
exports.Venue = Venue = __decorate([
    (0, mongoose_1.Schema)()
], Venue);
exports.VenueSchema = mongoose_1.SchemaFactory.createForClass(Venue);
//# sourceMappingURL=venue.schema.js.map