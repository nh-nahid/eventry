import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined!");
  }

  const conn = await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("Connected DB:", mongoose.connection.name);

  return conn;
}
