import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: null
    },
    eventTitle: {
        type: String,
        default: null
    },
    eventLink: {
        type: String,
        default: null
    },
    startDate: {
        type: String,
        default: null
    },
    endDate: {
        type: String,
        default: null
    },
    startTime: {
        type: String,
        default: null
    },
    broadCastType: {
        type: String,
        default: null
    },
    eventDescription: {
        type: String,
        default: null
    }
})

const eventModel = mongoose.models.eventModel || new mongoose.model("eventModel", eventSchema);
export default eventModel;