import connectDB from "@/_config/connect";
import courseModel from "@/_models/courseModel";
import orderCourseModel from "@/_models/orderCourseModel";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    connectDB();
    try {
        const { userId } = await request.json();
        const courseData = await courseModel.find();

        let sessionData = await orderCourseModel.find({ status: 1, userId: userId, type: 0 }).lean().sort({ _id: -1 });

        sessionData = sessionData?.map((ele) => {
            const course = courseData.find((e) => e._id == ele.courseId);
            ele.courseName = course.courseName;
            return ele;
        })

        return NextResponse.json({ message: "Get course data successfully", status: 1, data: sessionData });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", staus: 0 });
    }
}