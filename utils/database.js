import { connect } from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("Db Active");
  }

  try {
    await connect(process.env.MONGO_URI, { dbName: "next-ecommerce" });

    isConnected = true;

    console.log("Db Connected");
  } catch (error) {
    console.log(error);
    throw new Error("Db connection failed", error);
  }
};
