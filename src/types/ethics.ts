// src/types/ethics.ts
// Comprehensive TypeScript Definitions for ETHICS MASTER (UPSC GS-IV & UPPSC Ethics)

export type ExamType = 'UPSC' | 'UPPSC' | 'STATE_PSC' | 'UP_RO_ARO' | 'ALL';
export type DifficultyLevel = 'Beginner' | 'Moderate' | 'Advanced' | 'UPSC_Standard' | 'UPPSC_Standard';

export interface BilingualText {
  en: string;
  hi?: string;
}

export type VerificationStatus = 'Verified Quote' | 'Paraphrase' | 'Attributed Idea' | 'Popularly Attributed';

export interface ConceptItem {
  id: string;
  slug: string;
  title: string;
  hindiTitle?: string;
  category: 
    | 'Ethics Fundamentals' 
    | 'Ethics vs Morality' 
    | 'Human Interface' 
    | 'Attitude' 
    | 'Aptitude' 
    | 'Foundational Values' 
    | 'Emotional Intelligence' 
    | 'Public Service Ethics' 
    | 'Probity & Governance' 
    | 'RTI & Transparency' 
    | 'Corruption' 
    | 'Corporate Governance' 
    | 'International Ethics'
    | 'Bioethics'
    | 'Environmental Ethics'
    | 'Technology & AI Ethics'
    | 'Media & Business Ethics'
    | 'Human Values & Institutions'
    | 'Indian Moral Traditions';
  simpleMeaning: string;
  philosophicalMeaning: string;
  dimensions: string[];
  example: string;
  counterExample: string;
  administrativeApplication: string;
  ethicalDilemma: string;
  keyThinkers: string[];
  currentAffairsExample: string;
  constitutionalLink: {
    articles: string[];
    values: string[];
    relevance: string;
  };
  differenceFromSimilarTerms: {
    term: string;
    hindiTerm?: string;
    difference: string;
  }[];
  pyqs: string[];
  caseStudyRefId?: string;
  answerFramework: {
    introduction: string;
    bodyPoints: string[];
    conclusion: string;
  };
  sources: string[];
}

export interface ValueItem {
  id: string;
  name: string;
  hindiName: string;
  category: 'Foundational' | 'Constitutional' | 'Personal' | 'Social' | 'Professional';
  definition: string;
  dimensions: string[];
  importanceInCivilServices: string;
  personalExample: string;
  administrativeExample: string;
  constitutionalConnection: string;
  thinkerAssociated: string;
  historicalExample: string;
  modernExample: string;
  quote: {
    text: string;
    speaker: string;
    status: VerificationStatus;
  };
  potentialCaseStudyTopic: string;
  potentialMainsQuestion: string;
}

export interface ThinkerItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'Indian' | 'Western' | 'Modern Administrator' | 'Social Reformer';
  period: string;
  country: string;
  majorWorks: string[];
  coreIdeas: string[];
  ethicalPhilosophy: string;
  keyConcepts: string[];
  administrativeRelevance: string;
  modernApplication: string;
  caseStudyExample: string;
  verifiedQuote: {
    text: string;
    context: string;
    status: VerificationStatus;
    source: string;
  };
  pyqReferences: string[];
  potentialMainsUsage: string;
}

export interface EthicalTheory {
  id: string;
  name: string;
  school: 'Virtue Ethics' | 'Deontology' | 'Utilitarianism' | 'Justice Theory' | 'Care Ethics' | 'Social Contract' | 'Gandhian Ethics' | 'Constitutional Morality';
  proponents: string[];
  corePremise: string;
  evaluationCriterion: string;
  decisionRule: string;
  strengths: string[];
  limitations: string[];
  administrativeImplication: string;
  scenarioEvaluation: {
    scenarioTitle: string;
    howItJudges: string;
    verdict: string;
  };
}

export interface CaseStudyItem {
  id: string;
  title: string;
  year?: number;
  exam?: 'UPSC' | 'UPPSC' | 'PRACTICE';
  difficulty: DifficultyLevel;
  domain: 
    | 'Law & Order' 
    | 'Procurement & Tenders' 
    | 'Welfare Delivery' 
    | 'Environmental Clearance' 
    | 'Political Pressure' 
    | 'Whistleblowing' 
    | 'Public Health Crisis' 
    | 'Disaster Relief' 
    | 'Corporate & CSR' 
    | 'Technology & AI' 
    | 'Police Administration' 
    | 'Gender & Vulnerable Groups';
  administrativeRole: string; // e.g. "District Magistrate", "Superintendent of Police", "Municipal Commissioner"
  scenario: string;
  facts: string[];
  stakeholders: {
    name: string;
    role: string;
    interests: string;
    vulnerabilityLevel: 'High' | 'Medium' | 'Low';
  }[];
  ethicalIssues: string[];
  competingValues: string[]; // e.g. ["Rule of Law vs Compassion", "Efficiency vs Procedural Propriety"]
  legalProvisions: string[];
  constitutionalArticles: string[];
  options: {
    id: string;
    text: string;
    pros: string[];
    cons: string[];
    legalityScore: number; // 1-10
    integrityScore: number;
    fairnessScore: number;
    publicInterestScore: number;
    feasibilityScore: number;
    longTermImpactScore: number;
  }[];
  balancedCourseOfAction: string;
  implementationPlan: string[];
  institutionalSafeguards: string[];
  modelConclusion: string;
  relevantThinkers: string[];
  relevantQuotes: string[];
}

export interface UpCaseStudyItem {
  id: string;
  title: string;
  year?: number;
  exam?: 'UPSC' | 'UPPSC' | 'PRACTICE';
  difficulty: DifficultyLevel;
  domain: string;
  administrativeRole: string;
  scenario: string;
  facts: string[];
  stakeholders: {
    name: string;
    role: string;
    interests: string;
    vulnerabilityLevel: 'High' | 'Medium' | 'Low';
  }[];
  ethicalIssues: string[];
  optionsAvailable: {
    optionId: string;
    title: string;
    description: string;
    merits?: string[];
    demerits?: string[];
    consequences: string;
  }[];
  decisionFramework: {
    immediateActions: string[];
    longTermMeasures: string[];
    constitutionalMoralJustification: string;
  };
  modelAnswerOutline: string[];
}

export interface PYQItem {
  id: string;
  exam: 'UPSC' | 'UPPSC' | 'UP_RO_ARO';
  year: number;
  paper: 'GS-IV' | 'Paper-IV' | 'UPPSC Ethics' | 'UP RO/ARO GS & Essay' | 'RO/ARO Translation' | 'UP RO/ARO Mains';
  questionNumber: string;
  marks: number;
  wordLimit: number;
  type: 'Theory' | 'Case Study' | 'Quote-based' | 'Vocabulary Translation' | 'Essay Framework';
  topic: string;
  subtopic: string;
  directive: 'Discuss' | 'Examine' | 'Critically Examine' | 'Analyze' | 'Evaluate' | 'Comment' | 'Elucidate' | 'Illustrate' | 'What do you understand by' | 'Explain' | 'State' | 'Justify';
  questionText: string;
  hindiText?: string;
  modelApproach: {
    introduction: string;
    dimensionsToAddress: string[];
    thinkerQuotesToUse: string[];
    diagramSuggestion?: string;
    examplesToQuote: string[];
    conclusion: string;
  };
  frequencyScore?: number;
  source: string;
}

export interface ExampleItem {
  id: string;
  personOrInstitution: string;
  roleOrDesignation: string;
  year: string;
  location: string;
  event: string;
  valueDemonstrated: string;
  ethicalLesson: string;
  gs4UsageGuide: string;
  sampleSentence: string;
  source: string;
  category: 
    | 'Integrity' 
    | 'Courage' 
    | 'Compassion' 
    | 'Dedication' 
    | 'Innovation' 
    | 'Impartiality' 
    | 'Accountability' 
    | 'Disaster Management' 
    | 'Environmental Ethics' 
    | 'Corporate Ethics' 
    | 'Whistleblowing';
}

export interface QuoteItem {
  id: string;
  quote: string;
  speaker: string;
  context: string;
  theme: 'Integrity' | 'Truth' | 'Justice' | 'Leadership' | 'Service' | 'Compassion' | 'Courage' | 'Duty' | 'Democracy' | 'Human Dignity' | 'Governance';
  verificationStatus: VerificationStatus;
  source: string;
  gs4UsageTips: string;
  relatedConcepts: string[];
}

export interface CurrentAffairsEthicsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  sourceUrl?: string;
  verifiedDate: string;
  sourceType: 'Official Government Release' | 'Supreme Court Judgment' | 'Parliamentary Report' | 'National Daily / Reputable Media' | 'International Agency';
  summary: string;
  ethicalIssues: string[];
  valuesInvolved: string[];
  stakeholders: string[];
  conflictingPrinciples: string;
  constitutionalValues: string[];
  administrativeDimension: string;
  possibleSolutions: string[];
  potentialMainsQuestion: string;
  caseStudyIdea: string;
}

export interface VocabularyItem {
  id: string;
  term: string;
  hindiTerm: string;
  simpleDefinition: string;
  technicalDefinition: string;
  administrativeApplication: string;
  antonym: string;
  relatedTerms: string[];
  sampleUsage: string;
}

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  category: 'Thinker' | 'Value' | 'Definition' | 'Quote' | 'Governance' | 'Article';
  box: number; // Leitner box 1 to 5
  nextReviewDate: string;
  timesReviewed: number;
  timesCorrect: number;
}

export interface UserNote {
  id: string;
  title: string;
  category: string;
  content: string;
  tags: string[];
  updatedAt: string;
}

export interface UserMistakeItem {
  id: string;
  type: 'MCQ' | 'Concept' | 'Case Study' | 'Missed Stakeholder' | 'Weak Conclusion';
  questionOrCase: string;
  userError: string;
  correctUnderstanding: string;
  dateAdded: string;
  resolved: boolean;
}

export interface GovernanceModuleItem {
  id: string;
  title: string;
  topic: 'Probity' | 'RTI' | 'Citizen Charters' | 'Codes of Ethics & Conduct' | 'Work Culture' | 'Public Funds' | 'Corruption' | 'Nolan Principles' | 'Second ARC 4th Report';
  summary: string;
  officialProvisions: string[];
  institutionalMechanisms: string[];
  challenges: string[];
  reformsSuggested: string[];
  secondARCLink: string;
  caseIllustration: string;
}

export interface PdfResourceItem {
  id: string;
  title: string;
  hindiTitle?: string;
  category: 
    | 'NCERT Textbook' 
    | 'Second ARC Report' 
    | 'Government Manual & Policy' 
    | 'International Ethics (UNODC)' 
    | 'Constitutional & Legal Document' 
    | 'Official Exam Syllabus & PYQ';
  authorOrBody: string;
  publicationYear?: string;
  officialUrl: string;
  pdfDirectUrl?: string;
  fileFormat: 'PDF' | 'Official Portal / PDF' | 'Online Reader';
  pertainingModules: string[]; // e.g. ['Attitude', 'Emotional Intelligence', 'Probity', 'Governance', 'Theories & Thinkers', 'Values', 'Case Studies']
  description: string;
  hindiDescription?: string;
  recommendedChapters: {
    chapterNumber: string;
    chapterTitle: string;
    gs4Relevance: string;
    keyTakeaway: string;
  }[];
  examImportance: 'Essential Reading (Priority 1)' | 'High Value Reference (Priority 2)' | 'Supplementary / Quote Value (Priority 3)';
  downloadNote?: string;
  languageAvailable: ('English' | 'Hindi')[];
}

export interface UpPhilosopherItem {
  id: string;
  name: string;
  hindiName: string;
  period: string;
  locationInUp: string;
  corePhilosophy: string;
  famousVersesOrQuotes: {
    verse: string;
    meaning: string;
    administrativeSignificance: string;
  }[];
  keyTeachings: string[];
  relevanceToCivilServices: string;
  modernAdministrativeApplication: string;
  sampleUppscQuestions: {
    marks: 8 | 12;
    question: string;
    modelAnswer: string;
  }[];
}

export interface RoAroTermItem {
  id: string;
  englishTerm: string;
  hindiTerm: string;
  alternativeHindiTerms: string[];
  direction: 'EnToHi' | 'HiToEn';
  definition: string;
  hindiDefinition: string;
  secretariatContext: string;
  sampleNotingUsage: string;
  commonMistakes: string;
  category: 'Probity & Conduct' | 'Administrative Discretion' | 'Legal & Procedural' | 'Financial & Audit' | 'Accountability & Anti-Graft';
}

export interface RoAroEssayItem {
  id: string;
  theme: 'साहित्य और संस्कृति' | 'सामाजिक क्षेत्र' | 'राष्ट्रीय विकास योजनाएं एवं समस्याएं';
  title: string;
  hindiTitle: string;
  corePremise: string;
  moralPhilosophicalAnchor: string;
  famousLiteraryQuotes: {
    quote: string;
    author: string;
    context: string;
  }[];
  threePartOutline: {
    introduction: string;
    bodyDimensions: string[];
    ethicalSynthesisAndConclusion: string;
  };
  keyDataAndConstitutionalArticles: string[];
  modelEssayDraft: string;
}

export interface CaseTypologyItem {
  id: string;
  typeNumber: 1 | 2 | 3 | 4;
  title: string;
  category: 'Law & Order / Crisis' | 'Environmental vs Development' | 'Workplace / Harassment' | 'Procurement / Integrity';
  archetypeScenario: string;
  stakeholderMap: {
    direct: string[];
    indirect: string[];
    systemic: string[];
  };
  primaryEthicalDilemmas: string[];
  optionsTested: {
    optionName: string;
    description: string;
    ethicalEvaluation: string; // Kantian / Utilitarian / Rawlsian / Legal
    feasibilityVerdict: string;
  }[];
  balancedCourseOfAction: string;
  administrativeSOP: string[];
  relevantThinkerQuotes: string[];
}
