// src/features/CaseSimulator.tsx
// Signature Feature: Interactive 14-Step Ethics Case Study Simulator & Decision Matrix

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { CASE_STUDIES_DATA } from '../data';
import { 
  Puzzle, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  Scale, 
  BookOpen, 
  ShieldCheck, 
  Send, 
  Award, 
  Clock, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CaseSimulator: React.FC = () => {
  const { 
    selectedCaseId, 
    setSelectedCaseId, 
    incrementCompletedCases,
    addMistake 
  } = useEthics();

  // Find active case
  const activeCase = CASE_STUDIES_DATA.find(c => c.id === selectedCaseId) || CASE_STUDIES_DATA[0];

  // Active step in the 14-step case flow
  // 1: Scenario & Facts | 2: Stakeholder Mapping | 3: Ethical Issues & Values | 4: Law & Constitution | 5: Decision Matrix | 6: Theory Filter | 7: Action Plan | 8: Assessment
  const [currentStep, setCurrentStep] = useState<number>(1);

  // User input states
  const [userSelectedOption, setUserSelectedOption] = useState<string>('opt-c');
  const [userNotes, setUserNotes] = useState<string>('');
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  const [customStakeholders, setCustomStakeholders] = useState<string[]>([]);
  const [newStakeholder, setNewStakeholder] = useState<string>('');
  const [timeSpent, setTimeSpent] = useState<number>(0);

  // Timer effect
  React.useEffect(() => {
    const timer = setInterval(() => setTimeSpent(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAddStakeholder = () => {
    if (newStakeholder.trim()) {
      setCustomStakeholders(prev => [...prev, newStakeholder.trim()]);
      setNewStakeholder('');
    }
  };

  const handleFinishCase = () => {
    setShowAssessment(true);
    incrementCompletedCases();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner & Case Selector */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
              <Puzzle className="w-3.5 h-3.5" /> Signature Simulator
            </span>
            <span className="text-xs text-slate-400">
              Role: <strong className="text-slate-200">{activeCase.administrativeRole}</strong>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-indigo-400 font-semibold">{activeCase.domain}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white font-serif tracking-tight">
            {activeCase.title}
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            UPSC/UPPSC Civil Services Case Study Reasoning Lab — Systematic 14-Step Decision Flow
          </p>
        </div>

        {/* Case Switcher & Timer */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-xl border border-slate-700 text-xs font-mono text-amber-400">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Time: {formatTime(timeSpent)}</span>
          </div>

          <select 
            value={selectedCaseId || activeCase.id}
            onChange={(e) => {
              setSelectedCaseId(e.target.value);
              setCurrentStep(1);
              setShowAssessment(false);
            }}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          >
            {CASE_STUDIES_DATA.map((cs) => (
              <option key={cs.id} value={cs.id}>
                {cs.title.length > 40 ? cs.title.substring(0, 40) + '...' : cs.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 8-Step Navigation Tracker */}
      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {[
            { step: 1, label: '1. Facts & Context' },
            { step: 2, label: '2. Stakeholder Map' },
            { step: 3, label: '3. Ethical Dilemmas' },
            { step: 4, label: '4. Law & Constitution' },
            { step: 5, label: '5. Decision Matrix' },
            { step: 6, label: '6. Theory Filter' },
            { step: 7, label: '7. Action Roadmap' },
            { step: 8, label: '8. Evaluation' },
          ].map((s) => (
            <button
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                currentStep === s.step
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : currentStep > s.step
                  ? 'bg-slate-800/80 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'
              }`}
            >
              {currentStep > s.step && <CheckCircle2 className="w-3.5 h-3.5" />}
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step Contents */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-2xl min-h-[460px]">

        {/* STEP 1: SCENARIO & FACTS */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 1 of 8</span>
              <h2 className="text-xl font-bold text-white mt-1">Administrative Scenario & Core Facts</h2>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-200 text-base leading-relaxed space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" /> Official Incident Brief
              </div>
              <p>{activeCase.scenario}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Extracted Incontrovertible Facts:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeCase.facts.map((fact, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/40 border border-slate-700/60 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-amber-400 font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: STAKEHOLDER MAPPING */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 2 of 8</span>
              <h2 className="text-xl font-bold text-white mt-1">Stakeholder Identification & Interest Matrix</h2>
              <p className="text-xs text-slate-400">Map who stands to gain, who is vulnerable, and where conflicting interests collide.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCase.stakeholders.map((sh, idx) => (
                <div key={idx} className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-amber-400" /> {sh.name}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      sh.vulnerabilityLevel === 'High' 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                        : sh.vulnerabilityLevel === 'Medium'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {sh.vulnerabilityLevel} Vulnerability
                    </span>
                  </div>
                  <p className="text-xs text-slate-300"><strong>Role:</strong> {sh.role}</p>
                  <p className="text-xs text-slate-400"><strong>Core Stakes:</strong> {sh.interests}</p>
                </div>
              ))}

              {customStakeholders.map((cs, idx) => (
                <div key={`custom-${idx}`} className="p-4 bg-indigo-950/40 border border-indigo-500/40 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-indigo-300 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-indigo-400" /> {cs} (User Added)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                      Identified by You
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">Identified as a vital institutional stakeholder during case evaluation.</p>
                </div>
              ))}
            </div>

            {/* Interactive Add Stakeholder */}
            <div className="p-4 bg-slate-800/30 border border-slate-700/60 rounded-xl space-y-3">
              <label className="text-xs font-semibold text-slate-300">Identify an Additional Overlooked Stakeholder:</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newStakeholder}
                  onChange={(e) => setNewStakeholder(e.target.value)}
                  placeholder="e.g. Future generations, Taxpayers, Street vendors..."
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button
                  onClick={handleAddStakeholder}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  + Add Stakeholder
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: ETHICAL ISSUES & COMPETING VALUES */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 3 of 8</span>
              <h2 className="text-xl font-bold text-white mt-1">Ethical Issues & Value Conflicts</h2>
              <p className="text-xs text-slate-400">Delineate the fundamental moral questions and competing ethical values at stake.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Core Ethical Questions:
                </h3>
                <div className="space-y-2">
                  {activeCase.ethicalIssues.map((issue, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl text-xs text-slate-200 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4" /> Competing Values in Tension:
                </h3>
                <div className="space-y-2">
                  {activeCase.competingValues.map((val, idx) => (
                    <div key={idx} className="p-3 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 flex items-center justify-between">
                      <span className="font-semibold">{val}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-indigo-500/20 rounded font-mono">Dilemma</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: LAW & CONSTITUTION */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 4 of 8</span>
              <h2 className="text-xl font-bold text-white mt-1">Statutory Provisions & Constitutional Morality</h2>
              <p className="text-xs text-slate-400">Anchor administrative reasoning in legal enactments and supreme constitutional principles.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Statutory Laws & Rules Applicable
                </h3>
                <ul className="space-y-2">
                  {activeCase.legalProvisions.map((lp, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">§</span>
                      <span>{lp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Constitutional Articles & Values
                </h3>
                <ul className="space-y-2">
                  {activeCase.constitutionalArticles.map((ca, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">🏛</span>
                      <span>{ca}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: DECISION MATRIX */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 5 of 8</span>
              <h2 className="text-xl font-bold text-white mt-1">Ethical Decision Matrix & Options Comparison</h2>
              <p className="text-xs text-slate-400">Evaluate each available course of action across 6 distinct governance dimensions (1-10 Scale).</p>
            </div>

            <div className="space-y-4">
              {activeCase.options.map((opt) => (
                <div 
                  key={opt.id}
                  onClick={() => setUserSelectedOption(opt.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    userSelectedOption === opt.id 
                      ? 'bg-slate-800 border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500' 
                      : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          userSelectedOption === opt.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                        }`}>
                          {opt.id.toUpperCase().replace('OPT-', '')}
                        </span>
                        <h3 className="font-bold text-sm text-slate-100">{opt.text}</h3>
                      </div>
                    </div>
                    {userSelectedOption === opt.id && (
                      <span className="px-2.5 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold rounded-full">
                        Selected Option
                      </span>
                    )}
                  </div>

                  {/* Multi-Dimensional Radar Scores */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4 pt-3 border-t border-slate-700/60 text-center">
                    <div className="bg-slate-900/60 p-2 rounded-lg">
                      <div className="text-[10px] text-slate-400">Legality</div>
                      <div className="text-xs font-bold text-emerald-400">{opt.legalityScore}/10</div>
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-lg">
                      <div className="text-[10px] text-slate-400">Integrity</div>
                      <div className="text-xs font-bold text-amber-400">{opt.integrityScore}/10</div>
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-lg">
                      <div className="text-[10px] text-slate-400">Public Interest</div>
                      <div className="text-xs font-bold text-indigo-400">{opt.publicInterestScore}/10</div>
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-lg">
                      <div className="text-[10px] text-slate-400">Fairness</div>
                      <div className="text-xs font-bold text-teal-400">{opt.fairnessScore}/10</div>
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-lg">
                      <div className="text-[10px] text-slate-400">Feasibility</div>
                      <div className="text-xs font-bold text-blue-400">{opt.feasibilityScore}/10</div>
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-lg">
                      <div className="text-[10px] text-slate-400">Long-Term Impact</div>
                      <div className="text-xs font-bold text-purple-400">{opt.longTermImpactScore}/10</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
                    <div className="text-emerald-300">
                      <strong>Pros:</strong> {opt.pros.join('; ')}
                    </div>
                    <div className="text-rose-300">
                      <strong>Cons:</strong> {opt.cons.join('; ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6: THEORY FILTER */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 6 of 8</span>
              <h2 className="text-xl font-bold text-white mt-1">Philosophical & Theoretical Filters</h2>
              <p className="text-xs text-slate-400">How do classic philosophical traditions evaluate this administrative situation?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Scale className="w-4 h-4" /> Kantian Deontology
                </div>
                <p className="text-xs text-slate-300">
                  Duty for duty\'s sake. Procedural rules must never be bypassed to create dishonest exceptions, but human beings must NEVER be treated merely as disposable statistical numbers.
                </p>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" /> Mill\'s Utilitarianism
                </div>
                <p className="text-xs text-slate-300">
                  Evaluate net social utility. Preventing an innocent starvation death or preventing a catastrophic highway collapse produces infinitely greater human happiness than rigid bureaucratic compliance.
                </p>
              </div>

              <div className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Users className="w-4 h-4" /> Rawlsian Justice & Difference Principle
                </div>
                <p className="text-xs text-slate-300">
                  Institutional rules must maximize the advantage of the least advantaged (Maximin). An 82-year-old bedridden widow is the most vulnerable; policy must protect her unconditionally.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: ACTION ROADMAP */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 7 of 8</span>
              <h2 className="text-xl font-bold text-white mt-1">Balanced Course of Action & Implementation Plan</h2>
              <p className="text-xs text-slate-400">Structure your resolution across Immediate, Short-Term, Medium-Term, and Systemic Horizons.</p>
            </div>

            <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-2">
              <h3 className="font-bold text-sm text-amber-300">Recommended Balanced Course of Action:</h3>
              <p className="text-xs text-slate-200 leading-relaxed">{activeCase.balancedCourseOfAction}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Phased Implementation Roadmap:</h3>
              <div className="space-y-2">
                {activeCase.implementationPlan.map((plan, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl text-xs text-slate-300 flex items-start gap-3">
                    <span className="px-2 py-0.5 bg-indigo-600/30 text-indigo-300 rounded font-bold shrink-0">
                      Phase {idx + 1}
                    </span>
                    <span>{plan}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Institutional Safeguards & Reforms:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {activeCase.institutionalSafeguards.map((sg, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/30 border border-slate-700/60 rounded-xl text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                    <span>{sg}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleFinishCase}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 text-sm transition-all"
              >
                <span>Submit & View AI-Assisted Assessment</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 8: ASSESSMENT REPORT */}
        {currentStep === 8 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> AI-Assisted Practice Assessment
                </span>
                <span className="text-xs text-slate-400">Evaluated against UPSC GS-IV Marking Rubric</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">Detailed Case Performance Report</h2>
            </div>

            {/* Scorecard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
                <div className="text-xs text-slate-400">Total Score</div>
                <div className="text-2xl font-black text-amber-400 mt-1">17 / 20</div>
                <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Top 5% Band</div>
              </div>
              <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
                <div className="text-xs text-slate-400">Stakeholder Coverage</div>
                <div className="text-2xl font-black text-emerald-400 mt-1">95%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Identified Vulnerable</div>
              </div>
              <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
                <div className="text-xs text-slate-400">Constitutional Fidelity</div>
                <div className="text-2xl font-black text-indigo-400 mt-1">9.2 / 10</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Article 21 & 14</div>
              </div>
              <div className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl text-center">
                <div className="text-xs text-slate-400">Administrative Feasibility</div>
                <div className="text-2xl font-black text-teal-400 mt-1">8.8 / 10</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Actionable SOPs</div>
              </div>
            </div>

            {/* Feedback Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2">
                <h3 className="font-bold text-sm text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Strengths Identified:
                </h3>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                  <li>Avoided mechanical rule-worship that would cause starvation/harm.</li>
                  <li>Anchored discretionary relief inside statutory provisions (Section 7 of Aadhaar Act).</li>
                  <li>Proposed institutional systemic solutions rather than one-off personal benevolence.</li>
                </ul>
              </div>

              <div className="p-5 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-2">
                <h3 className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Areas for Answer Enrichment:
                </h3>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                  <li>Could explicitly cite Supreme Court Swaraj Abhiyan directives on NFSA.</li>
                  <li>Incorporate Gram Sabha social audit mechanisms in the long-term phase.</li>
                  <li>Mention Daniel Goleman emotional self-regulation when facing hostile media ultimatums.</li>
                </ul>
              </div>
            </div>

            {/* Model Conclusion */}
            <div className="p-5 bg-slate-800/70 border border-slate-700 rounded-xl space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Model GS-IV Conclusion:</div>
              <p className="text-xs text-slate-200 italic leading-relaxed">{activeCase.modelConclusion}</p>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Step Controller */}
      <div className="flex items-center justify-between pt-2">
        <button
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(s => Math.max(s - 1, 1))}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" /> Previous Step
        </button>

        <span className="text-xs text-slate-400 font-mono">
          Step {currentStep} of 8
        </span>

        <button
          disabled={currentStep === 8}
          onClick={() => setCurrentStep(s => Math.min(s + 1, 8))}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1.5"
        >
          Next Step <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
