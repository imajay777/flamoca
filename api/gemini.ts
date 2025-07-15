// @ts-nocheck

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const CATEGORIES = [
  'Brain Health',
  'Heart Health',
  'Skin Health',
  'Digestive Health',
  'Immune System',
];

const CATEGORY_KEYWORDS = {
  'Brain Health': [
    'brain', 'cognitive', 'memory', 'focus', 'neuro', 'dementia', 'alzheimer', 'mental', 'neurological', 'cognition', 'parkinson', 'learning', 'attention'
  ],
  'Heart Health': [
    'heart', 'cardiovascular', 'cholesterol', 'blood pressure', 'artery', 'stroke', 'circulation', 'hypertension', 'hdl', 'ldl', 'triglyceride', 'vascular'
  ],
  'Skin Health': [
    'skin', 'collagen', 'elasticity', 'anti-aging', 'acne', 'complexion', 'wrinkle', 'dermatitis', 'eczema', 'psoriasis', 'glow', 'hydration'
  ],
  'Digestive Health': [
    'gut', 'digestion', 'fiber', 'microbiome', 'bowel', 'probiotic', 'constipation', 'digestive', 'prebiotic', 'stool', 'intestinal', 'colon', 'diarrhea'
  ],
  'Immune System': [
    'immune', 'immunity', 'infection', 'inflammation', 'antibody', 'virus', 'bacteria', 'defense', 'lymphocyte', 't cell', 'b cell', 'pathogen', 'resistance'
  ],
};

function classifyCategories(text) {
  const lower = text.toLowerCase();
  return CATEGORIES.filter(cat =>
    CATEGORY_KEYWORDS[cat].some(keyword => lower.includes(keyword))
  );
}

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

  // Prompt: Research answer
  const researchPrompt = `You are a nutrition-focused AI assistant. Answer the following user question using only credible research papers, clinical studies, or articles published in peer-reviewed journals and reputable medical or government health sources (e.g., PubMed, WHO, NIH, Mayo Clinic).

Rules:
1. Search for recent and relevant research papers (preferably from the last 5–10 years).
2. Tailor the information to the specific user context (e.g., the food item or nutrition topic they are searching for).
3. Present your answer in a clear, structured format: a short introduction, bullet points of benefits, and any precautions.
4. Always include inline citations that refer to each source used, in the format [1], [2], etc.
5. At the end, include a "Sources" section listing all references with the full title, author (if available), year, and a link to the source (preferably DOI or official site).
6. Do not include speculative or unverified information. Only use evidence-based data.
7. If there is not enough evidence for a food or supplement, clearly state that and mention any limitations in available studies.
8. If you cannot find any credible information, say: "There is currently limited peer-reviewed research specifically addressing this topic."

Preferred sources: PubMed, Google Scholar, academic articles, government health agencies.

Citation format: Inline [1], and expanded in a "Sources" section.

User question: "${query}"`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: researchPrompt }] },
          ],
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
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
    const categories = answer ? classifyCategories(answer) : [];

    return res.status(200).json({ result: answer, categories });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Internal server error.' });
  }
} 