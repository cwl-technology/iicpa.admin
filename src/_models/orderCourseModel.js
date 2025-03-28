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

    //courses
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
    type: {
        type: Number,
        default: null
    },

    //Live session
    courseId: {
        type: String,
        default: null
    },
    date: {
        type: String,
        default: null
    },
    startTime: {
        type: String,
        default: null
    },
    endTime: {
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
    link: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})


const orderCourseModel = mongoose.models.orderCourseModel || new mongoose.model("orderCourseModel", orderCourseSchema);
export default orderCourseModel;
