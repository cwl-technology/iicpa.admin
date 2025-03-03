import connectDB from "@/_config/connect";
import cartModel from "@/_models/cartModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, userId } = await request.json();
        const isCourseExist = await cartModel.findOne({ userId: userId, courseId: courseId });

        const data = await cartModel.findByIdAndDelete({ _id: isCourseExist._id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete cart item.", status: 0 });
        }
        const cartNumber = await cartModel.countDocuments({ userId: userId });
        return NextResponse.json({ message: "Item deleted successfully.", status: 1,cartNumber:cartNumber });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}