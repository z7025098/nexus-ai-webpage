import { NextRequest, NextResponse } from "next/server";

interface QuoteSubmission {
  name: string;
  phone: string;
  email: string;
  address: string;
  projectType: string;
  electricBill?: string;
  notes?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: QuoteSubmission = await req.json();

    // Validate required fields
    const required: (keyof QuoteSubmission)[] = ["name", "phone", "email", "address", "projectType"];
    for (const field of required) {
      if (!body[field] || typeof body[field] !== "string" || !body[field].trim()) {
        return NextResponse.json(
          { error: `Missing or invalid field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const validProjectTypes = [
      "residential",
      "commercial",
      "battery",
      "ev",
      "carport",
      "other",
    ];
    if (!validProjectTypes.includes(body.projectType)) {
      return NextResponse.json({ error: "Invalid project type" }, { status: 400 });
    }

    // Log submission (in production, send to CRM/email/database)
    console.log("New quote request:", {
      timestamp: new Date().toISOString(),
      name: body.name,
      phone: body.phone,
      email: body.email,
      address: body.address,
      projectType: body.projectType,
      electricBill: body.electricBill || "not provided",
      notes: body.notes || "none",
    });

    return NextResponse.json(
      { success: true, message: "Quote request received" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
