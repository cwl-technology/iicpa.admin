import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    designation: {
        type: String,
        default: null
    },
    content: {
        type: String,
        default: null
    },
    ratings: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    }
})

const testimonialModel = mongoose.models.testimonialModel  || new mongoose.model("testimonialModel", testimonialSchema);
export default testimonialModel;