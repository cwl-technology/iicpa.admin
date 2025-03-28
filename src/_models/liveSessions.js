import mongoose from "mongoose";

const liveSesstionSchema = new mongoose.Schema({
    courseId: {
        type: String,
        default: null
    },
    date: {
        type: String,
        default: null
    },
    startTime: {
        type: String,
        default: null
    },
    endTime: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    link: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    }
});

const liveSessionModel = mongoose.models.liveSessionModel || new mongoose.model("liveSessionModel", liveSesstionSchema);
export default liveSessionModel;