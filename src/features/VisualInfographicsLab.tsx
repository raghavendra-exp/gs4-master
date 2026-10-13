// src/features/VisualInfographicsLab.tsx
// Interactive Visual Diagrams & Conceptual Schematics for UPSC GS-IV & UPPSC Ethics
// Visualizes CAB Model, Katz Functions, Cialdini Hexagon, Haidt Foundations, Goleman EI, 
// Kant Decision Tree, Rawls Veil of Ignorance, and Indian Ethical Wheel.

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { 
  Network, 
  Brain, 
  Sparkles, 
  Compass, 
  Scale, 
  HeartHandshake, 
  Layers, 
  Sun, 
  Info,
  CheckCircle2,
  HelpCircle,
  Eye,
  Award
} from 'lucide-react';

interface DiagramModel {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'Psychology & Attitude' | 'Persuasion' | 'Emotional Intelligence' | 'Western Philosophy' | 'Indian Tradition';
  highYieldExamRelevance: string;
  description: string;
  diagramKey: 'cab-model' | 'katz-functions' | 'cialdini-hexagon' | 'haidt-radar' | 'goleman-ei' | 'kant-tree' | 'rawls-veil' | 'indian-wheel';
}

const DIAGRAMS: DiagramModel[] = [
  {
    id: 'd-cab',
    title: 'The CAB/ABC Attitude Model & Cognitive Dissonance Loop',
    hindiTitle: 'मनोवृत्ति का CAB मॉडल एवं संज्ञानात्मक असंगति चक्र',
    category: 'Psychology & Attitude',
    highYieldExamRelevance: 'Tested directly in UPSC (2016, 2020) and UPPSC (2019, 2021). Foundation for Attitude change.',
    description: 'Deconstructs attitude into Cognitive (Beliefs), Affective (Emotions), and Behavioral (Action tendencies) components, and illustrates Leon Festinger’s loop of cognitive dissonance when actions contradict moral beliefs.',
    diagramKey: 'cab-model'
  },
  {
    id: 'd-katz',
    title: 'Daniel Katz’s 4 Core Functions of Attitude',
    hindiTitle: 'डैनियल काट्ज़ के मनोवृत्ति के 4 मुख्य प्रकार्य',
    category: 'Psychology & Attitude',
    highYieldExamRelevance: 'UPPSC GS-IV syllabus staple; explains why citizens resist or adopt public policies.',
    description: 'Illustrates the 4 psychological motives behind attitude formation: Knowledge (heuristics), Utilitarian (incentives), Ego-Defensive (anxiety shields), and Value-Expressive (moral identity).',
    diagramKey: 'katz-functions'
  },
  {
    id: 'd-cialdini',
    title: 'Robert Cialdini’s 6 Principles of Ethical Persuasion',
    hindiTitle: 'रॉबर्ट सियालडिनी के नैतिक प्रबोधन के 6 सिद्धांत',
    category: 'Persuasion',
    highYieldExamRelevance: 'Crucial for Mains answers on Social Influence, Swachh Bharat, Tax Compliance, and Beti Bachao.',
    description: 'Hexagonal interactive architecture of Reciprocity, Scarcity, Authority, Consistency, Liking, and Consensus (Social Proof), paired with administrative guardrails.',
    diagramKey: 'cialdini-hexagon'
  },
  {
    id: 'd-haidt',
    title: 'Jonathan Haidt’s 6 Moral Foundations Spectrum',
    hindiTitle: 'जोनाथन हाइड के 6 नैतिक आधार (मॉरल फाउंडेशन्स)',
    category: 'Western Philosophy',
    highYieldExamRelevance: 'Explains ideological and political polarization in policy disputes and communal tensions.',
    description: 'The six evolutionary moral tastebuds: Care/Harm, Fairness/Cheating, Liberty/Oppression, Loyalty/Betrayal, Authority/Subversion, and Sanctity/Degradation.',
    diagramKey: 'haidt-radar'
  },
  {
    id: 'd-goleman',
    title: 'Daniel Goleman’s 5 Pillars of Emotional Intelligence',
    hindiTitle: 'डैनियल गोलमैन के संवेगात्मक बुद्धि के 5 स्तंभ',
    category: 'Emotional Intelligence',
    highYieldExamRelevance: 'UPSC (2013, 2017, 2023); distinguishes an empathetic leader from a sterile bureaucrat.',
    description: 'Hierarchical progression: Self-Awareness ➔ Self-Regulation ➔ Internal Motivation ➔ Empathy ➔ Social Skills.',
    diagramKey: 'goleman-ei'
  },
  {
    id: 'd-kant',
    title: 'Immanuel Kant’s Deontological Categorical Imperative Decision Tree',
    hindiTitle: 'इमैनुएल कांट का कर्तव्यमूलक निरपेक्ष आदेश निर्णय वृक्ष',
    category: 'Western Philosophy',
    highYieldExamRelevance: 'Section A theory and Section B options testing; strict duty over expediency.',
    description: 'Step-by-step universalizability filter: (1) Formulate maxim ➔ (2) Universalize as law of nature ➔ (3) Check contradiction in conception/will ➔ (4) Treat human beings as ends in themselves.',
    diagramKey: 'kant-tree'
  },
  {
    id: 'd-rawls',
    title: 'John Rawls’s Veil of Ignorance & Justice as Fairness',
    hindiTitle: 'जॉन रॉल्स का अज्ञानता का पर्दा एवं न्याय के सिद्धांत',
    category: 'Western Philosophy',
    highYieldExamRelevance: 'Benchmark for affirmative action, reservation, welfare distribution, and tribal displacement.',
    description: 'Original Position behind the Veil of Ignorance leading to Principle 1 (Equal Basic Liberties) and Principle 2 (Fair Equality of Opportunity + Difference Principle / Maximin).',
    diagramKey: 'rawls-veil'
  },
  {
    id: 'd-indian',
    title: 'The Indian Civilizational Ethical Wheel (ऋत से सर्वोदय)',
    hindiTitle: 'भारतीय नैतिक चक्र: ऋत ➔ धर्म ➔ निष्काम कर्म ➔ सर्वोदय',
    category: 'Indian Tradition',
    highYieldExamRelevance: 'High-scoring Indian ethos module; integrates Vedic Rta, Gita\'s Nishkama Karma, and Gandhi\'s Sarvodaya.',
    description: 'The cyclical harmony connecting cosmic cosmic order (Rta), moral duty (Dharma), detached public service (Nishkama Karma), and universal subaltern welfare (Sarvodaya/Antyodaya).',
    diagramKey: 'indian-wheel'
  }
];

export const VisualInfographicsLab: React.FC = () => {
  const { hindiMode } = useEthics();
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>(DIAGRAMS[0].id);
  const [activeInteractiveElement, setActiveInteractiveElement] = useState<string | null>(null);

  const currentDiagram = DIAGRAMS.find(d => d.id === selectedDiagramId) || DIAGRAMS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border border-blue-500/30 rounded-2xl p-6 mb-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Network className="w-4 h-4" />
              <span>Interactive Visual Synthesis & Cognitive Schematics</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Visual Infographics & Conceptual Lab
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              {hindiMode
                ? 'नीतिशास्त्र के सर्वाधिक महत्वपूर्ण अमूर्त सिद्धांतों का दृश्य आरेख एवं फ्लोचार्ट: CAB मॉडल, काट्ज़ प्रकार्य, सियालडिनी षट्कोण, हाइड स्पेक्ट्रम, गोलमैन संवेगात्मक बुद्धि, कांट निर्णय-वृक्ष एवं भारतीय नैतिक चक्र।'
                : 'Interactive SVG architectural diagrams, mental models, and decision trees for zero-textbook conceptual mastery in UPSC GS-IV and UPPSC Ethics.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-xl border border-slate-700">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-amber-300 font-bold">
              8 Master Visual Blueprints
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Selector Sidebar */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-mono uppercase text-slate-400 font-bold px-1">
            Select Conceptual Blueprint:
          </h3>
          {DIAGRAMS.map((diag) => {
            const isSelected = diag.id === selectedDiagramId;
            return (
              <button
                key={diag.id}
                onClick={() => {
                  setSelectedDiagramId(diag.id);
                  setActiveInteractiveElement(null);
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold uppercase">
                    {diag.category}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                </div>
                <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {diag.title}
                </h4>
                {hindiMode && (
                  <p className="text-xs text-amber-400/90 mt-1 font-hindi">
                    {diag.hindiTitle}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Diagram Display & Interactive Exploration */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            {/* Header */}
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold uppercase">
                {currentDiagram.category}
              </span>
              <h2 className="text-xl md:text-2xl font-black text-white mt-2">
                {currentDiagram.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {currentDiagram.description}
              </p>
              <div className="mt-3 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center gap-2">
                <Award className="w-4 h-4 shrink-0 text-amber-400" />
                <span><strong>High-Yield Exam Focus:</strong> {currentDiagram.highYieldExamRelevance}</span>
              </div>
            </div>

            {/* Interactive SVG Render Area */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 min-h-[420px] flex items-center justify-center relative overflow-hidden">
              {/* Diagram 1: CAB / ABC Attitude Model */}
              {currentDiagram.diagramKey === 'cab-model' && (
                <div className="w-full max-w-xl space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div 
                      onClick={() => setActiveInteractiveElement('Cognitive')}
                      className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                        activeInteractiveElement === 'Cognitive'
                          ? 'bg-blue-900/40 border-blue-400 shadow-lg scale-105'
                          : 'bg-slate-900 border-blue-500/30 hover:border-blue-400'
                      }`}
                    >
                      <Brain className="w-6 h-6 mx-auto text-blue-400 mb-2" />
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cognitive (C)</h4>
                      <span className="text-[11px] text-blue-300">Beliefs & Schemas</span>
                    </div>

                    <div 
                      onClick={() => setActiveInteractiveElement('Affective')}
                      className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                        activeInteractiveElement === 'Affective'
                          ? 'bg-pink-900/40 border-pink-400 shadow-lg scale-105'
                          : 'bg-slate-900 border-pink-500/30 hover:border-pink-400'
                      }`}
                    >
                      <HeartHandshake className="w-6 h-6 mx-auto text-pink-400 mb-2" />
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Affective (A)</h4>
                      <span className="text-[11px] text-pink-300">Feelings & Emotions</span>
                    </div>

                    <div 
                      onClick={() => setActiveInteractiveElement('Behavioral')}
                      className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                        activeInteractiveElement === 'Behavioral'
                          ? 'bg-emerald-900/40 border-emerald-400 shadow-lg scale-105'
                          : 'bg-slate-900 border-emerald-500/30 hover:border-emerald-400'
                      }`}
                    >
                      <Compass className="w-6 h-6 mx-auto text-emerald-400 mb-2" />
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Behavioral (B)</h4>
                      <span className="text-[11px] text-emerald-300">Action Tendency</span>
                    </div>
                  </div>

                  {/* Connecting Arrows & Dissonance Circle */}
                  <div className="relative border-2 border-dashed border-slate-700 rounded-xl p-5 bg-slate-900/50 text-center space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      Festinger's Cognitive Dissonance Friction Loop
                    </span>
                    <p className="text-xs text-slate-300">
                      When <strong>Behavior (B)</strong> contradicts <strong>Cognitive (C)</strong> values or <strong>Affective (A)</strong> sentiments, acute psychological discomfort arises.
                    </p>
                    <div className="flex justify-center gap-2 text-[11px] font-mono">
                      <span className="px-2 py-1 bg-red-950 border border-red-500/30 text-red-300 rounded">
                        1. Discomfort Experienced
                      </span>
                      <span className="text-slate-500 self-center">➔</span>
                      <span className="px-2 py-1 bg-amber-950 border border-amber-500/30 text-amber-300 rounded">
                        2. Rationalization / Denial
                      </span>
                      <span className="text-slate-500 self-center">➔</span>
                      <span className="px-2 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-300 rounded">
                        3. Ethical Course Correction
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Diagram 2: Daniel Katz’s 4 Functions */}
              {currentDiagram.diagramKey === 'katz-functions' && (
                <div className="w-full max-w-xl grid grid-cols-2 gap-4">
                  <div 
                    onClick={() => setActiveInteractiveElement('Knowledge')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      activeInteractiveElement === 'Knowledge'
                        ? 'bg-cyan-950 border-cyan-400 scale-102 shadow-lg'
                        : 'bg-slate-900 border-slate-800 hover:border-cyan-500/50'
                    }`}
                  >
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold">1. KNOWLEDGE</span>
                    <h4 className="text-sm font-bold text-white mt-2">Simplifies Reality (Heuristics)</h4>
                    <p className="text-xs text-slate-400 mt-1">Organizes chaotic information into predictable mental categories.</p>
                  </div>

                  <div 
                    onClick={() => setActiveInteractiveElement('Utilitarian')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      activeInteractiveElement === 'Utilitarian'
                        ? 'bg-amber-950 border-amber-400 scale-102 shadow-lg'
                        : 'bg-slate-900 border-slate-800 hover:border-amber-500/50'
                    }`}
                  >
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">2. UTILITARIAN</span>
                    <h4 className="text-sm font-bold text-white mt-2">Maximizes Social Reward</h4>
                    <p className="text-xs text-slate-400 mt-1">Conforms to peer/state expectations to gain approval and avoid penalties.</p>
                  </div>

                  <div 
                    onClick={() => setActiveInteractiveElement('Ego-Defensive')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      activeInteractiveElement === 'Ego-Defensive'
                        ? 'bg-red-950 border-red-400 scale-102 shadow-lg'
                        : 'bg-slate-900 border-slate-800 hover:border-red-500/50'
                    }`}
                  >
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold">3. EGO-DEFENSIVE</span>
                    <h4 className="text-sm font-bold text-white mt-2">Shields Self-Esteem</h4>
                    <p className="text-xs text-slate-400 mt-1">Protects psyche from internal insecurities, guilt, and external threats.</p>
                  </div>

                  <div 
                    onClick={() => setActiveInteractiveElement('Value-Expressive')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      activeInteractiveElement === 'Value-Expressive'
                        ? 'bg-emerald-950 border-emerald-400 scale-102 shadow-lg'
                        : 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                    }`}
                  >
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">4. VALUE-EXPRESSIVE</span>
                    <h4 className="text-sm font-bold text-white mt-2">Projects Core Identity</h4>
                    <p className="text-xs text-slate-400 mt-1">Communicates deep personal morality, constitutional beliefs, and character.</p>
                  </div>
                </div>
              )}

              {/* Diagram 3: Cialdini Hexagon */}
              {currentDiagram.diagramKey === 'cialdini-hexagon' && (
                <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Reciprocity', desc: 'People feel obligated to return favors (e.g. state goodwill prompting tax compliance).' },
                    { name: 'Scarcity', desc: 'People value limited opportunities (e.g. deadline for subsidy registration).' },
                    { name: 'Authority', desc: 'People follow credible, certified experts (e.g. Chief Medical Officer vaccine appeal).' },
                    { name: 'Consistency', desc: 'People align with prior public commitments (e.g. Swachhata pledge).' },
                    { name: 'Liking', desc: 'People say yes to those who empathize and relate to them (e.g. local community champion).' },
                    { name: 'Consensus (Proof)', desc: 'People follow social proof ("90% of your village has installed toilets").' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveInteractiveElement(item.name)}
                      className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                        activeInteractiveElement === item.name
                          ? 'bg-amber-500/20 border-amber-400 shadow-md scale-105'
                          : 'bg-slate-900 border-slate-800 hover:border-amber-500/40'
                      }`}
                    >
                      <span className="text-amber-400 font-bold text-xs block">{item.name}</span>
                      <p className="text-[10px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Diagram 4: Haidt Moral Foundations */}
              {currentDiagram.diagramKey === 'haidt-radar' && (
                <div className="w-full max-w-xl space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {[
                      { pair: 'Care / Harm', color: 'text-emerald-400', desc: 'Protecting the vulnerable from suffering.' },
                      { pair: 'Fairness / Cheating', color: 'text-blue-400', desc: 'Justice, reciprocity, proportionality.' },
                      { pair: 'Liberty / Oppression', color: 'text-cyan-400', desc: 'Resistance to tyranny and bullying.' },
                      { pair: 'Loyalty / Betrayal', color: 'text-amber-400', desc: 'Solidarity with the community/nation.' },
                      { pair: 'Authority / Subversion', color: 'text-indigo-400', desc: 'Respect for legitimate institutions and traditions.' },
                      { pair: 'Sanctity / Degradation', color: 'text-purple-400', desc: 'Purity, spiritual elevated disgust.' },
                    ].map((f, i) => (
                      <div 
                        key={i} 
                        onClick={() => setActiveInteractiveElement(f.pair)}
                        className={`p-3 rounded-xl border bg-slate-900 cursor-pointer transition-all ${
                          activeInteractiveElement === f.pair ? 'border-cyan-400 bg-slate-800 scale-105' : 'border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <strong className={`${f.color} block text-[11px]`}>{f.pair}</strong>
                        <span className="text-[10px] text-slate-400 mt-1 block">{f.desc}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-[11px] text-slate-400 italic">
                    Liberal morality prioritizes Care & Fairness; Conservative morality activates all 6 foundations equally.
                  </p>
                </div>
              )}

              {/* Diagram 5: Goleman EI */}
              {currentDiagram.diagramKey === 'goleman-ei' && (
                <div className="w-full max-w-lg space-y-2.5">
                  {[
                    { step: 1, name: 'Self-Awareness', desc: 'Recognizing one’s own emotional triggers and biases in real time.', color: 'border-blue-500/40 text-blue-300' },
                    { step: 2, name: 'Self-Regulation', desc: 'Controlling disruptive impulses and emotional panic under crisis.', color: 'border-cyan-500/40 text-cyan-300' },
                    { step: 3, name: 'Internal Motivation', desc: 'Passion for public service and excellence beyond salary or power.', color: 'border-emerald-500/40 text-emerald-300' },
                    { step: 4, name: 'Empathy', desc: 'Accurately feeling and understanding the emotional plight of citizens.', color: 'border-amber-500/40 text-amber-300' },
                    { step: 5, name: 'Social Skills', desc: 'De-escalating mobs, inspiring teamwork, and managing disputes.', color: 'border-pink-500/40 text-pink-300' },
                  ].map((item) => (
                    <div
                      key={item.step}
                      onClick={() => setActiveInteractiveElement(item.name)}
                      className={`p-3 rounded-xl border bg-slate-900 flex items-center justify-between cursor-pointer transition-all ${
                        activeInteractiveElement === item.name ? 'border-amber-400 scale-102 bg-slate-800' : item.color
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-white font-mono text-xs flex items-center justify-center font-bold">
                          {item.step}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-white">{item.name}</h4>
                          <p className="text-[10px] text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                      <Eye className="w-4 h-4 text-slate-500" />
                    </div>
                  ))}
                </div>
              )}

              {/* Diagram 6: Kant Decision Tree */}
              {currentDiagram.diagramKey === 'kant-tree' && (
                <div className="w-full max-w-xl space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center font-bold text-white">
                    Step 1: State the Proposed Action Maxim (e.g. "Lie to save an honest colleague")
                  </div>
                  <div className="text-center text-slate-500 font-mono">▼ Universalize the Maxim</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center text-slate-300">
                    Step 2: Could this maxim become a Universal Law of Nature for all rational beings?
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200">
                      <strong>Contradiction in Conception:</strong>
                      <p className="text-[11px] mt-1 text-red-300/80">If everyone lied, truth and promises would lose meaning. Universal lying self-destructs.</p>
                      <span className="block mt-2 text-[10px] font-mono text-red-400 font-bold">➔ ACTION FORBIDDEN (Strict Duty)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                      <strong>Formula of Humanity:</strong>
                      <p className="text-[11px] mt-1 text-emerald-300/80">Never treat human beings merely as a means to an end, but always as an end in themselves.</p>
                      <span className="block mt-2 text-[10px] font-mono text-emerald-400 font-bold">➔ ACTION PERMISSIBLE</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Diagram 7: Rawls Veil of Ignorance */}
              {currentDiagram.diagramKey === 'rawls-veil' && (
                <div className="w-full max-w-xl space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/40 text-center space-y-1">
                    <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest font-bold">Original Position</span>
                    <h4 className="text-sm font-bold text-white">Behind the Veil of Ignorance</h4>
                    <p className="text-[11px] text-indigo-200/80">
                      You do not know your gender, caste, religion, wealth, health, or social status in the society you are designing.
                    </p>
                  </div>
                  <div className="text-center text-slate-500 font-mono">▼ Rational Self-Interest (Minimax / Risk Aversion)</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-1">
                      <strong className="text-cyan-400 block text-xs">Principle 1: Equal Liberty</strong>
                      <p className="text-[11px] text-slate-300">Each person has an equal right to the most extensive basic liberties compatible with similar liberties for others.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1">
                      <strong className="text-amber-400 block text-xs">Principle 2: Difference Principle</strong>
                      <p className="text-[11px] text-slate-300">Social and economic inequalities are permitted ONLY if they work to the greatest benefit of the least-advantaged (Maximin).</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Diagram 8: Indian Ethical Wheel */}
              {currentDiagram.diagramKey === 'indian-wheel' && (
                <div className="w-full max-w-xl space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 text-center">
                      <Sun className="w-6 h-6 mx-auto text-amber-400 mb-1" />
                      <strong className="text-amber-300 block">1. ऋत (Rta)</strong>
                      <p className="text-[10px] text-slate-400 mt-1">Universal cosmic truth, ecological harmony, and supreme moral order.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-blue-500/30 text-center">
                      <Scale className="w-6 h-6 mx-auto text-blue-400 mb-1" />
                      <strong className="text-blue-300 block">2. धर्म (Dharma)</strong>
                      <p className="text-[10px] text-slate-400 mt-1">Righteous moral duty sustaining social justice and individual conscience.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-center">
                      <Compass className="w-6 h-6 mx-auto text-emerald-400 mb-1" />
                      <strong className="text-emerald-300 block">3. निष्काम कर्म (Nishkama Karma)</strong>
                      <p className="text-[10px] text-slate-400 mt-1">Action performed with skill and devotion without selfish attachment to personal fruits.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 text-center">
                      <HeartHandshake className="w-6 h-6 mx-auto text-purple-400 mb-1" />
                      <strong className="text-purple-300 block">4. सर्वोदय / अंत्योदय (Sarvodaya)</strong>
                      <p className="text-[10px] text-slate-400 mt-1">Universal welfare and priority upliftment of the last, weakest individual.</p>
                    </div>
                  </div>
                  <div className="text-center text-[11px] font-mono text-amber-400 bg-amber-950/20 p-2 rounded-lg border border-amber-500/20">
                    "धारणाद् धर्म इत्याहुः धर्मो धारयते प्रजाः" — Dharma is that which holds society together.
                  </div>
                </div>
              )}
            </div>

            {/* Explanatory Footer Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Info className="w-4 h-4" />
                <span>How to Draw This in Mains Answers (GS-IV & UPPSC):</span>
              </div>
              <p className="leading-relaxed">
                Drawing a crisp 2-inch schematic flowchart or triangle diagram of this concept in Section A (Theory) or Section B (Case Studies) immediately signals structural mastery to the examiner, transforming an average 3.5/10 answer into a top-bracket 6.5/10 response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
