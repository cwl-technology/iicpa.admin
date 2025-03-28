import mongoose from "mongoose";

const ticketReplySchema = new mongoose.Schema({
    ticketId: {
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
}, { timestamps: true })

const ticketReplyModel = mongoose.models.ticketReplyModel || new mongoose.model("ticketReplyModel", ticketReplySchema);
export default ticketReplyModel;