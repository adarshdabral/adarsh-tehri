import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connect } from "@/dbConfig/dbConfig";
import Booking from "@/model/Booking";
import Homestay from "@/model/Homestay";
import User from "@/model/userModel";

try {
  void connect();
} catch {}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ bookingId: string }> }
) {
  const session = await mongoose.startSession();

  try {
    const { bookingId } = await params;

    const { userId, cancelReason } = await request.json();

    // -----------------------------
    // Required Fields Validation
    // -----------------------------

    if (!userId || !cancelReason) {
      return NextResponse.json(
        {
          success: false,
          message: "userId and cancelReason are required",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // ObjectId Validation
    // -----------------------------

    if (
      !mongoose.Types.ObjectId.isValid(bookingId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid bookingId or userId",
        },
        { status: 400 }
      );
    }

    if (cancelReason.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Cancellation reason cannot be empty",
        },
        { status: 400 }
      );
    }

    if (cancelReason.length > 300) {
      return NextResponse.json(
        {
          success: false,
          message: "Cancellation reason is too long",
        },
        { status: 400 }
      );
    }

    session.startTransaction();

    // -----------------------------
    // Find Booking
    // -----------------------------

    const booking = await Booking.findById(bookingId).session(session);

    if (!booking) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message: "Booking not found",
        },
        { status: 404 }
      );
    }

    // -----------------------------
    // Booking Status Checks
    // -----------------------------

    if (booking.bookingStatus === "cancelled") {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message: "Booking already cancelled",
        },
        { status: 400 }
      );
    }

    if (booking.bookingStatus === "completed") {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message: "Completed bookings cannot be cancelled",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Find User
    // -----------------------------

    const user = await User.findById(userId).session(session);

    if (!user) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    // -----------------------------
    // Find Homestay
    // -----------------------------

    const homestay = await Homestay.findById(
      booking.homestayId
    ).session(session);

    if (!homestay) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message: "Homestay not found",
        },
        { status: 404 }
      );
    }

    // -----------------------------
    // Authorization
    // -----------------------------

    const touristOwnsBooking =
      user.role === "tourist" &&
      booking.userId.toString() === user._id.toString();

    const hostOwnsHomestay =
      user.role === "homestay_host" &&
      homestay.hostId &&
      homestay.hostId.toString() === user._id.toString();

    if (!touristOwnsBooking && !hostOwnsHomestay) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message: "You are not authorized to cancel this booking",
        },
        { status: 403 }
      );
    }

    // -----------------------------
    // Restore Rooms
    // -----------------------------

    homestay.availableRooms = Math.min(
      homestay.availableRooms + booking.roomsBooked,
      homestay.totalRooms
    );

    await homestay.save({ session });

    // -----------------------------
    // Update Booking
    // -----------------------------

    booking.bookingStatus = "cancelled";
    booking.cancelledAt = new Date();
    booking.cancelReason = cancelReason.trim();
    booking.cancelledBy = user._id;

    await booking.save({ session });

    await session.commitTransaction();

    return NextResponse.json(
      {
        success: true,
        message: "Booking cancelled successfully",
        booking,
      },
      { status: 200 }
    );
  } catch (error) {
    await session.abortTransaction();

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  } finally {
    session.endSession();
  }
}