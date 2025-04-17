"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealIp = void 0;
const common_1 = require("@nestjs/common");
exports.RealIp = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx
        .switchToHttp()
        .getRequest();
    return request.fp.ipAddress.value;
});
