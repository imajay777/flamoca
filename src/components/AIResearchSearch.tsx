import React, { useState } from 'react';

const CATEGORY_LIST = [
  'Brain Health',
  'Heart Health',
  'Skin Health',
  'Digestive Health',
  'Immune System',
];

const CATEGORY_ICONS: Record<string, string> = {
  'Brain Health': '🧠',
  'Heart Health': '❤️',
  'Skin Health': '✨',
  'Digestive Health': '🍏',
  'Immune System': '🛡️',
};

const CATEGORY_COLORS: Record<string, string> = {
  'Brain Health': 'bg-purple-100 text-purple-800 border-purple-300',
  'Heart Health': 'bg-red-100 text-red-800 border-red-300',
  'Skin Health': 'bg-pink-100 text-pink-800 border-pink-300',
  'Digestive Health': 'bg-green-100 text-green-800 border-green-300',
  'Immune System': 'bg-yellow-100 text-yellow-800 border-yellow-300',
};

const SECTION_ICONS: Record<string, string> = {
  Summary: '📝',
  Nutrition: '🥗',
  Category: '🏷️',
};

const AIResearchSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState({
    Summary: true,
    Nutrition: true,
    Category: true,
  });

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
    // Parse categories as chips and details
    let categories: string[] = [];
    let categoryDetails = '';
    if (categoryMatch) {
      // Try to extract just the category names (if comma separated)
      const catLine = categoryMatch[1].replace(/\n/g, '').trim();
      // If the line contains all categories, extract them
      categories = CATEGORY_LIST.filter(cat => catLine.includes(cat));
      // Remove category names from the details to avoid duplication
      categoryDetails = catLine.replace(new RegExp(categories.join('|'), 'g'), match => `**${match}**`);
    }
    return {
      summary: summaryMatch ? summaryMatch[1].trim() : '',
      nutrition,
      nutritionBullets,
      categories,
      categoryDetails: categoryDetails.trim(),
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

  // Helper to render markdown-style bold (**text**) in category details
  function renderMarkdownBold(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (/^\*\*[^*]+\*\*$/.test(part)) {
        return <strong key={idx}>{part.replace(/\*\*/g, '')}</strong>;
      }
      return <span key={idx}>{part}</span>;
    });
  }

  function toggleSection(section: keyof typeof openSections) {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  }

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
          <div className="bg-white/90 rounded-2xl shadow-md border-l-8 border-purple-300">
            <button
              type="button"
              className="w-full flex items-center justify-between px-6 py-4 focus:outline-none group"
              onClick={() => toggleSection('Summary')}
              aria-expanded={openSections.Summary}
            >
              <span className="flex items-center gap-3 text-xl font-bold text-purple-700">
                <span className="text-2xl">{SECTION_ICONS.Summary}</span> Summary
              </span>
              <span className="ml-2 text-lg transition-transform duration-200 group-aria-expanded:rotate-180">
                {openSections.Summary ? '▼' : '►'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openSections.Summary ? 'max-h-[500px] p-6 pt-0 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
            >
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">{parsed.summary}</p>
            </div>
          </div>
          {/* Nutrition Card */}
          <div className="bg-white/90 rounded-2xl shadow-md border-l-8 border-green-300">
            <button
              type="button"
              className="w-full flex items-center justify-between px-6 py-4 focus:outline-none group"
              onClick={() => toggleSection('Nutrition')}
              aria-expanded={openSections.Nutrition}
            >
              <span className="flex items-center gap-3 text-xl font-bold text-green-700">
                <span className="text-2xl">{SECTION_ICONS.Nutrition}</span> Nutrition
              </span>
              <span className="ml-2 text-lg transition-transform duration-200 group-aria-expanded:rotate-180">
                {openSections.Nutrition ? '▼' : '►'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openSections.Nutrition ? 'max-h-[500px] p-6 pt-0 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
            >
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
          </div>
          {/* Category Chips and Details */}
          <div className="bg-white/90 rounded-2xl shadow-md border-l-8 border-yellow-300">
            <button
              type="button"
              className="w-full flex items-center justify-between px-6 py-4 focus:outline-none group"
              onClick={() => toggleSection('Category')}
              aria-expanded={openSections.Category}
            >
              <span className="flex items-center gap-3 text-xl font-bold text-yellow-700">
                <span className="text-2xl">{SECTION_ICONS.Category}</span> Category
              </span>
              <span className="ml-2 text-lg transition-transform duration-200 group-aria-expanded:rotate-180">
                {openSections.Category ? '▼' : '►'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openSections.Category ? 'max-h-[500px] p-6 pt-0 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {parsed.categories.length > 0 ? (
                  parsed.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className={`flex items-center gap-1 px-4 py-1 rounded-full border text-sm font-semibold shadow-sm ${CATEGORY_COLORS[cat] || 'bg-gray-100 text-gray-800 border-gray-300'}`}
                    >
                      <span className="text-lg mr-1">{CATEGORY_ICONS[cat] || '🏷️'}</span>
                      {cat}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-700">No category found</span>
                )}
              </div>
              {parsed.categoryDetails && (
                <div className="text-gray-800 whitespace-pre-line leading-relaxed text-base">
                  {renderMarkdownBold(parsed.categoryDetails)}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIResearchSearch; 