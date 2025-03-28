import connectDB from "@/_config/connect";
import userModel from "@/_models/userModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { userId } = await request.json();
        const data = await userModel.findOne({ _id: userId });
        if (!data) {
            return NextResponse.json({ message: "Unable to get data!", status: 0 });
        }

        const earningPoints = data.earningPoints;
        return NextResponse.json({ message: "Get earning points data.", status: 1, earningPoints: earningPoints });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}