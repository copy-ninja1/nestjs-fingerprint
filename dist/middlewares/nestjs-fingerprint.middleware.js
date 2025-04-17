"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsFingerprintMiddleware = NestjsFingerprintMiddleware;
const common_1 = require("@nestjs/common");
const generateFingerprint_1 = require("../core/generateFingerprint");
const type_1 = require("../type");
function NestjsFingerprintMiddleware(options) {
    let Middleware = class Middleware {
        async use(req, res, next) {
            const { params } = options;
            const { name, httpOnly, domain } = options.cookieOptions || {};
            const fp = (0, generateFingerprint_1.default)(req, params);
            req.fp = fp;
            const cookieName = name || type_1.DEFAULT_COOKIE_NAME;
            const requestCookie = req.cookies[cookieName];
            if (!requestCookie || requestCookie !== fp.id) {
                res.cookie(cookieName, fp.id, {
                    httpOnly,
                    domain,
                });
            }
            next();
        }
    };
    Middleware = __decorate([
        (0, common_1.Injectable)()
    ], Middleware);
    return (0, common_1.mixin)(Middleware);
}
