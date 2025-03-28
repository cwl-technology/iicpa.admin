import connectDB from "@/_config/connect";
import cartModel from "@/_models/cartModel";
import courseModel from "@/_models/courseModel";
import liveSessionModel from "@/_models/liveSessions";
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
        const liveSession = await liveSessionModel.find().lean();


        const courses = data?.map((ele) => courseData.find((e) => e._id == ele.itemId)).filter((e) => e != null);
        let sessions = data?.map((ele) => liveSession.find((e) => e._id == ele.itemId)).filter((e) => e != null);;

        sessions = sessions.map((ele) => {
            const getCourseName = courseData.find((e) => e._id == ele.courseId);
            ele.courseName = getCourseName?.courseName;
            return ele;
        })


        let totalAmount = 0;
        courses.map((ele) => {
            totalAmount = totalAmount + ele.priceAfterDiscount
            return ele;
        })
        sessions.map((ele) => {
            totalAmount = totalAmount + ele.price
            return ele;
        })


        const cartNumber = await cartModel.countDocuments({ userId: userId });
        return NextResponse.json({ message: "Get cart data successfully", status: 1, courses: courses, sessions: sessions, totalAmount: totalAmount, cartNumber: cartNumber });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}