import connectDB from "@/_config/connect";
import cartModel from "@/_models/cartModel";
import chapterModel from "@/_models/chapterModel";
import courseModel from "@/_models/courseModel";
import orderChapterModel from "@/_models/orderChapterModel";
import orderCourseModel from "@/_models/orderCourseModel";
import orderInfoModel from "@/_models/orderInfoModel";
import orderQuizModel from "@/_models/OrderQuizModel";
import orderSubTopicModel from "@/_models/orderSubTopicModel";
import orderTopicModel from "@/_models/orderTopicModel";
import quizModel from "@/_models/quizModel";
import subTopicModel from "@/_models/subTopicModel";
import topicModel from "@/_models/topicModel";
import userModel from "@/_models/userModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { userId, totalAmount, invoiceDate, transactionId } = await request.json();

        const userData = await userModel.findOne({ _id: userId }) || {};

        //Invoice Information
        const lastOrder = await orderInfoModel.findOne().sort({ _id: - 1 })
        const invoiceId = lastOrder?.invoiceId ? lastOrder.invoiceId + 1 : 1001


        //Order Info table
        const order = new orderInfoModel({ userId: userId, name: userData.name, email: userData.email, phone: userData.phone, billingAddress: userData.billingAddress, state: userData.state, city: userData.city, centerId: userData.centerId, invoiceId, invoiceDate, totalAmount, transactionId })
        await order.save();

        const cart = await cartModel.find({ userId: userId });

        //Order Detail or Order Course Model 
        let courseData = await courseModel.find({}).lean();
        courseData = cart?.map((ele) => {
            ele = courseData.find((e) => e._id == ele.courseId)
            ele.userId = userId;
            ele.orderId = order._id;
            ele.purchasedCourseId = ele._id;
            return ele;
        })

        for (const course of courseData) {

            const newCourse = { ...course }
            delete newCourse._id;
            const newCourseData = await orderCourseModel.create(newCourse);

            //Chapter Clone
            let chapterData = await chapterModel.find().lean();
            chapterData = chapterData.filter((ele) => ele.courseId == course._id)

            chapterData = chapterData.map((ele) => {
                ele.userId = userId;
                ele.orderId = order._id;
                ele.courseId = newCourseData._id;
                return ele;
            })

            for (const chapter of chapterData) {
                const newChapter = { ...chapter }
                delete newChapter._id;
                // Chapter Save 
                const newChapterData = await orderChapterModel.create(newChapter);

                //Topic clone
                let topicData = await topicModel.find().lean();
                topicData = topicData.filter((ele) => ele.courseId == course._id && ele.chapterId == chapter._id)
                topicData = topicData.map((ele) => {
                    ele.userId = userId;
                    ele.orderId = order._id;
                    ele.courseId = newCourseData._id;
                    ele.chapterId = newChapterData._id;
                    return ele;
                })
                

                for (const topic of topicData) {
                    const newTopic = { ...topic }
                    delete newTopic._id;
                    //Topic save
                    const newTopicData = await orderTopicModel.create(newTopic);

                    //SubTopic clone
                    let subTopicData = await subTopicModel.find().lean();
                
                    subTopicData = subTopicData.filter((ele) => ele.courseId == course._id && ele.chapterId == chapter._id && ele.topicId == topic._id)

                    subTopicData = subTopicData.map((ele) => {
                        ele.userId = userId;
                        ele.orderId = order._id;
                        ele.courseId = newCourseData._id;
                        ele.chapterId = newChapterData._id;
                        ele.topicId = newTopicData._id;
                        return ele;
                    })

                    for (const subtopic of subTopicData) {
                        const newSubTopic = { ...subtopic }
                        delete newSubTopic._id;
                        //SubTopic save
                        const newSubTopicData = await orderSubTopicModel.create(newSubTopic);

                        //Quiz clone
                        let quizData = await quizModel.find().lean();
                        quizData = quizData.filter((ele) => ele.courseId == course._id && ele.chapterId == chapter._id && ele.topicId == topic._id && ele.subTopicId == subtopic._id)

                        quizData = quizData.map((ele) => {
                            ele.userId = userId;
                            ele.orderId = order._id;
                            ele.courseId = newCourseData._id;
                            ele.chapterId = newChapterData._id;
                            ele.topicId = newTopicData._id;
                            ele.subTopicId = newSubTopicData._id;
                            return ele;
                        })

                        quizData.forEach((ele) => delete ele._id);
                        //Quiz save
                        await orderQuizModel.insertMany(quizData);
                    }

                }

            }

        }

 

        // Delete Cart 
        await cartModel.deleteMany({ userId: userId });

        return NextResponse.json({ message: "Order Placed!", status: 1, data: courseData })

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 })
    }
}