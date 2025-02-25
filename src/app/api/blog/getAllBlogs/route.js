import connectDB from "@/_config/connect";
import blogModel from "@/_models/blogModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectDB();
        const data = await blogModel.find({});
        if (!data) {
            return NextResponse.json({ message: "Unable to get data.", status: 0 })
        }
        return NextResponse.json({ message: "Get data successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error.", status: 0 });
    }
}