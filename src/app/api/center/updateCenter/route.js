import connectDB from "@/_config/connect";
import updateImage from "@/_helper/backend/updateImage";
import centerModel from "@/_models/centerModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const data = await request.formData();
        const id = data.get("id");
        const name = data.get("name");
        const email = data.get("email");
        let password = data.get("password");
        const phone = data.get("phone");

        const currentCenter = await centerModel.findOne({ _id: id });
        console.log(data.get("authorizationLetter"));
        const authorizationLetter = data.get("authorizationLetter") == "undefined" ? currentCenter?.authorizationLetter : data.get("authorizationLetter");

        if (!name || !email || !phone) {
            return NextResponse.json({ message: "Please fill all the required fields!", status: 0 });
        }

        const isCenterExist = await centerModel.findOne({ email: email, userType: "Center", _id: { $ne: id } });
        if (isCenterExist) {
            return NextResponse.json({ message: "Center alreay exist!", status: 0 });
        }

        const authorizationLetterPath = await updateImage(authorizationLetter, currentCenter?.authorizationLetter);


        if (!password) {
            password = currentCenter?.password;
        } else {
            password = await bcrypt.hash(password, 10);
        }
        const center = await centerModel.findByIdAndUpdate({ _id: id }, { name, email, phone, password, authorizationLetter: authorizationLetterPath, userType: "Center" });
        if (!center) {
            return NextResponse.json({ message: "Unable to update center successfully!", status: 1 });
        }
        return NextResponse.json({ message: "Center updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}