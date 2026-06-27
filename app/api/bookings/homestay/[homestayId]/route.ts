import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Booking from "@/model/Booking";
import User from "@/model/userModel";

try {
  void connect();
} catch {}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ homestayId: string }> }
) {
  try {
    const { homestayId } = await params;

    const bookings = await Booking.find({
      homestayId,
    })
      //.populate("userId")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    const msg =
      error instanceof Error
        ? error.message
        : String(error);

    return NextResponse.json(
      {
        success: false,
        error: msg,
      },
      { status: 500 }
    );
  }
}