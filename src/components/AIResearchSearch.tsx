import React, { useState } from 'react';

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
    return {
      summary: summaryMatch ? summaryMatch[1].trim() : '',
      nutrition: nutritionMatch ? nutritionMatch[1].trim() : '',
      category: categoryMatch ? categoryMatch[1].replace(/\n/g, '').trim() : '',
    };
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await fetch('/api/gemini-1.5-pro-latest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
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
        <div className="bg-white/90 rounded-2xl shadow-md p-6 mt-2 border border-purple-100">
          <h3 className="text-xl font-bold text-green-700 mb-2">Summary</h3>
          <p className="mb-4 text-gray-800 whitespace-pre-line">{parsed.summary}</p>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Nutrition</h3>
          <p className="mb-4 text-gray-800 whitespace-pre-line">{parsed.nutrition}</p>
          <h3 className="text-xl font-bold text-green-700 mb-2">Category</h3>
          <p className="text-gray-900 font-semibold text-lg">{parsed.category}</p>
        </div>
      )}
    </div>
  );
};

export default AIResearchSearch; 