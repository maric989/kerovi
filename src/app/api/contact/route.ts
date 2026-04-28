import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactFormSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Molimo proverite unete podatke i pokušajte ponovo.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    console.log("[contact-form] novi upit", {
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      interest: payload.interest,
      hasPreviousDog: payload.hasPreviousDog,
      livingArrangement: payload.livingArrangement,
      message: payload.message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: "Poruka je uspešno poslata." });
  } catch {
    return NextResponse.json(
      { error: "Došlo je do greške na serveru. Pokušajte ponovo uskoro." },
      { status: 500 }
    );
  }
}

