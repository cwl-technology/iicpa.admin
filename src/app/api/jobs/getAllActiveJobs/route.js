import connectDB from "@/_config/connect";
import experienceModel from "@/_models/experienceModel";
import jobsModel from "@/_models/jobsModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectDB();
        let data = await jobsModel.find({ status: 1 }).lean();
        const experience = await experienceModel.find();
        if (!data) {
            return NextResponse.json({ message: "Unable to get job.", status: 0 });
        }

        data = data?.map((ele) => {
            const exp = experience.find((e) => e._id == ele.jobExperience);
            ele.jobExperienceYear = exp.duration;
            return ele;
        })
        return NextResponse.json({ message: "Job data get successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}