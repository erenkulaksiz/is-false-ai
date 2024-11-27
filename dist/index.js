"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeOpenAI = initializeOpenAI;
exports.isFalseAI = isFalseAI;
const is_true_ai_1 = require("is-true-ai");
function initializeOpenAI(options) {
    (0, is_true_ai_1.initializeOpenAI)(options);
}
async function isFalseAI(value) {
    const result = await (0, is_true_ai_1.isTrueAI)(value);
    return !result;
}
