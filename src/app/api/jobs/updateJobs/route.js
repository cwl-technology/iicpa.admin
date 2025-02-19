import connectDB from "@/_config/connect";
import jobsModel from "@/_models/jobsModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        connectDB();
        const { jobTitle, jobLocation, jobExperience, jobLink, jobDescription, jobPackage, id } = await request.json();


        if (!jobTitle || !jobLocation || !jobExperience || !jobLink) {
            return NextResponse.json({ message: "Please fill all the fiedls!", status: 0 })
        }
        const data = await jobsModel.findByIdAndUpdate({ _id: id }, { jobTitle, jobLocation, jobExperience, jobLink, jobDescription, jobPackage })
        if (!data) {
            return NextResponse.json({ message: "Unable to update job.", status: 0 });
        }
        return NextResponse.json({ message: "Job updated successfully.", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}