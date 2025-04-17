import { DynamicModule, MiddlewareConsumer, NestModule } from "@nestjs/common";
import { ModuleConfigs } from "./type";
export declare class NestjsFingerprintModule implements NestModule {
    private static configs;
    /**
     * Initializes the root module of the application.
     *
     * @param configs - The configuration options for the module. Defaults to `defaultModuleConfigs`.
     * @returns A promise that resolves to an object containing the module configuration.
     */
    static forRoot(configs?: ModuleConfigs): Promise<DynamicModule>;
    configure(consumer: MiddlewareConsumer): void;
}
//# sourceMappingURL=nestjs-fingerprint.module.d.ts.map