import connectDB from "@/_config/connect";
import testimonialModel from "@/_models/testimonialModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { name, designation, ratings, content, id } = await request.json();

        if (!id || !name || !designation || !ratings || !content) {
            return NextResponse.json({ message: "Please provide all the fields", status: 0 });
        }

        const data = await testimonialModel.findByIdAndUpdate({ _id: id }, { name, designation, ratings, content });
        if (!data) {
            return NextResponse.json({ message: "Unable to update testimonial data.", status: 0 });
        }
        return NextResponse.json({ message: "Testimonial updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}