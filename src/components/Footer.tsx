// src/components/Footer.tsx
import React from 'react';
import { useEthics } from '../context/EthicsContext';
import { Scale, Heart, Shield, BookOpen, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab } = useEthics();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Purpose */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <Scale className="w-4 h-4 text-amber-400" />
            </div>
            <span className="font-serif font-black text-lg text-white">ETHICS MASTER</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            The authoritative interactive digital textbook, case study reasoning simulator, and mains answer writing lab for UPSC GS-IV, UPPSC Ethics, and State PSC examinations.
          </p>
          <div className="text-[10px] text-amber-400/80 font-mono">
            "Satyamev Jayate" — Truth Alone Triumphs
          </div>
        </div>

        {/* Core Labs */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Interactive Labs</h4>
          <ul className="space-y-1.5">
            <li>
              <button onClick={() => setActiveTab('case-simulator')} className="hover:text-amber-400 transition-colors">
                14-Step Case Study Simulator
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('dilemma-simulator')} className="hover:text-amber-400 transition-colors">
                Ethical Dilemma Engine
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('ei')} className="hover:text-amber-400 transition-colors">
                Emotional Intelligence Lab
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('theories')} className="hover:text-amber-400 transition-colors">
                Ethical Theory Simulator
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('mains-lab')} className="hover:text-amber-400 transition-colors">
                Mains Answer Writing Workbench
              </button>
            </li>
          </ul>
        </div>

        {/* Authoritative Databases */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Databases & Engines</h4>
          <ul className="space-y-1.5">
            <li>
              <button onClick={() => setActiveTab('pyq')} className="hover:text-amber-400 transition-colors">
                UPSC & UPPSC PYQ Database (2013-24)
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('thinkers')} className="hover:text-amber-400 transition-colors">
                Moral Thinkers & Comparisons
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('current-affairs')} className="hover:text-amber-400 transition-colors">
                Current Affairs Ethics Engine
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('examples')} className="hover:text-amber-400 transition-colors">
                Verified Examples & Quotes
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('vocabulary')} className="hover:text-amber-400 transition-colors">
                Bilingual Lexicon (300+ Terms)
              </button>
            </li>
          </ul>
        </div>

        {/* Official Sources & Standards */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Source Architecture</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Content strictly aligned with Second Administrative Reforms Commission (4th & 12th Reports), CVC Manuals, Supreme Court of India judgments, and the Nolan Committee Standards in Public Life.
          </p>
          <div className="pt-2 text-[10px] text-slate-500">
            Client-Side Architecture • Zero External API Reliance • Ready for GitHub Pages
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          © {new Date().getFullYear()} ETHICS MASTER. Built for Civil Services Aspirants with Uncompromising Integrity.
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-slate-300">UPSC GS-IV</span>
          <span>•</span>
          <span className="hover:text-slate-300">UPPSC PCS</span>
          <span>•</span>
          <span className="hover:text-slate-300">Constitutional Morality</span>
        </div>
      </div>
    </footer>
  );
};
