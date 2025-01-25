import { NextResponse } from "next/server";
import { mongoConnect } from "../../../config/mongoConnection";
import { menuitems } from "../../models/menuItems";

export async function GET() {
    await mongoConnect()
    // console.log("inisdein brunch route")
    const getBrunchkData = await menuitems.find({category:'brunch'})
    return new NextResponse(JSON.stringify(getBrunchkData),{status:200})
}