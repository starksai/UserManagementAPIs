// // src/swagger.ts


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

import swaggerJSDoc from 'swagger-jsdoc';  // Use the default import (not the * import)

const options: any = {  // Use `any` here for the options type
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

export const swaggerSpec = swaggerJSDoc(options);  // Now this should work


