// src/features/ConceptsHub.tsx
// Digital Ethics Textbook Hub adhering to the 12-Step Content Principle

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { CONCEPTS_DATA } from '../data';
import { 
  Brain, 
  Search, 
  Bookmark, 
  BookOpen, 
  Scale, 
  AlertTriangle, 
  GraduationCap, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  Layers,
  Sparkles,
  DownloadCloud
} from 'lucide-react';

export const ConceptsHub: React.FC = () => {
  const { 
    selectedConceptId, 
    setSelectedConceptId, 
    bookmarks, 
    toggleBookmark, 
    hindiMode,
    setActiveTab,
    setSelectedCaseId 
  } = useEthics();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Ethics Fundamentals', 'Foundational Values', 'Emotional Intelligence', 'Probity & Governance'];

  const filteredConcepts = CONCEPTS_DATA.filter(c => {
    const matchesCat = activeCategory === 'All' || c.category === activeCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.simpleMeaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (c.hindiTitle && c.hindiTitle.includes(searchTerm));
    return matchesCat && matchesSearch;
  });

  const activeConcept = CONCEPTS_DATA.find(c => c.id === selectedConceptId) || CONCEPTS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-amber-400" /> Digital Ethics Textbook
            </span>
            <span className="text-xs text-slate-400">12-Step Pedagogical Method</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Ethics & Human Interface Master Library
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Systematic progression: Concept → Meaning → Dimensions → Administrative Application → Dilemma → Thinker → Answer Framework.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search concepts or terms..."
            className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Concept Selector List (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
            Available Modules ({filteredConcepts.length})
          </div>
          <div className="space-y-2">
            {filteredConcepts.map((concept) => (
              <div
                key={concept.id}
                onClick={() => setSelectedConceptId(concept.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeConcept.id === concept.id
                    ? 'bg-slate-800 border-amber-500 shadow-md ring-1 ring-amber-500'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {concept.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(concept.id);
                    }}
                    className="text-slate-400 hover:text-amber-400"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarks.includes(concept.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>
                <h3 className="font-bold text-sm text-white mt-2">{concept.title}</h3>
                {hindiMode && concept.hindiTitle && (
                  <p className="text-xs text-amber-300/80 font-normal">{concept.hindiTitle}</p>
                )}
                <p className="text-xs text-slate-400 line-clamp-2 mt-1.5">
                  {concept.simpleMeaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Active Concept Detailed 12-Step View (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-8 shadow-2xl">
          
          {/* Concept Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {activeConcept.category}
              </span>
              <button
                onClick={() => toggleBookmark(activeConcept.id)}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarks.includes(activeConcept.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span>{bookmarks.includes(activeConcept.id) ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>
            <h2 className="text-2xl font-black text-white font-serif">{activeConcept.title}</h2>
            {hindiMode && activeConcept.hindiTitle && (
              <h3 className="text-sm font-semibold text-amber-400">{activeConcept.hindiTitle}</h3>
            )}
          </div>

          {/* Meaning Cards: Simple vs Philosophical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1.5">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                1. Simple Meaning
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">{activeConcept.simpleMeaning}</p>
            </div>
            <div className="p-4 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-1.5">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                2. Philosophical & Technical Dimension
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed">{activeConcept.philosophicalMeaning}</p>
            </div>
          </div>

          {/* Dimensions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" /> Key Dimensions & Facets:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeConcept.dimensions.map((dim, idx) => (
                <div key={idx} className="p-2.5 bg-slate-800/40 border border-slate-700/60 rounded-lg text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{dim}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Example vs Counter Example */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Positive Illustration</span>
              <p className="text-xs text-slate-200">{activeConcept.example}</p>
            </div>
            <div className="p-4 bg-rose-950/20 border border-rose-500/30 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Negative Counter-Example</span>
              <p className="text-xs text-slate-200">{activeConcept.counterExample}</p>
            </div>
          </div>

          {/* Administrative Application & Dilemma */}
          <div className="space-y-4">
            <div className="p-4 bg-slate-800/70 border border-slate-700 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Administrative Application
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">{activeConcept.administrativeApplication}</p>
            </div>

            <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> Typical Administrative Dilemma
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">{activeConcept.ethicalDilemma}</p>
            </div>
          </div>

          {/* Distinction from Similar Terms */}
          {activeConcept.differenceFromSimilarTerms.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Conceptual Demarcation (Difference from Similar Concepts)
              </h4>
              <div className="space-y-2">
                {activeConcept.differenceFromSimilarTerms.map((diff, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-amber-300">
                      {diff.term} {diff.hindiTerm && `(${diff.hindiTerm})`} vs {activeConcept.title}:
                    </span>
                    <p className="text-slate-300">{diff.difference}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Constitutional Linkage */}
          <div className="p-4 bg-slate-800/40 border border-slate-700 rounded-xl space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Constitutional Alignment
            </span>
            <div className="flex flex-wrap gap-2">
              {activeConcept.constitutionalLink.articles.map((art, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-teal-500/20 text-teal-300 text-[10px] font-bold rounded">
                  {art}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-300">{activeConcept.constitutionalLink.relevance}</p>
          </div>

          {/* Answer Writing Framework */}
          <div className="p-5 bg-gradient-to-br from-indigo-950/30 to-slate-800/60 border border-indigo-500/30 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> 10-Marker Mains Answer Blueprint
              </span>
              <button 
                onClick={() => setActiveTab('mains-lab')}
                className="text-[10px] text-amber-400 hover:underline flex items-center gap-1"
              >
                Practice in Mains Lab <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="text-xs text-slate-200 space-y-2">
              <p><strong>Introduction:</strong> {activeConcept.answerFramework.introduction}</p>
              <div>
                <strong>Body Dimensions:</strong>
                <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-300">
                  {activeConcept.answerFramework.bodyPoints.map((bp, idx) => (
                    <li key={idx}>{bp}</li>
                  ))}
                </ul>
              </div>
              <p><strong>Conclusion:</strong> {activeConcept.answerFramework.conclusion}</p>
            </div>
          </div>

          {/* Official PDF Books & Literature References */}
          <div className="p-4 bg-slate-950/80 border border-emerald-500/20 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <DownloadCloud className="w-3.5 h-3.5" /> Official PDF Books & Literature Sources
              </span>
              <button
                onClick={() => setActiveTab('pdf-library')}
                className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-all"
              >
                Open Full PDF Library <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeConcept.sources.map((src, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-[11px] rounded-lg">
                  {src}
                </span>
              ))}
            </div>
          </div>

          {/* Connected Case Study Link */}
          {activeConcept.caseStudyRefId && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedCaseId(activeConcept.caseStudyRefId || null);
                  setActiveTab('case-simulator');
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
              >
                Solve Dedicated Case Study on {activeConcept.title} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
