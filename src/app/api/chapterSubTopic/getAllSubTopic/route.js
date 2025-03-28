import connectDB from "@/_config/connect";
import subTopicModel from "@/_models/subTopicModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, topicId, chapterId } = await request.json();
        const data = await subTopicModel.find({ courseId, topicId, chapterId });
        if (!data) {
            return NextResponse.json({ message: "Unable to get data", status: 0 });
        }
        return NextResponse.json({ message: "Get syllabus data successfully", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}