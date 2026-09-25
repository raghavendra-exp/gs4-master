// src/features/ThinkersHub.tsx
// Comprehensive Database of Moral Thinkers, Thinker-to-Thinker Comparisons, and Thinker-to-Case Generator

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { THINKERS_DATA } from '../data';
import { 
  GraduationCap, 
  Search, 
  Bookmark, 
  BookOpen, 
  Scale, 
  Quote, 
  GitCompare, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const ThinkersHub: React.FC = () => {
  const { 
    selectedThinkerId, 
    setSelectedThinkerId, 
    bookmarks, 
    toggleBookmark, 
    hindiMode,
    setActiveTab 
  } = useEthics();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [comparisonMode, setComparisonMode] = useState<boolean>(false);
  const [compareThinker1, setCompareThinker1] = useState<string>('th-kant');
  const [compareThinker2, setCompareThinker2] = useState<string>('th-mill');

  const filteredThinkers = THINKERS_DATA.filter(t => {
    const matchesCat = activeCategory === 'All' || t.category === activeCategory;
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (t.hindiName && t.hindiName.includes(searchTerm)) ||
                          t.ethicalPhilosophy.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const activeThinker = THINKERS_DATA.find(t => t.id === selectedThinkerId) || THINKERS_DATA[0];

  const t1 = THINKERS_DATA.find(t => t.id === compareThinker1) || THINKERS_DATA[0];
  const t2 = THINKERS_DATA.find(t => t.id === compareThinker2) || THINKERS_DATA[1];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" /> Moral Thinkers Hub
            </span>
            <span className="text-xs text-slate-400">Indian & Western Traditions</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Philosophers, Leaders & Moral Reformers
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Ground your GS-IV answers in authoritative philosophical traditions, verified quotations, and administrative lessons.
          </p>
        </div>

        {/* Comparison Mode Toggle */}
        <button
          onClick={() => setComparisonMode(!comparisonMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
            comparisonMode
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
              : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
          }`}
        >
          <GitCompare className="w-4 h-4" />
          <span>{comparisonMode ? 'Back to Thinker Profile' : 'Interactive Thinker Comparison'}</span>
        </button>
      </div>

      {/* COMPARISON VIEW */}
      {comparisonMode ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Dialectical Comparison
              </span>
              <h2 className="text-xl font-bold text-white mt-1">Comparative Philosophical Matrix</h2>
            </div>
            
            {/* Select Thinkers to Compare */}
            <div className="flex items-center gap-3">
              <select
                value={compareThinker1}
                onChange={(e) => setCompareThinker1(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2"
              >
                {THINKERS_DATA.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
              <span className="text-xs font-bold text-amber-400">VS</span>
              <select
                value={compareThinker2}
                onChange={(e) => setCompareThinker2(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2"
              >
                {THINKERS_DATA.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 2-Column Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Thinker 1 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl space-y-4">
              <div className="border-b border-slate-700 pb-3">
                <span className="text-xs text-amber-400 font-bold uppercase">{t1.category} Tradition</span>
                <h3 className="text-xl font-bold text-white font-serif">{t1.name}</h3>
                <span className="text-xs text-slate-400">{t1.period} • {t1.country}</span>
              </div>
              <div className="text-xs text-slate-300 space-y-3">
                <p><strong>Ethical School:</strong> {t1.ethicalPhilosophy}</p>
                <div>
                  <strong>Core Ideas:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    {t1.coreIdeas.slice(0, 3).map((idea, idx) => (
                      <li key={idx}>{idea}</li>
                    ))}
                  </ul>
                </div>
                <p><strong>Administrative Lesson:</strong> {t1.administrativeRelevance}</p>
                <div className="p-3 bg-slate-900/60 rounded-xl italic font-serif text-slate-300">
                  "{t1.verifiedQuote.text.substring(0, 150)}..."
                </div>
              </div>
            </div>

            {/* Thinker 2 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl space-y-4">
              <div className="border-b border-slate-700 pb-3">
                <span className="text-xs text-indigo-400 font-bold uppercase">{t2.category} Tradition</span>
                <h3 className="text-xl font-bold text-white font-serif">{t2.name}</h3>
                <span className="text-xs text-slate-400">{t2.period} • {t2.country}</span>
              </div>
              <div className="text-xs text-slate-300 space-y-3">
                <p><strong>Ethical School:</strong> {t2.ethicalPhilosophy}</p>
                <div>
                  <strong>Core Ideas:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    {t2.coreIdeas.slice(0, 3).map((idea, idx) => (
                      <li key={idx}>{idea}</li>
                    ))}
                  </ul>
                </div>
                <p><strong>Administrative Lesson:</strong> {t2.administrativeRelevance}</p>
                <div className="p-3 bg-slate-900/60 rounded-xl italic font-serif text-slate-300">
                  "{t2.verifiedQuote.text.substring(0, 150)}..."
                </div>
              </div>
            </div>

          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-slate-200">
            <strong>GS-IV Synthesis Guideline:</strong> In civil service answers, never declare one thinker absolute winner over another. Show how their strengths complement: e.g., use Kant to establish human rights red-lines and due process, and Mill to optimize scarce resource allocation within those boundaries.
          </div>
        </div>
      ) : (
        /* STANDARD THINKER PROFILE VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Thinkers List (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              {['All', 'Indian', 'Western'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {filteredThinkers.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedThinkerId(t.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeThinker.id === t.id
                      ? 'bg-slate-800 border-indigo-500 shadow-md ring-1 ring-indigo-500'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      {t.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{t.period}</span>
                  </div>
                  <h3 className="font-bold text-sm text-white mt-1.5 flex items-center justify-between">
                    <span>{t.name}</span>
                    {hindiMode && t.hindiName && (
                      <span className="text-xs text-indigo-300 font-serif font-normal">{t.hindiName}</span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {t.ethicalPhilosophy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Detailed Thinker Card (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
            
            {/* Header */}
            <div className="border-b border-slate-800 pb-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                  {activeThinker.category} Moral Philosophy
                </span>
                <button
                  onClick={() => toggleBookmark(activeThinker.id)}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${bookmarks.includes(activeThinker.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  <span>{bookmarks.includes(activeThinker.id) ? 'Bookmarked' : 'Bookmark'}</span>
                </button>
              </div>

              <div className="flex items-baseline gap-3">
                <h2 className="text-2xl font-black text-white font-serif">{activeThinker.name}</h2>
                {hindiMode && activeThinker.hindiName && (
                  <span className="text-lg text-indigo-300 font-serif font-medium">({activeThinker.hindiName})</span>
                )}
              </div>
              <div className="text-xs text-slate-400">
                <span>Period: <strong className="text-slate-200">{activeThinker.period}</strong></span> • 
                <span className="ml-2">Origin: <strong className="text-slate-200">{activeThinker.country}</strong></span>
              </div>
            </div>

            {/* Core Ideas */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Major Works & Treatises:</h4>
              <div className="flex flex-wrap gap-2">
                {activeThinker.majorWorks.map((work, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-lg font-mono">
                    {work}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Core Ethical Ideas:</h4>
              <div className="space-y-2">
                {activeThinker.coreIdeas.map((idea, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/40 border border-slate-700/60 rounded-xl text-xs text-slate-200 flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{idea}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Administrative Relevance & Modern Application */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1.5">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Administrative Relevance</span>
                <p className="text-xs text-slate-300 leading-relaxed">{activeThinker.administrativeRelevance}</p>
              </div>
              <div className="p-4 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-1.5">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Modern Field Application</span>
                <p className="text-xs text-indigo-100 leading-relaxed">{activeThinker.modernApplication}</p>
              </div>
            </div>

            {/* Verified Quotation */}
            <div className="p-5 bg-gradient-to-br from-amber-500/10 to-indigo-500/10 border border-amber-500/30 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5" /> Verified Quotation
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                  {activeThinker.verifiedQuote.status}
                </span>
              </div>
              <p className="text-xs text-slate-100 italic font-serif leading-relaxed">
                "{activeThinker.verifiedQuote.text}"
              </p>
              <div className="text-[11px] text-slate-400">
                Context: {activeThinker.verifiedQuote.context} | Source: {activeThinker.verifiedQuote.source}
              </div>
            </div>

            {/* Potential Mains Usage & PYQs */}
            <div className="p-4 bg-slate-800/40 border border-slate-700 rounded-xl space-y-2">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                How to integrate {activeThinker.name} into Mains GS-IV Answers:
              </span>
              <p className="text-xs text-slate-300">{activeThinker.potentialMainsUsage}</p>
              
              <div className="pt-2 border-t border-slate-700/60 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Associated PYQs:</span>
                {activeThinker.pyqReferences.map((pyq, idx) => (
                  <div key={idx} className="text-xs text-slate-300 font-serif italic">
                    {pyq}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
