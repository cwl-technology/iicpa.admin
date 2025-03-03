import mongoose from "mongoose";

const orderQuizSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: null
    },
    orderId: {
        type: String,
        default: null
    },
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

const orderQuizModel = mongoose.models.orderQuizModel || new mongoose.model("orderQuizModel", orderQuizSchema);
export default orderQuizModel;