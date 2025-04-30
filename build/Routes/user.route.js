"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../Controllers/User.controller");
const validate_1 = require("../middlewares/validate");
const user_validator_1 = require("../validators/user.validator");
const userRouter = (0, express_1.Router)();
/**
 * @swagger
 * /api/user/createUser:
 *  post:
 *      summary: Creat a new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                          - email
 *                          - password
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          201:
 *              description: User creaded successfully
 */
userRouter.post('/createUser', (0, validate_1.validate)(user_validator_1.createUserSchema), User_controller_1.createUser);
/**
 * @swagger
 * /api/user/getUsers:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
userRouter.get('/getUsers', User_controller_1.getAllUsers);
/**
 * @swagger
 * /api/user/getUser/{id}:
 *      get:
 *          summary: Get user by id
 *          tags: [Users]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                    type: string
 *                description: User ID
 *          responses:
 *              200:
 *                  description: Getting user by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *              400:
 *                  description: User not Found
 *                  content:
 *                      text/plain:
 *                          schema:
 *                              type: string
 */
userRouter.get('/getUser/:id', (0, validate_1.validate)(user_validator_1.paramsUserScheam), User_controller_1.getUserById);
/**
 * @swagger
 * /api/user/deleteUser/{id}:
 *      delete:
 *          summary: Deleting user by id
 *          tags: [Users]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: string
 *                description: User ID
 *          responses:
 *              200:
 *                  description: User deleted successfull
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: string
 */
userRouter.delete('/deleteUser/:id', (0, validate_1.validate)(user_validator_1.paramsUserScheam), User_controller_1.deleteUserById);
/**
 * @swagger
 * /api/user/updateUser/{id}:
 *      put:
 *          summary: Updating user by id
 *          tags: [Users]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                    type: string
 *                description: User ID
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                          - name
 *                          - email
 *                          - password
 *                          properties:
 *                              name:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: User updated successfully
 *              404:
 *                  description: User not found
 *
 */
userRouter.put('/updateUser/:id', (0, validate_1.validate)(user_validator_1.createUserSchema), User_controller_1.updateUserById);
exports.default = userRouter;
