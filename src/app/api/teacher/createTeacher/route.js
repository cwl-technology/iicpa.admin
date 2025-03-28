import centerModel from "@/_models/centerModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/_config/connect";

export const POST = async (request) => {
    connectDB();
    try {
        const { name, email, phone, password, courseId, centerId } = await request.json();

        if (!name || !email || !phone || !password || !courseId || !centerId) {
            return NextResponse.json({ message: "Please fill all the fields!", status: 0 });
        }

        const isExist = await centerModel.findOne({ email: email, userType: "Teacher" });
        if (isExist) {
            return NextResponse.json({ message: "Teacher already exist!", status: 0 });
        }

        const hassedPassword = await bcrypt.hash(password, 10);
        const data = new centerModel({ name, email, phone, password: hassedPassword, courseId, centerId, userType: "Teacher" });
        await data.save();
        return NextResponse.json({ message: "Teacher created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}
