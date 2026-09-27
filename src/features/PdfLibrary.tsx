// src/features/PdfLibrary.tsx
// Curated Open-Access PDF Books, NCERTs, 2nd ARC Reports, and Government Manuals Hub
// Mapped chapter-by-chapter to UPSC GS-IV and UPPSC Ethics modules

import React, { useState, useMemo } from 'react';
import { useEthics } from '../context/EthicsContext';
import { PDF_RESOURCES_DATA } from '../data/resources/pdfBooksData';
import { PdfResourceItem } from '../types/ethics';
import { 
  BookOpen, 
  ExternalLink, 
  DownloadCloud, 
  Search, 
  Filter, 
  CheckCircle2, 
  Copy, 
  Bookmark, 
  AlertCircle, 
  Sparkles, 
  FileText, 
  Layers, 
  Compass, 
  HelpCircle,
  Clock,
  Tag
} from 'lucide-react';

export const PdfLibrary: React.FC = () => {
  const { hindiMode } = useEthics();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedModule, setSelectedModule] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    'ALL',
    'NCERT Textbook',
    'Second ARC Report',
    'Government Manual & Policy',
    'International Ethics (UNODC)',
    'Constitutional & Legal Document',
    'Official Exam Syllabus & PYQ'
  ];

  const modules = [
    'ALL',
    'Attitude',
    'Emotional Intelligence',
    'Persuasion & Nudge',
    'Probity & Governance',
    'Corruption',
    'Theories & Thinkers',
    'Foundational Values',
    'Case Studies',
    'UPPSC Ethics Hub'
  ];

  const filteredResources = useMemo(() => {
    return PDF_RESOURCES_DATA.filter((res) => {
      // Category filter
      if (selectedCategory !== 'ALL' && res.category !== selectedCategory) {
        return false;
      }

      // Module filter
      if (selectedModule !== 'ALL' && !res.pertainingModules.some(m => m.toLowerCase().includes(selectedModule.toLowerCase()))) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(query) || (res.hindiTitle && res.hindiTitle.toLowerCase().includes(query));
        const matchesAuthor = res.authorOrBody.toLowerCase().includes(query);
        const matchesDesc = res.description.toLowerCase().includes(query);
        const matchesChapters = res.recommendedChapters.some(c => 
          c.chapterTitle.toLowerCase().includes(query) || 
          c.gs4Relevance.toLowerCase().includes(query)
        );
        const matchesModules = res.pertainingModules.some(m => m.toLowerCase().includes(query));

        return matchesTitle || matchesAuthor || matchesDesc || matchesChapters || matchesModules;
      }

      return true;
    });
  }, [selectedCategory, selectedModule, searchQuery]);

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600/10 via-slate-900 to-indigo-600/10 border border-emerald-500/30 rounded-2xl p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
              <DownloadCloud className="w-4 h-4" />
              <span>Official Open-Access Public Literature</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Official PDF Books & NCERT Repository
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              {hindiMode 
                ? 'एनसीईआरटी पाठ्यपुस्तकें, द्वितीय प्रशासनिक सुधार आयोग (2nd ARC), सीवीसी नियमावली एवं संयुक्त राष्ट्र नीतिशास्त्र मॉड्यूल — सीधे आधिकारिक लिंक एवं अध्याय-वार मार्गदर्शन के साथ'
                : 'Free, verified open-access books, NCERTs, 2nd ARC Reports, CVC manuals, and UNODC modules mapped chapter-by-chapter to UPSC GS-IV and UPPSC Ethics.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
              {filteredResources.length} Verified Sources
            </span>
          </div>
        </div>
      </div>

      {/* Strategic Reading Directive Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 space-y-1">
            <span className="font-bold text-amber-300 font-mono uppercase tracking-wide block">
              Faculty Reading Directive (How to read without information overload):
            </span>
            <p>
              Do <strong>NOT</strong> attempt to read entire 300-page reports from cover to cover. For UPSC GS-IV and UPPSC, focus exclusively on the 
              <strong> recommended chapters and executive summaries</strong> highlighted below. For example, in <em>NCERT Class XII Psychology</em>, 
              only Chapters 1, 6, and 7 are directly relevant; in the <em>2nd ARC 4th Report</em>, Chapters 2, 3, and 4 yield 90% of the exam value.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8 space-y-4 shadow-md">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by book title, NCERT chapter, 2nd ARC report, author, or keyword (e.g., 'Rawls', 'Attitude', 'CVC')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl pl-10 pr-4 py-2.5 focus:border-emerald-400 focus:outline-none placeholder-slate-500"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div>
          <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-2">
            Filter by Document Category:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat === 'ALL' ? 'All Document Types' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Module Filter Pills */}
        <div>
          <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-2">
            Filter by Ethics Syllabus Module:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {modules.map((mod) => (
              <button
                key={mod}
                onClick={() => setSelectedModule(mod)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  selectedModule === mod
                    ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {mod === 'ALL' ? 'All Ethics Modules' : mod}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredResources.length === 0 ? (
          <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl">
            <AlertCircle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No PDF resources found</h3>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search keywords or resetting the category filters.
            </p>
            <button
              onClick={() => { setSelectedCategory('ALL'); setSelectedModule('ALL'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-amber-300 rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredResources.map((res) => {
            const isPriority1 = res.examImportance.includes('Priority 1');
            return (
              <div 
                key={res.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 shadow-xl transition-all"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                        {res.category}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                        isPriority1 
                          ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                      }`}>
                        {res.examImportance}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {res.fileFormat}
                      </span>
                      {res.publicationYear && (
                        <span className="text-[10px] font-mono text-slate-400">
                          {res.publicationYear}
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg md:text-xl font-bold text-white mt-1">
                      {res.title}
                    </h2>
                    {res.hindiTitle && (
                      <p className="text-xs text-slate-400 font-medium">
                        {res.hindiTitle}
                      </p>
                    )}
                    <p className="text-xs text-slate-400 font-mono">
                      Author / Issuing Body: <span className="text-slate-300">{res.authorOrBody}</span>
                    </p>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyLink(res.pdfDirectUrl || res.officialUrl, res.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-all"
                      title="Copy link to clipboard"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === res.id ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                    <a
                      href={res.pdfDirectUrl || res.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
                    >
                      <span>Open Official PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Description & Relevance */}
                <div className="mb-4">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {res.description}
                  </p>
                  {hindiMode && res.hindiDescription && (
                    <p className="text-xs text-slate-400 mt-1 italic">
                      {res.hindiDescription}
                    </p>
                  )}
                </div>

                {/* Pertaining Modules Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">
                    Ethics Modules:
                  </span>
                  {res.pertainingModules.map((mod, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-amber-300 border border-slate-800 font-mono"
                    >
                      {mod}
                    </span>
                  ))}
                  <span className="ml-auto text-[10px] font-mono text-slate-400">
                    Languages: {res.languageAvailable.join(', ')}
                  </span>
                </div>

                {/* Chapter by Chapter Guide Accordion */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Chapter-by-Chapter Reading Guide (High-Yield Focus):</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {res.recommendedChapters.length} Selected Sections
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {res.recommendedChapters.map((chap, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-xs"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <span className="font-bold text-white font-mono">
                            {chap.chapterNumber}: {chap.chapterTitle}
                          </span>
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed mb-1.5">
                          <strong className="text-indigo-400 font-mono">GS-IV Link: </strong>
                          {chap.gs4Relevance}
                        </p>
                        <div className="p-2 rounded bg-slate-950 border border-slate-800/60 text-[11px] text-emerald-300">
                          <strong className="font-mono text-slate-400">Takeaway Hook: </strong>
                          "{chap.keyTakeaway}"
                        </div>
                      </div>
                    ))}
                  </div>

                  {res.downloadNote && (
                    <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{res.downloadNote}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
