import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    courseId: {
        type: String,
        default: null
    },
    chapterId: {
        type: String,
        default: null
    },
    topicId: {
        type: String,
        default: null
    },
    subTopicId: {
        type: String,
        default: null
    },
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