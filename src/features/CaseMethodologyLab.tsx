// src/features/CaseMethodologyLab.tsx
// Section B Case Study Methodology & Decision Architecture Lab
// Covers the 4 Standard Typologies (Law & Order, Environment, Workplace, Procurement)
// Interactive 4-Step Case Solver: Stakeholder Mapping ➔ Dilemma Extraction ➔ Options Filter ➔ SOP Action

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { CASE_TYPOLOGIES } from '../data';
import { 
  Puzzle, 
  Target, 
  Users, 
  HelpCircle, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  Copy, 
  Check, 
  Scale, 
  Sparkles, 
  ShieldAlert, 
  Compass, 
  ChevronRight,
  Award
} from 'lucide-react';

export const CaseMethodologyLab: React.FC = () => {
  const { hindiMode } = useEthics();
  const [selectedTypologyId, setSelectedTypologyId] = useState<string>(CASE_TYPOLOGIES[0].id);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentTypology = CASE_TYPOLOGIES.find(t => t.id === selectedTypologyId) || CASE_TYPOLOGIES[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-amber-950 border border-purple-500/30 rounded-2xl p-6 mb-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Scale className="w-4 h-4" />
              <span>Section B Master Methodology (125 Marks in UPSC / 120 Marks in UPPSC)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Case Study Methodology & Typology Lab
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              {hindiMode
                ? 'केस स्टडी विश्लेषण की 4-चरणीय वैज्ञानिक पद्धति: 3-स्तरीय हितधारक मानचित्रण (Stakeholders) ➔ नैतिक द्वंद्व निष्कर्षण (Dilemmas) ➔ विकल्पों की दार्शनिक परीक्षा (Options Testing) ➔ संतुलित प्रशासनिक कार्य-योजना (SOP)।'
                : 'Master the 4 Core Archetype Case Typologies with Rigorous Philosophical Testing (Kantian, Utilitarian, Rawlsian) and Actionable Administrative SOPs.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-xl border border-slate-700">
            <span className="text-xs font-mono text-amber-300 font-bold px-2 py-1 bg-amber-500/10 rounded">
              Zero Guesswork Scoring System
            </span>
          </div>
        </div>

        {/* Typology Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-800">
          {CASE_TYPOLOGIES.map((typ) => (
            <button
              key={typ.id}
              onClick={() => {
                setSelectedTypologyId(typ.id);
                setActiveStep(1);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedTypologyId === typ.id
                  ? 'bg-gradient-to-r from-purple-500 to-amber-500 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-slate-900/60 flex items-center justify-center text-[10px] font-mono">
                {typ.typeNumber}
              </span>
              <span>{typ.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="space-y-8">
        {/* Scenario Archetype Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold uppercase">
                Type {currentTypology.typeNumber} Archetype
              </span>
              <h2 className="text-lg md:text-xl font-bold text-white">
                {currentTypology.title}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">Section B Blueprint</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 font-serif">
            {currentTypology.archetypeScenario}
          </p>

          {/* 4-Step Interactive Process Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
            {[
              { step: 1, label: '1. Stakeholder Map', icon: Users },
              { step: 2, label: '2. Dilemma Matrix', icon: HelpCircle },
              { step: 3, label: '3. Options Tested', icon: Filter },
              { step: 4, label: '4. Balanced SOP', icon: CheckCircle2 }
            ].map((s) => {
              const Icon = s.icon;
              const isActive = activeStep === s.step;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step as 1 | 2 | 3 | 4)}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 1: 3-Tier Stakeholder Mapping */}
        {activeStep === 1 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Step 1: 3-Tier Comprehensive Stakeholder Mapping</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Never list mere superficial names. Map stakeholders across Direct Actors, Indirect Affected Parties, and Systemic Institutional Values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Direct */}
              <div className="bg-slate-950 border border-purple-500/30 rounded-xl p-4 space-y-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-bold uppercase">
                  Tier 1: Direct Actors
                </span>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  {currentTypology.stakeholderMap.direct.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Indirect */}
              <div className="bg-slate-950 border border-amber-500/30 rounded-xl p-4 space-y-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold uppercase">
                  Tier 2: Indirect Affected Parties
                </span>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  {currentTypology.stakeholderMap.indirect.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Systemic */}
              <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-4 space-y-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold uppercase">
                  Tier 3: Systemic & Constitutional Values
                </span>
                <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                  {currentTypology.stakeholderMap.systemic.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-all"
              >
                <span>Proceed to Step 2: Dilemma Extraction</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Ethical Dilemma Extraction Matrix */}
        {activeStep === 2 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Step 2: Ethical Dilemmas Extraction Matrix</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Formulate sharp, mutually competing moral tensions in the "X vs Y" format.
              </p>
            </div>

            <div className="space-y-3">
              {currentTypology.primaryEthicalDilemmas.map((dil, idx) => (
                <div key={idx} className="bg-slate-950 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-200 font-semibold leading-relaxed">
                    {dil}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveStep(1)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all"
              >
                ◀ Back to Step 1
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-all"
              >
                <span>Proceed to Step 3: Options Testing</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Options Generation & Rigorous Ethical Filtering */}
        {activeStep === 3 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Filter className="w-5 h-5 text-indigo-400" />
                <span>Step 3: Options Evaluation through Philosophical Filters</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Every candidate generates 3 options. An extraordinary answer tests them against Kantian Deontology, Utilitarianism, and Constitutional Law.
              </p>
            </div>

            <div className="space-y-4">
              {currentTypology.optionsTested.map((opt, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <h4 className="text-sm font-bold text-white">
                      {opt.optionName}
                    </h4>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                      opt.feasibilityVerdict.includes('Gold Standard') || opt.feasibilityVerdict.includes('Mandatory')
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-red-500/10 text-red-400 border border-red-500/30'
                    }`}>
                      {opt.feasibilityVerdict}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    <strong className="text-slate-100">Course of Action:</strong> {opt.description}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-indigo-200/90 font-mono leading-relaxed">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-1">
                      Philosophical & Legal Critique:
                    </span>
                    {opt.ethicalEvaluation}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all"
              >
                ◀ Back to Step 2
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-all"
              >
                <span>Proceed to Step 4: Administrative SOP</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Administrative SOP & Model Course of Action */}
        {activeStep === 4 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Step 4: The Balanced Administrative Course of Action & SOP</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Concrete, legally backed implementation blueprint ready for reproduction in exam answers.
                </p>
              </div>

              <button
                onClick={() => handleCopy(currentTypology.balancedCourseOfAction + '\n\nSOP:\n' + currentTypology.administrativeSOP.join('\n'), currentTypology.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all shrink-0"
              >
                {copiedId === currentTypology.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === currentTypology.id ? 'Copied SOP' : 'Copy Full Course of Action'}</span>
              </button>
            </div>

            {/* Core Strategy */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                The Justified Course of Action (संतुलित समाधान):
              </span>
              <p className="text-xs text-emerald-200 leading-relaxed font-semibold">
                {currentTypology.balancedCourseOfAction}
              </p>
            </div>

            {/* Administrative SOP Steps */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                Operational Standard Operating Procedure (SOP Steps):
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {currentTypology.administrativeSOP.map((sop, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-amber-300 font-mono text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-300 leading-relaxed">{sop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thinker Quote Anchors */}
            <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/20 space-y-2 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Thinker Hooks to Embed in Conclusion:
              </span>
              <div className="space-y-1.5 text-slate-300 font-serif italic">
                {currentTypology.relevantThinkerQuotes.map((q, idx) => (
                  <p key={idx}>• {q}</p>
                ))}
              </div>
            </div>

            <div className="text-left">
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all"
              >
                ◀ Back to Step 3
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
