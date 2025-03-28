import connectDB from "@/_config/connect";
import blogModel from "@/_models/blogModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await blogModel.findOne({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to get blog data!", status: 0 });
        }
        return NextResponse.json({ message: "Get blog successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}