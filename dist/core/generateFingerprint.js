"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateFingerprint;
const murmurhash3js_1 = require("murmurhash3js");
const requestIp = require("request-ip");
const ua = require("useragent");
const uniqueParams_1 = require("../helpers/uniqueParams");
/**
 * Generate a fingerprint for the given request and parameters.
 *
 * @param {Request} req - The request object.
 * @param {Parameters[]} params - An array of parameters.
 * @return {object} - An object containing the generated fingerprint.
 */
function generateFingerprint(req, params) {
    params = (0, uniqueParams_1.default)(params);
    if (params.length === 0) {
        params = ["ipAddress"];
    }
    const object = params.reduce((ojb, param) => {
        ojb[param] = paramHandler[param](req);
        return ojb;
    }, {});
    const id = murmurhash3js_1.x64.hash128(JSON.stringify(object));
    return {
        id,
        ...object,
    };
}
const paramHandler = {
    /**
     * Extracts the accept and language headers from the request headers.
     *
     * @param {Request} req - the request object containing headers
     * @return {AcceptHeader} - an object with the accept and language headers
     */
    headers: (req) => {
        const { headers } = req;
        return {
            accept: headers["accept"],
            language: headers["accept-language"],
            encoding: headers["accept-encoding"],
        };
    },
    /**
     * Retrieves the IP address from the request object.
     *
     * @param {Request} req - The HTTP request object.
     * @return {IpAddress} The IP address value.
     */
    ipAddress: (req) => {
        const ip = requestIp.getClientIp(req);
        return {
            value: ip,
        };
    },
    /**
     * Returns the user agent information parsed from the request headers.
     *
     * @param {Request} req - The request object.
     * @return {Object} The user agent information.
     */
    userAgent: (req) => {
        const agent = ua.parse(req.headers["user-agent"]);
        return {
            browser: {
                family: agent.family,
                version: agent.major,
            },
            device: {
                family: agent.device.family,
                version: agent.device.major,
            },
            os: {
                family: agent.os.family,
                major: agent.os.major,
                minor: agent.os.minor,
            },
        };
    },
};
