import { NextResponse } from "next/server";
import { mongoConnect } from "../../../config/mongoConnection";
import { menuitems } from "../../models/menuItems";

export async function GET() {
    await mongoConnect()
    // console.log("inisdein drink route")
    const getDrinkData = await menuitems.find({category:'drinks'})
    return new NextResponse(JSON.stringify(getDrinkData),{status:200})
}