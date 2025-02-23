import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database connection success!!")
    } catch (error) {
        console.log("database connection faile !!")
    }
}

export default connectDB;