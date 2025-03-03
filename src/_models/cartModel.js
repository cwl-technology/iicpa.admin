import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: null
    },
    courseId: {
        type: String,
        default: null
    }
});

const cartModel = mongoose.models.cartModel || new mongoose.model("cartModel", cartSchema);
export default cartModel;