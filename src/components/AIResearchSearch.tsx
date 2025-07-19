import React, { useState } from 'react';

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

const AIResearchSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Parse Gemini's research-assistant style output
  function parseResearchOutput(text: string) {
    // Split out the Sources, References, or Markdown horizontal rule section
    const [main, sourcesRaw] = text.split(/\n+(Sources|References)[:]?|\n+---+\n+/i);
    // Extract intro (first paragraph)
    const introMatch = main.match(/^(.*?)(\n|$)/s);
    const intro = introMatch ? introMatch[1].trim() : '';
    // Extract bullet points (lines starting with * or -)
    const bulletRegex = /^(?:\*|-)[ \t]+(.+)/gm;
    const bullets = [];
    let m;
    while ((m = bulletRegex.exec(main))) {
      bullets.push(m[1]);
    }
    // Extract precautions (look for a line starting with 'Precautions:' or similar)
    const precautionsMatch = main.match(/Precautions?:\s*(.*)/i);
    const precautions = precautionsMatch ? precautionsMatch[1].trim() : '';
    // Parse sources
    let sources: { idx: string; text: string }[] = [];
    if (sourcesRaw) {
      // Try [1] style first
      sources = sourcesRaw
        .split(/\n+/)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
          const idxMatch = line.match(/^\[(\d+)\]/);
          return idxMatch ? { idx: idxMatch[1], text: line } : null;
        })
        .filter(Boolean) as { idx: string; text: string }[];
      // If no [1] style found, try Markdown numbered list (1. ...)
      if (sources.length === 0) {
        sources = sourcesRaw
          .split(/\n+/)
          .map(line => line.trim())
          .filter(line => /^\d+\.\s+/.test(line))
          .map(line => {
            const idxMatch = line.match(/^(\d+)\./);
            return idxMatch ? { idx: idxMatch[1], text: line.replace(/^(\d+)\.\s*/, `[${idxMatch[1]}] `) } : null;
          })
          .filter(Boolean) as { idx: string; text: string }[];
      }
    }
    return { intro, bullets, precautions, sources, main };
  }

  // Helper to render inline citations as superscript links
  function renderWithCitations(text: string, sources: { idx: string; text: string }[]) {
    return text.split(/(\[\d+\])/g).map((part, i) => {
      const match = part.match(/^\[(\d+)\]$/);
      if (match) {
        const idx = match[1];
        const source = sources.find(s => s.idx === idx);
        return source ? (
          <sup key={i} className="mx-0.5">
            <a
              href={extractUrlFromSource(source.text) || '#sources'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              [{idx}]
            </a>
          </sup>
        ) : (
          <sup key={i}>[{idx}]</sup>
        );
      }
      return part;
    });
  }

  // Try to extract a URL or DOI from a source line
  function extractUrlFromSource(source: string) {
    const urlMatch = source.match(/https?:\/\/\S+/);
    if (urlMatch) return urlMatch[0];
    // Try DOI
    const doiMatch = source.match(/doi:\s*(10\.\d{4,9}\/[-._;()\/:A-Z0-9]+)/i);
    if (doiMatch) return `https://doi.org/${doiMatch[1]}`;
    return '';
  }

  // Parse a source line for title, author, year, and url
  function parseSourceDetails(source: string) {
    const url = extractUrlFromSource(source);
    const yearMatch = source.match(/(19|20)\d{2}/);
    const year = yearMatch ? yearMatch[0] : '';
    const titleMatch = source.match(/\.?\s*([^\.]*)\.?\s*(https?:\/\/|doi:|$)/i);
    let title = titleMatch ? titleMatch[1].trim() : '';
    let author = '';
    const authorMatch = source.match(/\]\s*([^,]+),?\s*(19|20)\d{2}/);
    if (authorMatch) author = authorMatch[1].trim();
    if (!title) title = '(details unavailable)';
    return { url, year, title, author };
  }

  function isRecent(year: string) {
    const y = parseInt(year, 10);
    if (!y) return false;
    const now = new Date().getFullYear();
    return y >= now - 5;
  }

  // Render a key point bullet with improved heading style
  function renderKeyPointBullet(bullet: string, sources: { idx: string; text: string }[]) {
    // Match **Heading:** at the start
    const headingMatch = bullet.match(/^\*\*(.+?):\*\*\s*(.*)$/);
    if (headingMatch) {
      const heading = headingMatch[1];
      const rest = headingMatch[2];
      return (
        <span>
          <span className="font-bold text-green-700 mr-1">{heading}:</span>
          <span>{renderWithCitations(rest, sources)}</span>
        </span>
      );
    }
    return renderWithCitations(bullet, sources);
  }

  // Helper to check if there are inline citations in the answer
  function hasInlineCitations(parsed: any) {
    // Check intro, bullets, and main for [1], [2], etc.
    const citationRegex = /\[\d+\]/;
    return (
      (parsed.intro && citationRegex.test(parsed.intro)) ||
      (parsed.bullets && parsed.bullets.some((b: string) => citationRegex.test(b))) ||
      (parsed.main && citationRegex.test(parsed.main))
    );
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setCategories([]);
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
      setCategories(data.categories || []);
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const parsed = result ? parseResearchOutput(result) : null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl shadow-lg mb-8 mt-6">
      <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center tracking-tight drop-shadow">Superfood AI Research</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          className="flex-1 border-2 border-green-400 focus:border-purple-500 rounded-xl px-4 py-3 text-lg shadow-sm focus:outline-none transition"
          placeholder="Ask about any food, nutrient, or health benefit..."
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
      {/* Category Chips */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className={`flex items-center gap-1 px-4 py-1 rounded-full border text-sm font-semibold shadow-sm ${CATEGORY_COLORS[cat] || 'bg-gray-100 text-gray-800 border-gray-300'}`}
            >
              <span className="text-lg mr-1">{CATEGORY_ICONS[cat] || '🏷️'}</span>
              {cat}
            </span>
          ))}
        </div>
      )}
      {parsed && (
        <div className="space-y-6 mt-2">
          {/* Intro */}
          {parsed.intro && (
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border-l-8 border-purple-300">
              <h3 className="text-xl font-bold text-purple-700 mb-2 flex items-center gap-2">
                <span>Overview</span>
              </h3>
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                {renderWithCitations(parsed.intro, parsed.sources)}
              </p>
            </div>
          )}
          {/* Bullet Points */}
          {parsed.bullets.length > 0 && (
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border-l-8 border-green-300">
              <h3 className="text-xl font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>Key Points</span>
              </h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-1">
                {parsed.bullets.map((item, idx) => (
                  <li key={idx}>{renderKeyPointBullet(item, parsed.sources)}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Precautions */}
          {parsed.precautions && (
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border-l-8 border-yellow-300">
              <h3 className="text-xl font-bold text-yellow-700 mb-2 flex items-center gap-2">
                <span>Precautions</span>
              </h3>
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                {renderWithCitations(parsed.precautions, parsed.sources)}
              </p>
            </div>
          )}
          {/* Sources */}
          {parsed.sources.length > 0 && (
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border-l-8 border-blue-300">
              <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                <span>Sources</span>
              </h3>
              <ul className="list-decimal pl-6 text-gray-800 space-y-2">
                {parsed.sources.map((src, idx) => {
                  const details = parseSourceDetails(src.text);
                  return (
                    <li key={idx} className="break-words flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold">{details.title}</span>
                        {details.year && (
                          <span className="text-gray-600">({details.year})</span>
                        )}
                        {details.author && (
                          <span className="italic text-gray-500">{details.author}</span>
                        )}
                        {isRecent(details.year) && (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full ml-1">Recent</span>
                        )}
                        {details.url && (
                          <a
                            href={details.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800 flex items-center gap-1"
                          >
                            <span>Link</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 015.656 5.656l-3.535 3.535a4 4 0 01-5.656-5.656m1.414-1.414a4 4 0 015.656 5.656" /></svg>
                          </a>
                        )}
                      </div>
                      {!details.title && (
                        <span className="text-gray-400 text-sm">(details unavailable)</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {/* Fallback for missing sources but citations present */}
          {parsed.sources.length === 0 && hasInlineCitations(parsed) && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl text-yellow-800 text-base font-medium">
              No sources were provided by the AI for the above citations.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIResearchSearch; 