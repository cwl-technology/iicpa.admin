import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/_config/connect";
import adminModel from "@/_models/adminModel";

export const POST = async (request) => {
    connectDB();
    try {
        const { name, email, password, roleId } = await request.json();
        if (!name || !email || !password || !roleId) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Invalid Email!", status: 0 })
        }
        const isEmailExist = await adminModel.findOne({ email: email });
        if (isEmailExist) {
            return NextResponse.json({ message: "Staff already exist.", status: 0 })
        }

        const hassedPassword = await bcrypt.hash(password, 10);
        const newUser = new adminModel({ name, email, password: hassedPassword, roleId });
        await newUser.save();
        return NextResponse.json({ message: "Staff created successfully.", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}