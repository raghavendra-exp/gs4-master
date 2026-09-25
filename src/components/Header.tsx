// src/components/Header.tsx
import React from 'react';
import { useEthics, ActiveTab } from '../context/EthicsContext';
import { 
  Scale, 
  Search, 
  Languages, 
  Bookmark, 
  Award, 
  FileText, 
  BookOpen, 
  HelpCircle
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    hindiMode, 
    setHindiMode, 
    searchQuery, 
    setSearchQuery, 
    bookmarks,
    completedCasesCount,
    writtenAnswersCount,
    setActiveTab
  } = useEthics();

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl px-4 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Subtitle */}
        <div 
          onClick={() => setActiveTab('case-simulator')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-indigo-600 to-emerald-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Scale className="w-6 h-6 text-amber-400 group-hover:text-amber-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-wider text-white font-serif uppercase">
                ETHICS MASTER
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-amber-500/20 to-indigo-500/20 text-amber-400 border border-amber-500/30">
                UPSC GS-IV • UPPSC
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Ethics • Integrity • Aptitude • Emotional Intelligence • Probity • Governance • Case Studies
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full md:w-80 lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search concepts, thinkers, cases, PYQs, quotes..."
            className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Quick Toggles and Metrics */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          
          {/* Hindi / English Bilingual Toggle */}
          <button 
            onClick={() => setHindiMode(prev => !prev)}
            title="Toggle Hindi/English Bilingual Mode"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              hindiMode 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-500/20' 
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{hindiMode ? 'हिंदी + English' : 'English Only'}</span>
          </button>

          {/* User Progress Badges */}
          <div className="hidden lg:flex items-center gap-2 text-xs bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400" title="Completed Case Studies">
              <Award className="w-3.5 h-3.5" /> {completedCasesCount} Cases
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-indigo-400" title="Written Mains Answers">
              <FileText className="w-3.5 h-3.5" /> {writtenAnswersCount} Answers
            </span>
            <span className="text-slate-600">|</span>
            <span 
              onClick={() => setActiveTab('dashboard')} 
              className="flex items-center gap-1 text-amber-400 cursor-pointer hover:underline"
              title="Saved Bookmarks"
            >
              <Bookmark className="w-3.5 h-3.5" /> {bookmarks.length} Saved
            </span>
          </div>

        </div>

      </div>
    </header>
  );
};
