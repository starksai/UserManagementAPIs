"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsUserScheam = exports.createUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createUserSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().min(2, "name is required and more that 2 chars"),
        email: zod_1.default.string().email("email required"),
        password: zod_1.default.string().min(6, "more than 5 chars required")
    })
});
exports.paramsUserScheam = zod_1.default.object({
    params: zod_1.default.object({
        id: zod_1.default.string()
    })
});
