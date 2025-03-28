import connectDB from "@/_config/connect";
import updateImage from "@/_helper/backend/updateImage";
import aboutModel from "@/_models/aboutModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const data  = await request.formData()
        const aboutHeading = data.get("aboutHeading");
        const aboutDescription = data.get("aboutDescription");
        const missionDescription = data.get("missionDescription");
        const visionDescription = data.get("visionDescription");
        const whyChooseUsHeading = data.get("whyChooseUsHeading");
        const whyChooseUsDescription = data.get("whyChooseUsDescription");
        const whyChooseUsSubHeading1 = data.get("whyChooseUsSubHeading1");
        const whyChooseUsSubHeading2 = data.get("whyChooseUsSubHeading2");
        const whyChooseUsSubHeading3 = data.get("whyChooseUsSubHeading3");
        const whyChooseUsSubHeading4 = data.get("whyChooseUsSubHeading4");
        const whyChooseUsContent1 = data.get("whyChooseUsContent1");
        const whyChooseUsContent2 = data.get("whyChooseUsContent2");
        const whyChooseUsContent3 = data.get("whyChooseUsContent3");
        const whyChooseUsContent4 = data.get("whyChooseUsContent4");
        const title = data.get("title");
        const keywords = data.get("keywords");
        const metaDescription = data.get("metaDescription");
        const id = data.get("id");

        const currentData = await aboutModel.findOne({ _id: id });
        const aboutImage1 = data.get("aboutImage1") == "undefined" ? currentData?.aboutImage1 : data.get("aboutImage1");
        const aboutImage2 = data.get("aboutImage2") == "undefined" ? currentData?.aboutImage2 : data.get("aboutImage2");
        const whyChooseUsIcon1 = data.get("whyChooseUsIcon1") == "undefined" ? currentData?.whyChooseUsIcon1 : data.get("whyChooseUsIcon1");
        const whyChooseUsIcon2 = data.get("whyChooseUsIcon2") == "undefined" ? currentData?.whyChooseUsIcon2 : data.get("whyChooseUsIcon2");
        const whyChooseUsIcon3 = data.get("whyChooseUsIcon3") == "undefined" ? currentData?.whyChooseUsIcon3 : data.get("whyChooseUsIcon3");
        const whyChooseUsIcon4 = data.get("whyChooseUsIcon4") == "undefined" ? currentData?.whyChooseUsIcon4 : data.get("whyChooseUsIcon4");

    
        const aboutImage1Path = await updateImage(aboutImage1, currentData?.aboutImage1)
        const aboutImage2Path = await updateImage(aboutImage2, currentData?.aboutImage2)
        const whyChooseUsIcon1Path = await updateImage(whyChooseUsIcon1, currentData?.whyChooseUsIcon1)
        const whyChooseUsIcon2Path = await updateImage(whyChooseUsIcon2, currentData?.whyChooseUsIcon2)
        const whyChooseUsIcon3Path = await updateImage(whyChooseUsIcon3, currentData?.whyChooseUsIcon3)
        const whyChooseUsIcon4Path = await updateImage(whyChooseUsIcon4, currentData?.whyChooseUsIcon4)

        const updatedData = await aboutModel.findByIdAndUpdate({ _id: id }, { aboutHeading, aboutDescription, missionDescription, visionDescription, whyChooseUsHeading, whyChooseUsDescription, whyChooseUsSubHeading1, whyChooseUsSubHeading2, whyChooseUsSubHeading3, whyChooseUsSubHeading4, whyChooseUsContent1, whyChooseUsContent2, whyChooseUsContent3, whyChooseUsContent4, title, keywords, metaDescription, aboutImage1: aboutImage1Path, aboutImage2: aboutImage2Path, whyChooseUsIcon1: whyChooseUsIcon1Path, whyChooseUsIcon2: whyChooseUsIcon2Path, whyChooseUsIcon3: whyChooseUsIcon3Path, whyChooseUsIcon4: whyChooseUsIcon4Path, })

        if (!updatedData) {
            return NextResponse.json({ message: "Unable to update data.", status: 0 })
        }
        
        return NextResponse.json({ message: "Updated successfully.", status: 1 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}