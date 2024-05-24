"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriliazeInterceptor = exports.Serialize = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const rxjs_1 = require("rxjs");
const Serialize = (dto) => {
    return (0, common_1.UseInterceptors)(new SeriliazeInterceptor(dto));
};
exports.Serialize = Serialize;
class SeriliazeInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(executionContext, callHandler) {
        return callHandler.handle().pipe((0, rxjs_1.map)((data) => {
            return (0, class_transformer_1.plainToClass)(this.dto, data, {
                excludeExtraneousValues: true,
            });
        }));
    }
}
exports.SeriliazeInterceptor = SeriliazeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map