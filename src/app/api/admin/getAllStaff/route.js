import connectDB from "@/_config/connect";
import adminModel from "@/_models/adminModel";
import { NextResponse } from "next/server"

export const GET = async () => {
    connectDB();
    try {
        const data = await adminModel.find({roleType:2}).select("-password");
        if (!data) {
            return res.json({ message: "Unable to get data", status: 0 });
        }

        return NextResponse.json({ message: "Get data successfully", status: 1, data: data });
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}