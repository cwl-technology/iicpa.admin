import connectDB from "@/_config/connect";
import testimonialModel from "@/_models/testimonialModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();

        const data = await testimonialModel.findByIdAndDelete({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete testimonial data.", status: 0 });
        }
        return NextResponse.json({ message: "Testimonial deleted successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}