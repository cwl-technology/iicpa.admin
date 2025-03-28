import connectDB from "@/_config/connect";
import ticketModel from "@/_models/ticketModel";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await ticketModel.findOne({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to get tickets data.", status: 0 });
        }
        return NextResponse.json({ message: "Get ticket data successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server errro!", status: 0 });
    }
}