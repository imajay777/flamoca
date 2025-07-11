// @ts-nocheck

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const CATEGORIES = [
  'Brain Health',
  'Heart Health',
  'Skin Health',
  'Digestive Health',
  'Immune System',
];

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Gemini API key not set in environment variables.' });
  }

  const { query } = req.body;
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid query.' });
  }

  const prompt = `For the food item "${query}", provide a summary of research-backed facts and nutritional information. Then, classify it under one or more of these categories: ${CATEGORIES.join(", ")}. Respond in this format:\n- Summary: ...\n- Nutrition: ...\n- Category: ...`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const contentType = geminiRes.headers.get('content-type');
    const rawText = await geminiRes.text();

    if (!geminiRes.ok) {
      let errorMsg = 'Gemini API error.';
      try {
        const errorJson = JSON.parse(rawText);
        errorMsg = errorJson.error?.message || errorMsg;
      } catch {
        errorMsg = rawText || errorMsg;
      }
      return res.status(geminiRes.status).json({ error: errorMsg });
    }

    if (!contentType || !contentType.includes('application/json')) {
      return res.status(500).json({ error: 'Gemini API did not return JSON.', raw: rawText });
    }

    const data = JSON.parse(rawText);
    return res.status(200).json({ result: data?.candidates?.[0]?.content?.parts?.[0]?.text || null });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
} 