import connectDB from "@/_config/connect";
import quizModel from "@/_models/quizModel";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, chapterId, topicId, subTopicId } = await request.json();
        if (!courseId || !chapterId || !topicId || !subTopicId) {
            return NextResponse.json({ message: "Please provide all the fields!", status: 0 });
        }

        const data = await quizModel.find({ courseId, chapterId, topicId, subTopicId });
        if (!data) {
            return NextResponse.json({ message: "Unable to get data!", status: 0 });
        }
        return NextResponse.json({ message: "Get quiz data successfully.", status: 1, data: data });
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}