import mongoose from "mongoose";

const orderInfoSchema = new mongoose.Schema({
    //User Information
    userId: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    phone: {
        type: Number,
        default: null
    },
    billingAddress: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    centerId: {
        type: String,
        default: null
    },

    //Order Information
    invoiceId: {
        type: Number,
        default: null
    },
    invoiceDate: {
        type: String,
        default: null
    },
    totalAmount: {
        type: Number,
        default: null
    },

    //Transaction Information
    transactionId: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }

}, {
    timestamps: true
});

const orderInfoModel = mongoose.models.orderInfoModel || new mongoose.model("orderInfoModel", orderInfoSchema);
export default orderInfoModel;
