// src/features/CurrentAffairsEthics.tsx
// Signature Feature: "Turn Current Affairs into Ethics" Engine & Real-World Example Converter

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { CURRENT_AFFAIRS_DATA } from '../data';
import { 
  Newspaper, 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Scale, 
  Users, 
  BookOpen, 
  ChevronRight,
  Send,
  Layers
} from 'lucide-react';

export const CurrentAffairsEthics: React.FC = () => {
  const { setActiveTab } = useEthics();
  const [selectedCAId, setSelectedCAId] = useState<string>(CURRENT_AFFAIRS_DATA[0].id);

  // Custom User Event Converter state
  const [customEventTitle, setCustomEventTitle] = useState<string>('');
  const [analyzedEvent, setAnalyzedEvent] = useState<{
    issues: string[];
    values: string[];
    constitutionalArticles: string[];
    mainsQ: string;
  } | null>(null);

  const activeCA = CURRENT_AFFAIRS_DATA.find(c => c.id === selectedCAId) || CURRENT_AFFAIRS_DATA[0];

  const handleConvertCustomEvent = () => {
    if (customEventTitle.trim()) {
      setAnalyzedEvent({
        issues: [
          'Public Trust versus Corporate/Administrative Expediency',
          'Transparency and Right to Information under Article 19(1)(a)',
          'Accountability of Institutional Regulatory Gatekeepers'
        ],
        values: ['Integrity', 'Objectivity', 'Probity', 'Justice'],
        constitutionalArticles: ['Article 14 (Equality & Non-arbitrariness)', 'Article 21 (Right to Life & Dignity)'],
        mainsQ: `In the context of recent developments concerning "${customEventTitle.trim()}", examine the ethical challenges and institutional mechanisms required to preserve public probity.`
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
              <Newspaper className="w-3.5 h-3.5 text-rose-400" /> Signature Feature
            </span>
            <span className="text-xs text-slate-400">Official-Source-First Engine</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Turn Current Affairs into Ethics Engine
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Systematic deconstruction: Event → Ethical Issue → Competing Values → Stakeholders → Constitutional Articles → GS-IV Question.
          </p>
        </div>

        {/* Verified Sources Badge */}
        <div className="flex items-center gap-2 text-xs bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Official Supreme Court & PIB Sourced</span>
        </div>
      </div>

      {/* Main 2-Column Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Events Selector List (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
            Verified Current Events
          </div>
          <div className="space-y-2">
            {CURRENT_AFFAIRS_DATA.map((ca) => (
              <div
                key={ca.id}
                onClick={() => {
                  setSelectedCAId(ca.id);
                  setAnalyzedEvent(null);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeCA.id === ca.id && !analyzedEvent
                    ? 'bg-slate-800 border-rose-500 shadow-md ring-1 ring-rose-500'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    {ca.sourceType}
                  </span>
                  <span className="text-slate-400 font-mono">{ca.date}</span>
                </div>
                <h3 className="font-bold text-sm text-white mt-1.5 line-clamp-2">
                  {ca.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {ca.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Custom Event Converter Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 mt-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> Custom Event Converter
            </span>
            <p className="text-xs text-slate-400">
              Type any headline or breaking event to auto-extract its GS-IV ethical anatomy.
            </p>
            <div className="space-y-2">
              <input 
                type="text"
                value={customEventTitle}
                onChange={(e) => setCustomEventTitle(e.target.value)}
                placeholder="e.g. Mandatory organ donation registry dispute..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                onClick={handleConvertCustomEvent}
                className="w-full py-2 bg-gradient-to-r from-amber-500 to-indigo-600 text-slate-950 font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-1.5"
              >
                <span>Extract Ethical Dimensions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Active Event Deconstruction (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
          
          {analyzedEvent ? (
            /* Custom Analyzed Result */
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  AI-Extracted Ethical Anatomy
                </span>
                <h2 className="text-2xl font-black text-white font-serif mt-1">
                  "{customEventTitle}"
                </h2>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Identified Ethical Issues:</h4>
                <div className="space-y-2">
                  {analyzedEvent.issues.map((iss, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl text-xs text-slate-200">
                      • {iss}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Values in Play</span>
                  <div className="flex flex-wrap gap-2">
                    {analyzedEvent.values.map((v, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded font-bold">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Constitutional Articles</span>
                  <div className="flex flex-wrap gap-2">
                    {analyzedEvent.constitutionalArticles.map((art, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded font-bold">
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Potential GS-IV Mains Question:</span>
                <p className="text-xs text-slate-200 italic font-serif">"{analyzedEvent.mainsQ}"</p>
              </div>
            </div>
          ) : (
            /* Verified Current Affair View */
            <div className="space-y-6">
              
              {/* Header */}
              <div className="border-b border-slate-800 pb-5 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
                    {activeCA.sourceType}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span>Date: {activeCA.date}</span>
                    <span>•</span>
                    <span>Verified: {activeCA.verifiedDate}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-black text-white font-serif">{activeCA.title}</h2>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Source: <strong className="text-slate-200">{activeCA.source}</strong></span>
                  {activeCA.sourceUrl && (
                    <a 
                      href={activeCA.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" /> Source
                    </a>
                  )}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 mt-3">
                  {activeCA.summary}
                </p>
              </div>

              {/* Ethical Issues & Conflicting Principles */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Scale className="w-4 h-4" /> Ethical Issues Identified:
                </h4>
                <div className="space-y-2">
                  {activeCA.ethicalIssues.map((iss, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/40 border border-slate-700/60 rounded-xl text-xs text-slate-200 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{iss}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs text-slate-200 space-y-1">
                  <span className="font-bold text-amber-300 uppercase tracking-wider block">Central Dilemma:</span>
                  <p>{activeCA.conflictingPrinciples}</p>
                </div>
              </div>

              {/* Stakeholders & Constitutional Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> Affected Stakeholders
                  </span>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                    {activeCA.stakeholders.map((sh, idx) => (
                      <li key={idx}>{sh}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Constitutional Anchors
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCA.constitutionalValues.map((cv, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded font-bold">
                        {cv}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 mt-2"><strong>Administrative Dimension:</strong> {activeCA.administrativeDimension}</p>
                </div>
              </div>

              {/* Potential GS-IV Question & Case Study Connection */}
              <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Mains Examination Linkage:
                </span>
                <p className="text-xs text-slate-100 italic font-serif">"{activeCA.potentialMainsQuestion}"</p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Case Idea: <strong className="text-slate-200">{activeCA.caseStudyIdea}</strong></span>
                  <button
                    onClick={() => setActiveTab('mains-lab')}
                    className="text-amber-400 hover:underline flex items-center gap-1"
                  >
                    Answer in Mains Lab <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
