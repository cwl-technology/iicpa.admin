import connectDB from "@/_config/connect";
import eventModel from "@/_models/eventModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { userId, eventTitle, eventLink, startDate, endDate, startTime, broadCastType, eventDescription } = await request.json();

        if (!userId || !eventTitle || !eventLink || !startDate || !endDate) {
            return NextResponse.json({ message: "Please fill all the fields!", status: 0 });
        }
        
        const data = new eventModel({ userId, eventTitle, eventLink, startDate, endDate, startTime, broadCastType, eventDescription });
        await data.save();
        return NextResponse.json({ message: "Event created successfully!", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}