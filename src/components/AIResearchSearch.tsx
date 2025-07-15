import React, { useState } from 'react';

const CATEGORY_COLORS: Record<string, string> = {
  'Brain Health': 'bg-purple-100 text-purple-800 border-purple-300',
  'Heart Health': 'bg-red-100 text-red-800 border-red-300',
  'Skin Health': 'bg-pink-100 text-pink-800 border-pink-300',
  'Digestive Health': 'bg-green-100 text-green-800 border-green-300',
  'Immune System': 'bg-yellow-100 text-yellow-800 border-yellow-300',
};

const AIResearchSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper to parse the AI response into sections
  function parseResult(text: string) {
    const summaryMatch = text.match(/- Summary:(.*?)(- Nutrition:|$)/s);
    const nutritionMatch = text.match(/- Nutrition:(.*?)(- Category:|$)/s);
    const categoryMatch = text.match(/- Category:(.*)/s);
    const nutrition = nutritionMatch ? nutritionMatch[1].trim() : '';
    // Parse nutrition into bullet points if possible
    const nutritionBullets = nutrition
      .split(/\n|\r/)
      .map(line => line.trim())
      .filter(line => line.startsWith('*') || line.startsWith('-'))
      .map(line => line.replace(/^[-*]\s*/, ''));
    // Parse categories into chips
    let categories: string[] = [];
    if (categoryMatch) {
      categories = categoryMatch[1]
        .replace(/\n/g, '')
        .split(',')
        .map(c => c.trim())
        .filter(Boolean);
    }
    return {
      summary: summaryMatch ? summaryMatch[1].trim() : '',
      nutrition,
      nutritionBullets,
      categories,
    };
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const rawText = await response.text();
        throw new Error('Server did not return JSON. Raw response: ' + rawText);
      }
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch from Gemini API.');
      }
      setResult(data.result);
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const parsed = result ? parseResult(result) : null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl shadow-lg mb-8 mt-6">
      <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center tracking-tight drop-shadow">Superfood AI Research</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          className="flex-1 border-2 border-green-400 focus:border-purple-500 rounded-xl px-4 py-3 text-lg shadow-sm focus:outline-none transition"
          placeholder="Search for any food item..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:from-green-600 hover:to-purple-600 transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <div className="text-red-600 mb-4 text-center font-medium">{error}</div>}
      {parsed && (
        <div className="space-y-6 mt-2">
          {/* Summary Card */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 border-l-8 border-purple-300">
            <h3 className="text-xl font-bold text-purple-700 mb-2 flex items-center gap-2">
              <span>Summary</span>
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
            </h3>
            <p className="text-gray-800 whitespace-pre-line leading-relaxed">{parsed.summary}</p>
          </div>
          {/* Nutrition Card */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 border-l-8 border-green-300">
            <h3 className="text-xl font-bold text-green-700 mb-2 flex items-center gap-2">
              <span>Nutrition</span>
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
            </h3>
            {parsed.nutritionBullets.length > 0 ? (
              <ul className="list-disc pl-6 text-gray-800 space-y-1">
                {parsed.nutritionBullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-800 whitespace-pre-line">{parsed.nutrition}</p>
            )}
          </div>
          {/* Category Chips */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 border-l-8 border-yellow-300">
            <h3 className="text-xl font-bold text-yellow-700 mb-3 flex items-center gap-2">
              <span>Category</span>
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {parsed.categories.length > 0 ? (
                parsed.categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-1 rounded-full border text-sm font-semibold shadow-sm ${CATEGORY_COLORS[cat] || 'bg-gray-100 text-gray-800 border-gray-300'}`}
                  >
                    {cat}
                  </span>
                ))
              ) : (
                <span className="text-gray-700">No category found</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIResearchSearch; 