import mongoose from "mongoose";

const orderTopicSchema = new mongoose.Schema({
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
    topicName: {
        type: String,
        default: null
    },
    topicSlug: {
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

const orderTopicModel = mongoose.models.orderTopicModel || new mongoose.model("orderTopicModel", orderTopicSchema);
export default orderTopicModel;