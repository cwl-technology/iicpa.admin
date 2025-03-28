import connectDB from "@/_config/connect";
import orderQuizModel from "@/_models/OrderQuizModel";
import userModel from "@/_models/userModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { number, quizId, userId, quizPoints } = await request.json();

        console.log(userId)
        console.log(quizId)
        const quiz = await orderQuizModel.findOne({ _id: quizId, userId: userId });
        if (!quiz) {
            return NextResponse.json({ message: "Unable to get quiz!", status: 0 });
        }
        if (quiz.submittedAnswer) {
            return NextResponse.json({ message: "Already submitted!", status: 0 });
        }
        await orderQuizModel.findByIdAndUpdate({ _id: quizId }, { submittedAnswer: `answer${number}` })

        if (quiz.correctAnswer == `answer${number}`) {
            const userData = await userModel.findOne({ _id: userId });
            const earningPoints = userData.earningPoints + quizPoints;
            await userModel.findByIdAndUpdate({ _id: userId }, { earningPoints: earningPoints });
            return NextResponse.json({ message: "Correct answer.", quizStatus: 1, status: 1 });
        }

        return NextResponse.json({ message: "Incorrect answer!", quizStatus: 0, status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}