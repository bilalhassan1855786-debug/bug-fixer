export async function POST(req: Request) {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return Response.json({ error: "API key missing" }, { status: 500 });
  }

  // your logic here
}