import connectDB from "@/_config/connect";
import slugformatter from "@/_helper/backend/slugformatter";
import uploadImage from "@/_helper/backend/uploadImage";
import blogModel from "@/_models/blogModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const incomingData = await request.formData();
        const blogName = incomingData.get("blogName")
        const blogSlug = incomingData.get("blogSlug")
        const blogContent = incomingData.get("blogContent")
        const blogImage = incomingData.get("blogImage")
        const blogDate = incomingData.get("blogDate")
        const publisherName = incomingData.get("publisherName")
        const blogDescription = incomingData.get("blogDescription")
        const title = incomingData.get("title")
        const keywords = incomingData.get("keywords")
        const metaDescription = incomingData.get("metaDescription")

        if (!blogName || !blogSlug || !blogContent || !blogImage || !blogDate) {
            return NextResponse.json({ message: "Please fill all the fields.", status: 0 })
        }

        const formattedSlug = slugformatter(blogSlug);
        const isExist = await blogModel.findOne({ blogSlug: formattedSlug });
        if (isExist) {
            return NextResponse.json({ message: "Blog already exist!", status: 0 });
        }

        const blogImagePath = await uploadImage(blogImage)

        const data = new blogModel({ blogName, blogSlug: formattedSlug, blogContent, blogImage: blogImagePath, blogDate, publisherName, blogDescription, title, keywords, metaDescription });
        await data.save();
        return NextResponse.json({ message: "Blog created successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}