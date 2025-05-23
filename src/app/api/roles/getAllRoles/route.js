import connectDB from "@/_config/connect";
import roleModel from "@/_models/roleModel";
import { NextResponse } from "next/server"

export const GET = async () => {
    connectDB()
    try {
        const data = await roleModel.find({ roleType: 2 });
        if (!data) {
            return res.json({ message: "Unable to get data", status: 0 });
        }

        return NextResponse.json({ message: "Get data successfully", status: 1, data: data });
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}