import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the Nexus AI assistant — a friendly, knowledgeable product expert for Nexus AI, a SaaS company that builds AI-powered tools for modern teams.

About Nexus AI:
- Founded in 2023, headquartered in San Francisco
- Serves 50,000+ teams worldwide including companies like Vercel, Linear, Stripe, Figma, Loom, and Notion
- Core products: Nexus Studio (AI workspace), Nexus Insights (data analytics), Nexus Flow (workflow automation)
- Pricing: Free (up to 3 users), Pro ($39/mo yearly or $49/mo), Enterprise (custom)
- All plans include a 14-day free trial, no credit card required
- SOC 2 Type II certified, GDPR compliant
- 300+ integrations including Slack, GitHub, Jira, Salesforce, Notion
- AI powered by Anthropic's Claude

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

    // Filter to only user/assistant messages for the API
    const apiMessages = messages
      .filter((m: { role: string; content: string }) =>
        m.role === "user" || m.role === "assistant"
      )
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }))
      // Drop empty assistant placeholders
      .filter((m) => m.content.trim().length > 0);

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const messageStream = client.messages.stream({
            model: "claude-opus-4-6",
            max_tokens: 1024,
            thinking: { type: "adaptive" },
            system: SYSTEM_PROMPT,
            messages: apiMessages,
          });

          for await (const event of messageStream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const data = JSON.stringify({ delta: event.delta });
              controller.enqueue(
                encoder.encode(`data: ${data}\n\n`)
              );
            }
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          console.error("Stream error:", err);
          const errorMsg = err instanceof Anthropic.APIError
            ? `API error ${err.status}: ${err.message}`
            : "Internal server error";
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: errorMsg })}\n\n`)
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
