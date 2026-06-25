import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connect } from "@/dbConfig/dbConfig";
import Booking from "@/model/Booking";
import Homestay from "@/model/Homestay";
import User from "@/model/userModel";

try {
  void connect();
} catch {}

export async function POST(request: NextRequest) {
  const session = await mongoose.startSession();

  try {
    const reqBody = await request.json();

    const {
      userId,
      homestayId,
      checkInDate,
      checkOutDate,
      guests,
      roomsBooked,
    } = reqBody;

      
    // Required Fields Validation
      

    if (
      !userId ||
      !homestayId ||
      !checkInDate ||
      !checkOutDate
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

      
    // ObjectId Validation
      

    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(homestayId)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid userId or homestayId",
        },
        { status: 400 }
      );
    }

      
    // Number Validation
      

    const guestCount = Number(guests);
    const roomCount = Number(roomsBooked);

    if (
      Number.isNaN(guestCount) ||
      guestCount < 1
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Guests must be at least 1",
        },
        { status: 400 }
      );
    }

    if (
      Number.isNaN(roomCount) ||
      roomCount < 1
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Rooms booked must be at least 1",
        },
        { status: 400 }
      );
    }

      
    // Date Validation
      

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (
      isNaN(checkIn.getTime()) ||
      isNaN(checkOut.getTime())
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid date format",
        },
        { status: 400 }
      );
    }

    const today = new Date();

    const todayOnly = new Date(today);
    todayOnly.setHours(0, 0, 0, 0);

    const checkInOnly = new Date(checkIn);
    checkInOnly.setHours(0, 0, 0, 0);

    const checkOutOnly = new Date(checkOut);
    checkOutOnly.setHours(0, 0, 0, 0);

    if (checkInOnly < todayOnly) {
      return NextResponse.json(
        {
          success: false,
          message: "Check-in date cannot be in the past",
        },
        { status: 400 }
      );
    }

    if (checkInOnly >= checkOutOnly) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Check-out date must be after check-in date",
        },
        { status: 400 }
      );
    }

      
    // Start Transaction
      

    session.startTransaction();

      
    // Find Homestay
      

    const homestay = await Homestay.findById(
      homestayId
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

      
    // Active Check
      

    if (!homestay.isActive) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message: "Homestay is not available",
        },
        { status: 400 }
      );
    }

      
    // Total Capacity Check
      

    if (
      roomCount > homestay.totalRooms
    ) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message:
            "Rooms requested exceed homestay capacity",
        },
        { status: 400 }
      );
    }

      
    // Available Rooms Check
      

    if (
      homestay.availableRooms < roomCount
    ) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message:
            "Not enough rooms available",
        },
        { status: 400 }
      );
    }

      
    // User Check
      

    const user = await User.findById(
      userId
    ).session(session);

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

      
    // Tourist Only Booking
      

    if (user.role !== "tourist") {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message:
            "Only tourists can create bookings",
        },
        { status: 403 }
      );
    }

      
    // Guest Capacity Validation
      

    if (
      guestCount >
      roomCount * 4
    ) {
      await session.abortTransaction();

      return NextResponse.json(
        {
          success: false,
          message:
            "Too many guests for selected rooms",
        },
        { status: 400 }
      );
    }

      
    // Price Calculation
      

    const numberOfNights =
      Math.ceil(
        (
          checkOut.getTime() -
          checkIn.getTime()
        ) /
          (1000 * 60 * 60 * 24)
      );

    const totalPrice =
      homestay.price *
      roomCount *
      numberOfNights;

    // Create Booking


    const booking =
      await Booking.create(
        [
          {
            userId,
            homestayId,
            checkInDate: checkIn,
            checkOutDate: checkOut,
            guests: guestCount,
            roomsBooked: roomCount,
            totalPrice,
            bookingStatus: "confirmed",
          },
        ],
        {
          session,
        }
      );

    
    // Update Rooms
    homestay.availableRooms -= roomCount;

    await homestay.save({
      session,
    });

    // Commit Transaction

    await session.commitTransaction();

    return NextResponse.json(
      {
        success: true,
        message:
          "Booking created successfully",
        booking: booking[0],
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    await session.abortTransaction();

    const msg =
      error instanceof Error
        ? error.message
        : String(error);

    return NextResponse.json(
      {
        success: false,
        error: msg,
      },
      {
        status: 500,
      }
    );
  } finally {
    session.endSession();
  }
}