import connectDB from "@/_config/connect";
import testimonialModel from "@/_models/testimonialModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { name, designation, ratings, content } = await request.json();

        if (!name || !designation || !ratings || !content) {
            return NextResponse.json({ message: "Please provide all the fields", status: 0 });
        }

        const data = new testimonialModel({ name, designation, ratings, content });
        await data.save();
        return NextResponse.json({ message: "Testimonial created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}