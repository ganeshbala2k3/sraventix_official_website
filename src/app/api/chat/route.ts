import { NextRequest, NextResponse } from "next/server";
import { handleChatMessage } from "@/lib/chatbot";

const MAX_MESSAGE_LENGTH = 1000;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const message = typeof (body as { message?: unknown })?.message === "string" ? (body as { message: string }).message : "";

  if (!message.trim()) {
    return NextResponse.json({ error: "A non-empty 'message' field is required." }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` }, { status: 400 });
  }

  const result = await handleChatMessage(message);
  return NextResponse.json(result);
}
