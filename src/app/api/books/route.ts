import { books } from "@/lib/books";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return NextResponse.json(books);
}
