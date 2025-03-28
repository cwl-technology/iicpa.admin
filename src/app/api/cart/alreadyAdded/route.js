import connectDB from "@/_config/connect";
import cartModel from "@/_models/cartModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, userId } = await request.json();
        const isCourseExist = await cartModel.findOne({ userId: userId, itemId: courseId });

        if (!isCourseExist) {
            return NextResponse.json({ message: "Item is not added.", status: 0 });
        }
        return NextResponse.json({ message: "Item already in cart.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}