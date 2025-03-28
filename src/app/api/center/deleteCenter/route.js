import connectDB from "@/_config/connect";
import deleteImage from "@/_helper/backend/deleteImage";
import centerModel from "@/_models/centerModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await centerModel.findByIdAndDelete({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete center", status: 0 });
        }
        deleteImage(data.authorizationLetter);
        return NextResponse.json({ message: "Center deleted successfully", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}