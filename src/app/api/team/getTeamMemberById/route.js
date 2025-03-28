import connectDB from "@/_config/connect";
import teamModel from "@/_models/teamModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await teamModel.findOne({ _id: id })
        if (!data) {
            return NextResponse.json({ message: "Unable to get member.", status: 0 });
        }
        return NextResponse.json({ message: "Team member get successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}