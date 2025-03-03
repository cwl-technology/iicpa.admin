import connectDB from "@/_config/connect";
import cartModel from "@/_models/cartModel";
import courseModel from "@/_models/courseModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { userId } = await request.json();

        let data = await cartModel.find({ userId: userId }).lean();
        if (!data) {
            return NextResponse.json({ message: "Unable to get data!", status: 0 });
        }

        const courseData = await courseModel.find().lean();
        data = data?.map((ele) => ({
            course: courseData.find((e) => e._id == ele.courseId)
        }))
        let totalAmount = 0;
        data = data.map((ele) => {
            totalAmount = totalAmount + ele.course?.priceAfterDiscount
            return ele;
        })


        return NextResponse.json({ message: "Get cart data successfully", status: 1, data: data, totalAmount: totalAmount });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}