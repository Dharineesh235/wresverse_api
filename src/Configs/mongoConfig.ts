import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectMongoDB=()=>{
    const URL = process.env.MONGO_URL!
    console.log(URL);
    mongoose.connect(URL).then(()=>`MongoDB connected`).catch((e)=>console.log(e));
}