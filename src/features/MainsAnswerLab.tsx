// src/features/MainsAnswerLab.tsx
// Mains Answer Writing Lab with Directive Analyser, Timer, Word Counter, Introduction & Conclusion Banks, and Enrichment Engine

import React, { useState, useEffect } from 'react';
import { useEthics } from '../context/EthicsContext';
import { PYQ_DATABASE, QUOTES_DATA, THINKERS_DATA } from '../data';
import { 
  PenTool, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Save, 
  RotateCcw, 
  Copy,
  ChevronDown,
  Layers,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DirectiveInfo {
  directive: string;
  meaning: string;
  expectation: string;
  suggestedStructure: string;
  commonMistake: string;
}

const DIRECTIVES_GUIDE: DirectiveInfo[] = [
  {
    directive: 'Critically Examine',
    meaning: 'Dissect the topic thoroughly, examine both strengths and weaknesses/biases, and arrive at a reasoned, balanced conclusion.',
    expectation: 'Do not just describe. Provide positive arguments, counter-arguments, institutional limitations, and constitutional safeguards.',
    suggestedStructure: '1. Introduction (Define core concept) → 2. Positive arguments/utility → 3. Critical bottlenecks/ethical hazards → 4. Balanced constitutional way forward.',
    commonMistake: 'Only writing negative criticism or writing a one-sided descriptive essay.'
  },
  {
    directive: 'Discuss',
    meaning: 'Explore multiple perspectives, dimensions, and implications of the statement, explaining why and how.',
    expectation: 'Comprehensive coverage of ethical, legal, social, and administrative dimensions with concrete examples.',
    suggestedStructure: '1. Unpack statement → 2. Dimension A (Personal) → 3. Dimension B (Administrative) → 4. Dimension C (Constitutional) → 5. Synthesis conclusion.',
    commonMistake: 'Writing a vague opinion piece without citing thinkers, constitutional articles, or administrative cases.'
  },
  {
    directive: 'Evaluate',
    meaning: 'Assess the worth, effectiveness, or ethical validity based on clear normative standards.',
    expectation: 'Provide empirical evidence, compare against benchmarks (e.g. Nolan principles, ARC reports), and deliver an authoritative judgment.',
    suggestedStructure: '1. Benchmark criteria → 2. Successful achievements → 3. Unresolved deficiencies → 4. Measurable reforms.',
    commonMistake: 'Failing to provide concrete criteria for evaluation.'
  },
  {
    directive: 'Comment',
    meaning: 'Express an informed, reasoned perspective on the statement, clarifying its significance and nuance.',
    expectation: 'Demonstrate deep conceptual mastery, highlighting subtle distinctions and real-world administrative implications.',
    suggestedStructure: '1. State your thesis clearly → 2. Ground in philosophical/historical context → 3. Apply to contemporary civil service → 4. Concluding perspective.',
    commonMistake: 'Giving a casual, conversational opinion without academic rigour.'
  }
];

const INTRO_BANK = [
  {
    title: 'Integrity in Administration',
    text: 'As C.S. Lewis observed, "Integrity is doing the right thing, even when no one is watching." In public administration, integrity is not merely financial incorruptibility, but the moral wholeness where an officer\'s private conscience, public actions, and constitutional oath are in undivided harmony.'
  },
  {
    title: 'Empathy & Social Justice',
    text: 'Anchored in the Gandhian Talisman, administrative empathy is the emotional engine of constitutional justice. It bridges the gap between cold bureaucratic formal rules and the lived vulnerabilities of the most marginalized citizens.'
  },
  {
    title: 'Constitutional Morality',
    text: 'Dr. B.R. Ambedkar cautioned that "Constitutional morality is not a natural sentiment; it has to be cultivated." It demands that a civil servant subordinate majoritarian social prejudices and political pressures to the supreme values of Liberty, Equality, and Fraternity.'
  },
  {
    title: 'Probity & Public Trust',
    text: 'Public office is a fiduciary public trust. As established by the Second Administrative Reforms Commission (4th Report), probity represents the institutionalized demonstration of unimpeachable rectitude, transparency, and accountability in the custody of sovereign public goods.'
  }
];

const CONCLUSION_BANK = [
  {
    title: 'Constitutional Morality Closing',
    text: 'Ultimately, a civil servant is an unswerving guardian of constitutional morality. When administrative decisions balance procedural discipline with human compassion, governance ceases to be a coercive apparatus and becomes an organic instrument of human flourishing.'
  },
  {
    title: 'Gandhian Antyodaya Closing',
    text: 'As Mahatma Gandhi envisioned in Sarvodaya, true ethical administration begins with the upliftment of the last and weakest (Antyodaya). Adhering to the purity of means ensures that institutional power permanently commands moral authority and public trust.'
  },
  {
    title: 'Public Trust & Nolan Standards',
    text: 'In the words of the Nolan Committee, selflessness and accountability are the indispensable pillars of public life. By institutionalizing transparency and moral courage, the civil service preserves the democratic legitimacy of the Indian republic.'
  }
];

export const MainsAnswerLab: React.FC = () => {
  const { incrementWrittenAnswers } = useEthics();

  // Active question
  const [selectedPyqId, setSelectedPyqId] = useState<string>(PYQ_DATABASE[0].id);
  const activeQuestion = PYQ_DATABASE.find(q => q.id === selectedPyqId) || PYQ_DATABASE[0];

  // Editor states
  const [answerText, setAnswerText] = useState<string>('');
  const [timerSeconds, setTimerSeconds] = useState<number>(420); // 7 mins default for 10-marker
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState<number>(0);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Active Directive
  const activeDirective = DIRECTIVES_GUIDE.find(d => activeQuestion.directive.includes(d.directive)) || DIRECTIVES_GUIDE[0];

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds(t => t - 1), 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  // Word count calculation
  useEffect(() => {
    const words = answerText.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(words);
  }, [answerText]);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleInsert = (text: string) => {
    setAnswerText(prev => prev + '\n\n' + text);
  };

  const handleSubmitAnswer = () => {
    incrementWrittenAnswers();
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {}
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(answerText);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <PenTool className="w-3.5 h-3.5 text-amber-400" /> Mains Answer Writing Lab
            </span>
            <span className="text-xs text-slate-400">Timer • Word Counter • Enrichment Engine</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Ethics Mains Answer Workbench
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Simulate real exam conditions: 7 minutes for 10-markers, 14 minutes for case studies, with instant enrichment aids.
          </p>
        </div>

        {/* Question Selector */}
        <select
          value={selectedPyqId}
          onChange={(e) => {
            setSelectedPyqId(e.target.value);
            setAnswerText('');
            setTimerSeconds(420);
            setTimerRunning(false);
          }}
          className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-xl px-4 py-2.5 max-w-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
        >
          {PYQ_DATABASE.map(q => (
            <option key={q.id} value={q.id}>
              [{q.exam} {q.year}] {q.questionNumber}: {q.questionText.substring(0, 45)}...
            </option>
          ))}
        </select>
      </div>

      {/* Main Question Brief & Directive Analyser */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
              {activeQuestion.exam} {activeQuestion.year}
            </span>
            <span className="text-slate-400">{activeQuestion.paper} • {activeQuestion.marks} Marks • {activeQuestion.wordLimit} Words</span>
          </div>
          <div className="text-xs font-mono text-amber-400 font-bold">
            Target Directive: {activeDirective.directive}
          </div>
        </div>

        <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700 space-y-2">
          <p className="text-base text-slate-100 font-serif font-medium leading-relaxed">
            "{activeQuestion.questionText}"
          </p>
          {activeQuestion.hindiText && (
            <p className="text-xs text-amber-300/80 font-serif">
              "{activeQuestion.hindiText}"
            </p>
          )}
        </div>

        {/* Directive Analyser Card */}
        <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-xl space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-indigo-300 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-indigo-400" /> Directive Analyser: What does "{activeDirective.directive}" expect?
          </div>
          <p className="text-slate-300"><strong>Examiner Expectation:</strong> {activeDirective.expectation}</p>
          <p className="text-slate-300"><strong>Recommended Answer Structure:</strong> {activeDirective.suggestedStructure}</p>
          <p className="text-rose-300"><strong>Common Pitfall:</strong> {activeDirective.commonMistake}</p>
        </div>
      </div>

      {/* Answer Writing Canvas & Live Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Editor Area (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
          
          {/* Controls Bar: Timer + Word Count */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-3">
            
            {/* Exam Timer */}
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                timerSeconds < 60 
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse'
                  : 'bg-slate-800 text-amber-400 border-slate-700'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTimer(timerSeconds)}</span>
              </div>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  timerRunning
                    ? 'bg-rose-600 hover:bg-rose-500 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {timerRunning ? 'Pause' : 'Start Timer'}
              </button>
              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(420);
                }}
                className="text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1"
                title="Reset Timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Live Word Count Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">Words:</span>
              <span className={`font-bold px-2 py-0.5 rounded ${
                wordCount > activeQuestion.wordLimit + 20 
                  ? 'bg-rose-500/20 text-rose-400' 
                  : wordCount >= activeQuestion.wordLimit - 20
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-slate-800 text-amber-400'
              }`}>
                {wordCount} / {activeQuestion.wordLimit}
              </span>
            </div>

          </div>

          {/* Textarea */}
          <textarea
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            placeholder="Structure your answer here:
1. Introduction: Define core concept or quote context (25-30 words)
2. Body: Multi-dimensional exploration with Thinkers, Articles & Administrative examples (90-100 words)
3. Conclusion: Constitutional morality or Gandhian Antyodaya synthesis (25-30 words)"
            rows={15}
            className="w-full bg-slate-950/70 border border-slate-800 rounded-xl p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 leading-relaxed font-sans"
          />

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedToast ? 'Copied!' : 'Copy Answer'}</span>
            </button>

            <button
              onClick={handleSubmitAnswer}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save & Log Answer Attempt</span>
            </button>
          </div>

        </div>

        {/* Right One-Click Enrichment Drawer (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Quick Insert Introductions */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 1-Click Introductions Bank
            </div>
            <div className="space-y-2">
              {INTRO_BANK.map((intro, idx) => (
                <div key={idx} className="p-3 bg-slate-800/50 border border-slate-700/60 rounded-xl space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-200">{intro.title}</span>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{intro.text}</p>
                  <button
                    onClick={() => handleInsert(intro.text)}
                    className="text-[10px] text-amber-400 hover:underline font-bold"
                  >
                    + Insert into Answer
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Insert Conclusions */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> 1-Click Conclusions Bank
            </div>
            <div className="space-y-2">
              {CONCLUSION_BANK.map((conc, idx) => (
                <div key={idx} className="p-3 bg-slate-800/50 border border-slate-700/60 rounded-xl space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-200">{conc.title}</span>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{conc.text}</p>
                  <button
                    onClick={() => handleInsert(conc.text)}
                    className="text-[10px] text-emerald-400 hover:underline font-bold"
                  >
                    + Insert into Answer
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Model Answer Structure Blueprint */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> UPSC Faculty Model Blueprint
            </span>
            <div className="text-[11px] text-slate-300 space-y-2">
              <p><strong>Recommended Intro:</strong> {activeQuestion.modelApproach.introduction}</p>
              <div>
                <strong>Core Dimensions:</strong>
                <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-400">
                  {activeQuestion.modelApproach.dimensionsToAddress.map((dim, idx) => (
                    <li key={idx}>{dim}</li>
                  ))}
                </ul>
              </div>
              <p><strong>Thinker/Quote to cite:</strong> {activeQuestion.modelApproach.thinkerQuotesToUse.join('; ')}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
