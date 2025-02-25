import connectDB from "@/_config/connect";
import subTopicModel from "@/_models/subTopicModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import fs from "fs";
import slugformatter from "@/_helper/backend/slugformatter";
import updateImage from "@/_helper/backend/updateImage";

export const POST = async (request) => {
    connectDB();
    try {
        const formdata = await request.formData();

        const courseId = formdata.get("courseId");
        const chapterId = formdata.get("chapterId");
        const topicId = formdata.get("topicId");
        const subTopicName = formdata.get("subTopicName");
        const subTopicSlug = formdata.get("subTopicSlug");
        const subTopicDescription = formdata.get("subTopicDescription");
        const id = formdata.get("id");

        const currentData = await subTopicModel.findOne({ _id: id });
        const subTopicImage = formdata.get("subTopicImage") == "undefined" ? currentData.subTopicImage : formdata.get("subTopicImage");

        const subTopicVideo = formdata.get("subTopicVideo") == "undefined" ? currentData.subTopicVideo : formdata.get("subTopicVideo");

       

        if (!id || !courseId || !chapterId || !topicId || !subTopicName || !subTopicSlug) {
            return NextResponse.json({ message: "Please fill all the fields!", status: 0 })
        }


        const formattedSlug = slugformatter(subTopicSlug);
        const isExist = await subTopicModel.findOne({ courseId, chapterId, topicId, subTopicSlug: formattedSlug, _id: { $ne: id } });
        if (isExist) {
            return NextResponse.json({ message: "Sub topic already exist", status: 0 });
        }

        const subTopicImagePath = await updateImage(subTopicImage, currentData.subTopicImage)
        const subTopicVideoPath = await updateImage(subTopicVideo, currentData.subTopicVideo)
        

        const data = await subTopicModel.findByIdAndUpdate({ _id: id }, { courseId, chapterId, topicId, subTopicName, subTopicSlug: formattedSlug, subTopicImage: subTopicImagePath || null, subTopicVideo: subTopicVideoPath || null, subTopicDescription });
        await data.save();
        return NextResponse.json({ message: "Updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}