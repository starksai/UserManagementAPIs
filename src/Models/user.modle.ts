import mongoose from "mongoose";
import { userType } from "../types/user.types";


const userSchema = new mongoose.Schema<userType>({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        require: true,
        trim: true

    }
}, {
    timestamps: true
})

const User = mongoose.model<userType>("user", userSchema, "users")

export default User;