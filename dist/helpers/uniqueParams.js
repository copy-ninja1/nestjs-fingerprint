"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = uniqueParams;
/**
 * Returns an array of unique parameters by removing duplicate elements.
 *
 * @param {Parameters[]} params - The array of parameters to be made unique.
 * @return {Array} - An array of unique parameters.
 */
function uniqueParams(params) {
    return Array.from(new Set(params));
}
