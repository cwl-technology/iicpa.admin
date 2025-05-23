import userModel from "@/_models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/_config/connect";

export const POST = async (request) => {
    connectDB();
    try {
        const { name, phone, email, password, centerId } = await request.json();
        if (!name || !phone || !email || !password || !centerId) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Invalid Email!", status: 0 })
        }
        const isEmailExist = await userModel.findOne({ email: email });
        if (isEmailExist) {
            return NextResponse.json({ message: "User already exist.", status: 0 })
        }

        const hassedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, phone, email, password: hassedPassword, centerId });
        await newUser.save();
        return NextResponse.json({ message: "User registered successfully.", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}