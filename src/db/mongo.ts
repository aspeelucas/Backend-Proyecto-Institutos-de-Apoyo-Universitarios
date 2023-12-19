import mongoose from "mongoose";

export async function connectDb() {
  try {
    console.log(process.env.MONGO_CONNECTION_STRING);
    
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    throw new Error("Database connection failed");
  }
}

