import connectDB from "@/_config/connect";
import courseCategoryModel from "@/_models/coursesCategoryModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await courseCategoryModel.findOne({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to get course category data", status: 0 });
        }
        return NextResponse.json({ message: "Get course category data successfully...", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}