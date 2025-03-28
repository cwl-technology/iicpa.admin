import connectDB from "@/_config/connect";
import cartModel from "@/_models/cartModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { itemId, userId } = await request.json();
        console.log(userId)
        console.log(itemId)
        const isItemExist = await cartModel.findOne({ userId: userId, itemId: itemId });

        if (!isItemExist) {
            return NextResponse.json({ message: "Unable to delete!", status: 0 });
        }
        const data = await cartModel.findByIdAndDelete({ _id: isItemExist._id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete cart item.", status: 0 });
        }
        const cartNumber = await cartModel.countDocuments({ userId: userId });
        return NextResponse.json({ message: "Item deleted successfully.", status: 1, cartNumber: cartNumber });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}