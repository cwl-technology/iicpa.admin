import connectDB from "@/_config/connect";
import uploadImage from "@/_helper/backend/uploadImage";
import teamModel from "@/_models/teamModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const data = await request.formData();
        const name = data.get("name")
        const designation = data.get("designation")
        const image = data.get("image")
        const linkedInLink = data.get("linkedInLink")
        const faceBookLink = data.get("faceBookLink")
        const instagramLink = data.get("instagramLink")

        const imagePath = await uploadImage(image);

        if (!name || !designation || !imagePath) {
            return NextResponse.json({ message: "Please provide all the fields.", status: 0 });
        }
        const newMember = new teamModel({ name, designation, image: imagePath, linkedInLink, faceBookLink, instagramLink })
        await newMember.save();
        return NextResponse.json({ message: "Team member added successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}