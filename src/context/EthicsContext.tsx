// src/context/EthicsContext.tsx
// Central React Context for Ethics Master

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  CONCEPTS_DATA, 
  VALUES_DATA, 
  THINKERS_DATA, 
  ETHICAL_THEORIES, 
  CASE_STUDIES_DATA, 
  PYQ_DATABASE, 
  EXAMPLES_DATA, 
  QUOTES_DATA, 
  CURRENT_AFFAIRS_DATA, 
  GOVERNANCE_MODULES, 
  VOCABULARY_DATA, 
  ETHICS_MCQS, 
  INITIAL_FLASHCARDS,
  Flashcard
} from '../data';
import { UserNote, UserMistakeItem } from '../types/ethics';

export type ActiveTab = 
  | 'concepts'
  | 'values'
  | 'aptitude'
  | 'ei'
  | 'thinkers'
  | 'theories'
  | 'governance'
  | 'rti'
  | 'case-simulator'
  | 'dilemma-simulator'
  | 'mains-lab'
  | 'pyq'
  | 'current-affairs'
  | 'examples'
  | 'quotes'
  | 'vocabulary'
  | 'knowledge-graph'
  | 'revision'
  | 'dashboard';

interface EthicsContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  hindiMode: boolean;
  setHindiMode: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCaseId: string | null;
  setSelectedCaseId: (id: string | null) => void;
  selectedThinkerId: string | null;
  setSelectedThinkerId: (id: string | null) => void;
  selectedConceptId: string | null;
  setSelectedConceptId: (id: string | null) => void;
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  notes: UserNote[];
  addNote: (title: string, category: string, content: string) => void;
  deleteNote: (id: string) => void;
  mistakes: UserMistakeItem[];
  addMistake: (mistake: Omit<UserMistakeItem, 'id' | 'dateAdded' | 'resolved'>) => void;
  resolveMistake: (id: string) => void;
  flashcards: Flashcard[];
  updateFlashcardBox: (id: string, correct: boolean) => void;
  completedCasesCount: number;
  incrementCompletedCases: () => void;
  writtenAnswersCount: number;
  incrementWrittenAnswers: () => void;
}

const EthicsContext = createContext<EthicsContextType | undefined>(undefined);

export const EthicsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('case-simulator');
  const [hindiMode, setHindiMode] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(CASE_STUDIES_DATA[0]?.id || null);
  const [selectedThinkerId, setSelectedThinkerId] = useState<string | null>(THINKERS_DATA[0]?.id || null);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(CONCEPTS_DATA[0]?.id || null);

  // Persistence in LocalStorage
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ethics_bookmarks');
      return saved ? JSON.parse(saved) : ['val-integrity', 'th-gandhi', 'cs-ration-biometrics'];
    } catch {
      return ['val-integrity', 'th-gandhi'];
    }
  });

  const [notes, setNotes] = useState<UserNote[]>(() => {
    try {
      const saved = localStorage.getItem('ethics_notes');
      return saved ? JSON.parse(saved) : [
        {
          id: 'note-1',
          title: 'Difference between Nolan Principles & 2nd ARC Code',
          category: 'Probity',
          content: 'Nolan committee formulated 7 principles (UK, 1995). 2nd ARC adopted them and recommended a statutory Public Services Bill for India with an independent Civil Services Authority.',
          tags: ['Nolan', '2nd ARC', 'Probity'],
          updatedAt: '2026-09-20'
        }
      ];
    } catch {
      return [];
    }
  });

  const [mistakes, setMistakes] = useState<UserMistakeItem[]>(() => {
    try {
      const saved = localStorage.getItem('ethics_mistakes');
      return saved ? JSON.parse(saved) : [
        {
          id: 'mis-1',
          type: 'Concept',
          questionOrCase: 'Difference between Honesty and Integrity',
          userError: 'Confused honesty with integrity, thinking honesty is broader.',
          correctUnderstanding: 'Honesty is truth-telling; integrity is moral wholeness and standing up against wrongdoing even under coercion.',
          dateAdded: '2026-09-22',
          resolved: false
        }
      ];
    } catch {
      return [];
    }
  });

  const [flashcards, setFlashcards] = useState<Flashcard[]>(() => {
    try {
      const saved = localStorage.getItem('ethics_flashcards');
      return saved ? JSON.parse(saved) : INITIAL_FLASHCARDS;
    } catch {
      return INITIAL_FLASHCARDS;
    }
  });

  const [completedCasesCount, setCompletedCasesCount] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('ethics_completed_cases') || '3', 10);
    } catch {
      return 3;
    }
  });

  const [writtenAnswersCount, setWrittenAnswersCount] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('ethics_written_answers') || '5', 10);
    } catch {
      return 5;
    }
  });

  useEffect(() => {
    localStorage.setItem('ethics_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('ethics_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('ethics_mistakes', JSON.stringify(mistakes));
  }, [mistakes]);

  useEffect(() => {
    localStorage.setItem('ethics_flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  useEffect(() => {
    localStorage.setItem('ethics_completed_cases', completedCasesCount.toString());
  }, [completedCasesCount]);

  useEffect(() => {
    localStorage.setItem('ethics_written_answers', writtenAnswersCount.toString());
  }, [writtenAnswersCount]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const addNote = (title: string, category: string, content: string) => {
    const newNote: UserNote = {
      id: 'note-' + Date.now(),
      title,
      category,
      content,
      tags: [category],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setNotes(prev => [newNote, ...prev]);
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  const addMistake = (mistake: Omit<UserMistakeItem, 'id' | 'dateAdded' | 'resolved'>) => {
    const item: UserMistakeItem = {
      ...mistake,
      id: 'mis-' + Date.now(),
      dateAdded: new Date().toISOString().split('T')[0],
      resolved: false
    };
    setMistakes(prev => [item, ...prev]);
  };

  const resolveMistake = (id: string) => {
    setMistakes(prev => prev.map(m => m.id === id ? { ...m, resolved: true } : m));
  };

  const updateFlashcardBox = (id: string, correct: boolean) => {
    setFlashcards(prev => prev.map(fc => {
      if (fc.id === id) {
        let newBox = correct ? Math.min(fc.box + 1, 5) : 1;
        return { ...fc, box: newBox };
      }
      return fc;
    }));
  };

  const incrementCompletedCases = () => setCompletedCasesCount(c => c + 1);
  const incrementWrittenAnswers = () => setWrittenAnswersCount(w => w + 1);

  return (
    <EthicsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        hindiMode,
        setHindiMode,
        searchQuery,
        setSearchQuery,
        selectedCaseId,
        setSelectedCaseId,
        selectedThinkerId,
        setSelectedThinkerId,
        selectedConceptId,
        setSelectedConceptId,
        bookmarks,
        toggleBookmark,
        notes,
        addNote,
        deleteNote,
        mistakes,
        addMistake,
        resolveMistake,
        flashcards,
        updateFlashcardBox,
        completedCasesCount,
        incrementCompletedCases,
        writtenAnswersCount,
        incrementWrittenAnswers
      }}
    >
      {children}
    </EthicsContext.Provider>
  );
};

export const useEthics = () => {
  const context = useContext(EthicsContext);
  if (!context) {
    throw new Error('useEthics must be used within an EthicsProvider');
  }
  return context;
};
