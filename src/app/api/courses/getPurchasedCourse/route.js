import connectDB from "@/_config/connect";
import chapterModel from "@/_models/chapterModel";
import orderChapterModel from "@/_models/orderChapterModel";
import orderCourseModel from "@/_models/orderCourseModel";
import orderTopicModel from "@/_models/orderTopicModel";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    connectDB();
    try {
        const { userId } = await request.json();
        let courseData = await orderCourseModel.find({ status: 1, userId: userId }, { courseName: 1, courseSlug: 1, userId: 1 }).lean().sort({ _id: -1 });

        const courseChapterData = await orderChapterModel.find({ status: 1 }).lean();
        courseData = courseData.map((ele) => {
            ele.chapters = courseChapterData.filter((e) => e.courseId == ele._id)
            return ele;
        })

        const topicData = await orderTopicModel.find({}).lean();

        courseData = courseData?.map((element, index) => {
            element.chapters?.map((ele, ind) => {
                const firstTopic = topicData.find((e) => e.chapterId == ele._id);
                if (firstTopic) {
                    ele.firstTopicId = firstTopic._id;
                }
                return ele;
            })
            return element;
        })

        return NextResponse.json({ message: "Get course data successfully", status: 1, data: courseData });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", staus: 0 });
    }
}