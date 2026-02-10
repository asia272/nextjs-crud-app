"use server"

import { connectDb } from "../../lib/connectDB"
import User from "../../models/User"

export async function deleteUser(id) {
    await connectDb();
     await User.findByIdAndDelete(id); // delete user

}