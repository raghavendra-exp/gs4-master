// src/features/RoAroEthicsHub.tsx
// Comprehensive UP RO/ARO (Samiksha Adhikari / Sahayak Samiksha Adhikari) Ethics & Secretariat Hub
// Integrates 40+ Bilingual Administrative Vocabulary (Paper 2), Hindi Essay Ethics (120M), 
// UP Lokayukta Act 1975, and 3-Way Exam Matrix.

import React, { useState, useMemo } from 'react';
import { useEthics } from '../context/EthicsContext';
import { 
  RO_ARO_VOCABULARY, 
  RO_ARO_ESSAY_TOPICS, 
  UP_LOKAYUKTA_ACT_1975, 
  COMPARATIVE_EXAM_MATRIX 
} from '../data';
import { 
  BookMarked, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Search, 
  ArrowRightLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Copy, 
  Check, 
  Sparkles, 
  HelpCircle, 
  Eye, 
  BookOpen, 
  Scale, 
  Landmark, 
  RotateCcw,
  GraduationCap
} from 'lucide-react';

export const RoAroEthicsHub: React.FC = () => {
  const { hindiMode } = useEthics();
  const [activeSubTab, setActiveSubTab] = useState<'vocabulary' | 'essays' | 'lokayukta' | 'matrix'>('vocabulary');
  
  // Vocabulary state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [vocabMode, setVocabMode] = useState<'list' | 'flashcard'>('list');
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedEssayId, setSelectedEssayId] = useState<string>(RO_ARO_ESSAY_TOPICS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(RO_ARO_VOCABULARY.map(v => v.category)));
    return ['ALL', ...cats];
  }, []);

  const filteredVocab = useMemo(() => {
    return RO_ARO_VOCABULARY.filter(item => {
      const matchesSearch = 
        item.englishTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hindiTerm.includes(searchTerm) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const currentEssay = useMemo(() => {
    return RO_ARO_ESSAY_TOPICS.find(e => e.id === selectedEssayId) || RO_ARO_ESSAY_TOPICS[0];
  }, [selectedEssayId]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setCurrentFlashcardIndex(prev => (prev + 1) % filteredVocab.length);
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setCurrentFlashcardIndex(prev => (prev - 1 + filteredVocab.length) % filteredVocab.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border border-emerald-500/30 rounded-2xl p-6 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Landmark className="w-4 h-4" />
              <span>UP Secretariat Specialized Module (समीक्षा अधिकारी / सहायक समीक्षा अधिकारी)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              UP RO / ARO Ethics & Secretariat Governance Hub
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              {hindiMode
                ? 'उत्तर प्रदेश सचिवालय एवं लोक सेवा आयोग समीक्षा अधिकारी मुख्य परीक्षा: प्रशासनिक पारिभाषिक शब्दावली (20 अंक), नैतिक निबंध प्रारूप (120 अंक), उप्र लोकायुक्त अधिनियम 1975 एवं त्रिपक्षीय परीक्षा तुलना।'
                : 'Complete Ethical & Administrative Convergence: 40+ Official Bilingual Terms, Hindi Literary Essays with Ethical Anchors, UP Lokayukta Act 1975, and 3-Way Comparative Evaluation Matrix.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-700">
            <span className="text-[11px] font-mono text-emerald-400 px-2 py-1 bg-emerald-500/10 rounded font-semibold">
              Mains 400M Anchor
            </span>
            <span className="text-[11px] font-mono text-amber-300 px-2 py-1 bg-amber-500/10 rounded font-semibold">
              Paper 2 + Paper 1
            </span>
          </div>
        </div>

        {/* Sub Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveSubTab('vocabulary')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'vocabulary'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Administrative Vocabulary (40+)</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-300">
              20M
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('essays')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'essays'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Hindi Essay Ethics Lab</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-300">
              120M
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('lokayukta')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'lokayukta'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>UP Lokayukta Act 1975</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-300">
              Anti-Graft
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('matrix')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'matrix'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>UPSC vs UPPSC vs RO/ARO Matrix</span>
          </button>
        </div>
      </div>

      {/* Sub Tab 1: Administrative Vocabulary Lab */}
      {activeSubTab === 'vocabulary' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search term (English or Hindi)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setVocabMode('list')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  vocabMode === 'list'
                    ? 'bg-slate-800 text-emerald-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Dictionary List ({filteredVocab.length})
              </button>
              <button
                onClick={() => setVocabMode('flashcard')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  vocabMode === 'flashcard'
                    ? 'bg-slate-800 text-emerald-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Flashcard Exam Drill
              </button>
            </div>
          </div>

          {/* Flashcard Mode */}
          {vocabMode === 'flashcard' && filteredVocab.length > 0 && (
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Card {currentFlashcardIndex + 1} of {filteredVocab.length}</span>
                <span className="text-emerald-400 font-bold">Click card to reveal definition & usage</span>
              </div>

              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-emerald-500/40 rounded-2xl p-8 min-h-[340px] flex flex-col justify-between cursor-pointer hover:border-emerald-400 transition-all shadow-2xl relative select-none"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                    {filteredVocab[currentFlashcardIndex].category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Flip</span>
                  </div>
                </div>

                {!isFlipped ? (
                  <div className="text-center py-8">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
                      Official English Term
                    </span>
                    <h2 className="text-3xl font-extrabold text-white mb-4">
                      {filteredVocab[currentFlashcardIndex].englishTerm}
                    </h2>
                    <p className="text-sm text-slate-400 italic">
                      What is the exact official Hindi translation and Secretariat noting usage?
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 py-4 animate-in fade-in duration-300">
                    <div className="text-center border-b border-slate-800 pb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                        मानक प्रशासनिक अनुवाद
                      </span>
                      <h2 className="text-3xl font-black text-amber-300">
                        {filteredVocab[currentFlashcardIndex].hindiTerm}
                      </h2>
                      <div className="flex justify-center gap-2 mt-2">
                        {filteredVocab[currentFlashcardIndex].alternativeHindiTerms.map((alt, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            {alt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs space-y-2">
                      <p className="text-slate-300">
                        <strong className="text-white">Definition:</strong> {filteredVocab[currentFlashcardIndex].definition}
                      </p>
                      <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-200 font-mono text-[11px]">
                        <strong>टिप्पणी में प्रयोग:</strong> {filteredVocab[currentFlashcardIndex].sampleNotingUsage}
                      </div>
                      <div className="p-2.5 rounded-lg bg-red-950/20 border border-red-500/20 text-red-300 text-[11px] flex items-start gap-1.5">
                        <AlertTriangle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                        <div>
                          <strong>Common Error:</strong> {filteredVocab[currentFlashcardIndex].commonMistakes}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                  <span>Direction: English ➔ Hindi</span>
                  <span className="text-amber-400 font-semibold">UP RO/ARO Paper 2 Standard</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevFlashcard}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
                >
                  ◀ Previous Term
                </button>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                >
                  {isFlipped ? 'Show Front' : 'Show Answer'}
                </button>
                <button
                  onClick={handleNextFlashcard}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
                >
                  Next Term ▶
                </button>
              </div>
            </div>
          )}

          {/* List Mode */}
          {vocabMode === 'list' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVocab.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all shadow-md group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                        {item.category}
                      </span>
                      <button
                        onClick={() => handleCopy(`${item.englishTerm} = ${item.hindiTerm}`, item.id)}
                        className="text-slate-500 hover:text-emerald-400 transition-colors p-1"
                        title="Copy Translation"
                      >
                        {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="flex items-baseline justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.englishTerm}
                        </h3>
                        <span className="text-xs text-slate-400">Official Standard</span>
                      </div>
                      <ArrowRightLeft className="w-4 h-4 text-emerald-500 shrink-0 mx-2" />
                      <div className="text-right">
                        <h4 className="text-lg font-black text-amber-300 font-hindi">
                          {item.hindiTerm}
                        </h4>
                        <span className="text-[11px] text-slate-400">
                          {item.alternativeHindiTerms.join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <p className="text-slate-300 leading-relaxed">
                        <strong className="text-slate-100">Definition:</strong> {item.definition}
                      </p>
                      
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-emerald-300/90">
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-1">
                          सचिवालय शासकीय टिप्पणी (Sample Noting):
                        </span>
                        {item.sampleNotingUsage}
                      </div>

                      <div className="p-2 rounded-lg bg-red-950/20 border border-red-500/20 text-red-300 text-[11px] flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <strong>Common Exam Trap:</strong> {item.commonMistakes}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>UP Secretariat Section Practice</span>
                    <span>Paper 2 (20 Marks Target)</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sub Tab 2: Hindi Essay Ethics Lab */}
      {activeSubTab === 'essays' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Essay Theme Selector Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase text-slate-400 font-bold px-1">
              Select UP RO/ARO Essay Model Draft (120 Marks):
            </h3>

            {RO_ARO_ESSAY_TOPICS.map((essay) => {
              const isSelected = essay.id === selectedEssayId;
              return (
                <button
                  key={essay.id}
                  onClick={() => setSelectedEssayId(essay.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      {essay.theme}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                  </div>
                  <h4 className={`text-sm font-bold line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {essay.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {essay.corePremise}
                  </p>
                </button>
              );
            })}

            {/* Essay Writing Guidelines Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-3">
              <h5 className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                RO/ARO Essay Scoring Protocol
              </h5>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Total Marks: <strong>120 Marks</strong> (3 Essays × 40 Marks each).</li>
                <li>Word limit: <strong>600 words</strong> per essay.</li>
                <li>Theme 1 (साहित्य और संस्कृति): Mandatory integration of Bhakti poets (Kabir, Tulsidas) and modern moral litterateurs (Premchand, Dinkar).</li>
                <li>Theme 2 & 3: Anchor in constitutional morality (Articles 14, 21, 38) and good governance statutory bodies.</li>
              </ul>
            </div>
          </div>

          {/* Essay Detail Panel */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold uppercase">
                    Theme: {currentEssay.theme}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white mt-2 font-hindi">
                    {currentEssay.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Moral Anchor: <span className="text-emerald-300">{currentEssay.moralPhilosophicalAnchor}</span>
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(currentEssay.modelEssayDraft, currentEssay.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all shrink-0"
                >
                  {copiedId === currentEssay.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === currentEssay.id ? 'Copied Full Draft' : 'Copy Full Essay Draft'}</span>
                </button>
              </div>

              {/* Authentic Literary & Moral Quotes */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mandatory Literary Anchors & Couplets:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentEssay.famousLiteraryQuotes.map((q, idx) => (
                    <div key={idx} className="bg-slate-950 border border-amber-500/20 rounded-xl p-3.5 space-y-2">
                      <p className="text-xs font-bold text-amber-200 font-hindi italic leading-relaxed">
                        "{q.quote}"
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-1.5">
                        <span className="text-emerald-400 font-semibold">— {q.author}</span>
                        <span className="text-[10px] text-slate-500">{q.context}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Part Outline */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-3 text-xs">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  Three-Part Strategic Outline (त्रि-चरणीय संरचना):
                </h4>
                <div className="space-y-2 text-slate-300">
                  <p>
                    <strong className="text-emerald-400">1. प्रस्तावना (Introduction):</strong> {currentEssay.threePartOutline.introduction}
                  </p>
                  <div className="pl-3 border-l-2 border-emerald-500/30 space-y-1 my-2">
                    <strong className="text-amber-400 block">2. मुख्य भाग (Body Dimensions):</strong>
                    {currentEssay.threePartOutline.bodyDimensions.map((dim, i) => (
                      <p key={i} className="text-[11px] text-slate-300">• {dim}</p>
                    ))}
                  </div>
                  <p>
                    <strong className="text-emerald-400">3. नैतिक निष्कर्ष (Ethical Conclusion):</strong> {currentEssay.threePartOutline.ethicalSynthesisAndConclusion}
                  </p>
                </div>
              </div>

              {/* Full Model Essay Draft */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Complete Model Essay Draft (600 Words):
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500">Pure Devanagari Hindi Text</span>
                </div>
                
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-sm leading-relaxed text-slate-200 font-hindi whitespace-pre-line max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                  {currentEssay.modelEssayDraft}
                </div>
              </div>

              {/* Constitutional & Statutory Anchors */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex flex-wrap items-center gap-2">
                <span className="text-slate-400 font-semibold">Constitutional & 2nd ARC Anchors:</span>
                {currentEssay.keyDataAndConstitutionalArticles.map((art, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px]">
                    {art}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub Tab 3: UP Lokayukta Act 1975 & Anti-Corruption */}
      {activeSubTab === 'lokayukta' && (
        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                Statutory Ombudsman Architecture
              </span>
              <h2 className="text-2xl font-black text-white mt-2">
                {UP_LOKAYUKTA_ACT_1975.statuteName}
              </h2>
              <h3 className="text-sm font-bold text-amber-300 font-hindi">
                {UP_LOKAYUKTA_ACT_1975.hindiStatuteName}
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                {UP_LOKAYUKTA_ACT_1975.historicalOrigin}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Appointment Process */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" />
                  Appointment & Collegium
                </h4>
                <div className="text-xs text-slate-300 space-y-2">
                  <p>
                    <strong className="text-white">Appointed by:</strong> {UP_LOKAYUKTA_ACT_1975.appointmentProcess.appointingAuthority}
                  </p>
                  <p>
                    <strong className="text-white">Eligibility:</strong> {UP_LOKAYUKTA_ACT_1975.appointmentProcess.eligibility}
                  </p>
                  <div>
                    <strong className="text-white block mb-1">Mandatory Collegium Consultation:</strong>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-400">
                      {UP_LOKAYUKTA_ACT_1975.appointmentProcess.collegiumMembers.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tenure and Conditions */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5" />
                  Tenure & Independence
                </h4>
                <div className="text-xs text-slate-300 space-y-2">
                  <p>
                    <strong className="text-white">Tenure:</strong> {UP_LOKAYUKTA_ACT_1975.tenureAndConditions.tenure}
                  </p>
                  <p>
                    <strong className="text-white">Post-Tenure Restriction:</strong> {UP_LOKAYUKTA_ACT_1975.tenureAndConditions.reappointment}
                  </p>
                  <p>
                    <strong className="text-white">Removal Security:</strong> {UP_LOKAYUKTA_ACT_1975.tenureAndConditions.removal}
                  </p>
                </div>
              </div>

              {/* Powers & Civil Court Status */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Investigative Powers (CPC 1908)
                </h4>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  {UP_LOKAYUKTA_ACT_1975.powersAndProcedures.map((p, i) => (
                    <li key={i} className="text-[11px] leading-relaxed">{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Jurisdiction Breakdown: Included vs Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Within Jurisdiction (अधिकार क्षेत्र के अधीन):
                </h4>
                <ul className="text-xs text-emerald-200/90 space-y-2 list-disc list-inside">
                  {UP_LOKAYUKTA_ACT_1975.jurisdiction.included.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Excluded from Jurisdiction (अधिकार क्षेत्र से बाहर):
                </h4>
                <ul className="text-xs text-red-200/90 space-y-2 list-disc list-inside">
                  {UP_LOKAYUKTA_ACT_1975.jurisdiction.excluded.map((exc, i) => (
                    <li key={i}>{exc}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Critical Limitations & 2nd ARC Reforms */}
            <div className="bg-slate-950 border border-amber-500/20 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Institutional Limitations & Second ARC 4th Report Recommendations:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                {UP_LOKAYUKTA_ACT_1975.institutionalLimitationsAndReforms.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub Tab 4: Tri-Partite Comparative Evaluation Matrix */}
      {activeSubTab === 'matrix' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                Tri-Partite Exam Architecture
              </span>
              <h2 className="text-2xl font-black text-white mt-2">
                {COMPARATIVE_EXAM_MATRIX.title}
              </h2>
              <h3 className="text-sm font-bold text-amber-300 font-hindi">
                {COMPARATIVE_EXAM_MATRIX.hindiTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Comparative syllabus depth, question formulation styles, case study typologies, and answer-writing calibration.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950">
                    <th className="p-4 font-mono uppercase tracking-wider text-slate-400 font-bold w-1/5">
                      Dimension
                    </th>
                    <th className="p-4 font-mono uppercase tracking-wider text-amber-400 font-bold w-1/4">
                      UPSC CSE (GS-IV)
                    </th>
                    <th className="p-4 font-mono uppercase tracking-wider text-red-400 font-bold w-1/4">
                      UPPSC PCS (GS-IV)
                    </th>
                    <th className="p-4 font-mono uppercase tracking-wider text-emerald-400 font-bold w-1/4">
                      UP RO/ARO (Mains)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {COMPARATIVE_EXAM_MATRIX.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 font-bold text-white bg-slate-950/40">
                        {row.dimension}
                      </td>
                      <td className="p-4 text-slate-300 leading-relaxed">
                        {row.upsc}
                      </td>
                      <td className="p-4 text-slate-300 leading-relaxed bg-red-950/5">
                        {row.uppsc}
                      </td>
                      <td className="p-4 text-emerald-200/90 leading-relaxed bg-emerald-950/5 font-medium">
                        {row.roAro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Synthesis Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <strong className="text-amber-400 block font-mono uppercase">
                Key Exam Strategy Takeaway:
              </strong>
              <p>
                While <strong>UPSC CSE</strong> tests macro-philosophical dilemma resolution and meta-governance ethics, <strong>UPPSC PCS</strong> prioritizes crisp definitions, direct distinctions, and state administrative schemes (Janhit, Anti-Bhoo Mafia). In contrast, <strong>UP RO/ARO</strong> demands absolute grammatical and technical precision in administrative terminology and high-context literary moral prose in Hindi essays. Mastery across all three tiers creates an invincible civil services aspirant.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
