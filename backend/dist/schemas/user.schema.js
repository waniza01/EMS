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
exports.encryptPassword = exports.PasswordMatched = exports.createToken = exports.comparePassword = exports.UserSchema = exports.User = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['male', 'female', 'other'] }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], User.prototype, "mobile", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "confirmPassword", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Manager' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
const comparePassword = async function (candidatePassword, encryptPassword) {
    return await (0, bcrypt_1.compare)(candidatePassword, encryptPassword);
};
exports.comparePassword = comparePassword;
const createToken = (data, key) => {
    return (0, jsonwebtoken_1.sign)(data, key);
};
exports.createToken = createToken;
const PasswordMatched = () => {
    exports.UserSchema.pre('save', function () {
        if (this.password !== this.confirmPassword) {
            throw new common_1.BadRequestException('Passwords are not matched');
        }
        this.confirmPassword = undefined;
    });
};
exports.PasswordMatched = PasswordMatched;
const encryptPassword = (salt) => {
    exports.UserSchema.pre('save', async function () {
        this.password = await (0, bcrypt_1.hash)(this.password, parseInt(salt));
    });
};
exports.encryptPassword = encryptPassword;
//# sourceMappingURL=user.schema.js.map