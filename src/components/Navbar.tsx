// src/components/Navbar.tsx
import React from 'react';
import { useEthics, ActiveTab } from '../context/EthicsContext';
import { 
  Brain, 
  Heart, 
  Target, 
  Smile, 
  GraduationCap, 
  Scale, 
  Landmark, 
  FileText, 
  Puzzle, 
  Zap, 
  PenTool, 
  History, 
  Newspaper, 
  Lightbulb, 
  Quote, 
  BookA, 
  Network, 
  Repeat, 
  BarChart3,
  Sparkles,
  MapPin,
  DownloadCloud,
  BookMarked,
  Eye,
  Compass
} from 'lucide-react';

interface NavItem {
  id: ActiveTab;
  label: string;
  hindiLabel: string;
  icon: React.ElementType;
  badge?: string;
  isSignature?: boolean;
}

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, hindiMode } = useEthics();

  const navItems: NavItem[] = [
    { id: 'case-simulator', label: 'Case Simulator', hindiLabel: 'केस स्टडी सिमुलेटर', icon: Puzzle, isSignature: true },
    { id: 'case-methodology', label: 'Case Typology Lab', hindiLabel: 'केस प्रारूप विधि', icon: Compass, badge: 'SOPs' },
    { id: 'visual-diagrams', label: 'Visual Diagrams', hindiLabel: 'दृश्य आरेख लैब', icon: Eye, badge: 'Schematics' },
    { id: 'dilemma-simulator', label: 'Dilemma Engine', hindiLabel: 'द्वंद्व सिमुलेटर', icon: Zap },
    { id: 'concepts', label: 'Ethics Textbook', hindiLabel: 'नीतिशास्त्र मूल सिद्धांत', icon: Brain },
    { id: 'values', label: 'Human Values', hindiLabel: 'मानवीय मूल्य', icon: Heart },
    { id: 'aptitude', label: 'Civil Aptitude', hindiLabel: 'लोक सेवा अभिक्षमता', icon: Target },
    { id: 'persuasion', label: 'Persuasion & Nudge', hindiLabel: 'प्रबोधन एवं नज़ लैब', icon: Sparkles, badge: 'High Yield' },
    { id: 'ei', label: 'Emotional Intelligence', hindiLabel: 'संवेगात्मक बुद्धि', icon: Smile },
    { id: 'thinkers', label: 'Moral Thinkers', hindiLabel: 'महान विचारक', icon: GraduationCap },
    { id: 'theories', label: 'Ethical Theories', hindiLabel: 'नैतिक सिद्धांत', icon: Scale },
    { id: 'governance', label: 'Probity & Public Service', hindiLabel: 'शुचिता एवं शासन', icon: Landmark },
    { id: 'rti', label: 'RTI & Codes', hindiLabel: 'आरटीआई एवं आचार संहिता', icon: FileText },
    { id: 'mains-lab', label: 'Mains Answer Lab', hindiLabel: 'उत्तर-लेखन लैब', icon: PenTool, badge: 'Directives' },
    { id: 'pyq', label: 'PYQ Database', hindiLabel: 'पूर्व वर्ष प्रश्न', icon: History, badge: '2013-24' },
    { id: 'uppsc', label: 'UPPSC Ethics Hub', hindiLabel: 'यूपीपीएससी विशेष हब', icon: MapPin, badge: 'UP PCS' },
    { id: 'ro-aro', label: 'UP RO/ARO Ethics', hindiLabel: 'समीक्षा अधिकारी', icon: BookMarked, badge: 'Paper 2' },
    { id: 'pdf-library', label: 'PDF Books & NCERTs', hindiLabel: 'पीडीएफ पुस्तकें एवं 2nd ARC', icon: DownloadCloud, badge: 'Free PDFs' },
    { id: 'current-affairs', label: 'Current Ethics Engine', hindiLabel: 'समसामयिकी नीतिशास्त्र', icon: Newspaper, badge: 'Live' },
    { id: 'examples', label: 'Examples Bank', hindiLabel: 'उदाहरण बैंक', icon: Lightbulb },
    { id: 'quotes', label: 'Quotes Bank', hindiLabel: 'उद्धरण बैंक', icon: Quote },
    { id: 'vocabulary', label: 'Ethics Vocabulary', hindiLabel: 'शब्दावली (300+)', icon: BookA },
    { id: 'knowledge-graph', label: 'Knowledge Graph', hindiLabel: 'ज्ञान नेटवर्क', icon: Network },
    { id: 'revision', label: 'Spaced Revision', hindiLabel: 'स्मृति एवं दोहराव', icon: Repeat },
    { id: 'dashboard', label: 'Dashboard & Tools', hindiLabel: 'डैशबोर्ड एवं प्लानर', icon: BarChart3 },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-2 lg:px-6 overflow-x-auto scrollbar-none sticky top-[69px] z-40 shadow-md">
      <div className="flex items-center space-x-1 py-2 min-w-max">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                isActive
                  ? item.isSignature 
                    ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-white shadow-md shadow-amber-500/20 font-bold scale-[1.02]'
                    : 'bg-slate-800 text-amber-400 border border-slate-700 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? (item.isSignature ? 'text-white' : 'text-amber-400') : 'text-slate-400'}`} />
              <span>
                {item.label}
                {hindiMode && (
                  <span className="block text-[10px] opacity-75 font-normal">
                    {item.hindiLabel}
                  </span>
                )}
              </span>

              {item.badge && !isActive && (
                <span className="ml-1 px-1.5 py-0.2 text-[9px] rounded-full bg-slate-700/80 text-amber-300 font-mono">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
