import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    designation: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    linkedInLink: {
        type: String,
        default: null
    },
    faceBookLink: {
        type: String,
        default: null
    },
    instagramLink: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }
})

const teamModel = mongoose.models.teamModel || new mongoose.model("teamModel", teamSchema);
export default teamModel;