import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";



export async function POST(request: NextRequest){
    try{
        await connect();
        const reqBody = await request.json();
        const { username, email, password, role } = reqBody;
        const user = await User.findOne({ email });
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
        (password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role,
        });

                const savedUser = await newUser.save();

                return NextResponse.json({
                    message: "User created successfully",
                    success: true,
                    user: {
                        id: savedUser._id,
                        username: savedUser.username,
                        email: savedUser.email,
                        role: savedUser.role,
                    },
                });

    } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}