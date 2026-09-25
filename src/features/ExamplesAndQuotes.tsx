// src/features/ExamplesAndQuotes.tsx
// Comprehensive Searchable Database of Authentic Administrative Examples and Strictly Verified Quotes

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { EXAMPLES_DATA, QUOTES_DATA } from '../data';
import { 
  Lightbulb, 
  Quote, 
  Search, 
  Bookmark, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Award,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const ExamplesAndQuotes: React.FC = () => {
  const { bookmarks, toggleBookmark } = useEthics();
  const [activeSubTab, setActiveSubTab] = useState<'examples' | 'quotes'>('examples');

  // Search & filter
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const exampleCategories = ['All', 'Integrity', 'Courage', 'Dedication', 'Impartiality', 'Whistleblowing', 'Accountability'];
  const quoteThemes = ['All', 'Integrity', 'Compassion', 'Governance', 'Human Dignity', 'Justice', 'Duty', 'Leadership'];

  const filteredExamples = EXAMPLES_DATA.filter(ex => {
    const matchesCat = selectedCategory === 'All' || ex.category === selectedCategory;
    const matchesSearch = ex.personOrInstitution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ex.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ex.valueDemonstrated.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredQuotes = QUOTES_DATA.filter(q => {
    const matchesCat = selectedCategory === 'All' || q.theme === selectedCategory;
    const matchesSearch = q.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.context.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopyQuote = (id: string, text: string, speaker: string) => {
    navigator.clipboard.writeText(`"${text}" — ${speaker}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Evidence Library
            </span>
            <span className="text-xs text-slate-400">Never Fabricate Quotes or Examples</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Authentic Examples & Verified Quotes Bank
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Enrich your GS-IV answers with real civil service legends, documented events, and verified philosophical quotes.
          </p>
        </div>

        {/* Tab Switcher: Examples vs Quotes */}
        <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => {
              setActiveSubTab('examples');
              setSelectedCategory('All');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'examples'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Examples Bank ({EXAMPLES_DATA.length})</span>
          </button>
          <button
            onClick={() => {
              setActiveSubTab('quotes');
              setSelectedCategory('All');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'quotes'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Quote className="w-4 h-4" />
            <span>Quotes Bank ({QUOTES_DATA.length})</span>
          </button>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
          {(activeSubTab === 'examples' ? exampleCategories : quoteThemes).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={activeSubTab === 'examples' ? "Search examples by person or event..." : "Search quotes by speaker or theme..."}
            className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* EXAMPLES VIEW */}
      {activeSubTab === 'examples' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {filteredExamples.map((ex) => (
            <div 
              key={ex.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {ex.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5">{ex.personOrInstitution}</h3>
                    <div className="text-xs text-slate-400">{ex.roleOrDesignation} • {ex.year} ({ex.location})</div>
                  </div>
                  <button 
                    onClick={() => toggleBookmark(ex.id)}
                    className="text-slate-400 hover:text-amber-400"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarks.includes(ex.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/40 p-3.5 rounded-xl border border-slate-700/60">
                  {ex.event}
                </p>

                <div className="space-y-1.5 text-xs">
                  <div className="text-emerald-300">
                    <strong>Values Demonstrated:</strong> {ex.valueDemonstrated}
                  </div>
                  <div className="text-slate-300">
                    <strong>Ethical Lesson:</strong> {ex.ethicalLesson}
                  </div>
                </div>

                <div className="p-3 bg-indigo-950/20 border border-indigo-500/30 rounded-xl text-xs space-y-1">
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block">
                    Sample Sentence for GS-IV Answers:
                  </span>
                  <p className="text-indigo-100 italic font-serif">"{ex.sampleSentence}"</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                <span>Source: {ex.source}</span>
                <span className="text-amber-400 font-semibold">{ex.gs4UsageGuide.substring(0, 30)}...</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* QUOTES VIEW */}
      {activeSubTab === 'quotes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {filteredQuotes.map((q) => (
            <div 
              key={q.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Theme: {q.theme}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                      {q.verificationStatus}
                    </span>
                    <button 
                      onClick={() => toggleBookmark(q.id)}
                      className="text-slate-400 hover:text-amber-400"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarks.includes(q.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-slate-100 italic font-serif leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
                  "{q.quote}"
                </p>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400">— {q.speaker}</span>
                  <button
                    onClick={() => handleCopyQuote(q.id, q.quote, q.speaker)}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedId === q.id ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-xs text-slate-400 space-y-1">
                  <div><strong>Context:</strong> {q.context}</div>
                  <div><strong>Verified Source:</strong> {q.source}</div>
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs space-y-1">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                  How to Use in Mains:
                </span>
                <p className="text-slate-200">{q.gs4UsageTips}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
