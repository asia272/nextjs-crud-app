"use server";

import { connectDb } from "../../lib/connectDB";
import User from "../../models/User";

export async function getUsers() {
    await connectDb();
    const users = await User.find(); // Fetch all users
    return users;
}
