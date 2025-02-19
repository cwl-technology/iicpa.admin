import connectDB from "@/_config/connect";
import quizModel from "@/_models/quizModel";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        connectDB();
        const { question, answer1, answer2, answer3, answer4, correctAnswer, id } = await request.json();
        if (!question || !answer1 || !answer2 || !correctAnswer) {
            return NextResponse.json({ message: "Please provide all the fields!", status: 0 });
        }

        const data = await quizModel.findByIdAndUpdate({ _id: id }, { question, answer1, answer2, answer3, answer4, correctAnswer })
        if (!data) {
            return NextResponse.json({ message: "Unable to update quiz!", status: 0 });
        }
        return NextResponse.json({ message: "Quiz updated successfully.", status: 1 });
    } catch (err) {
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}