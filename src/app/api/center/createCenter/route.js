import connectDB from "@/_config/connect";
import uploadImage from "@/_helper/backend/uploadImage";
import centerModel from "@/_models/centerModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
    connectDB();
    try {
        const data = await request.formData();
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const phone = data.get("phone");
        const authorizationLetter = data.get("authorizationLetter");

        if (!name || !email || !phone || !password) {
            return NextResponse.json({ message: "Please fill all the required fields!", status: 0 });
        }

        const isCenterExist = await centerModel.findOne({ email: email, userType: "Center" });
        if (isCenterExist) {
            return NextResponse.json({ message: "Center alreay exist!", status: 0 });
        }

        const authorizationLetterPath = await uploadImage(authorizationLetter);
        const hassedPassword = await bcrypt.hash(password, 10);
        console.log(hassedPassword);
        const newCenter = new centerModel({ name, email, phone, password: hassedPassword, authorizationLetter: authorizationLetterPath, userType: "Center" });
        await newCenter.save();
        return NextResponse.json({ message: "Center created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}