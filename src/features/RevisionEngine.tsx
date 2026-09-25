// src/features/RevisionEngine.tsx
// Spaced Repetition Revision Engine, Leitner Flashcards, Mistake Book & Concept Quiz

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { ETHICS_MCQS } from '../data';
import { 
  Repeat, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  Check, 
  X,
  HelpCircle,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const RevisionEngine: React.FC = () => {
  const { 
    flashcards, 
    updateFlashcardBox, 
    mistakes, 
    resolveMistake, 
    addMistake 
  } = useEthics();

  const [activeSubTab, setActiveSubTab] = useState<'flashcards' | 'mistakes' | 'quiz'>('flashcards');

  // Flashcard states
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Quiz states
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  const activeFlashcard = flashcards[currentCardIndex] || flashcards[0];
  const activeQuiz = ETHICS_MCQS[currentQuizIndex] || ETHICS_MCQS[0];

  const handleFlashcardAnswer = (correct: boolean) => {
    updateFlashcardBox(activeFlashcard.id, correct);
    setIsFlipped(false);
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(c => c + 1);
    } else {
      setCurrentCardIndex(0);
      try { confetti({ particleCount: 50, spread: 60 }); } catch {}
    }
  };

  const handleSelectQuizOption = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    if (idx === activeQuiz.correctIndex) {
      setQuizScore(s => s + 1);
    } else {
      // Auto-log to mistake book
      addMistake({
        type: 'MCQ',
        questionOrCase: activeQuiz.question,
        userError: `Selected Option: ${activeQuiz.options[idx]}`,
        correctUnderstanding: activeQuiz.explanation
      });
    }
  };

  const handleNextQuiz = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    if (currentQuizIndex < ETHICS_MCQS.length - 1) {
      setCurrentQuizIndex(q => q + 1);
    } else {
      try { confetti({ particleCount: 70, spread: 70 }); } catch {}
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
              <Repeat className="w-3.5 h-3.5 text-teal-400" /> Revision Engine
            </span>
            <span className="text-xs text-slate-400">Leitner System: 1d • 3d • 7d • 15d • 30d</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-white font-serif">
            Spaced Repetition & Mistake Book
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Systematic cognitive retention: Flashcards, conceptual diagnostic drills, and automatic error logging.
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveSubTab('flashcards')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'flashcards'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Flashcards ({flashcards.length})
          </button>
          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'quiz'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Concept Quiz ({ETHICS_MCQS.length})
          </button>
          <button
            onClick={() => setActiveSubTab('mistakes')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'mistakes'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Mistake Book ({mistakes.length})
          </button>
        </div>
      </div>

      {/* FLASHCARDS VIEW */}
      {activeSubTab === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
          
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Card {currentCardIndex + 1} of {flashcards.length}</span>
            <span className="font-mono bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 text-amber-400">
              Leitner Box {activeFlashcard.box} / 5
            </span>
          </div>

          {/* Flip Card */}
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 shadow-2xl flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                {activeFlashcard.category}
              </span>
              <span className="text-xs text-slate-500">Click to flip</span>
            </div>

            <div className="py-6 text-center">
              {!isFlipped ? (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Question / Concept:</span>
                  <h3 className="text-xl font-bold text-white font-serif">{activeFlashcard.front}</h3>
                </div>
              ) : (
                <div className="space-y-3 animate-fadeIn">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Answer / Core Meaning:</span>
                  <p className="text-base text-slate-200 leading-relaxed font-sans">{activeFlashcard.back}</p>
                </div>
              )}
            </div>

            <div className="text-center text-xs text-slate-500">
              {!isFlipped ? 'Tap to reveal answer' : 'Did you remember this correctly?'}
            </div>
          </div>

          {/* Feedback Buttons */}
          {isFlipped && (
            <div className="flex items-center justify-center gap-4 animate-fadeIn">
              <button
                onClick={() => handleFlashcardAnswer(false)}
                className="px-6 py-2.5 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                <span>Forgot (Reset to Box 1)</span>
              </button>

              <button
                onClick={() => handleFlashcardAnswer(true)}
                className="px-6 py-2.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Recalled! (Move to Box {Math.min(activeFlashcard.box + 1, 5)})</span>
              </button>
            </div>
          )}

        </div>
      )}

      {/* QUIZ VIEW */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Question {currentQuizIndex + 1} of {ETHICS_MCQS.length}</span>
            <span className="font-mono text-emerald-400 font-bold">Score: {quizScore}</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                  Category: {activeQuiz.category}
                </span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-mono">
                  {activeQuiz.difficulty}
                </span>
              </div>
              <h2 className="text-base font-bold text-white font-serif">{activeQuiz.question}</h2>
              {activeQuiz.hindiQuestion && (
                <p className="text-xs text-amber-300/80 font-serif">{activeQuiz.hindiQuestion}</p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {activeQuiz.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === activeQuiz.correctIndex;
                let btnStyle = 'bg-slate-800/60 border-slate-700 hover:border-slate-600 text-slate-200';

                if (selectedAnswer !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleSelectQuizOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-xs font-medium transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {showExplanation && (
              <div className="space-y-4 pt-4 border-t border-slate-800 animate-fadeIn">
                <div className="p-4 bg-slate-800/70 border border-slate-700 rounded-xl space-y-1.5 text-xs">
                  <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Detailed Explanation:
                  </span>
                  <p className="text-slate-200 leading-relaxed">{activeQuiz.explanation}</p>
                  <div className="text-[10px] text-slate-400 pt-1">Source: {activeQuiz.source}</div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuiz}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all"
                  >
                    {currentQuizIndex < ETHICS_MCQS.length - 1 ? 'Next Question' : 'Complete Quiz'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MISTAKE BOOK VIEW */}
      {activeSubTab === 'mistakes' && (
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Your Personal Mistake Book</h2>
              <p className="text-xs text-slate-400">Review conceptual confusions, missed stakeholders, and wrong MCQs to eliminate repeat errors.</p>
            </div>
            <span className="text-xs font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-rose-400">
              {mistakes.filter(m => !m.resolved).length} Unresolved Errors
            </span>
          </div>

          <div className="space-y-4">
            {mistakes.length === 0 ? (
              <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-400">
                No recorded mistakes yet! Complete quizzes or case studies to automatically track errors.
              </div>
            ) : (
              mistakes.map((m) => (
                <div 
                  key={m.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    m.resolved
                      ? 'bg-slate-900/40 border-slate-800 opacity-60'
                      : 'bg-slate-900 border-rose-500/30 shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                      {m.type} Error • {m.dateAdded}
                    </span>
                    {!m.resolved ? (
                      <button
                        onClick={() => resolveMistake(m.id)}
                        className="text-xs text-emerald-400 hover:underline font-bold flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" /> Mark Concept Mastered
                      </button>
                    ) : (
                      <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Mastered
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm text-white mb-2">{m.questionOrCase}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-rose-950/20 border border-rose-500/20 rounded-xl text-rose-200">
                      <strong>Your Prior Misconception:</strong>
                      <p className="mt-1">{m.userError}</p>
                    </div>
                    <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-emerald-200">
                      <strong>Correct Ethical Formulation:</strong>
                      <p className="mt-1">{m.correctUnderstanding}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

    </div>
  );
};
