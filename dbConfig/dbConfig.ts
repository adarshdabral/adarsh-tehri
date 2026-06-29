import mongoose, { Mongoose } from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConn: Mongoose | undefined;
  // eslint-disable-next-line no-var
  var _mongoosePromise: Promise<Mongoose> | undefined;
}

export async function connect(): Promise<Mongoose> {
  if (global._mongooseConn) {
    return global._mongooseConn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  if (!global._mongoosePromise) {
    global._mongoosePromise = mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }

  global._mongooseConn = await global._mongoosePromise;
  return global._mongooseConn;
}