import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `http://public-api.wordpress.com/rest/v1.1/sites/onlinetamilanblog.wordpress.com/posts?_embed`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const product = await res.json();

  return NextResponse.json({ product });
}
