import connectDB from "@/_config/connect";
import updateImage from "@/_helper/backend/updateImage";
import uploadImage from "@/_helper/backend/uploadImage";
import teamModel from "@/_models/teamModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const data = await request.formData();
        const name = data.get("name")
        const designation = data.get("designation")
        const linkedInLink = data.get("linkedInLink")
        const faceBookLink = data.get("faceBookLink")
        const instagramLink = data.get("instagramLink")
        const id = data.get("id")

        const currentData = await teamModel.findOne({ _id: id });
        const image = data.get("image") == "undefined" ? currentData?.image : data.get("image");

        const imagePath = await updateImage(image, currentData?.image);

        if (!name || !designation || !imagePath) {
            return NextResponse.json({ message: "Please provide all the fields.", status: 0 });
        }
        await teamModel.findByIdAndUpdate({ _id: id }, { name, designation, image: imagePath, linkedInLink, faceBookLink, instagramLink })
        return NextResponse.json({ message: "Team member updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}