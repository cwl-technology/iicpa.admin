import connectDB from "@/_config/connect";
import eventModel from "@/_models/eventModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { userId } = await request.json();
        if (!userId) {
            return NextResponse.json({ message: "UserID not available!", status: 0 })
        }
        const allPrivateEvent = await eventModel.find({ userId: userId, broadCastType: "private" });
        const allPublicEvent = await eventModel.find({ broadCastType: "public" })
        const data = allPrivateEvent.concat(allPublicEvent);
        return NextResponse.json({
            message: "Event created successfully!", status: 1,
            data: {
                events: data
            }
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}