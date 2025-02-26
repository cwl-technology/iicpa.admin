import connectDB from "@/_config/connect";
import adminModel from "@/_models/adminModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    connectDB();
    try {
        const { id } = await request.json();
        const data = await adminModel.findByIdAndDelete({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete staff!", status: 0 });
        }
        return NextResponse.json({ message: 'Staff deleted successfully.', status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}