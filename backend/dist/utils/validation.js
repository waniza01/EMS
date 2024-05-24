"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFile = void 0;
const common_1 = require("@nestjs/common");
const isFile = (file) => {
    if (!file) {
        throw new common_1.BadRequestException('Image should not be empty.');
    }
};
exports.isFile = isFile;
//# sourceMappingURL=validation.js.map