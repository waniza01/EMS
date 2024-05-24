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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_2 = require("mongoose");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(data) {
        const { name, address, email, password, confirmPassword, gender, mobile } = data;
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new common_1.BadRequestException('Email is already in use');
        }
        return this.userModel.create({
            name,
            address,
            email,
            password,
            confirmPassword,
            gender,
            mobile,
        });
    }
    async login(email, password) {
        if (!email || !password) {
            throw new common_1.NotFoundException('Please Provide Email and Password');
        }
        const user = await this.userModel.findOne({ email }).select('+password');
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid Email and Password');
        }
        if (!(await (0, user_schema_1.comparePassword)(password, user.password))) {
            throw new common_1.UnauthorizedException('Invalid Email and Password');
        }
        const token = (0, user_schema_1.createToken)({ id: user._id, role: user.role }, new config_1.ConfigService().get('SECRET_KEY'));
        user.password = undefined;
        return { user, token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map