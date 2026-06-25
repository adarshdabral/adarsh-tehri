import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Booking from "@/model/Booking";
import Homestay from "@/model/Homestay";

try {
  void connect();
} catch {}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    const bookings = await Booking.find({
      userId,
    })
      //.populate("homestayId")
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