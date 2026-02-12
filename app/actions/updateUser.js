"use server"

import { connectDb } from "../../lib/connectDB"
import User from "../../models/User"

export async function updateUser(id,data) {
    try {
        await connectDb();
        await User.findByIdAndUpdate(id,data,{new:true}); 
        return { success: true };
    } catch (error) {
    return { success: false };
    }

}