import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Homestay from "@/model/Homestay";

connect();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const homestay = await Homestay.findById(id);

    if (!homestay) {
      return NextResponse.json(
        {
          success: false,
          message: "Homestay not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      homestay,
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