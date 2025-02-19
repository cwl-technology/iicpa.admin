import connectDB from "@/_config/connect";
import quizModel from "@/_models/quizModel";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        connectDB();
        const { id } = await request.json();

        const data = await quizModel.findByIdAndDelete({ _id: id })
        if (!data) {
            return NextResponse.json({ message: "Unable to delete quiz!", status: 0 });
        }
        return NextResponse.json({ message: "Quiz deleted successfully.", status: 1 });
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}