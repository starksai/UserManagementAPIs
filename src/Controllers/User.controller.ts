import { Response, Request, NextFunction } from 'express'
import User from '../Models/user.modle'
import { comparePassword, hashPassword } from '../utils/bcrypt'




export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            res.status(400).send("user already existed");
            return;
        }

        let hashedPassword = await hashPassword(password)

        // console.log(hashedPassword);

        const user = new User({
            name,
            email,
            password: hashedPassword
        })

        await user.save()

        res.status(200).json({
            status: "success",
            message: "user created",
            data: user
        })

    } catch (error: any) {
        res.status(400).json({
            status: "failed",
            error: error.errors

        })

    }

}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const allUsers = await User.find().select('-password').lean().exec();

        res.status(200).json(allUsers)

    } catch (error: any) {

        res.status(400).json({
            status: "failed",
            message: "somthing went wrong",
            error: error.errors
        })

    }



}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        // console.log(typeof id, id);

        const user = await User.findById(id).select('-password')

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return
        }

        res.status(200).json({
            status: "success",
            user
        })

    } catch (error: any) {

        res.status(400).json({
            status: "failed",
            message: error.message,
            errors: error.errors,
        })

    }

}

export const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        // console.log(typeof id, id);

        const user = await User.findByIdAndDelete(id)

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return
        }

        res.status(200).json({
            status: "success",
            message: "user deleted",
            data: user
        })

    } catch (error: any) {

        res.status(400).json({
            status: "failed",
            message: error.message,
            errors: error.errors,
        })

    }

}

export const updateUserById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        // console.log(typeof id, id);

        const user = await User.findById(id)

        if (!user) {
            res.status(404).json({
                success:false,
                message: "user not found"
            });
        }

        if (user) {
            user.name = name,
                user.email = email

            const match = await comparePassword(password, user.password)

            if (!match) {
                const hashedPassword = await hashPassword(password);
                user.password = hashedPassword;

            }
            await user.save()
        }


        res.status(200).json({
            success : true,
            message : "user updated succesfully",
            datd : user
        })






        // res.send(`i need to write update function for this user ${id}`)

    } catch (error: any) {

        res.status(400).json({
            status: "failed",
            message: error.message,
            errors: error.errors,
        })

    }

}

