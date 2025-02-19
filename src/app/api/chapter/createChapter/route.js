import connectDB from "@/_config/connect";
import slugformatter from "@/_helper/backend/slugformatter";
import chapterModel from "@/_models/chapterModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { courseId, chapterName, chapterSlug } = await request.json();
        if (!courseId || !chapterName || !chapterSlug) {
            return NextResponse.json({ message: "Please fill all the fields!", status: 0 })
        }
        const formattedSlug = slugformatter(chapterSlug);
        const isExist = await chapterModel.findOne({ courseId: courseId, chapterSlug: formattedSlug })
        if (isExist) {
            return NextResponse.json({ message: "Chapter already exist.", status: 0 });
        }
        const data = new chapterModel({ courseId, chapterName, chapterSlug: formattedSlug });
        await data.save();
        return NextResponse.json({ message: "Created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}