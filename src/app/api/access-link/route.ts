import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get raw text
    const rawBody = await req.text();
    console.log("Raw body:", rawBody);

    // Clean up unexpected trailing characters like %
    const cleanedBody = rawBody.trim().replace(/%$/, "");

    let parsed;
    try {
      parsed = JSON.parse(cleanedBody);
    } catch (jsonError) {
      throw new Error("Invalid JSON body");
    }

    const { cid } = parsed;
    console.log("Parsed CID:", cid);
    if (!cid) {
      return NextResponse.json(
        { error: "CID parameter is required" },
        { status: 400 },
      );
    }

    // Ensure JWT is present
    const PINATA_JWT = process.env.PINATA_JWT;
    if (!PINATA_JWT) {
      throw new Error("Missing PINATA_JWT environment variable");
    }

    // Use the correct Pinata endpoint
    const pinataEndpoint = `https://api.pinata.cloud/v3/files/download_link`;

    const payload = JSON.stringify({
      url: `https://amethyst-rare-bobolink-414.mypinata.cloud/files/${cid}`,
      expires: 3600, // 1 hour expiration
      date: 1724875300,
      method: "GET",
    });

    const response = await fetch(pinataEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
      },
      body: payload,
    });

    console.log("Response status:", response);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Pinata API error:", errorText);
      throw new Error(`Pinata API error: ${response.statusText}`);
    }

    const responseData = await response.json();

    if (!responseData.downloadLink) {
      throw new Error("Missing downloadLink in response");
    }

    return NextResponse.json({
      url: responseData.downloadLink,
      expiresAt: responseData.expiresAt || Date.now() + 3600000,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate access link",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
