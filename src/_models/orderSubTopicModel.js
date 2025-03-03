import mongoose from "mongoose";

const orderSubTopicSchema = new mongoose.Schema({
    userId:{
        type:String,
        default:null
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
    subTopicName: {
        type: String,
        default: null
    },
    subTopicSlug: {
        type: String,
        default: null
    },
    subTopicImage: {
        type: String,
        default: null
    },
    subTopicVideo: {
        type: String,
        default: null
    },
    subTopicDescription: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }

},{
    timestamps: true
})

const orderSubTopicModel = mongoose.models.orderSubTopicModel || new mongoose.model("orderSubTopicModel", orderSubTopicSchema);
export default orderSubTopicModel;