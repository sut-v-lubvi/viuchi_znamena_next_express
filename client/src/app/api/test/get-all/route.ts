import { NextResponse } from "next/server";
import { getDB } from "@/shared/utils/getDB";

export async function GET() {
  try {
    const db = await getDB()
    const tests = await db.collection('tests').find({}).toArray();
    return NextResponse.json({ data: { tests }, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 404 });

  }
}