import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "activity",
    },

    image: {
      type: String,
      default: "",
    },

    village: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      default: "",
    },

    groupSize: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    difficulty: {
      type: String,
      default: "Easy",
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

const Activity =
  mongoose.models.activities ||
  mongoose.model("activities", activitySchema);

export default Activity;