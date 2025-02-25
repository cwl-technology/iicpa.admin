import connectDB from "@/_config/connect";
import deleteImage from "@/_helper/backend/deleteImage";
import subTopicModel from "@/_models/subTopicModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();

        const data = await subTopicModel.findByIdAndDelete({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete!", status: 0 });
        }
        deleteImage(data.subTopicImage)
        deleteImage(data.subTopicVideo)
        return NextResponse.json({ message: "Deleted successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}