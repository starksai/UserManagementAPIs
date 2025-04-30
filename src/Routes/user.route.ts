import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../Controllers/User.controller";
import { validate } from "../middlewares/validate";
import { createUserSchema, paramsUserScheam } from "../validators/user.validator";



const userRouter = Router()


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
userRouter.post('/createUser', validate(createUserSchema), createUser);

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
userRouter.get('/getUsers', getAllUsers);

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
userRouter.get('/getUser/:id', validate(paramsUserScheam), getUserById);

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
userRouter.delete('/deleteUser/:id', validate(paramsUserScheam), deleteUserById)

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
userRouter.put('/updateUser/:id', validate(createUserSchema), updateUserById)


export default userRouter;