// src/data/questions/theoryQuestionsData.ts
// Scalable Question Architecture: Conceptual MCQs, Prelims-mode Drills, Mains 10-Markers, and Flashcard Deck

export interface EthicsMCQ {
  id: string;
  category: 'Ethics Fundamentals' | 'Thinkers' | 'Values' | 'Governance & Probity' | 'RTI & Law' | 'Administrative Case Dilemma';
  question: string;
  hindiQuestion?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
  difficulty: 'Easy' | 'Moderate' | 'Advanced' | 'UPSC_Standard';
}

export const ETHICS_MCQS: EthicsMCQ[] = [
  {
    id: 'mcq-1',
    category: 'Values',
    question: 'Which of the following best distinguishes "Integrity" from "Honesty"?',
    hindiQuestion: 'निम्नलिखित में से कौन "सत्यनिष्ठा" (Integrity) को "ईमानदारी" (Honesty) से सबसे बेहतर रूप से अलग करता है?',
    options: [
      'Honesty is practiced only in public; integrity is strictly private.',
      'Honesty refers to truthfulness and non-deception, while integrity demands active alignment of principles, speech, and action even under severe external pressure.',
      'Honesty requires legal sanction, while integrity requires moral sanction.',
      'There is no conceptual difference; they are exact synonyms in ethics.'
    ],
    correctIndex: 1,
    explanation: 'Honesty is the refusal to lie or steal (truth-telling). Integrity (from Latin integer meaning whole) represents moral wholeness and consistency across private and public spheres, persisting even when unobserved or threatened.',
    source: 'Second ARC 4th Report: Ethics in Governance',
    difficulty: 'Moderate'
  },
  {
    id: 'mcq-2',
    category: 'Thinkers',
    question: 'John Rawls\' "Difference Principle" asserts that social and economic inequalities are just only if they:',
    hindiQuestion: 'जॉन रॉल्स का "भेद सिद्धांत" (Difference Principle) यह प्रतिपादित करता है कि सामाजिक और आर्थिक असमानताएं केवल तभी न्यायसंगत हैं जब वे:',
    options: [
      'Maximize the wealth and productivity of the most talented entrepreneurs.',
      'Result in total mathematical equality of income for all citizens.',
      'Work to the maximum benefit of the least advantaged members of society.',
      'Are approved by a majority vote in parliament.'
    ],
    correctIndex: 2,
    explanation: 'Rawls\' Difference Principle (part of his Second Principle of Justice) permits socioeconomic inequalities only on the condition that they maximize the position of the worst-off social group (the Maximin rule).',
    source: 'John Rawls: A Theory of Justice (1971)',
    difficulty: 'Advanced'
  },
  {
    id: 'mcq-3',
    category: 'Thinkers',
    question: 'According to Immanuel Kant, why is treating a person merely as a "means to an end" morally impermissible?',
    hindiQuestion: 'इमैनुएल कांट के अनुसार, किसी व्यक्ति को केवल "साध्य का साधन" (Means to an end) मानना नैतिक रूप से अस्वीकार्य क्यों है?',
    options: [
      'Because it reduces aggregate societal happiness according to felicific calculus.',
      'Because rational human beings possess intrinsic dignity and autonomy, making them ends in themselves.',
      'Because religious scriptures universally prohibit using others.',
      'Because it violates the civil law and attracts police punishment.'
    ],
    correctIndex: 1,
    explanation: 'Kant\'s Second Formulation of the Categorical Imperative (Formula of Humanity) states that rational beings possess inherent moral dignity and unconditional worth, and must never be treated merely as instrumental tools.',
    source: 'Groundwork of the Metaphysics of Morals (1785)',
    difficulty: 'Moderate'
  },
  {
    id: 'mcq-4',
    category: 'Governance & Probity',
    question: 'Which of the following is NOT one of the Seven Principles of Public Life formulated by the UK Nolan Committee (1995)?',
    hindiQuestion: 'निम्नलिखित में से कौन यूके नोलन समिति (1995) द्वारा प्रतिपादित सार्वजनिक जीवन के सात सिद्धांतों में शामिल नहीं है?',
    options: [
      'Selflessness',
      'Accountability',
      'Affluence',
      'Objectivity'
    ],
    correctIndex: 2,
    explanation: 'The Seven Nolan Principles are: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership. "Affluence" is not a principle.',
    source: 'First Report of the Committee on Standards in Public Life (Nolan Committee, 1995)',
    difficulty: 'Easy'
  },
  {
    id: 'mcq-5',
    category: 'RTI & Law',
    question: 'Under Section 7(1) of the Right to Information Act, 2005, within how many hours must information concerning the "life or liberty of a person" be provided?',
    hindiQuestion: 'सूचना का अधिकार अधिनियम, 2005 की धारा 7(1) के तहत, किसी व्यक्ति के "जीवन या स्वतंत्रता" से संबंधित सूचना कितने घंटों के भीतर प्रदान की जानी चाहिए?',
    options: [
      '24 hours',
      '48 hours',
      '7 days',
      '30 days'
    ],
    correctIndex: 1,
    explanation: 'Section 7(1) of the RTI Act mandates that if the information sought concerns the life or liberty of a person, it shall be provided within 48 hours of the receipt of the request.',
    source: 'Right to Information Act, 2005',
    difficulty: 'Moderate'
  },
  {
    id: 'mcq-6',
    category: 'Administrative Case Dilemma',
    question: 'You are an SDM. An impoverished applicant lacks an official domicile certificate due to clerical backlog, but requires immediate surgical assistance funded by a state health scheme. What is the most ethically defensible course of action?',
    hindiQuestion: 'आप एक एसडीएम हैं। एक निर्धन आवेदक के पास लिपिकीय बैकलॉग के कारण मूल निवास प्रमाण पत्र नहीं है, लेकिन उसे राज्य स्वास्थ्य योजना द्वारा वित्तपोषित तत्काल सर्जरी की आवश्यकता है। सबसे नैतिक रूप से उचित कदम क्या है?',
    options: [
      'Reject the application immediately to uphold strict procedural conformity.',
      'Ask the applicant to pay a bribe to the clerk to expedite the certificate.',
      'Issue an emergency provisional verification letter based on physical inspection and hospital urgency while expediting the formal certificate.',
      'Tell the hospital to turn away the patient until all original documents are uploaded.'
    ],
    correctIndex: 2,
    explanation: 'An administrator must harmonize the spirit of the law (saving human life under Article 21) with procedural safeguards by issuing a provisional authorization and expediting documentation simultaneously.',
    source: 'Second ARC 12th Report: Citizen Centric Administration',
    difficulty: 'UPSC_Standard'
  }
];

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: 'Thinker' | 'Value' | 'Theory' | 'Governance' | 'Constitution';
  box: number;
}

export const INITIAL_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    front: 'What is Gandhi\'s Talisman?',
    back: 'Recall the face of the poorest and weakest person you have seen, and ask whether the action you contemplate will restore him control over his own life and destiny.',
    category: 'Thinker',
    box: 1
  },
  {
    id: 'fc-2',
    front: 'Define "Phronesis" (Aristotle).',
    back: 'Practical wisdom: the intellectual virtue of deliberating well and taking the right moral decision in specific, concrete real-world circumstances (the Golden Mean).',
    category: 'Theory',
    box: 1
  },
  {
    id: 'fc-3',
    front: 'List the 7 Nolan Principles of Public Life.',
    back: '1. Selflessness, 2. Integrity, 3. Objectivity, 4. Accountability, 5. Openness, 6. Honesty, 7. Leadership.',
    category: 'Governance',
    box: 1
  },
  {
    id: 'fc-4',
    front: 'Explain Kant\'s Categorical Imperative (Formula 2).',
    back: 'Treat humanity, whether in yourself or in any other, always as an end in itself, never merely as a means to an end.',
    category: 'Theory',
    box: 1
  },
  {
    id: 'fc-5',
    front: 'What is the Difference Principle in John Rawls\' Theory of Justice?',
    back: 'Socioeconomic inequalities are justified only if they maximize the advantage of the least-off members of society (Maximin rule).',
    category: 'Theory',
    box: 1
  },
  {
    id: 'fc-6',
    front: 'What is Constitutional Morality (Ambedkar)?',
    back: 'Subordination of societal prejudices and majoritarian impulses to the foundational constitutional values of Liberty, Equality, Fraternity, and Rule of Law.',
    category: 'Constitution',
    box: 1
  }
];
