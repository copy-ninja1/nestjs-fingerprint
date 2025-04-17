import { Request } from "express";
import { IFingerprint, Parameters } from "src/type";
/**
 * Generate a fingerprint for the given request and parameters.
 *
 * @param {Request} req - The request object.
 * @param {Parameters[]} params - An array of parameters.
 * @return {object} - An object containing the generated fingerprint.
 */
export default function generateFingerprint(req: Request, params: Parameters[]): IFingerprint;
//# sourceMappingURL=generateFingerprint.d.ts.map