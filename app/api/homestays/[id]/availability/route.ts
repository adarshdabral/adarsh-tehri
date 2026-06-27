import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Homestay from "@/model/Homestay";

// prefer connecting lazily inside handlers
try {
  void connect();
} catch {}

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
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const reqBody = await request.json();

    const updatedHomestay = await Homestay.findByIdAndUpdate(
      id,
      reqBody,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedHomestay) {
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
      message: "Homestay updated successfully",
      homestay: updatedHomestay,
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
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const deletedHomestay =
      await Homestay.findByIdAndDelete(id);

    if (!deletedHomestay) {
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
      message: "Homestay deleted successfully",
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