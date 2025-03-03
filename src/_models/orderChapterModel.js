import mongoose from "mongoose";

const orderChapterSchema = new mongoose.Schema({
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
    chapterName: {
        type: String,
        default: null
    },
    chapterSlug: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }

}, {
    timestamps: true
})

const orderChapterModel = mongoose.models.orderChapterModel || new mongoose.model("orderChapterModel", orderChapterSchema);
export default orderChapterModel;