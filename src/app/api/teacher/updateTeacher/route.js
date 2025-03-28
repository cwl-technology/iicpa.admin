import centerModel from "@/_models/centerModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/_config/connect";

export const POST = async (request) => {
    connectDB();
    try {
        let { name, email, phone, password, courseId, centerId, id } = await request.json();

        if (!name || !email || !phone || !courseId || !centerId) {
            return NextResponse.json({ message: "Please fill all the fields!", status: 0 });
        }

        const isExist = await centerModel.findOne({ email: email, userType: "Teacher", _id: { $ne: id } });
        if (isExist) {
            return NextResponse.json({ message: "Teacher already exist!", status: 0 });
        }

        if (!password) {
            const currentData = await centerModel.findOne({ _id: id });
            password = currentData?.password;
        } else {
            password = await bcrypt.hash(password, 10);
        }
        const data = await centerModel.findByIdAndUpdate({ _id: id }, { name, email, phone, password, courseId, centerId });
        if (!data) {
            return NextResponse.json({ message: "Unable to update teacher data.", status: 0 });
        }
        return NextResponse.json({ message: "Teacher updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}
