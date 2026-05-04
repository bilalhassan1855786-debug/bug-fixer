import { model } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    console.log("INPUT CODE:", code);

    const prompt = `
Fix this code and explain errors:

${code}
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    console.log("AI RESPONSE:", response);

    return NextResponse.json({
      result: response,
    });
  } catch (error) {
    console.log("GEMINI ERROR:", error);

    return NextResponse.json(
      { error: "Gemini failed" },
      { status: 500 }
    );
  }
}