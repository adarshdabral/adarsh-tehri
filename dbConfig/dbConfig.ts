import mongoose, { Mongoose } from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConn: Mongoose | undefined;

  // eslint-disable-next-line no-var
  var _mongoosePromise: Promise<Mongoose> | undefined;
}

export async function connect(): Promise<Mongoose> {
  // Use cached connection if available
  if (global._mongooseConn) {
    console.log("✅ Using cached MongoDB connection");
    return global._mongooseConn;
  }

  // Check if MONGODB_URI exists
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  try {
    console.log("🔄 Connecting to MongoDB...");
    console.log("URI exists:", !!process.env.MONGODB_URI);

    // Create connection promise only once
    if (!global._mongoosePromise) {
      global._mongoosePromise = mongoose.connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      });
    }

    // Wait for connection
    global._mongooseConn = await global._mongoosePromise;

    console.log("✅ Connected to MongoDB!");
    console.log("📍 Host:", global._mongooseConn.connection.host);
    console.log("📂 Database:", global._mongooseConn.connection.name);

    return global._mongooseConn;
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error);
    throw error;
  }
}