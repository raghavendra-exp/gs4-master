// src/features/DilemmaSimulator.tsx
// Ethical Dilemma Simulator & Rapid Decision Engine

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { 
  Zap, 
  Scale, 
  ShieldAlert, 
  Check, 
  HelpCircle, 
  TrendingUp, 
  UserCheck, 
  FileCheck, 
  AlertOctagon
} from 'lucide-react';

interface DilemmaScenario {
  id: string;
  title: string;
  role: string;
  context: string;
  options: {
    id: string;
    text: string;
    analysis: string;
    strengths: string[];
    weaknesses: string[];
    ratings: {
      legality: number;
      integrity: number;
      publicInterest: number;
      compassion: number;
      feasibility: number;
      longTermEffect: number;
    };
  }[];
  institutionalLesson: string;
}

export const DILEMMA_SCENARIOS: DilemmaScenario[] = [
  {
    id: 'dil-1',
    title: 'The Whistleblower Subordinate versus Hierarchical Discipline',
    role: 'Municipal Commissioner',
    context: 'A junior executive engineer in your municipal corporation leaks an internal laboratory test report to local investigative journalists. The report reveals that tap water supplied to 200,000 residents in an underprivileged ward contains dangerously elevated lead and coliform bacteria. The leak causes immediate public panic, front-page media outrage, and protests outside the Mayor\'s office. The Mayor (an influential political heavyweight) angrily summons you and demands that you immediately suspend the engineer for violating the Civil Services Conduct Rules (unauthorized communication of official documents) and file a criminal FIR. You know that if the engineer had not leaked the report, the chief engineer and departmental nexus would have buried the report for months to protect negligent water pipeline maintenance contractors.',
    options: [
      {
        id: 'opt-1',
        text: 'Immediately suspend the engineer and register an FIR as demanded by the Mayor to uphold hierarchical discipline and conduct rules.',
        analysis: 'Strict procedural conformity at the expense of moral justice and public health. Discourages any future whistleblowing and punishes an officer who acted to protect 200,000 human lives.',
        strengths: ['Total political compliance', 'Adherence to the literal text of the Conduct Rules'],
        weaknesses: ['Severe ethical failure', 'Suppresses public safety', 'Demoralizes honest officers', 'Destroys public trust'],
        ratings: { legality: 6, integrity: 1, publicInterest: 2, compassion: 1, feasibility: 9, longTermEffect: 1 }
      },
      {
        id: 'opt-2',
        text: 'Publicly defend the engineer as a heroic whistleblower, refuse to take any action against him, and publicly accuse the Mayor and Chief Engineer of corruption in a televised press conference.',
        analysis: 'Emotive, confrontational stance that violates civil service neutrality and professional propriety. Ignites open institutional warfare that paralyzes municipal governance.',
        strengths: ['Moral posturing', 'Heroic public standing'],
        weaknesses: ['Violates civil service conduct rules', 'Destabilizes the municipal corporation', 'Incurs immediate disciplinary suspension from state government'],
        ratings: { legality: 3, integrity: 6, publicInterest: 5, compassion: 6, feasibility: 2, longTermEffect: 3 }
      },
      {
        id: 'opt-3',
        text: 'Separate the Public Health Crisis from the Disciplinary Inquiry: Order an immediate emergency boil-water notice, deploy clean mobile tankers to the affected wards, initiate a high-level inquiry into the contaminated water supply and pipeline contractors, while handling the subordinate\'s procedural breach with a confidential administrative warning under the Whistleblowers Protection Act principles.',
        analysis: 'The optimal balanced administrative resolution. Prioritizes citizens\' right to life (Article 21) first, addresses the systemic contractor corruption, and shields the whistleblower from punitive political vendetta using statutory whistleblower principles without tolerating insubordinate anarchy.',
        strengths: [
          'Immediate protection of 200,000 citizens from lead poisoning',
          'Tackles root cause of water corruption',
          'Balances institutional discipline with moral justice'
        ],
        weaknesses: ['Requires resolute backbone to resist the Mayor\'s initial political pressure'],
        ratings: { legality: 9, integrity: 10, publicInterest: 10, compassion: 9, feasibility: 9, longTermEffect: 10 }
      }
    ],
    institutionalLesson: 'Civil servants are trustees of the public interest. Conduct rules must never be twisted to punish honest disclosure of lethal hazards to public life (2nd ARC 4th Report recommendation on Whistleblowing).'
  },
  {
    id: 'dil-2',
    title: 'Welfare Beneficiary Disqualification vs Extreme Destitution',
    role: 'Sub-Divisional Magistrate (SDM)',
    context: 'A 70-year-old landless Dalit widow with terminal stage-3 cancer approaches you for urgent treatment subsidy under the Chief Minister Relief Fund. Her application is technically disqualified by software because her deceased husband\'s nephew (who abandoned her five years ago) is registered as owning an ancient motorcycle, making the extended household ineligible under the rural poverty exclusion criteria. The civil surgeon informs you that without immediate chemotherapy starting this week, she will not survive another fortnight. The rules strictly state that the SDM cannot override computerized income verification without prior cabinet committee waiver (which takes 4 to 6 months).',
    options: [
      {
        id: 'opt-1',
        text: 'Reject the application with deep regret, citing computer algorithm rules and lack of jurisdiction to override income thresholds.',
        analysis: 'Bureaucratic coldness and abdication of administrative discretion. Sacrifices a human life at the altar of software parameters.',
        strengths: ['Zero audit queries', 'Total rule conformity'],
        weaknesses: ['Direct moral complicity in avoidable death', 'Violates Article 21 and the spirit of social justice'],
        ratings: { legality: 5, integrity: 2, publicInterest: 1, compassion: 1, feasibility: 9, longTermEffect: 1 }
      },
      {
        id: 'opt-2',
        text: 'Falsify government records to remove the nephew\'s vehicle registration from the database so the computer clears her application.',
        analysis: 'Noble intention achieved through illegal means. Fraudulent alteration of official data violates the Prevention of Corruption Act and civil service oath.',
        strengths: ['Helps the immediate victim'],
        weaknesses: ['Criminal misconduct', 'Leaves officer vulnerable to future dismissal and prosecution'],
        ratings: { legality: 1, integrity: 3, publicInterest: 4, compassion: 8, feasibility: 5, longTermEffect: 2 }
      },
      {
        id: 'opt-3',
        text: 'Deploy Emergency Discretionary Channels: Order immediate physical spot-verification by the Tehsildar establishing that she lives in complete abandonment; authorize emergency interim medical sanction under District Red Cross Society / Collector Discretionary Contingency Fund; simultaneously submit an exceptional hardship case to the Health Department for post-facto regularisation.',
        analysis: 'Exemplifies Aristotelian Phronesis (Practical Wisdom) and Gandhian Antyodaya. Solves the life-threatening emergency legally through institutional contingency funds while adhering to statutory truthfulness.',
        strengths: [
          'Saves the woman\'s life within 24 hours',
          'Uses lawful alternative discretionary funds (Red Cross/Contingency)',
          'Maintains complete documentary and financial truthfulness'
        ],
        weaknesses: ['Requires fast inter-departmental mobilization and file processing'],
        ratings: { legality: 9, integrity: 10, publicInterest: 10, compassion: 10, feasibility: 9, longTermEffect: 9 }
      }
    ],
    institutionalLesson: 'Rules are meant to serve life, not vice versa. Where formal procedures create tragic anomalies, an astute administrator identifies lawful alternative institutional channels rather than engaging in either callous rejection or illegal falsification.'
  }
];

export const DilemmaSimulator: React.FC = () => {
  const [activeDilemmaId, setActiveDilemmaId] = useState<string>(DILEMMA_SCENARIOS[0].id);
  const [selectedOptId, setSelectedOptId] = useState<string | null>(null);

  const dilemma = DILEMMA_SCENARIOS.find(d => d.id === activeDilemmaId) || DILEMMA_SCENARIOS[0];
  const selectedOption = dilemma.options.find(o => o.id === selectedOptId);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-rose-400" /> Dilemma Engine
            </span>
            <span className="text-xs text-slate-400">Rapid Administrative Crucible</span>
          </div>
          <h1 className="text-2xl font-black text-white font-serif">
            {dilemma.title}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Testing real-world civil service trade-offs where simplistic right/wrong answers do not exist.
          </p>
        </div>

        {/* Scenario Switcher */}
        <div className="flex items-center gap-2">
          {DILEMMA_SCENARIOS.map((d, idx) => (
            <button
              key={d.id}
              onClick={() => {
                setActiveDilemmaId(d.id);
                setSelectedOptId(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeDilemmaId === d.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Case #{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Brief */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Administrative Role: <strong className="text-white">{dilemma.role}</strong>
          </span>
          <span className="text-xs text-slate-400 font-mono">Dilemma #{dilemma.id}</span>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-sans bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
          {dilemma.context}
        </p>
      </div>

      {/* Decision Options */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 text-amber-400" /> Choose Your Administrative Course of Action:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dilemma.options.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setSelectedOptId(opt.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedOptId === opt.id
                  ? 'bg-slate-800 border-amber-500 ring-2 ring-amber-500 shadow-xl'
                  : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                    selectedOptId === opt.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {opt.id.replace('opt-', '')}
                  </span>
                  {selectedOptId === opt.id && (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {opt.text}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-between text-[11px] font-mono">
                <span className="text-slate-400">Integrity: <strong className="text-amber-400">{opt.ratings.integrity}/10</strong></span>
                <span className="text-slate-400">Public Interest: <strong className="text-indigo-400">{opt.ratings.publicInterest}/10</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Option Analysis & Multi-Dimensional Feedback */}
      {selectedOption && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Comprehensive Evaluation of Option {selectedOption.id.replace('opt-', '')}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">Multi-Dimensional Ethical Diagnostic</h3>
            </div>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold">
              UPSC GS-IV Standards
            </span>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-200 leading-relaxed">
            <strong>Critical Analysis:</strong> {selectedOption.analysis}
          </div>

          {/* 6 Radar Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center">
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Legality</div>
              <div className="text-lg font-black text-emerald-400 mt-1">{selectedOption.ratings.legality}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Integrity</div>
              <div className="text-lg font-black text-amber-400 mt-1">{selectedOption.ratings.integrity}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Public Interest</div>
              <div className="text-lg font-black text-indigo-400 mt-1">{selectedOption.ratings.publicInterest}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Compassion</div>
              <div className="text-lg font-black text-rose-400 mt-1">{selectedOption.ratings.compassion}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Feasibility</div>
              <div className="text-lg font-black text-blue-400 mt-1">{selectedOption.ratings.feasibility}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Long-Term Impact</div>
              <div className="text-lg font-black text-purple-400 mt-1">{selectedOption.ratings.longTermEffect}/10</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
              <h4 className="text-xs font-bold text-emerald-400 mb-2">Strengths of this approach:</h4>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                {selectedOption.strengths.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-rose-950/20 border border-rose-500/30 rounded-xl">
              <h4 className="text-xs font-bold text-rose-400 mb-2">Risks & Vulnerabilities:</h4>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                {selectedOption.weaknesses.map((w, idx) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Institutional Lesson */}
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Core Administrative Takeaway:
            </span>
            <p className="text-xs text-slate-200">{dilemma.institutionalLesson}</p>
          </div>
        </div>
      )}

    </div>
  );
};
