import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

const SYSTEM_PROMPT = `You are the Nexus AI assistant — a friendly, knowledgeable product expert for Nexus AI, a SaaS company that builds AI-powered tools for modern teams.

About Nexus AI:
- Founded in 2023, headquartered in San Francisco
- Serves 50,000+ teams worldwide including companies like Vercel, Linear, Stripe, Figma, Loom, and Notion
- Core products: Nexus Studio (AI workspace), Nexus Insights (data analytics), Nexus Flow (workflow automation)
- Pricing: Free (up to 3 users), Pro ($39/mo yearly or $49/mo), Enterprise (custom)
- All plans include a 14-day free trial, no credit card required
- SOC 2 Type II certified, GDPR compliant
- 300+ integrations including Slack, GitHub, Jira, Salesforce, Notion

Your personality:
- Warm, helpful, and concise
- Never make up pricing or features — stick to what's documented above
- Encourage users to start with the free plan and try features
- For complex enterprise questions, suggest scheduling a demo with sales
- Keep responses under 3 paragraphs unless a detailed answer is needed
- Use bullet points sparingly and only when listing 3+ items`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const filtered = messages
      .filter((m: { role: string; content: string }) =>
        (m.role === "user" || m.role === "assistant") && m.content.trim().length > 0
      );

    // All but the last message go into history; drop leading model messages
    // (the UI initializes with an assistant greeting which must not be first in history)
    const historyRaw = filtered.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));
    const firstUserIdx = historyRaw.findIndex((m) => m.role === "user");
    const history = firstUserIdx === -1 ? [] : historyRaw.slice(firstUserIdx);

    const lastMessage = filtered[filtered.length - 1];

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat({ history });
    const result = await chat.sendMessageStream(lastMessage.content);

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          console.error("Stream error:", err);
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: "Stream error" })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
