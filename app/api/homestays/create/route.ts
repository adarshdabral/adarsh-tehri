import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Homestay from "@/model/Homestay";

try {
  void connect();
} catch {}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const {
      title,
      description,
      location,
      price,
      images,
      amenities,
      category,
      totalRooms,
      availableRooms,
      hostId,
    } = reqBody;

    const homestay = await Homestay.create({
      title,
      description,
      location,
      price,
      images,
      amenities,
      category,
      totalRooms,
      availableRooms,
      hostId,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Homestay created successfully",
        homestay,
      },
      { status: 201 }
    );
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