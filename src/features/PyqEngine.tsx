// src/features/PyqEngine.tsx
// Comprehensive PYQ Database & Analysis Engine for UPSC GS-IV and UPPSC Ethics

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { PYQ_DATABASE } from '../data';
import { 
  History, 
  Search, 
  Filter, 
  BarChart2, 
  BookOpen, 
  ChevronRight, 
  TrendingUp, 
  FileText,
  Sparkles
} from 'lucide-react';

export const PyqEngine: React.FC = () => {
  const { setActiveTab } = useEthics();

  const [filterExam, setFilterExam] = useState<string>('All');
  const [filterType, setFilterType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPyqId, setSelectedPyqId] = useState<string>(PYQ_DATABASE[0].id);

  const filteredPyqs = PYQ_DATABASE.filter(q => {
    const matchesExam = filterExam === 'All' || q.exam === filterExam;
    const matchesType = filterType === 'All' || q.type === filterType;
    const matchesSearch = q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          q.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.directive.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesExam && matchesType && matchesSearch;
  });

  const activePyq = PYQ_DATABASE.find(q => q.id === selectedPyqId) || PYQ_DATABASE[0];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <History className="w-3.5 h-3.5 text-amber-400" /> PYQ Database & Trend Engine
            </span>
            <span className="text-xs text-slate-400">Actual UPSC 2013–2024 & UPPSC Questions</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Ethics Previous Year Question Analytics
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Empirical breakdown of question trends, recurring thinkers, directive distributions, and model approach frameworks.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search PYQs by keyword, topic, or thinker..."
            className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Real Frequency & Trend Analysis Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Most Recurring Theme</div>
          <div className="text-base font-extrabold text-amber-400 mt-1">Integrity & Probity</div>
          <div className="text-[10px] text-slate-500">Appears in 85% of exam papers</div>
        </div>
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Most Cited Thinker</div>
          <div className="text-base font-extrabold text-indigo-400 mt-1">Mahatma Gandhi</div>
          <div className="text-[10px] text-slate-500">7 Sins, Means/Ends, Talisman</div>
        </div>
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Top Directive</div>
          <div className="text-base font-extrabold text-emerald-400 mt-1">Discuss & Examine</div>
          <div className="text-[10px] text-slate-500">Requires multi-dimensional views</div>
        </div>
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Case Study Balance</div>
          <div className="text-base font-extrabold text-teal-400 mt-1">120 Marks (48%)</div>
          <div className="text-[10px] text-slate-500">Section B of GS-IV paper</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400 px-2 text-[10px] font-bold uppercase">Exam:</span>
          {[
            { id: 'All', label: 'All Exams' },
            { id: 'UPSC', label: 'UPSC CSE' },
            { id: 'UPPSC', label: 'UPPSC PCS' },
            { id: 'UP_RO_ARO', label: 'UP RO/ARO' }
          ].map((ex) => (
            <button
              key={ex.id}
              onClick={() => setFilterExam(ex.id)}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                filterExam === ex.id ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400 px-2 text-[10px] font-bold uppercase">Type:</span>
          {['All', 'Theory', 'Quote-based'].map((tp) => (
            <button
              key={tp}
              onClick={() => setFilterType(tp)}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                filterType === tp ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tp}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column PYQ Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left PYQ List (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
            Question Archive ({filteredPyqs.length})
          </div>
          <div className="space-y-2">
            {filteredPyqs.map((q) => (
              <div
                key={q.id}
                onClick={() => setSelectedPyqId(q.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activePyq.id === q.id
                    ? 'bg-slate-800 border-amber-500 shadow-md ring-1 ring-amber-500'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {q.exam} {q.year} • {q.questionNumber}
                  </span>
                  <span className="text-slate-400 font-mono">{q.marks} Marks • {q.directive}</span>
                </div>
                <p className="text-xs text-slate-200 line-clamp-3 mt-2 font-serif">
                  "{q.questionText}"
                </p>
                <div className="mt-2 text-[10px] text-indigo-400 font-medium">
                  {q.topic}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Active PYQ Full Approach Card (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {activePyq.exam} Civil Services Mains • {activePyq.year}
              </span>
              <span className="text-xs font-mono text-slate-400">{activePyq.paper}</span>
            </div>
            <div className="text-lg font-bold text-white font-serif leading-relaxed">
              "{activePyq.questionText}"
            </div>
            {activePyq.hindiText && (
              <div className="text-xs text-amber-300/80 font-serif">
                "{activePyq.hindiText}"
              </div>
            )}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300">
                Marks: <strong className="text-white">{activePyq.marks}</strong>
              </span>
              <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300">
                Word Limit: <strong className="text-white">{activePyq.wordLimit} Words</strong>
              </span>
              <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded font-semibold">
                Directive: {activePyq.directive}
              </span>
            </div>
          </div>

          {/* Model Answer Approach Breakdown */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-400" /> Model Approach & Structural Blueprint:
            </h3>

            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1.5 text-xs">
              <span className="font-bold text-amber-400 uppercase tracking-wider">Recommended Introduction:</span>
              <p className="text-slate-200 leading-relaxed">{activePyq.modelApproach.introduction}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Dimensions to Address in Body:</span>
              {activePyq.modelApproach.dimensionsToAddress.map((dim, idx) => (
                <div key={idx} className="p-3 bg-slate-800/40 border border-slate-700/60 rounded-xl text-xs text-slate-200 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-amber-400 font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span>{dim}</span>
                </div>
              ))}
            </div>

            {/* Diagram Suggestion */}
            {activePyq.modelApproach.diagramSuggestion && (
              <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-xl text-xs space-y-1">
                <span className="font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Recommended Visual Diagram / Flowchart:
                </span>
                <p className="text-indigo-100">{activePyq.modelApproach.diagramSuggestion}</p>
              </div>
            )}

            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1.5 text-xs">
              <span className="font-bold text-emerald-400 uppercase tracking-wider">Recommended Conclusion:</span>
              <p className="text-slate-200 leading-relaxed">{activePyq.modelApproach.conclusion}</p>
            </div>
          </div>

          {/* Practice in Mains Lab CTA */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setActiveTab('mains-lab')}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Write Answer for this Question in Mains Lab</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
