import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}


async function dbConnect(): Promise<void> {         //use of voide is only for sure data can be of any type

    if (connection.isConnected) {
        console.log("Already Connected to database");       //to avoid database choaking
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState

        console.log("DB connected Successfully");

    } catch (error) {
        console.log("Database connection Failed", error);

        process.exit(1)
    }
}

export default dbConnect;