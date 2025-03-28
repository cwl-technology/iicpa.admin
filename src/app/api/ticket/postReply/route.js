import connectDB from "@/_config/connect";
import uploadImage from "@/_helper/backend/uploadImage";
import ticketModel from "@/_models/ticketModel";
import ticketReplyModel from "@/_models/ticketReplyModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const data = await request.formData();
        const ticketId = data.get("ticketId")
        const title = data.get("title")
        const image = data.get("image")
        const description = data.get("description")


        if (!title || !ticketId || !image || !description) {
            return NextResponse.json({ message: "Please fill all the required fields.", status: 0 });
        }
        const imagePath = await uploadImage(image);

        const newTicket = new ticketReplyModel({ ticketId, title, description, image: imagePath });
        await newTicket.save();
        await ticketModel.findByIdAndUpdate({ _id: ticketId }, { replyStatus: 1 });
      
        return NextResponse.json({ message: "Replied successfully.", status: 1 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server errro!", status: 0 });
    }
}