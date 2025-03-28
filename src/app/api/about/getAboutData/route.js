import connectDB from "@/_config/connect";
import aboutModel from "@/_models/aboutModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    connectDB();
    try {
        const data = await aboutModel.findOne();
        if (!data) {
            return NextResponse.json({ message: "Unable to get data!", status: 0 });
        }
        return NextResponse.json({ message: "Get data successfully!", data: data, status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}