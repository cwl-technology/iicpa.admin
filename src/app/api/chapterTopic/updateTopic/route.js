import connectDB from "@/_config/connect";
import slugformatter from "@/_helper/backend/slugformatter";
import topicModel from "@/_models/topicModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id, courseId, chapterId, topicName, topicSlug } = await request.json();
        if (!id || !courseId || !chapterId || !topicName || !topicSlug) {
            return NextResponse.json({ message: "Please provide all the fields!", status: 0 })
        }

        const formattedSlug = slugformatter(topicSlug);

        const isExist = await topicModel.findOne({ courseId: courseId, chapterId: chapterId, topicSlug: formattedSlug, _id: { $ne: id } });
        if (isExist) {
            return NextResponse.json({ message: "Topic already exist.", status: 0 });
        }

        const data = await topicModel.findByIdAndUpdate({ _id: id }, { courseId, chapterId, topicName, topicSlug: formattedSlug });
        if (!data) {
            return NextResponse.json({ message: "Unable to update!", status: 0 });
        }
        return NextResponse.json({ message: "Updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}