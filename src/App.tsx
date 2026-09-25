// src/App.tsx
import React from 'react';
import { EthicsProvider, useEthics } from './context/EthicsContext';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Features
import { CaseSimulator } from './features/CaseSimulator';
import { DilemmaSimulator } from './features/DilemmaSimulator';
import { ConceptsHub } from './features/ConceptsHub';
import { ValuesHub } from './features/ValuesHub';
import { EmotionalIntelligenceLab } from './features/EmotionalIntelligenceLab';
import { ThinkersHub } from './features/ThinkersHub';
import { TheorySimulator } from './features/TheorySimulator';
import { GovernanceHub } from './features/GovernanceHub';
import { MainsAnswerLab } from './features/MainsAnswerLab';
import { PyqEngine } from './features/PyqEngine';
import { CurrentAffairsEthics } from './features/CurrentAffairsEthics';
import { ExamplesAndQuotes } from './features/ExamplesAndQuotes';
import { VocabularyHub } from './features/VocabularyHub';
import { KnowledgeGraph } from './features/KnowledgeGraph';
import { RevisionEngine } from './features/RevisionEngine';
import { DashboardHub } from './features/DashboardHub';

const MainContent: React.FC = () => {
  const { activeTab } = useEthics();

  return (
    <main className="flex-1 min-h-[calc(100vh-140px)]">
      {(() => {
        switch (activeTab) {
          case 'case-simulator':
            return <CaseSimulator />;
          case 'dilemma-simulator':
            return <DilemmaSimulator />;
          case 'concepts':
            return <ConceptsHub />;
          case 'values':
          case 'aptitude':
            return <ValuesHub />;
          case 'ei':
            return <EmotionalIntelligenceLab />;
          case 'thinkers':
            return <ThinkersHub />;
          case 'theories':
            return <TheorySimulator />;
          case 'governance':
          case 'rti':
            return <GovernanceHub />;
          case 'mains-lab':
            return <MainsAnswerLab />;
          case 'pyq':
            return <PyqEngine />;
          case 'current-affairs':
            return <CurrentAffairsEthics />;
          case 'examples':
          case 'quotes':
            return <ExamplesAndQuotes />;
          case 'vocabulary':
            return <VocabularyHub />;
          case 'knowledge-graph':
            return <KnowledgeGraph />;
          case 'revision':
            return <RevisionEngine />;
          case 'dashboard':
          default:
            return <DashboardHub />;
        }
      })()}
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <EthicsProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        <Header />
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </EthicsProvider>
  );
};

export default App;
