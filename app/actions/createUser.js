"use server";

import { connectDb } from "../../lib/connectDB";
import User from "../../models/User";

export async function createUser(data) {
  try {
    await connectDb();
    await User.create(data);
    return { success: true , message:"User create successfully"};
  } catch (error) {

    if (error.code === 11000) {
      return {
        success: false,
        message: "Email already exists. Please use another email.",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
