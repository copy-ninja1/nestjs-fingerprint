"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fingerprint = void 0;
const common_1 = require("@nestjs/common");
/**
 * Get fingerprint by request
 */
exports.Fingerprint = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx
        .switchToHttp()
        .getRequest();
    return request.fp;
});
