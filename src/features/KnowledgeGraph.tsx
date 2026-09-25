// src/features/KnowledgeGraph.tsx
// Signature Feature: Interactive Ethics Conceptual Knowledge Graph

import React, { useState } from 'react';
import { useEthics, ActiveTab } from '../context/EthicsContext';
import { 
  Network, 
  Sparkles, 
  ChevronRight, 
  ArrowRight, 
  Brain, 
  Scale, 
  ShieldCheck, 
  BookOpen, 
  Heart,
  Landmark,
  Puzzle,
  FileText
} from 'lucide-react';

interface GraphNode {
  id: string;
  label: string;
  hindiLabel: string;
  category: 'Concept' | 'Value' | 'Thinker' | 'Governance' | 'Case' | 'PYQ';
  targetTab: ActiveTab;
  description: string;
  connections: string[];
}

const GRAPH_NODES: GraphNode[] = [
  {
    id: 'node-integrity',
    label: 'Integrity (सत्यनिष्ठा)',
    hindiLabel: 'सत्यनिष्ठा',
    category: 'Value',
    targetTab: 'values',
    description: 'Wholeness of moral character, undivided alignment of thought, word, and deed.',
    connections: ['node-probity', 'node-accountability', 'node-public-trust']
  },
  {
    id: 'node-probity',
    label: 'Probity in Governance (शुचिता)',
    hindiLabel: 'शुचिता',
    category: 'Governance',
    targetTab: 'governance',
    description: 'Confirmed incorruptibility and unimpeachable financial rectitude in public administration.',
    connections: ['node-public-trust', 'node-2nd-arc']
  },
  {
    id: 'node-accountability',
    label: 'Accountability (जवाबदेही)',
    hindiLabel: 'जवाबदेही',
    category: 'Governance',
    targetTab: 'governance',
    description: 'Obligation to justify decisions and accept administrative scrutiny.',
    connections: ['node-rti', 'node-public-trust']
  },
  {
    id: 'node-public-trust',
    label: 'Public Trust (जन विश्वास)',
    hindiLabel: 'जन विश्वास',
    category: 'Concept',
    targetTab: 'concepts',
    description: 'The supreme democratic asset binding citizens to constitutional state authority.',
    connections: ['node-good-governance']
  },
  {
    id: 'node-good-governance',
    label: 'Good Governance (सुशासन)',
    hindiLabel: 'सुशासन',
    category: 'Governance',
    targetTab: 'governance',
    description: 'Citizen-centric, transparent, effective, and inclusive administration.',
    connections: ['node-case-tendering']
  },
  {
    id: 'node-case-tendering',
    label: 'Case: Highway Procurement Tenders',
    hindiLabel: 'केस: निविदा भ्रष्टाचार',
    category: 'Case',
    targetTab: 'case-simulator',
    description: 'Balancing political pressure against structural public safety.',
    connections: ['node-pyq-integrity']
  },
  {
    id: 'node-pyq-integrity',
    label: 'PYQ: Competence vs Integrity (2023)',
    hindiLabel: 'पीवाईक्यू: सक्षमता बनाम सत्यनिष्ठा',
    category: 'PYQ',
    targetTab: 'pyq',
    description: 'UPSC 2023 10-marker on whether competence can exist without moral integrity.',
    connections: []
  },
  {
    id: 'node-empathy',
    label: 'Empathy (समानुभूति)',
    hindiLabel: 'समानुभूति',
    category: 'Value',
    targetTab: 'values',
    description: 'Perspective-taking and feeling the suffering of vulnerable citizens from within.',
    connections: ['node-ei', 'node-compassion']
  },
  {
    id: 'node-ei',
    label: 'Emotional Intelligence (संवेगात्मक बुद्धि)',
    hindiLabel: 'संवेगात्मक बुद्धि',
    category: 'Concept',
    targetTab: 'ei',
    description: 'Regulating passions and deploying social skills during public crises.',
    connections: ['node-compassion', 'node-gandhi-talisman']
  },
  {
    id: 'node-compassion',
    label: 'Compassion (करुणा)',
    hindiLabel: 'करुणा',
    category: 'Value',
    targetTab: 'values',
    description: 'Translating empathetic emotion into tangible administrative relief.',
    connections: ['node-case-ration']
  },
  {
    id: 'node-gandhi-talisman',
    label: 'Gandhian Talisman & Antyodaya',
    hindiLabel: 'गांधी का जंतर',
    category: 'Thinker',
    targetTab: 'thinkers',
    description: 'Recalling the face of the poorest person before making any policy decision.',
    connections: ['node-case-ration']
  },
  {
    id: 'node-case-ration',
    label: 'Case: Biometric Failure & Starvation',
    hindiLabel: 'केस: बायोमेट्रिक एवं भुखमरी',
    category: 'Case',
    targetTab: 'case-simulator',
    description: 'Reconciling technical biometric rules with the fundamental Right to Life (Article 21).',
    connections: ['node-rawls-difference']
  },
  {
    id: 'node-rawls-difference',
    label: 'Rawls: Difference Principle',
    hindiLabel: 'रॉल्स: भेद सिद्धांत',
    category: 'Thinker',
    targetTab: 'theories',
    description: 'Maximizing the welfare of the least advantaged social group (Maximin rule).',
    connections: []
  }
];

export const KnowledgeGraph: React.FC = () => {
  const { setActiveTab } = useEthics();
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-integrity');

  const activeNode = GRAPH_NODES.find(n => n.id === selectedNodeId) || GRAPH_NODES[0];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5 text-indigo-400" /> Signature Knowledge Graph
          </span>
          <span className="text-xs text-slate-400">Holistic Conceptual Interconnectivity</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
          Ethics Master Knowledge Network
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Explore how abstract ethical values cascade into governance institutions, real-world case studies, thinkers, and actual UPSC PYQs.
        </p>
      </div>

      {/* Main Interactive Graph Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Visual Node Cluster (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
            <span className="font-bold uppercase tracking-wider">Conceptual Pathways</span>
            <span>Click any node to inspect details</span>
          </div>

          {/* Cluster 1: Integrity -> Probity -> Public Trust -> Case Study */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Pathway 1: Probity & Public Trust Architecture
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                'node-integrity',
                'node-probity',
                'node-accountability',
                'node-public-trust',
                'node-good-governance',
                'node-case-tendering',
                'node-pyq-integrity'
              ].map((nId, idx, arr) => {
                const node = GRAPH_NODES.find(n => n.id === nId);
                if (!node) return null;
                const isSelected = activeNode.id === node.id;

                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 scale-105 shadow-md shadow-amber-500/20'
                          : 'bg-slate-800/80 text-slate-200 border border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {node.label}
                    </button>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Cluster 2: Empathy -> EI -> Compassion -> Gandhi -> Case Study -> Rawls */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-4 h-4" /> Pathway 2: Empathy, Antyodaya & Welfare Justice
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                'node-empathy',
                'node-ei',
                'node-compassion',
                'node-gandhi-talisman',
                'node-case-ration',
                'node-rawls-difference'
              ].map((nId, idx, arr) => {
                const node = GRAPH_NODES.find(n => n.id === nId);
                if (!node) return null;
                const isSelected = activeNode.id === node.id;

                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        isSelected
                          ? 'bg-rose-500 text-white scale-105 shadow-md shadow-rose-500/20'
                          : 'bg-slate-800/80 text-slate-200 border border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {node.label}
                    </button>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Active Node Inspector Drawer (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4 space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Node Category: {activeNode.category}
            </span>
            <h3 className="text-2xl font-black text-white font-serif">{activeNode.label}</h3>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            {activeNode.description}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Directly Linked Nodes:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeNode.connections.length > 0 ? (
                activeNode.connections.map(cId => {
                  const target = GRAPH_NODES.find(n => n.id === cId);
                  if (!target) return null;
                  return (
                    <button
                      key={target.id}
                      onClick={() => setSelectedNodeId(target.id)}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg border border-slate-700 flex items-center gap-1"
                    >
                      <span>{target.label}</span>
                      <ChevronRight className="w-3 h-3 text-amber-400" />
                    </button>
                  );
                })
              ) : (
                <span className="text-xs text-slate-500 italic">Terminal node in pathway</span>
              )}
            </div>
          </div>

          {/* Jump to Relevant Module CTA */}
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => setActiveTab(activeNode.targetTab)}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Dedicated Module in {activeNode.targetTab.toUpperCase()}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
