import mongoose from "mongoose";

const centerSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        default: null,
    },
    authorizationLetter: {
        type: String,
        default: null
    },
    courseId: {
        type: String,
        default: null
    },
    centerId: {
        type: String,
        default: null
    },
    //For creating Center / Teacher
    userType: {
        type: String,
        default: null
    },
    //For Auth js
    role: {
        type: String,
        default: "Center"
    },
    status: {
        type: Number,
        default: 1
    }

});

const centerModel = mongoose.models.centerModel || new mongoose.model("centerModel", centerSchema);
export default centerModel;