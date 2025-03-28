import connectDB from "@/_config/connect";
import deleteImage from "@/_helper/backend/deleteImage";
import teamModel from "@/_models/teamModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await teamModel.findByIdAndDelete({ _id: id })
        if (!data) {
            return NextResponse.json({ message: "Unable to delete member.", status: 0 });
        }
        await deleteImage(data.image);
        return NextResponse.json({ message: "Team member deleted successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}