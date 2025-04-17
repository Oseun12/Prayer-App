// app/api/bookmarks/route.ts
import { NextResponse } from "next/server";
import Bookmark from "@/models/Bookmark";
import connectViaMongoose from "@/lib/mongodb";

export const dynamic = "force-dynamic";

async function parseRequestBody(req: Request) {
  try {
    return await req.json();
  } catch (error) {
    console.error("JSON parse error:", error);
    return null;
  }
}

export async function POST(req: Request) {
  await connectViaMongoose();
  
  const body = await parseRequestBody(req);
  if (!body || !body.prayerId) {
    return NextResponse.json(
      { error: "prayerId is required" },
      { status: 400 }
    );
  }

  try {
    const { prayerId, anonymousId } = body;
    const { getServerSession } = await import("next-auth");
    const { authOptions } = await import("../auth/[...nextauth]/route");
    const session = await getServerSession(authOptions);

    // Generate anonymousId if not provided and no session exists
    const userId = session?.user?.id || anonymousId || `anon-${crypto.randomUUID()}`;

    const existing = await Bookmark.findOne({ prayerId, userId });
    if (existing) {
      await Bookmark.deleteOne({ _id: existing._id });
      return NextResponse.json({ removed: true });
    }

    const bookmark = await Bookmark.create({ prayerId, userId });
    return NextResponse.json(bookmark, { status: 201 });
  } catch (error) {
    console.error("Bookmark error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}