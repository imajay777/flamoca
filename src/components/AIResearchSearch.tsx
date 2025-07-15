import React, { useState } from 'react';

const AIResearchSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Parse Gemini's research-assistant style output
  function parseResearchOutput(text: string) {
    // Split out the Sources section
    const [main, sourcesRaw] = text.split(/\n+Sources:?/i);
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
      sources = sourcesRaw
        .split(/\n+/)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
          const idxMatch = line.match(/^\[(\d+)\]/);
          return idxMatch ? { idx: idxMatch[1], text: line } : null;
        })
        .filter(Boolean) as { idx: string; text: string }[];
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

  // Try to extract a URL from a source line
  function extractUrlFromSource(source: string) {
    const urlMatch = source.match(/https?:\/\/\S+/);
    return urlMatch ? urlMatch[0] : '';
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
                  <li key={idx}>{renderWithCitations(item, parsed.sources)}</li>
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
                {parsed.sources.map((src, idx) => (
                  <li key={idx} className="break-words">
                    {src.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIResearchSearch; 