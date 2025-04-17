"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsFingerprintModule = void 0;
const cookieParser = require("cookie-parser");
const nestjs_fingerprint_middleware_1 = require("./middlewares/nestjs-fingerprint.middleware");
const type_1 = require("./type");
class NestjsFingerprintModule {
    /**
     * Initializes the root module of the application.
     *
     * @param configs - The configuration options for the module. Defaults to `defaultModuleConfigs`.
     * @returns A promise that resolves to an object containing the module configuration.
     */
    static async forRoot(configs = type_1.defaultModuleConfigs) {
        // Set the module configuration
        this.configs = configs;
        // Return the module configuration
        return {
            global: true,
            module: NestjsFingerprintModule,
        };
    }
    configure(consumer) {
        consumer.apply(cookieParser()).forRoutes("*");
        consumer
            .apply((0, nestjs_fingerprint_middleware_1.NestjsFingerprintMiddleware)(NestjsFingerprintModule.configs))
            .forRoutes("*");
    }
}
exports.NestjsFingerprintModule = NestjsFingerprintModule;
