import mongoose from "mongoose";

const orderCourseSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: null
    },
    userId: {
        type: String,
        default: null
    },
    purchasedCourseId: {
        type: String,
        default: null
    },
    courseCategory: {
        type: String,
        default: null
    },
    courseName: {
        type: String,
        default: null
    },
    courseSlug: {
        type: String,
        default: null
    },
    courseLevel: {
        type: String,
        default: null
    },
    courseImage: {
        type: String,
        default: null
    },
    actualPrice: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    priceAfterDiscount: {
        type: Number,
        default: 0
    },
    courseVideoLink: {
        type: String,
        default: null
    },
    courseDesc: {
        type: String,
        default: null
    },
    examAndCertiDesc: {
        type: String,
        default: null
    },
    caseStudyDesc: {
        type: String,
        default: null
    },
    simulationAndExpDesc: {
        type: String,
        default: null
    },
    simulationAndExp: [{
        heading: {
            type: String,
            default: null
        },
        content: {
            type: String,
            default: null
        }
    }],
    status: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})


const orderCourseModel = mongoose.models.orderCourseModel || new mongoose.model("orderCourseModel", orderCourseSchema);
export default orderCourseModel;
