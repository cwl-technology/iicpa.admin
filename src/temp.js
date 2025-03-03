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
        let courseData = await courseModel.find().lean();
        courseData = cart?.map((ele) => {
            ele = courseData.find((e) => e._id == ele.courseId)
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        })
        // await orderCourseModel.insertMany(courseData);

        //Chapter Clone
        let chapterData = await chapterModel.find().lean();
        chapterData = courseData?.map((ele) => {
            ele = chapterData.filter((e) => e.courseId == ele._id);
            return ele;
        }).flat(1)

        chapterData = chapterData.map((ele) => {
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        })
        // await orderChapterModel.insertMany(chapterData);

        //Topic Clone
        let topicsData = await topicModel.find().lean();
        topicsData = chapterData?.map((ele) => {
            ele = topicsData.filter((e) => e.chapterId == ele._id);
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        }).flat(1)
        topicsData = topicsData.map((ele) => {
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        })
        // await orderTopicModel.insertMany(topicsData);

        //Sub Topic Clone
        let subTopicData = await subTopicModel.find().lean();
        subTopicData = topicsData.map((ele) => {
            ele = subTopicData.filter((e) => e.topicId == ele._id);
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        }).flat(1)
        subTopicData = subTopicData.map((ele) => {
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        })
        // await orderSubTopicModel.insertMany(subTopicData);

        //Quiz Clone
        let quizData = await quizModel.find().lean();
        quizData = subTopicData.map((ele) => {
            ele = quizData.filter((e) => e.subTopicData == ele._id);
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        }).flat(1)
        quizData = quizData.map((ele) => {
            ele.userId = userId;
            ele.orderId = order._id;
            return ele;
        })
        await orderQuizModel.insertMany(quizData);

        //Delete Cart 
        await cartModel.deleteMany({userId:userId});

        return NextResponse.json({ message: "Order Placed!", status: 1,data:courseData})

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 })
    }
}