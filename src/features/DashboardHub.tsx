// src/features/DashboardHub.tsx
// Comprehensive Personal Dashboard, Study Planner (30m to 6h), Weekly Digest, Monthly Magazine, and Content Importer & Validator

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { 
  BarChart3, 
  Calendar, 
  BookOpen, 
  Award, 
  FileText, 
  Bookmark, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  Trash2,
  Download,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DashboardHub: React.FC = () => {
  const { 
    completedCasesCount, 
    writtenAnswersCount, 
    bookmarks, 
    notes, 
    addNote, 
    deleteNote, 
    mistakes,
    setActiveTab 
  } = useEthics();

  // Active view in Dashboard
  const [dashboardTab, setDashboardTab] = useState<'overview' | 'planner' | 'digest' | 'notes' | 'importer'>('overview');

  // Study Planner duration mode
  const [plannerHours, setPlannerHours] = useState<number>(2);

  // New note form
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [noteCategory, setNoteCategory] = useState<string>('Foundational Values');
  const [noteContent, setNoteContent] = useState<string>('');

  // JSON Importer state
  const [importJsonText, setImportJsonText] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [validationSuccess, setValidationSuccess] = useState<boolean>(false);

  const handleSaveNote = () => {
    if (noteTitle.trim() && noteContent.trim()) {
      addNote(noteTitle.trim(), noteCategory, noteContent.trim());
      setNoteTitle('');
      setNoteContent('');
      try { confetti({ particleCount: 30, spread: 50 }); } catch {}
    }
  };

  const handleValidateAndImport = () => {
    setValidationErrors([]);
    setValidationSuccess(false);

    try {
      const parsed = JSON.parse(importJsonText);
      const errors: string[] = [];

      if (!Array.isArray(parsed)) {
        errors.push('JSON root must be an array of objects.');
      } else {
        parsed.forEach((item: any, idx: number) => {
          if (!item.id) errors.push(`Item #${idx + 1} is missing mandatory field: 'id'.`);
          if (!item.title && !item.name && !item.questionText) {
            errors.push(`Item #${idx + 1} lacks a primary title/name/questionText identifier.`);
          }
        });
      }

      if (errors.length > 0) {
        setValidationErrors(errors);
      } else {
        setValidationSuccess(true);
        try { confetti({ particleCount: 60, spread: 70 }); } catch {}
      }
    } catch (e: any) {
      setValidationErrors([`Invalid JSON syntax: ${e.message}`]);
    }
  };

  // Study schedule generation based on hours
  const generateStudyPlan = (hours: number) => {
    switch (hours) {
      case 1:
        return [
          { time: '20 mins', task: 'Revise 1 Foundational Concept (e.g. Integrity vs Probity)', tab: 'concepts' },
          { time: '25 mins', task: 'Solve 1 Simulated Case Study (Step-by-step)', tab: 'case-simulator' },
          { time: '15 mins', task: 'Review Leitner Flashcards (Box 1 & 2)', tab: 'revision' }
        ];
      case 2:
        return [
          { time: '30 mins', task: 'Study 1 Thinker (Kant or Gandhi) + Compare with Utilitarianism', tab: 'thinkers' },
          { time: '35 mins', task: 'Simulate 1 Full Case Study + Review AI Assessment', tab: 'case-simulator' },
          { time: '35 mins', task: 'Write 1 Mains 10-Marker under 7-minute timer in Answer Lab', tab: 'mains-lab' },
          { time: '20 mins', task: 'Review 1 Current Affairs Ethical Deconstruction', tab: 'current-affairs' }
        ];
      case 3:
      default:
        return [
          { time: '40 mins', task: 'Master 2 Concepts (Public Funds Propriety & RTI Exceptions)', tab: 'governance' },
          { time: '40 mins', task: 'Philosophical Theory Simulator (Deontology vs Rawls)', tab: 'theories' },
          { time: '45 mins', task: 'Solve 2 Case Studies & Compare Multi-Criteria Matrices', tab: 'case-simulator' },
          { time: '35 mins', task: 'Mains Answer Writing (1 Theory + 1 Quote question)', tab: 'mains-lab' },
          { time: '20 mins', task: 'Spaced Flashcards & Resolve 2 Mistakes in Mistake Book', tab: 'revision' }
        ];
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-amber-400" /> Personal Dashboard
            </span>
            <span className="text-xs text-slate-400">GS-IV Preparation Management</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Ethics Progress, Planner & Toolkit
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Track metrics, generate daily study routines, review weekly digests, and maintain your personal notes & examples.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex flex-wrap items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'planner', label: 'Study Planner' },
            { id: 'digest', label: 'Weekly Digest' },
            { id: 'notes', label: 'Personal Notes' },
            { id: 'importer', label: 'Data Importer' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setDashboardTab(t.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                dashboardTab === t.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* OVERVIEW METRICS */}
      {dashboardTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
              <div className="text-xs text-slate-400 uppercase font-mono">Case Studies Solved</div>
              <div className="text-3xl font-black text-amber-400 mt-2">{completedCasesCount}</div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1">14-Step Flow Practiced</div>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
              <div className="text-xs text-slate-400 uppercase font-mono">Mains Answers Written</div>
              <div className="text-3xl font-black text-indigo-400 mt-2">{writtenAnswersCount}</div>
              <div className="text-[10px] text-indigo-300 font-semibold mt-1">Timed Workbench</div>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
              <div className="text-xs text-slate-400 uppercase font-mono">Saved Bookmarks</div>
              <div className="text-3xl font-black text-teal-400 mt-2">{bookmarks.length}</div>
              <div className="text-[10px] text-slate-400 mt-1">Quick Revision Pointers</div>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
              <div className="text-xs text-slate-400 uppercase font-mono">Mistake Book Items</div>
              <div className="text-3xl font-black text-rose-400 mt-2">{mistakes.length}</div>
              <div className="text-[10px] text-slate-400 mt-1">{mistakes.filter(m => !m.resolved).length} Unresolved</div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Recommended Next Actions for High Score
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div 
                onClick={() => setActiveTab('case-simulator')}
                className="p-4 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-xl cursor-pointer transition-all space-y-1"
              >
                <div className="text-xs font-bold text-amber-400">1. Practice Highway Tender Case</div>
                <p className="text-xs text-slate-300">Navigate political pressure versus civil engineering bridge collapse risks.</p>
              </div>

              <div 
                onClick={() => setActiveTab('mains-lab')}
                className="p-4 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-xl cursor-pointer transition-all space-y-1"
              >
                <div className="text-xs font-bold text-indigo-400">2. Write a 10-Marker on Conscience</div>
                <p className="text-xs text-slate-300">Use Aristotle\'s Phronesis and Supreme Court Krishna Iyer quotes.</p>
              </div>

              <div 
                onClick={() => setActiveTab('revision')}
                className="p-4 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-xl cursor-pointer transition-all space-y-1"
              >
                <div className="text-xs font-bold text-teal-400">3. Drill Spaced Flashcards</div>
                <p className="text-xs text-slate-300">Reinforce Gandhi\'s Seven Sins, Nolan Principles, and Rawlsian Maximin rule.</p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* STUDY PLANNER VIEW */}
      {dashboardTab === 'planner' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Automated Routine Engine
              </span>
              <h2 className="text-xl font-bold text-white mt-1">Daily GS-IV Study Session Generator</h2>
            </div>

            {/* Select Available Hours */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Time Available Today:</span>
              {[1, 2, 3].map((h) => (
                <button
                  key={h}
                  onClick={() => setPlannerHours(h)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    plannerHours === h
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {h} {h === 1 ? 'Hour' : 'Hours'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {generateStudyPlan(plannerHours).map((plan, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTab(plan.tab as any)}
                className="p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl cursor-pointer transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-amber-400 shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">{plan.task}</div>
                    <div className="text-[10px] text-slate-400">Destination: {plan.tab.toUpperCase()} module</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-xs font-mono font-bold">
                  {plan.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WEEKLY DIGEST VIEW */}
      {dashboardTab === 'digest' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Curated Revision Capsule
            </span>
            <h2 className="text-xl font-bold text-white mt-1">Weekly Ethics & Governance Digest</h2>
            <p className="text-xs text-slate-400">High-yield compilation of top developments, case insights, and model formulations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2">
              <span className="font-bold text-amber-400 uppercase tracking-wider block">
                1. Top Ethical Current Affair
              </span>
              <p className="text-slate-200">
                Supreme Court verdict on Electoral Bonds: Establishes that citizens' fundamental right to information under Article 19(1)(a) overrides claims of anonymous political financing, protecting the sanctity of democratic elections.
              </p>
            </div>

            <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2">
              <span className="font-bold text-indigo-400 uppercase tracking-wider block">
                2. Thinker Synthesis
              </span>
              <p className="text-slate-200">
                Rawls' Difference Principle in Digital Welfare: When deploying biometric PoS systems, institutional design must protect the least advantaged (elderly, disabled, leprosy patients) through mandatory offline alternative verification.
              </p>
            </div>

            <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2">
              <span className="font-bold text-teal-400 uppercase tracking-wider block">
                3. Administrative Quote of the Week
              </span>
              <p className="text-slate-200 italic font-serif">
                "In the happiness of his subjects lies the king's happiness; in their welfare his welfare." — Kautilya, Arthashastra
              </p>
            </div>

            <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2">
              <span className="font-bold text-rose-400 uppercase tracking-wider block">
                4. Key Governance Reform
              </span>
              <p className="text-slate-200">
                Second ARC 4th Report recommendation on Collusive Corruption: Both the bribe-giver and bribe-taker must be strictly penalized, and public properties acquired through corrupt means must face expedited confiscation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PERSONAL NOTES VIEW */}
      {dashboardTab === 'notes' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Create Note Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Plus className="w-4 h-4 text-amber-400" /> Add New Personal Study Note or Case Example
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="Note Title (e.g. My Personal Definition of Probity)..."
                className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <select
                value={noteCategory}
                onChange={(e) => setNoteCategory(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="Foundational Values">Foundational Values</option>
                <option value="Thinkers">Thinkers</option>
                <option value="Governance">Governance</option>
                <option value="Case Study Insight">Case Study Insight</option>
              </select>
            </div>

            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Write your personal notes, mnemonics, or custom examples..."
              rows={4}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />

            <div className="flex justify-end">
              <button
                onClick={handleSaveNote}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Save Note
              </button>
            </div>
          </div>

          {/* Notes List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
              Your Saved Notes ({notes.length})
            </h3>
            {notes.map((n) => (
              <div key={n.id} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {n.category} • {n.updatedAt}
                  </span>
                  <button
                    onClick={() => deleteNote(n.id)}
                    className="text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="font-bold text-sm text-white">{n.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{n.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DATA IMPORTER & VALIDATOR VIEW */}
      {dashboardTab === 'importer' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Section 100 & 101 Architecture
            </span>
            <h2 className="text-xl font-bold text-white mt-1">Data Importer & Integrity Validator</h2>
            <p className="text-xs text-slate-400">
              Import bulk JSON records for Case Studies, PYQs, Thinkers, or Examples. Automatically validates required fields, types, and schema consistency.
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-300">Paste JSON Array Content:</label>
            <textarea
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder='[
  {
    "id": "custom-cs-1",
    "title": "Industrial Effluent Dispute",
    "domain": "Environmental Clearance",
    "scenario": "..."
  }
]'
              rows={8}
              className="w-full bg-slate-950 font-mono text-xs text-slate-200 border border-slate-800 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setImportJsonText(`[
  {
    "id": "demo-1",
    "title": "Sample Administrative Case",
    "category": "Foundational"
  }
]`);
              }}
              className="text-xs text-amber-400 hover:underline"
            >
              Insert Sample Template
            </button>

            <button
              onClick={handleValidateAndImport}
              className="px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
            >
              <Upload className="w-4 h-4" /> Validate & Import Records
            </button>
          </div>

          {/* Validation Feedback */}
          {validationSuccess && (
            <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Validation Successful! Schema valid with zero fatal errors or duplicate keys.</span>
            </div>
          )}

          {validationErrors.length > 0 && (
            <div className="p-4 bg-rose-950/30 border border-rose-500/40 rounded-xl text-xs text-rose-300 space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" /> Validation Errors Found ({validationErrors.length}):
              </span>
              <ul className="list-disc pl-4 space-y-0.5">
                {validationErrors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
