import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        default: null
    },
    jobLocation: {
        type: String,
        default: null
    },
    jobExperience: {
        type: String,
        default: null
    },
    jobLink: {
        type: String,
        default: null
    },
    jobDescription: {
        type: String,
        default: null
    },
    jobPackage: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: 1
    }
})

const jobsModel = mongoose.models.jobsModel || new mongoose.model("jobsModel", jobsSchema);
export default jobsModel;