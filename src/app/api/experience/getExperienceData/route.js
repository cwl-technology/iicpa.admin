import connectDB from "@/_config/connect";
import experienceModel from "@/_models/experienceModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectDB();
        const data = await experienceModel.find({});
        if (!data) {
            return NextResponse.json({ message: "Unable to get data", status: 0 });
        }
        return NextResponse.json({ message: "Get Data successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}