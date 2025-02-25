import connectDB from "@/_config/connect";
import slugformatter from "@/_helper/backend/slugformatter";
import updateImage from "@/_helper/backend/updateImage";
import blogModel from "@/_models/blogModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { blogName, blogSlug, blogContent, blogImage, blogDate, publisherName, blogDescription, id } = await request.json();

        if (!blogName || !blogSlug || !blogContent || !blogImage || !blogDate || !publisherName || !blogDescription) {
            return NextResponse.json({ message: "Please fill all the fields.", status: 0 })
        }

        const formattedSlug = slugformatter(blogSlug);
        const isExist = await blogModel.findOne({ blogSlug: formattedSlug, _id: { $ne: id } });
        if (isExist) {
            return NextResponse.json({ message: "Blog already exist!", status: 0 });
        }

        const blogImagePath = await updateImage(blogImage)

        const data = await blogModel.findByIdAndUpdate({ _id: id }, { blogName, blogSlug: formattedSlug, blogContent, blogImage: blogImagePath, blogDate, publisherName, blogDescription });
        if (!data) {
            return NextResponse.json({ message: "Unable to update data!", status: 0 });
        }
        return NextResponse.json({ message: "Blog updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}