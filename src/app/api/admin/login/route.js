import connectDB from "@/_config/connect";
import adminModel from "@/_models/adminModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    connectDB();
    try {
        const { email, password } = await request.json();
        if (!email || !password) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 });
        }

        const isExist = await adminModel.findOne({ email });
        console.log(isExist);
        if (!isExist) {
            return NextResponse.json({ message: "Invalid credentials!", status: 0 });
        }
        const comparePassword = await bcrypt.compare(password, isExist.password);
        if (!comparePassword) {
            return NextResponse.json({ message: "Invalid credentials!", status: 0 })
        }

        return NextResponse.json({
            message: "Logged in successfully", status: 1, data: {
                id: isExist._id,
                name: isExist.name,
                role: isExist.role,
                roleId:isExist.roleId
            }
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}