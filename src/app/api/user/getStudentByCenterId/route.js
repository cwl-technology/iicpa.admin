import connectDB from "@/_config/connect";
import userModel from "@/_models/userModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { centerId } = await request.json();
        const data = await userModel.find({ centerId: centerId });
        if (!data) {
            return NextResponse.json({ message: "Unable to get data.", status: 0 });
        }
        return NextResponse.json({ message: "Get data successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}