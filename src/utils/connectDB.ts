import mongoose from 'mongoose'



async function connectDB() {

    const DBUrl = process.env.MONGO_URL
    await mongoose.connect(DBUrl as string)
    // console.log("DB is connected...");

}

export default connectDB;