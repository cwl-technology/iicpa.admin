import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    centerId: {
        type: String,
        default: null
    },
    teacherId: {
        type: String,
        default: null
    },
    batchId: {
        type: String,
        default: null
    },
    earningPoints: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "User"
    }
})

const userModel = mongoose.models.userModel || new mongoose.model("userModel", userSchema);
export default userModel;
