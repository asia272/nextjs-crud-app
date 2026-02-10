"use server";

import { connectDb } from "../../lib/connectDB";
import User from "../../models/User";

export async function getUserById(id) {
    await connectDb();
    const user = await User.findById(id); 
    return user;
}
