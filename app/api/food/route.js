import { NextResponse } from "next/server";
import { mongoConnect } from "../../../config/mongoConnection";
import { menuitems } from "../../models/menuItems";

export async function GET() {
    await mongoConnect()
    // console.log("inside the food route")
    const getFoodData = await menuitems.find({category:'food'})
    return new NextResponse(JSON.stringify(getFoodData),{status:200})
}