import connectDB from "@/_config/connect";
import courseModel from "@/_models/courseModel";
import courseCategoryModel from "@/_models/coursesCategoryModel";
import { NextResponse } from "next/server";



export const GET = async (request) => {
    connectDB();
    try {
        let data = await courseModel.find({ status: 1 }).lean();

        const courseCategoryData = await courseCategoryModel.find({ status: 1 });

        data = data.map((ele) => {
            const category = courseCategoryData.find((e) => e._id == ele.courseCategory);
            console.log(category);
            ele.courseCategoryName = category ? category.categoryName : "Unknown Category";
            return ele;
        })

        if (!data) {
            return NextResponse.json({ message: "Unable to find course data", status: 0 });
        }
        return NextResponse.json({ message: "Get course data successfully", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", staus: 0 });
    }
}