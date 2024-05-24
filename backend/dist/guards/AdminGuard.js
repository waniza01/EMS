"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGuard = void 0;
class AdminGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.role === 'admin';
    }
}
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=AdminGuard.js.map