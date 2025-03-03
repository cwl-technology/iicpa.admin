import connectDB from "@/_config/connect";
import orderChapterModel from "@/_models/orderChapterModel";
import orderCourseModel from "@/_models/orderCourseModel";
import orderTopicModel from "@/_models/orderTopicModel";
import orderSubTopicModel from "@/_models/orderSubTopicModel";


import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, userId } = await request.json();
        const course = await orderCourseModel.findOne({ _id: courseId, userId: userId, status: 1 }, { courseName: 1, courseSlug: 1, userId: 1, orderId: 1 }).lean();
        const topicData = await orderTopicModel.find({ userId: userId, status: 1 }).lean();
        // const subTopicData = await orderSubTopicModel.find({status: 1});

        if (!course) {
            return NextResponse.json({ message: "Unable to get course data", status: 0 });
        }

        let chapterData = await orderChapterModel.find({ userId: userId, courseId: course._id, status: 1 }).lean();
        chapterData = chapterData.map((ele) => {
            ele.topics = topicData?.filter((e) => ele._id == e.chapterId);
            return ele;
        })

        // data = data.map((element) => {
        //     element.topics.map((ele) => {
        //         ele.subtopic = subTopicData?.filter((e) => ele._id == e.topicId)
        //         return ele;
        //     })
        //     return element
        // })

        return NextResponse.json({
            message: "Get course data successfully...", status: 1, data: {
                courseData: course,
                chapterData: chapterData
            }
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}