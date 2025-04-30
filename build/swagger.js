"use strict";
// // src/swagger.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
// import swaggerJSDoc from 'swagger-jsdoc';
// const options: swaggerJSDoc.Options = {
//   definition: {
//     openapi: '3.0.0', // OpenAPI version
//     info: {
//       title: 'User Mangement APIS',
//       version: '1.0.0',
//       description: 'API Documentation for My Project',
//     },
//     servers: [
//       {
//         url: 'http://localhost:4000', // Change as needed
//       },
//     ],
//   },
//   apis: ['./src/Routes/*.ts'], // Path to your route files
// };
// export const swaggerSpec = swaggerJSDoc(options);
// src/swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc")); // Use the default import (not the * import)
const options = {
    definition: {
        openapi: '3.0.0', // OpenAPI version
        info: {
            title: 'User Management APIs',
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
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options); // Now this should work
