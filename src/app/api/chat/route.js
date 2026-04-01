import OpenAI from 'openai';
import knowledge from '@/data/knowledge';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const stream = await openai.chat.completions.create({
      model: 'qwen/qwen3.6-plus-preview:free',
      messages: [
        { role: 'system', content: knowledge },
        ...messages,
      ],
      stream: true,
    });

    return new Response(
      new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? '';
            if (text) controller.enqueue(encoder.encode(text));
          }
          controller.close();
        },
      }),
      { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
    );
  } catch (err) {
    console.error('[chat] error:', err);
    return Response.json({ error: err.message ?? 'Unknown error' }, { status: 500 });
  }
}
