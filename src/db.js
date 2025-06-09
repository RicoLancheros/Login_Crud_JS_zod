import mongoose from "mongoose";


export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mernLogin")
        console.log(">>DB CONECT<<")
    } catch (error) {
        console.log(error)
    }
}