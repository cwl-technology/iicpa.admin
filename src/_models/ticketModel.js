import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: null
    },
    userType: {
        type: String,
        default: null
    },
    title: {
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
    issueType: {
        type: String,
        default: null
    },
    replyStatus: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const ticketModel = mongoose.models.ticketModel || new mongoose.model("ticketModel", ticketSchema);
export default ticketModel;