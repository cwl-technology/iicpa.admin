import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blogName: {
        type: String,
        default: null
    },
    blogSlug: {
        type: String,
        default: null
    },
    blogImage: {
        type: String,
        default: null
    },
    blogContent: {
        type: String,
        default: null
    },
    blogDate: {
        type: String,
        default: null
    },
    publisherName: {
        type: String,
        default: null
    },
    blogDescription: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: null
    }
})

const blogModel = mongoose.models.blogModel || new mongoose.model("blogModel", blogSchema);
export default blogModel;