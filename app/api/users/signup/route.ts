import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        await connect();

        const reqBody = await request.json();
        const { username, email, password, phone } = reqBody;

        // validation
        if (!username || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const normalizedEmail = email.toLowerCase();

        // check existing user
        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // create user
        const newUser = new User({
            username,
            email: normalizedEmail,
            phone,
            password: hashedPassword,
            role: "user", // secure default
        });

        const savedUser = await newUser.save();

        return NextResponse.json(
            {
                message: "User created successfully",
                success: true,
                user: {
                    id: savedUser._id,
                    username: savedUser.username,
                    email: savedUser.email,
                    role: savedUser.role,
                },
            },
            { status: 201 }
        );

    } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}