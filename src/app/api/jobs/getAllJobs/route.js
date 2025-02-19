import connectDB from "@/_config/connect";
import jobsModel from "@/_models/jobsModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectDB();
        const data = await jobsModel.find({})
        if (!data) {
            return NextResponse.json({ message: "Unable to get job.", status: 0 });
        }
        return NextResponse.json({ message: "Job data get successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}