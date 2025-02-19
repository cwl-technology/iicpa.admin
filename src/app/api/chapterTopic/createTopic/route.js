import connectDB from "@/_config/connect";
import slugformatter from "@/_helper/backend/slugformatter";
import topicModel from "@/_models/topicModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, chapterId, topicName, topicSlug } = await request.json();
        if (!courseId || !chapterId || !topicName || !topicSlug) {
            return NextResponse.json({ message: "Please fill all the fields!", status: 0 })
        }

        const formattedSlug = slugformatter(topicSlug);

        const isExist = await topicModel.findOne({ courseId: courseId, chapterId: chapterId, topicSlug: formattedSlug });
        if (isExist) {
            return NextResponse.json({ message: "Topic already exist.", status: 0 });
        }

        const data = new topicModel({ courseId, chapterId, topicName, topicSlug:formattedSlug });
        await data.save();
        return NextResponse.json({ message: "Created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}