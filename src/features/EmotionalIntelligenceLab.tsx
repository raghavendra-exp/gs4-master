// src/features/EmotionalIntelligenceLab.tsx
// Emotional Intelligence Lab & Crisis Administration Simulator

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { 
  Smile, 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Activity, 
  MessageSquare
} from 'lucide-react';

interface EIScenario {
  id: string;
  title: string;
  context: string;
  emotionalTrigger: string;
  responses: {
    id: string;
    text: string;
    scores: {
      selfAwareness: number;
      selfRegulation: number;
      empathy: number;
      communication: number;
      adminEffectiveness: number;
    };
    feedback: string;
    golemanDimension: string;
  }[];
}

const EI_SCENARIOS: EIScenario[] = [
  {
    id: 'ei-1',
    title: 'Hospital Negligence Crisis & Agitated Kin',
    context: 'You are the District Magistrate. A pregnant woman from a rural hamlet dies in the government district hospital due to alleged unavailability of doctors on night duty. Her grieving family, joined by 300 agitated village residents, blocks the national highway with the body. As you arrive at the spot, a furious local leader lunges forward, shouting abuses at you personally, thrusting camera phones in your face, accusing the administration of deliberate murder of poor people, and attempting to physically obstruct your car.',
    emotionalTrigger: 'Personal verbal abuse, camera scrutiny, potential fear of physical assault, grief-fueled collective rage.',
    responses: [
      {
        id: 'r1',
        text: 'Order the police to baton-charge (lathi charge) immediately to clear the national highway and arrest the shouting leader for obstructing a public servant.',
        scores: { selfAwareness: 2, selfRegulation: 1, empathy: 1, communication: 2, adminEffectiveness: 2 },
        feedback: 'Complete failure of self-regulation and empathy. Lathi charging grieving relatives turns a tragedy into an explosive civil unrest and destroys institutional credibility.',
        golemanDimension: 'Self-Regulation Failure'
      },
      {
        id: 'r2',
        text: 'Step out of the vehicle calmly without weapons, instruct the police to maintain non-threatening perimeter security, gently offer condolences to the grieving husband, listen without interrupting to the family\'s agonizing account, order immediate videographed post-mortem by a board of independent medical experts, and announce a provisional ex-gratia relief while ordering a time-bound magisterial inquiry.',
        scores: { selfAwareness: 10, selfRegulation: 10, empathy: 10, communication: 10, adminEffectiveness: 10 },
        feedback: 'Textbook demonstration of high Emotional Intelligence (Aristotle\'s anger doctrine & Goleman\'s empathy). De-escalates collective grief, isolates rogue political opportunists, and builds trust through transparent procedural action.',
        golemanDimension: 'Empathy & Crisis De-escalation Mastery'
      },
      {
        id: 'r3',
        text: 'Stay safely inside the locked bullet-proof car, make urgent phone calls to the state home secretary to send paramilitary forces, and refuse to communicate until the crowd completely disperses.',
        scores: { selfAwareness: 4, selfRegulation: 4, empathy: 2, communication: 1, adminEffectiveness: 3 },
        feedback: 'Signals cowardice, apathy, and bureaucratic alienation. Fuels rumors of administrative cover-up and intensifies highway blockade.',
        golemanDimension: 'Empathy & Social Skills Deficiency'
      }
    ]
  },
  {
    id: 'ei-2',
    title: 'Political Coercion and Demeaning Public Scolding',
    context: 'During an open District Development Review meeting, an influential State Cabinet Minister publicly humiliates you in front of your subordinate department heads and press cameras, shouting that you are "useless, arrogant, and deliberately sabotaging his constituency development works" because you flagged illegal encroachment in a lake rejuvenation contract.',
    emotionalTrigger: 'Public embarrassment, attack on professional dignity, threat to self-esteem, provocation to retort angrily.',
    responses: [
      {
        id: 'r1',
        text: 'Retort aggressively on the microphone, accusing the Minister of being corrupt and having personal commercial interests in the encroached lake property.',
        scores: { selfAwareness: 3, selfRegulation: 2, empathy: 2, communication: 3, adminEffectiveness: 3 },
        feedback: 'Emotional hijacking (Amygdala hijack). Creates immediate political showdown, violates civil service conduct rules, and diverts focus from the actual ecological issue of lake encroachment.',
        golemanDimension: 'Lack of Emotional Self-Regulation'
      },
      {
        id: 'r2',
        text: 'Maintain composed body language, refuse to react defensively or interrupt the Minister\'s tirade, wait for silence, and calmly respond: "Sir, our sole mandate is lawful execution under High Court lake conservation directives; I will submit a complete factual file to your office today showing how the project can proceed without violating environmental norms."',
        scores: { selfAwareness: 10, selfRegulation: 10, empathy: 8, communication: 10, adminEffectiveness: 10 },
        feedback: 'Mastery of Emotional Self-Regulation and Social Skill. Defuses public theater, maintains dignified composure, anchors the matter in lawful court directives, and avoids insubordination while not conceding illegal demands.',
        golemanDimension: 'High Self-Regulation & Social Diplomacy'
      },
      {
        id: 'r3',
        text: 'Break down in tears publicly, apologize profusely to the Minister, and promise to sign whatever papers the Minister wants immediately.',
        scores: { selfAwareness: 2, selfRegulation: 1, empathy: 3, communication: 2, adminEffectiveness: 1 },
        feedback: 'Total collapse of executive fortitude and professional integrity. Subordinates lose all respect and the illegal encroachment proceeds unhindered.',
        golemanDimension: 'Failure of Emotional Resilience'
      }
    ]
  }
];

export const EmotionalIntelligenceLab: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(EI_SCENARIOS[0].id);
  const [selectedRespId, setSelectedRespId] = useState<string | null>(null);

  const scenario = EI_SCENARIOS.find(s => s.id === activeScenarioId) || EI_SCENARIOS[0];
  const selectedResponse = scenario.responses.find(r => r.id === selectedRespId);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
              <Smile className="w-3.5 h-3.5" /> EI Simulator & Diagnostic
            </span>
            <span className="text-xs text-slate-400">Goleman & Mayer-Salovey Models</span>
          </div>
          <h1 className="text-2xl font-black text-white font-serif">
            Emotional Intelligence Administration Lab
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Cultivate psychological self-regulation, affective empathy, and crisis negotiation skills under acute stress.
          </p>
        </div>

        {/* 5 Goleman Domains Badges */}
        <div className="flex flex-wrap gap-2 text-[10px] font-bold">
          <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-amber-300">1. Self-Awareness</span>
          <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-emerald-300">2. Self-Regulation</span>
          <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-indigo-300">3. Motivation</span>
          <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-rose-300">4. Empathy</span>
          <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-teal-300">5. Social Skills</span>
        </div>
      </div>

      {/* Scenario Selector & Context */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {EI_SCENARIOS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveScenarioId(s.id);
                  setSelectedRespId(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeScenarioId === s.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Simulation #{idx + 1}
              </button>
            ))}
          </div>
          <span className="text-xs text-rose-400 font-medium flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" /> High-Stress Crisis Test
          </span>
        </div>

        <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700 space-y-2">
          <h2 className="text-base font-bold text-white">{scenario.title}</h2>
          <p className="text-xs text-slate-200 leading-relaxed">{scenario.context}</p>
          <div className="pt-2 text-xs text-amber-300">
            <strong>Psychological Pressure Trigger:</strong> {scenario.emotionalTrigger}
          </div>
        </div>
      </div>

      {/* Response Options */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Select Your Immediate Behavioral & Tactical Response:
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {scenario.responses.map((resp, idx) => (
            <div
              key={resp.id}
              onClick={() => setSelectedRespId(resp.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedRespId === resp.id
                  ? 'bg-slate-800 border-indigo-500 ring-2 ring-indigo-500 shadow-xl'
                  : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                  selectedRespId === resp.id ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'
                }`}>
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {resp.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Response Diagnostic */}
      {selectedResponse && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                Psychological Diagnostic Feedback
              </span>
              <h4 className="text-lg font-bold text-white mt-1">
                Dimension: {selectedResponse.golemanDimension}
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Score: {Object.values(selectedResponse.scores).reduce((a, b) => a + b, 0)} / 50
            </span>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/60 p-4 rounded-xl border border-slate-700">
            <strong>Evaluative Assessment:</strong> {selectedResponse.feedback}
          </p>

          {/* EI 5-Dimension Competency Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Self-Awareness</div>
              <div className="text-lg font-black text-amber-400 mt-1">{selectedResponse.scores.selfAwareness}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Self-Regulation</div>
              <div className="text-lg font-black text-emerald-400 mt-1">{selectedResponse.scores.selfRegulation}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Empathy</div>
              <div className="text-lg font-black text-rose-400 mt-1">{selectedResponse.scores.empathy}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Communication</div>
              <div className="text-lg font-black text-teal-400 mt-1">{selectedResponse.scores.communication}/10</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400">Effectiveness</div>
              <div className="text-lg font-black text-indigo-400 mt-1">{selectedResponse.scores.adminEffectiveness}/10</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
