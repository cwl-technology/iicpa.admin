import connectDB from "@/_config/connect";
import orderQuizModel from "@/_models/OrderQuizModel";
import orderSubTopicModel from "@/_models/orderSubTopicModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, topicId, chapterId } = await request.json();
        console.log(courseId, topicId, chapterId);
        let data = await orderSubTopicModel.find({ courseId, chapterId, topicId }).lean();
        const quizData = await orderQuizModel.find();
        data = data.map((ele) => {
            ele.quizes = quizData.filter((e)=>e.courseId == courseId && e.chapterId == chapterId && e.topicId == topicId && e.subTopicId == ele._id);
            return ele;
        })

        if (!data) {
            return NextResponse.json({ message: "Unable to get data", status: 0 });
        }
        return NextResponse.json({ message: "Get syllabus data successfully", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}