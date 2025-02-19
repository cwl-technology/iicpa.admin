import connectDB from "@/_config/connect";
import subTopicModel from "@/_models/subTopicModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import slugformatter from "@/_helper/backend/slugformatter";

export const POST = async (request) => {
    connectDB();
    try {
        const formdata = await request.formData();

        const courseId = formdata.get("courseId");
        const chapterId = formdata.get("chapterId");
        const topicId = formdata.get("topicId");
        const subTopicName = formdata.get("subTopicName");
        const subTopicSlug = formdata.get("subTopicSlug");
        const subTopicImage = formdata.get("subTopicImage");
        const subTopicVideo = formdata.get("subTopicVideo");
        const subTopicDescription = formdata.get("subTopicDescription");


        if (!courseId || !chapterId || !topicId || !subTopicName || !subTopicSlug) {
            return NextResponse.json({ message: "Please fill all the fields!", status: 0 })
        }

    
        const formattedSlug = slugformatter(subTopicSlug);
        const isExist = await subTopicModel.findOne({ courseId, chapterId, topicId, subTopicSlug: formattedSlug });
        if (isExist) {
            return NextResponse.json({ message: "Sub topic already exist", status: 0 });
        }

        let subTopicImagePath;
        if (subTopicImage != "undefined") {
            const subTopicImageByteData = await subTopicImage.arrayBuffer();
            const subTopicImageBuffer = Buffer.from(subTopicImageByteData);
            subTopicImagePath = `${Date.now()}-${subTopicImage.name}`
            await writeFile(`./public/uploads/syllabus/image/${subTopicImagePath}`, subTopicImageBuffer);
        }

        let subTopicVideoPath;
        if (subTopicVideo != "undefined") {
            const subTopicVideoByteData = await subTopicVideo.arrayBuffer();
            const subTopicVideoBuffer = Buffer.from(subTopicVideoByteData);
            subTopicVideoPath = `${Date.now()}-${subTopicVideo.name}`
            await writeFile(`./public/uploads/syllabus/video/${subTopicVideoPath}`, subTopicVideoBuffer);
        }


        const data = new subTopicModel({ courseId, chapterId, topicId, subTopicName, subTopicSlug: formattedSlug, subTopicImage: subTopicImagePath || null, subTopicVideo: subTopicVideoPath || null, subTopicDescription });
        await data.save();
        return NextResponse.json({ message: "Created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}