import courseModel from "@/_models/courseModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import connectDB from "@/_config/connect";
import fs from "fs";
import slugformatter from "@/_helper/backend/slugformatter";

export const POST = async (request) => {
    connectDB();
    try {
        const data = await request.formData();

        const courseCategory = data.get("courseCategory");
        const courseName = data.get("courseName");
        const courseSlug = data.get("courseSlug");
        const courseLevel = data.get("courseLevel");
        const actualPrice = data.get("actualPrice");
        const discount = data.get("discount");
        const priceAfterDiscount = data.get("priceAfterDiscount");
        const courseVideoLink = data.get("courseVideoLink");
        const courseDesc = data.get("courseDesc");
        const examAndCertiDesc = data.get("examAndCertiDesc");
        const caseStudyDesc = data.get("caseStudyDesc");
        const simulationAndExpDesc = data.get("simulationAndExpDesc");
        let simulationAndExp = data.get("simulationAndExp");
        const title = data.get("title");
        const keywords = data.get("keywords");
        const metaDescription = data.get("metaDescription");

        console.log(actualPrice);

        simulationAndExp = JSON.parse(simulationAndExp)
        const id = data.get("id");

        const currentData = await courseModel.findOne({ _id: id });
        const courseImage = data.get("courseImage") == "undefined" ? currentData.courseImage : data.get("courseImage");


        if (!courseCategory || !courseName || !courseSlug || !courseLevel) {
            return NextResponse.json({ message: "Please fill all the required fields", status: 0 });
        }

        const formattedSlug = slugformatter(courseSlug);
        const isExist = await courseModel.findOne({ courseSlug: formattedSlug, _id: { $ne: id } })
        if (isExist) {
            return NextResponse.json({ message: "Course already exist.", status: 0 });
        }

        let courseImagePath;
        if (courseImage != currentData.courseImage) {
            const courseImageByteData = await courseImage.arrayBuffer();
            const courseImageBuffer = Buffer.from(courseImageByteData);
            courseImagePath = `${Date.now()}-${courseImage.name}`
            await writeFile(`./public/uploads/${courseImagePath}`, courseImageBuffer);

            if (fs.existsSync(`./public/uploads/${currentData.courseImage}`)) {
                fs.unlinkSync(`./public/uploads/${currentData.courseImage}`)
            }
        } else {
            courseImagePath = courseImage
        }


        const course = await courseModel.findByIdAndUpdate({ _id: id }, { courseCategory, courseName, courseSlug: formattedSlug, courseLevel, courseImage: courseImagePath , actualPrice, discount, priceAfterDiscount, courseVideoLink, courseDesc, simulationAndExpDesc, simulationAndExp, examAndCertiDesc, caseStudyDesc, title, keywords, metaDescription });

        if (!course) {
            return NextResponse.json({ message: "Unable to update course data", status: 0 });
        }

        return NextResponse.json({ message: "Course updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}