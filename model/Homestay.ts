import mongoose from "mongoose";

const homestaySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide homestay title"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Please provide description"],
    },

    location: {
      type: String,
      required: [true, "Please provide location"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Please provide price"],
      min: [0, "Price cannot be negative"],
    },

    images: [
      {
        type: String,
      },
    ],

    amenities: [
      {
        type: String,
      },
    ],

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    category: {
      type: String,
      enum: ["homestay", "villa", "cottage", "farmhouse", "resort"],
      default: "homestay",
    },

    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Homestay =
  mongoose.models.homestays ||
  mongoose.model("homestays", homestaySchema);

export default Homestay;