"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_modle_1 = __importDefault(require("../Models/user.modle"));
const bcrypt_1 = require("../utils/bcrypt");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const existingUser = yield user_modle_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).send("user already existed");
            return;
        }
        let hashedPassword = yield (0, bcrypt_1.hashPassword)(password);
        // console.log(hashedPassword);
        const user = new user_modle_1.default({
            name,
            email,
            password: hashedPassword
        });
        yield user.save();
        res.status(200).json({
            status: "success",
            message: "user created",
            data: user
        });
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.errors
        });
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield user_modle_1.default.find().select('-password').lean().exec();
        res.status(200).json(allUsers);
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: "somthing went wrong",
            error: error.errors
        });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // console.log(typeof id, id);
        const user = yield user_modle_1.default.findById(id).select('-password');
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({
            status: "success",
            user
        });
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message,
            errors: error.errors,
        });
    }
});
exports.getUserById = getUserById;
const deleteUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // console.log(typeof id, id);
        const user = yield user_modle_1.default.findByIdAndDelete(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({
            status: "success",
            message: "user deleted",
            data: user
        });
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message,
            errors: error.errors,
        });
    }
});
exports.deleteUserById = deleteUserById;
const updateUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        // console.log(typeof id, id);
        const user = yield user_modle_1.default.findById(id);
        if (!user) {
            res.status(404).json({
                success: false,
                message: "user not found"
            });
        }
        if (user) {
            user.name = name,
                user.email = email;
            const match = yield (0, bcrypt_1.comparePassword)(password, user.password);
            if (!match) {
                const hashedPassword = yield (0, bcrypt_1.hashPassword)(password);
                user.password = hashedPassword;
            }
            yield user.save();
        }
        res.status(200).json({
            success: true,
            message: "user updated succesfully",
            datd: user
        });
        // res.send(`i need to write update function for this user ${id}`)
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message,
            errors: error.errors,
        });
    }
});
exports.updateUserById = updateUserById;
