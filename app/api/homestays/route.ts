import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Homestay from "@/model/Homestay";

// prefer connecting lazily inside handlers
try {
  void connect();
} catch {}

export async function GET() {
  try {
    const homestays = await Homestay.find({ isActive: true });

    return NextResponse.json({
      success: true,
      count: homestays.length,
      homestays,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        success: false,
        error: msg,
      },
      { status: 500 }
    );
  }
}