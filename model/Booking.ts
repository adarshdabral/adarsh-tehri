import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    homestayId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "homestays",
      required: true,
    },

    checkInDate: {
      type: Date,
      required: [true, "Please provide check-in date"],
    },

    checkOutDate: {
      type: Date,
      required: [true, "Please provide check-out date"],
    },

    guests: {
      type: Number,
      default: 1,
      min: 1,
    },

    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.bookings ||
  mongoose.model("bookings", bookingSchema);

export default Booking;