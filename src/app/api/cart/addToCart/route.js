import connectDB from "@/_config/connect";
import cartModel from "@/_models/cartModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { itemId, userId, type } = await request.json();
        const isItemExist = await cartModel.findOne({ userId: userId, itemId: itemId });
        if (isItemExist) {
            return NextResponse.json({ message: "Already added to the cart!", status: 0 });
        }
        const data = new cartModel({ itemId, userId, type });
        await data.save();

        const cartNumber = await cartModel.countDocuments({ userId: userId });
        return NextResponse.json({ message: "Item Added to Cart.", status: 1, cartNumber: cartNumber });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}