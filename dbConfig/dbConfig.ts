import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export async function connect(): Promise<typeof mongoose> {
  if (connection.isConnected) {
    return mongoose;
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  try {
    const db = await mongoose.connect(mongoUri, {});

    connection.isConnected = db.connection.readyState;

    return mongoose;
  } catch (error) {
    throw error;
  }
}