import permissionsModel from "@/_models/permissionsModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const { roleId } = await request.json();
        const data = await permissionsModel.find({ roleId: roleId });
        if (!data) {
            return NextResponse.json({ message: "Unable to get data!", status: 0 })
        }
        return NextResponse.json({ message: "Get data successfully.", status: 1, data: data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error!", status: 0 });
    }
}