"use server";

import { connectDb } from "../../lib/connectDB";
import User from "../../models/User";

export async function getUserById(id) {
    try {
        await connectDb();
        const user = await User.findById(id);

        return { success: true, user }
    } catch (error) {
        return { success: false }
    }

}
