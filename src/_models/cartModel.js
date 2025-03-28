import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: null
    },
    itemId: {
        type: String,
        default: null
    },
    type: {
        type: Number,
        default: null
    }
});

const cartModel = mongoose.models.cartModel || new mongoose.model("cartModel", cartSchema);
export default cartModel;