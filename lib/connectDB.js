import mongoose from "mongoose"

const MONGODB_URI = process.env.DATABASE_URL

export const connectDb = async () => {
    try {
        const dbConnection = await mongoose.connect(MONGODB_URI)
        console.log("db connted successfully at", dbConnection.connection.host)
    } catch (error) {
  console.log("something went wrong while making connteion on ", error.message)
    }

}