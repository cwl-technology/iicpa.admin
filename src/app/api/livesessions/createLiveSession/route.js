import connectDB from "@/_config/connect";
import uploadImage from "@/_helper/backend/uploadImage";
import liveSessionModel from "@/_models/liveSessions";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const incomingData = await request.formData();

        const courseId = incomingData.get("courseId");
        const date = incomingData.get("date");
        const image = incomingData.get("image");
        const startTime = incomingData.get("startTime");
        const endTime = incomingData.get("endTime");
        const price = incomingData.get("price");
        const link = incomingData.get("link");
        const description = incomingData.get("description");

        const imagePath = await uploadImage(image);

        if (!courseId || !date || !startTime || !endTime || !imagePath || !price) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 });
        }
        const data = new liveSessionModel({ courseId, date, startTime, endTime, description, image: imagePath, link, price });
        await data.save();
        return NextResponse.json({ message: "Session created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error.", status: 0 });
    }
}