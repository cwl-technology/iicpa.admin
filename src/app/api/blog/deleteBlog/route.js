import connectDB from "@/_config/connect";
import deleteImage from "@/_helper/backend/deleteImage";
import blogModel from "@/_models/blogModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await blogModel.findByIdAndDelete({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete data!", status: 0 });
        }
        deleteImage(data.blogImage);
        return NextResponse.json({ message: "Blog deleted successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}