import connectDB from "@/_config/connect";
import courseModel from "@/_models/courseModel";
import liveSessionModel from "@/_models/liveSessions";
import { NextResponse } from "next/server";

export const GET = async () => {
    connectDB();
    try {
        let data = await liveSessionModel.find({ status: 1 }).select("-link").lean();
        if (!data) {
            return NextResponse.json({ message: "Unable to get data!", status: 0 });
        }
        const courseData = await courseModel.find({}).sort({ _id: -1 });
        data = data.map((ele) => {
            const course = courseData.find((e) => e._id == ele.courseId);
            ele.courseName = course.courseName;
            return ele;
        })
        return NextResponse.json({ message: "Data get successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error.", status: 0 });
    }
}