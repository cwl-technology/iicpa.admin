import connectDB from "@/_config/connect";
import slugformatter from "@/_helper/backend/slugformatter";
import chapterModel from "@/_models/chapterModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id, courseId, chapterName, chapterSlug } = await request.json();
        if (!id || !courseId || !chapterName || !chapterSlug) {
            return NextResponse.json({ message: "Please provide all the fields!", status: 0 })
        }
        const formattedSlug = slugformatter(chapterSlug);
        const isExist = await chapterModel.findOne({ courseId: courseId, chapterSlug: formattedSlug, _id: { $ne: id } });
        if (isExist) {
            return NextResponse.json({ message: "Chapter already exist.", status: 0 });
        }
        
        const data = await chapterModel.findByIdAndUpdate({ _id: id }, { courseId, chapterName, formattedSlug: chapterSlug });
        if (!data) {
            return NextResponse.json({ message: "Unable to update!", status: 0 });
        }
        return NextResponse.json({ message: "Updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}