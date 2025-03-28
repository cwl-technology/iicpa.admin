import connectDB from "@/_config/connect";
import updateImage from "@/_helper/backend/updateImage";
import liveSessionModel from "@/_models/liveSessions";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const incomingData = await request.formData();

        const courseId = incomingData.get("courseId");
        const date = incomingData.get("date");
        const startTime = incomingData.get("startTime");
        const endTime = incomingData.get("endTime");
        const description = incomingData.get("description");
        const price = incomingData.get("price");
        const link = incomingData.get("link");
        const id = incomingData.get("id");

        const currentData = await liveSessionModel.findOne({ _id: id });
        const image = incomingData.get("image") == "undefined" ? currentData?.image : incomingData.get("image")

        const imagePath = await updateImage(image, currentData?.image);
        if (!courseId || !date || !startTime || !endTime || !imagePath || !price) {
            return NextResponse.json({ message: "Please fill all the fields", status: 0 });
        }
        const data = await liveSessionModel.findByIdAndUpdate({ _id: id }, { courseId, date, startTime, endTime, description, image: imagePath, price, link });
        if (!data) {
            return NextResponse.json({ message: "Unable to update data", status: 0 });
        }
        return NextResponse.json({ message: "Session updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error.", status: 0 });
    }
}