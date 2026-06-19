import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Homestay from "@/model/Homestay";

connect();

export async function GET() {
  try {
    const homestays = await Homestay.find({ isActive: true });

    return NextResponse.json({
      success: true,
      count: homestays.length,
      homestays,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}