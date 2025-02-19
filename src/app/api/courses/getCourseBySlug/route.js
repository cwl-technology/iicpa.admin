import connectDB from "@/_config/connect";
import chapterModel from "@/_models/chapterModel";
import courseModel from "@/_models/courseModel";
import courseCategoryModel from "@/_models/coursesCategoryModel";
import topicModel from "@/_models/topicModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseSlug } = await request.json();
        const chapterData = await chapterModel.find({ status: 1 }).lean();
        const topicData = await topicModel.find({ status: 1 }).lean();
        let data = await courseModel.findOne({ courseSlug: courseSlug, status: 1 }).lean();

        if (!data) {
            return NextResponse.json({ message: "Unable to get course data", status: 0 });
        }

        const categoryData = await courseCategoryModel.findOne({ _id: data.courseCategory });
        data.courseCategoryName = categoryData.categoryName;


        data.chapters = chapterData?.filter((e) => data._id == e.courseId);

        data.chapters = data.chapters.map((element) => {
            element.topic = topicData?.filter((e) => element._id == e.chapterId)
            return element;
        })


        return NextResponse.json({ message: "Get course data successfully...", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}