import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/_config/connect";
import adminModel from "@/_models/adminModel";

export const POST = async (request) => {
    connectDB();
    try {
        let { name, email,password, id, roleId } = await request.json();
        if (!name || !email || !roleId) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Invalid Email!", status: 0 })
        }
        const isEmailExist = await adminModel.findOne({ email: email, _id: { $ne: id } });
        if (isEmailExist) {
            return NextResponse.json({ message: "Staff already exist.", status: 0 })
        }

        if (!password) {
            const currentData = await adminModel.findOne({ _id: id });
            password = currentData?.password;
        } else {
            password = await bcrypt.hash(password, 10);
        }
        const data = await adminModel.findByIdAndUpdate({ _id: id }, { name, email, password, roleId });
        if (!data) {
            return NextResponse.json({ message: "Unable to update Staff.", status: 0 })
        }
        return NextResponse.json({ message: "Staff Updated successfully.", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}