"use server";

import { connectDb } from "../../lib/connectDB";
import User from "../../models/User";

export async function getUsers() {
    try {
        await connectDb();
        const users = await User.find(); // Fetch all users
        return  {success:true, users};
    } catch (error) {
        return {message:"something wrong"}
    }

}
