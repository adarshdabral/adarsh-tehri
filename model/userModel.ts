import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  phone: string;
  password: string;
  role:
  | "tourist"
  | "homestay_host"
  | "vendor"
  | "organizer";
  isVerified: boolean;
  isAdmin: boolean;
  forgotPasswordToken?: string;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: [true, " Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  phone: {
  type: String,
  required: true,
},
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  role: {
  type: String,
  enum: [
    "tourist",
    "homestay_host",
    "vendor",
    "organizer",
  ],
  default: "tourist",
},
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User: Model<IUser> = (mongoose.models.users as Model<IUser>) || mongoose.model<IUser>("users", userSchema);
export default User;
