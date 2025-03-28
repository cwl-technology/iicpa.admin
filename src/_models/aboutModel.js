import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    //About us
    aboutHeading: {
        type: String,
        default: null
    },
    aboutDescription: {
        type: String,
        default: null
    },
    aboutImage1: {
        type: String,
        default: null
    },
    aboutImage2: {
        type: String,
        default: null
    },
    missionDescription: {
        type: String,
        default: null
    },
    visionDescription: {
        type: String,
        default: null
    },

    //why choose us
    whyChooseUsHeading: {
        type: String,
        default: null
    },
    whyChooseUsDescription: {
        type: String,
        default: null
    },
    whyChooseUsSubHeading1: {
        type: String,
        default: null
    },
    whyChooseUsSubHeading2: {
        type: String,
        default: null
    },
    whyChooseUsSubHeading3: {
        type: String,
        default: null
    },
    whyChooseUsSubHeading4: {
        type: String,
        default: null
    },
    whyChooseUsContent1: {
        type: String,
        default: null
    },
    whyChooseUsContent2: {
        type: String,
        default: null
    },
    whyChooseUsContent3: {
        type: String,
        default: null
    },
    whyChooseUsContent4: {
        type: String,
        default: null
    },
    whyChooseUsIcon1: {
        type: String,
        default: null
    },
    whyChooseUsIcon2: {
        type: String,
        default: null
    },
    whyChooseUsIcon3: {
        type: String,
        default: null
    },
    whyChooseUsIcon4: {
        type: String,
        default: null
    },

    //Seo
    title: {
        type: String,
        default: null
    },
    keywords: {
        type: String,
        default: null
    },
    metaDescription: {
        type: String,
        default: null
    }
});

const aboutModel = mongoose.models.aboutModel || new mongoose.model("aboutModel", aboutSchema);
export default aboutModel;