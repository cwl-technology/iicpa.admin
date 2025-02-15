import connectDB from "@/_config/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import counsellorModel from "@/_models/counsellorModel";

export const POST = async (request) => {
    connectDB();
    try {
        const { email, password } = await request.json();
        if (!password && email) {
            const verifyEmail = await counsellorModel.findOne({ email: email });
            if (!verifyEmail) {
                return NextResponse.json({ message: "Invalid Email", status: 0 })
            }
            return NextResponse.json({ message: "Email verification successfully", status: 1 });
        }

        const isEmail = await counsellorModel.findOne({ email: email });
        if (!isEmail) {
            return NextResponse.json({ message: "Unable to update password", status: 0 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const updatePassword = await counsellorModel.findByIdAndUpdate({ _id: isEmail._id }, { password: hashedPassword });
        if (!updatePassword) {
            return NextResponse.json({ message: "Unable to update password", status: 0 })
        }
        return NextResponse.json({ message: "Password updated successfully", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}