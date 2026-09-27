import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { GOVERNANCE_MODULES } from '../data';
import { 
  Landmark, 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle,
  Building,
  Layers,
  ChevronRight,
  DownloadCloud
} from 'lucide-react';

export const GovernanceHub: React.FC = () => {
  const { setActiveTab } = useEthics();
  const [selectedModId, setSelectedModId] = useState<string>(GOVERNANCE_MODULES[0].id);

  const activeModule = GOVERNANCE_MODULES.find(m => m.id === selectedModId) || GOVERNANCE_MODULES[0];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-emerald-400" /> Public Administration Ethics & Probity
          </span>
          <span className="text-xs text-slate-400">ARC 4th Report • Nolan Principles • CVC</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
          Probity in Governance & Anti-Corruption Architecture
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Master the official guidelines, institutional mechanisms, second ARC recommendations, and civil service conduct rules.
        </p>
      </div>

      {/* Official PDF Books & Reports Action Banner */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-emerald-500/30 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <DownloadCloud className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white block">Official Primary Literature Available:</span>
            <span>Direct access to Second ARC 4th Report, 1st Report, 12th Report, CVC Vigilance Manual & Nolan Principles.</span>
          </div>
        </div>
        <button
          onClick={() => setActiveTab('pdf-library')}
          className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 self-start md:self-auto shrink-0 shadow"
        >
          <span>Open PDF & NCERT Library</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Module Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {GOVERNANCE_MODULES.map((mod) => (
          <button
            key={mod.id}
            onClick={() => setSelectedModId(mod.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedModId === mod.id
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {mod.title.length > 25 ? mod.title.substring(0, 25) + '...' : mod.title}
          </button>
        ))}
      </div>

      {/* Main Module Content Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-8 shadow-2xl">
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Core Topic: {activeModule.topic}
            </span>
            <span className="text-xs text-slate-400 font-mono">Official Reference</span>
          </div>
          <h2 className="text-2xl font-black text-white font-serif">{activeModule.title}</h2>
          <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
            {activeModule.summary}
          </p>
        </div>

        {/* Official Provisions */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" /> Key Official Norms & Provisions:
          </h3>
          <div className="space-y-2">
            {activeModule.officialProvisions.map((prov, idx) => (
              <div key={idx} className="p-3 bg-slate-800/40 border border-slate-700/60 rounded-xl text-xs text-slate-200 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-amber-400 font-bold shrink-0">
                  {idx + 1}
                </span>
                <span>{prov}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Mechanisms & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Building className="w-4 h-4" /> Institutional Safeguards in Place:
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {activeModule.institutionalMechanisms.map((im, idx) => (
                <li key={idx}>{im}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-rose-950/20 border border-rose-500/30 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Systemic Bottlenecks & Failure Modes:
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {activeModule.challenges.map((ch, idx) => (
                <li key={idx}>{ch}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second ARC Link & Actionable Reforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-xl space-y-1.5">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Second ARC 4th Report Synthesis</span>
            <p className="text-xs text-indigo-100 leading-relaxed">{activeModule.secondARCLink}</p>
          </div>
          <div className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl space-y-1.5">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Reform Blueprint Suggested</span>
            <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
              {activeModule.reformsSuggested.map((rf, idx) => (
                <li key={idx}>{rf}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Practical Case Illustration */}
        <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-4 h-4" /> Administrative Case Illustration:
          </span>
          <p className="text-xs text-slate-200 leading-relaxed">{activeModule.caseIllustration}</p>
        </div>

      </div>

    </div>
  );
};
