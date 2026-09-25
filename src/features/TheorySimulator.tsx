// src/features/TheorySimulator.tsx
// Ethical Theory Simulator: Compare Deontology, Utilitarianism, Virtue Ethics, Rawlsian Justice, Care Ethics, and Gandhian Ethics

import React, { useState } from 'react';
import { ETHICAL_THEORIES } from '../data';
import { 
  Scale, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  Layers, 
  ArrowRight
} from 'lucide-react';

export const TheorySimulator: React.FC = () => {
  const [selectedTheoryId, setSelectedTheoryId] = useState<string>(ETHICAL_THEORIES[0].id);

  const activeTheory = ETHICAL_THEORIES.find(t => t.id === selectedTheoryId) || ETHICAL_THEORIES[0];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-purple-400" /> Theory Simulator
          </span>
          <span className="text-xs text-slate-400">Normative Ethics Comparative Lab</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
          Ethical Frameworks & Administrative Decision-Making
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Observe how different philosophical schools analyze the exact same administrative challenge, identifying distinct moral duties, trade-offs, and outcomes.
        </p>
      </div>

      {/* Theory Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {ETHICAL_THEORIES.map((theory) => (
          <button
            key={theory.id}
            onClick={() => setSelectedTheoryId(theory.id)}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedTheoryId === theory.id
                ? 'bg-purple-600/20 border-purple-500 ring-2 ring-purple-500 text-white shadow-lg shadow-purple-500/10'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
              {theory.school}
            </div>
            <div className="font-bold text-xs mt-1 line-clamp-1">{theory.name.split('(')[0]}</div>
          </button>
        ))}
      </div>

      {/* Main Theory Evaluation Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-8 shadow-2xl">
        
        {/* Active Theory Overview */}
        <div className="border-b border-slate-800 pb-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
              Ethical Tradition: {activeTheory.school}
            </span>
            <div className="flex gap-2">
              {activeTheory.proponents.map((p, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-[10px] rounded text-slate-300 font-mono">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-2xl font-black text-white font-serif">{activeTheory.name}</h2>
          <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
            <strong>Core Premise:</strong> {activeTheory.corePremise}
          </p>
        </div>

        {/* Evaluation Criterion & Decision Rule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1.5">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Evaluation Criterion</span>
            <p className="text-xs text-slate-300 leading-relaxed">{activeTheory.evaluationCriterion}</p>
          </div>
          <div className="p-4 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-1.5">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Operational Decision Rule</span>
            <p className="text-xs text-indigo-100 leading-relaxed">{activeTheory.decisionRule}</p>
          </div>
        </div>

        {/* Live Scenario Diagnostic under this Theory */}
        <div className="p-5 bg-gradient-to-br from-purple-950/30 to-slate-800/60 border border-purple-500/30 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-400" /> Simulated Administrative Test Scenario:
          </div>
          <h3 className="text-base font-bold text-white">
            {activeTheory.scenarioEvaluation.scenarioTitle}
          </h3>
          <div className="p-3 bg-slate-900/60 rounded-lg text-xs text-slate-300 leading-relaxed space-y-1.5">
            <span className="font-bold text-amber-400">Theoretical Deliberation:</span>
            <p>{activeTheory.scenarioEvaluation.howItJudges}</p>
          </div>
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-200 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span><strong>Final Normative Verdict:</strong> {activeTheory.scenarioEvaluation.verdict}</span>
          </div>
        </div>

        {/* Strengths, Limitations & Administrative Implications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Philosophical Strengths:
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {activeTheory.strengths.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-rose-950/20 border border-rose-500/30 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Inherent Limitations & Blind Spots:
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {activeTheory.limitations.map((l, idx) => (
                <li key={idx}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Civil Service Implications */}
        <div className="p-4 bg-slate-800/40 border border-slate-700 rounded-xl space-y-2">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Civil Service & Governance Implications:
          </span>
          <p className="text-xs text-slate-300 leading-relaxed">{activeTheory.administrativeImplication}</p>
        </div>

      </div>

    </div>
  );
};
