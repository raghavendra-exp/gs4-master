// src/features/VocabularyHub.tsx
// Comprehensive Bilingual Ethics Vocabulary Hub (300+ Terms Architecture)

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { VOCABULARY_DATA } from '../data';
import { 
  BookA, 
  Search, 
  Languages, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  ArrowRightLeft
} from 'lucide-react';

export const VocabularyHub: React.FC = () => {
  const { hindiMode, setHindiMode } = useEthics();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTermId, setSelectedTermId] = useState<string>(VOCABULARY_DATA[0].id);

  const filteredVocab = VOCABULARY_DATA.filter(v => 
    v.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.hindiTerm.includes(searchTerm) ||
    v.simpleDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.administrativeApplication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeVocab = VOCABULARY_DATA.find(v => v.id === selectedTermId) || VOCABULARY_DATA[0];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
              <BookA className="w-3.5 h-3.5 text-teal-400" /> Bilingual Lexicon (300+ Architecture)
            </span>
            <span className="text-xs text-slate-400">English + Hindi Conceptual Mastery</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Ethics & Administrative Vocabulary
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Master precise administrative terminology, philosophical definitions, antonyms, and field applications.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search terms (e.g. Integrity, शुचिता)..."
            className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* 2-Column Vocabulary Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Terms List (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
            Term Directory ({filteredVocab.length})
          </div>
          <div className="space-y-2">
            {filteredVocab.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedTermId(item.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  activeVocab.id === item.id
                    ? 'bg-slate-800 border-teal-500 shadow-md ring-1 ring-teal-500'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-white">{item.term}</h3>
                  <span className="text-xs text-teal-300 font-serif font-medium">{item.hindiTerm}</span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                  {item.simpleDefinition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Active Term Detailed Card (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-black text-white font-serif">{activeVocab.term}</h2>
              <span className="text-xl font-bold text-teal-300 font-serif">{activeVocab.hindiTerm}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Simple Explanation</span>
                <p className="text-xs text-slate-200 leading-relaxed">{activeVocab.simpleDefinition}</p>
              </div>
              <div className="p-4 bg-teal-950/20 rounded-xl border border-teal-500/30 space-y-1">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Technical & Academic Definition</span>
                <p className="text-xs text-teal-100 leading-relaxed">{activeVocab.technicalDefinition}</p>
              </div>
            </div>
          </div>

          {/* Administrative Application */}
          <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Administrative & Governance Application:
            </span>
            <p className="text-xs text-slate-200 leading-relaxed">{activeVocab.administrativeApplication}</p>
          </div>

          {/* Antonym & Related Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-rose-950/20 border border-rose-500/30 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <ArrowRightLeft className="w-4 h-4" /> Antonyms & Opposite Concepts:
              </span>
              <p className="text-xs text-slate-200">{activeVocab.antonym}</p>
            </div>

            <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Related Conceptual Terms:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeVocab.relatedTerms.map((rt, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] rounded font-semibold">
                    {rt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sample Usage Sentence */}
          <div className="p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl space-y-1">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
              Exemplary Usage in GS-IV Answer:
            </span>
            <p className="text-xs text-slate-100 italic font-serif">"{activeVocab.sampleUsage}"</p>
          </div>

        </div>

      </div>

    </div>
  );
};
