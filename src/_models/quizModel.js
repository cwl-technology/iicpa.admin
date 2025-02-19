import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        default: null
    },
    answer1: {
        type: String,
        default: null
    },
    answer2: {
        type: String,
        default: null
    },
    answer3: {
        type: String,
        default: null
    },
    answer4: {
        type: String,
        default: null
    },
    correctAnswer: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }
})

const quizModel = mongoose.models.quizModel || new mongoose.model("quizModel", quizSchema);
export default quizModel;