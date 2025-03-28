import connectDB from "@/_config/connect";
import uploadImage from "@/_helper/backend/uploadImage";
import ticketModel from "@/_models/ticketModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const data = await request.formData();
        const userId = data.get("userId")
        const image = data.get("image")
        const userType = data.get("userType")
        const description = data.get("description")
        const title = data.get("title")
        const issueType = data.get("issueType")

        if (!title || !userType || !image) {
            return NextResponse.json({ message: "Please fill all the required fields.", status: 0 });
        }
        const imagePath = await uploadImage(image);



        const newTicket = new ticketModel({ userId, userType, title, description, issueType, image: imagePath });
        await newTicket.save();
        return NextResponse.json({ message: "Ticket raised successfully.", status: 1 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server errro!", status: 0 });
    }
}