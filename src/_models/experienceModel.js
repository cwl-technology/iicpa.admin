import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    duration: {
        type: String,
        default: null
    },
    type: {
        type: Number,
        default: 1
    }
})

const experienceModel = mongoose.models.experienceModel || new mongoose.model("experienceModel", experienceSchema);
export default experienceModel;