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
exports.EventSchema = exports.Event = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const venue_schema_1 = require("./venue.schema");
let Event = class Event {
};
exports.Event = Event;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Event.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Object,
        required: true,
    }),
    __metadata("design:type", venue_schema_1.Venue)
], Event.prototype, "venue", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Event.prototype, "venueType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Event.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 1 }),
    __metadata("design:type", Number)
], Event.prototype, "guests", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Event.prototype, "totalCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            (0, mongoose_1.raw)({
                _id: { type: String },
                name: { type: String },
                cost: { type: Number },
            }),
        ],
        required: true,
    }),
    __metadata("design:type", Object)
], Event.prototype, "foods", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            (0, mongoose_1.raw)({
                _id: { type: String },
                name: { type: String },
                cost: { type: Number },
            }),
        ],
        required: true,
    }),
    __metadata("design:type", Object)
], Event.prototype, "equipments", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: (0, mongoose_1.raw)({
            _id: { type: String },
            name: { type: String },
        }),
        required: true,
    }),
    __metadata("design:type", Object)
], Event.prototype, "user", void 0);
exports.Event = Event = __decorate([
    (0, mongoose_1.Schema)()
], Event);
exports.EventSchema = mongoose_1.SchemaFactory.createForClass(Event);
//# sourceMappingURL=event.schema.js.map