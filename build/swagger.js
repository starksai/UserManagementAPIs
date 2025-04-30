"use strict";
// src/swagger.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0', // OpenAPI version
        info: {
            title: 'User Mangement APIS',
            version: '1.0.0',
            description: 'API Documentation for My Project',
        },
        servers: [
            {
                url: 'http://localhost:4000', // Change as needed
            },
        ],
    },
    apis: ['./src/Routes/*.ts'], // Path to your route files
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
