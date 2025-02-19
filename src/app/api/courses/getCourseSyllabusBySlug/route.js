import connectDB from "@/_config/connect";
import chapterModel from "@/_models/chapterModel";
import courseModel from "@/_models/courseModel";
import subTopicModel from "@/_models/subTopicModel";
import topicModel from "@/_models/topicModel";

import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseSlug } = await request.json();
        const course = await courseModel.findOne({ courseSlug: courseSlug,status: 1 }).lean();
        const topicData = await topicModel.find({status: 1}).lean();
        const subTopicData = await subTopicModel.find({status: 1});

        if (!course) {
            return NextResponse.json({ message: "Unable to get course data", status: 0 });
        }

        let data = await chapterModel.find({ courseId: course._id, status: 1 }).lean();
        data = data.map((ele) => {
            ele.topics = topicData?.filter((e) => ele._id == e.chapterId);
            return ele;
        })

        data = data.map((element) => {
            element.topics.map((ele) => {
                ele.subtopic = subTopicData?.filter((e) => ele._id == e.topicId)
                return ele;
            })
            return element
        })



        return NextResponse.json({ message: "Get course data successfully...", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}