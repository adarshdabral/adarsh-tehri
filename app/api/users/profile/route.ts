import User from "@/model/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromTokens";

connect();

export async function GET(request: NextRequest) {

    const token = request.cookies.get("token")?.value || "";

const userId = getDataFromToken(token);

const user = await User.findById(userId).select("-password");

return NextResponse.json({
    success: true,
    user,
});
}