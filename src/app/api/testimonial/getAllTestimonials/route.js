import connectDB from "@/_config/connect";
import testimonialModel from "@/_models/testimonialModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    connectDB();
    try {
        const data = await testimonialModel.find();
        if (!data) {
            return NextResponse.json({ message: "Unable to get testimonial data.", status: 0 });
        }
        return NextResponse.json({ message: "Testimonial get data successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}