// src/features/ValuesHub.tsx
// Comprehensive Human Values & Foundational Civil Service Values Library with Value-to-Example Matrix

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { VALUES_DATA } from '../data';
import { 
  Heart, 
  Search, 
  Bookmark, 
  Scale, 
  Award, 
  BookOpen, 
  ShieldAlert, 
  Quote, 
  FileText,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const ValuesHub: React.FC = () => {
  const { bookmarks, toggleBookmark, hindiMode, setActiveTab } = useEthics();
  const [selectedValId, setSelectedValId] = useState<string>(VALUES_DATA[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterCat, setFilterCat] = useState<string>('All');

  const categories = ['All', 'Foundational', 'Constitutional', 'Personal'];

  const filteredValues = VALUES_DATA.filter(v => {
    const matchesCat = filterCat === 'All' || v.category === filterCat;
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          v.hindiName.includes(searchTerm) || 
                          v.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const activeValue = VALUES_DATA.find(v => v.id === selectedValId) || VALUES_DATA[0];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400" /> Values Library & Matrix
            </span>
            <span className="text-xs text-slate-400">Value to Example Engine</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Foundational & Constitutional Values
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Explore definitions, civil service importance, constitutional ties, historical instances, and GS-IV application.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search values (e.g. सत्यनिष्ठा, करुणा)..."
            className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-rose-500"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCat(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterCat === cat
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat} Values
          </button>
        ))}
      </div>

      {/* 2-Column Value Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Values List (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
            Values Database ({filteredValues.length})
          </div>
          <div className="space-y-2">
            {filteredValues.map((val) => (
              <div
                key={val.id}
                onClick={() => setSelectedValId(val.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeValue.id === val.id
                    ? 'bg-slate-800 border-rose-500 shadow-md ring-1 ring-rose-500'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    {val.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(val.id);
                    }}
                    className="text-slate-400 hover:text-amber-400"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarks.includes(val.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>
                <h3 className="font-bold text-sm text-white mt-1.5 flex items-center justify-between">
                  <span>{val.name}</span>
                  {hindiMode && (
                    <span className="text-xs text-rose-300 font-serif font-normal">{val.hindiName}</span>
                  )}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {val.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Active Value Detailed Matrix (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
                {activeValue.category} Value
              </span>
              <button
                onClick={() => toggleBookmark(activeValue.id)}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarks.includes(activeValue.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span>{bookmarks.includes(activeValue.id) ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl font-black text-white font-serif">{activeValue.name}</h2>
              {hindiMode && (
                <span className="text-lg text-rose-300 font-serif font-medium">({activeValue.hindiName})</span>
              )}
            </div>
            <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/40 p-3 rounded-xl border border-slate-700/60">
              <strong>Definition:</strong> {activeValue.definition}
            </p>
          </div>

          {/* Key Dimensions */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Dimensions:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeValue.dimensions.map((dim, idx) => (
                <div key={idx} className="p-2.5 bg-slate-800/40 border border-slate-700/60 rounded-lg text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  <span>{dim}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Civil Service Importance & Constitutional Connection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1.5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Why Essential in Public Administration?</span>
              <p className="text-xs text-slate-300 leading-relaxed">{activeValue.importanceInCivilServices}</p>
            </div>
            <div className="p-4 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-1.5">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Constitutional Anchor</span>
              <p className="text-xs text-indigo-100 leading-relaxed">{activeValue.constitutionalConnection}</p>
            </div>
          </div>

          {/* Value to Example Engine: Historical vs Administrative vs Modern */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-400" /> Value-to-Example Matrix:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Historical Instance</span>
                <p className="text-xs text-slate-300">{activeValue.historicalExample}</p>
              </div>
              <div className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Modern Administrative</span>
                <p className="text-xs text-slate-300">{activeValue.modernExample}</p>
              </div>
              <div className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Personal / Field Application</span>
                <p className="text-xs text-slate-300">{activeValue.administrativeExample}</p>
              </div>
            </div>
          </div>

          {/* Quote & Thinker Link */}
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" /> Verified Quote for Mains Answers
              </span>
              <span className="text-[10px] bg-rose-500/20 px-2 py-0.5 rounded text-rose-300 font-mono">
                {activeValue.quote.status}
              </span>
            </div>
            <p className="text-xs text-slate-200 italic font-serif">"{activeValue.quote.text}"</p>
            <div className="text-[11px] text-slate-400 text-right">— {activeValue.quote.speaker}</div>
          </div>

          {/* Potential Questions & Case Study Connection */}
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Potential GS-IV Question:
            </span>
            <p className="text-xs text-slate-200 italic font-serif">"{activeValue.potentialMainsQuestion}"</p>
            <div className="pt-2 flex justify-between items-center text-xs">
              <span className="text-slate-400">Case Theme: <strong className="text-slate-200">{activeValue.potentialCaseStudyTopic}</strong></span>
              <button 
                onClick={() => setActiveTab('mains-lab')}
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                Write in Mains Lab <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
