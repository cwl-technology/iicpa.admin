import connectDB from "@/_config/connect";
import ticketModel from "@/_models/ticketModel";
import { NextResponse } from "next/server";


export const GET = async () => {
    connectDB();
    try {
        const data = await ticketModel.find({ replyStatus: 0 }).sort({ _id: -1 });
        if (!data) {
            return NextResponse.json({ message: "Unable to get tickets data.", status: 0 });
        }
        return NextResponse.json({ message: "Get ticket data successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server errro!", status: 0 });
    }
}