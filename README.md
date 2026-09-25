# ETHICS MASTER (GS-IV)

> **Ethics • Integrity • Aptitude • Emotional Intelligence • Probity • Governance • Case Studies**

[![Build Status](https://img.shields.io/badge/Build-Passing-emerald)](https://github.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-cyan)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-teal)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-amber)](LICENSE)

**ETHICS MASTER** is a comprehensive, professional interactive web application engineered specifically for **UPSC Civil Services Examination (General Studies Paper IV)**, **UPPSC PCS Ethics (Paper IV)**, and State Public Service Commissions.

The platform transcends static ethics notes, functioning as:
- **DIGITAL ETHICS TEXTBOOK** (52 syllabus modules following the 12-Step Pedagogical Method)
- **ETHICAL REASONING LAB & CASE-STUDY SIMULATOR** (14-Step decision flow with multi-criteria matrices)
- **ETHICAL DILEMMA ENGINE** (Rapid administrative crucible with radar assessments)
- **EMOTIONAL INTELLIGENCE LAB** (Goleman & Mayer-Salovey models with high-stress crisis simulations)
- **ETHICAL THEORY SIMULATOR** (Compare how Kant, Mill, Aristotle, Rawls, and Gandhi judge administrative crises)
- **ETHICS PYQ DATABASE & ANALYSIS ENGINE** (Actual UPSC 2013–2024 & UPPSC PYQs with empirical trends)
- **THINKERS & COMPARISON HUB** (Indian & Western traditions, verified quotes, dialectical comparisons)
- **VALUES LIBRARY & MATRIX** (Bilingual English + Hindi lexicon, Value-to-Example engine)
- **MAINS ANSWER WRITING WORKBENCH** (Live exam timer, word counter, directive analyser, 1-click intro/conclusion banks)
- **CURRENT-AFFAIRS ETHICS ENGINE** ("Turn Current Affairs into Ethics" with official Supreme Court & PIB citations)
- **INTERACTIVE KNOWLEDGE GRAPH** (Visual network mapping conceptual pathways from values to case studies)
- **PERSONAL REVISION SYSTEM** (Leitner 5-box spaced repetition, Mistake Book, and daily study planner)

---

## 🏛 1. Core Pedagogical Philosophy

Ethics is not taught as mere dictionary definitions. Every major concept follows the rigorous **12-Step Pedagogical Model**:

```
CONCEPT 
  ↓ 
SIMPLE MEANING 
  ↓ 
PHILOSOPHICAL MEANING 
  ↓ 
DIMENSIONS & FACETS 
  ↓ 
POSITIVE EXAMPLE 
  ↓ 
NEGATIVE COUNTER-EXAMPLE 
  ↓ 
ADMINISTRATIVE APPLICATION 
  ↓ 
ETHICAL DILEMMA 
  ↓ 
MORAL THINKER 
  ↓ 
CURRENT AFFAIRS LINK 
  ↓ 
ACTUAL PYQ 
  ↓ 
10-MARKER ANSWER BLUEPRINT
```

---

## 🧩 2. Signature Features

### 1. Case Study Simulator (14-Step Reasoning Flow)
The centerpiece of the application guides aspirants through the exact thought process of a senior civil servant:
1. **Scenario & Fact Extraction**: Separating undisputed facts from allegations.
2. **Interactive Stakeholder Mapping**: Identifying vulnerable groups, power asymmetries, and conflicting interests.
3. **Ethical Issues & Value Conflicts**: Delineating fundamental moral questions (e.g. Rule of Law vs Human Dignity).
4. **Statutory & Constitutional Anchors**: Applying Article 14, 21, Prevention of Corruption Act, NFSA 2013, GFR 2017.
5. **Decision Matrix & Multi-Criteria Scoring**: Evaluating Options across 6 dimensions (Legality, Integrity, Public Interest, Fairness, Feasibility, Long-Term Impact).
6. **Normative Theory Filter**: Testing options through Kantian Deontology, Utilitarianism, and Rawlsian Difference Principle.
7. **Phased Implementation Roadmap**: Structuring immediate (0-2h), short-term (48h), and systemic long-term reforms.
8. **Institutional Safeguards**: Proposing whistleblowing mechanisms, CVC reporting, and social audits.
9. **AI-Assisted Practice Assessment**: Objective feedback evaluating identified issues, missed stakeholders, and constitutional fidelity.

### 2. Turn Current Affairs into Ethics Engine
Transforms breaking national events into GS-IV analytical gold:
- **Electoral Bonds Case**: Analyzes Right to Know (Article 19(1)(a)) vs Donor Privacy and Crony Capitalism.
- **AI Deepfakes in Elections**: Truth in the digital public square, bodily dignity (Article 21), and platform accountability.
- **Gig Workers Welfare Bills**: Algorithmic management ethics, living wage (Article 43), and corporate social responsibility.
- **Custom Event Converter**: Enables students to type any headline to instantly extract stakeholders, ethical issues, and Mains questions.

### 3. Mains Answer Writing Workbench & Directives Analyser
- Real-time countdown timer (7 mins for 10-markers, 14 mins for case studies)
- Live word counter with color-coded bandwidth warnings
- **Directives Analyser**: Concrete expectations, recommended structures, and common pitfalls for *Critically Examine*, *Discuss*, *Evaluate*, *Comment*, and *Elucidate*.
- **1-Click Introductions & Conclusions Bank**: High-scoring opening and closing templates grounded in Constitutional Morality, Gandhian Antyodaya, and Nolan Principles.

### 4. Spaced Repetition Revision & Mistake Book
- **Leitner 5-Box Spaced Repetition**: 1 day, 3 days, 7 days, 15 days, 30 days review intervals.
- **Personal Mistake Book**: Automatically captures incorrect conceptual MCQ choices and missed case study stakeholders with "Mark Mastered" resolution tracking.
- **Bilingual Lexicon**: 300+ terms with Hindi terminology (सत्यनिष्ठा, शुचिता, निष्पक्षता, वस्तुनिष्ठता, समानुभूति, करुणा, साध्य-साधन).

---

## 🚀 3. Quickstart & Local Installation

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ or v22+ recommended)
- **npm**: v9.0.0 or later

### Installation Steps

1. Clone or navigate to the project directory:
   ```bash
   cd gs4-master
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Build production bundle:
   ```bash
   npm run build
   ```
   The optimized client-side distribution will be generated in `./dist`.

---

## 🌐 4. GitHub Pages Deployment

The application is engineered as a zero-backend, pure client-side application with relative asset paths, making it 100% compatible with GitHub Pages.

### Automated GitHub Actions Deployment

1. Create a GitHub repository named `gs4-master` (or `ethics-master`).
2. Push the code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Ethics Master GS-IV"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/gs4-master.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the website. Your application will be live at:
   `https://<YOUR_USERNAME>.github.io/gs4-master/`

---

## 📁 5. Folder & Architecture Overview

```
gs4-master/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment automation
├── public/                      # Static assets & favicon
├── src/
│   ├── components/              # Global UI elements
│   │   ├── Header.tsx           # Search, bilingual toggle, user stats
│   │   ├── Navbar.tsx           # 19-module responsive horizontal navigation
│   │   └── Footer.tsx           # Civil service references and links
│   ├── context/
│   │   └── EthicsContext.tsx    # State management, local storage, notes, bookmarks
│   ├── data/                    # Type-safe, modular content store
│   │   ├── concepts/            # 52 Syllabic modules (12-step flow)
│   │   ├── values/              # Foundational & Constitutional values
│   │   ├── thinkers/            # Indian, Western thinkers & Theories
│   │   ├── case-studies/        # Case Simulator & Decision matrices
│   │   ├── pyq/                 # UPSC 2013-2024 & UPPSC actual PYQs
│   │   ├── examples/            # Authentic administrative examples
│   │   ├── quotes/              # Verified quotes bank
│   │   ├── current-affairs/     # Turn Current Affairs into Ethics
│   │   ├── governance/          # 2nd ARC, Nolan, CVC, RTI, Codes
│   │   ├── vocabulary/          # 300+ Bilingual terms
│   │   └── questions/           # MCQs, drills, flashcards deck
│   ├── features/                # Core interactive labs
│   │   ├── CaseSimulator.tsx    # 14-Step Signature Case Study Simulator
│   │   ├── DilemmaSimulator.tsx # Rapid Dilemma Crucible
│   │   ├── ConceptsHub.tsx      # Digital Ethics Textbook
│   │   ├── ValuesHub.tsx        # Value Matrix & Value-to-Example Engine
│   │   ├── EmotionalIntelligenceLab.tsx # EI Simulator
│   │   ├── ThinkersHub.tsx      # Thinkers Profile & Dialectical Comparison
│   │   ├── TheorySimulator.tsx  # Normative Theories Simulator
│   │   ├── GovernanceHub.tsx    # Probity & ARC 4th Report
│   │   ├── MainsAnswerLab.tsx   # Answer Workbench & Directives Analyser
│   │   ├── PyqEngine.tsx        # PYQ Trends & Blueprint Breakdown
│   │   ├── CurrentAffairsEthics.tsx # Real-World Event Converter
│   │   ├── ExamplesAndQuotes.tsx# Verified Examples & Quotes Directory
│   │   ├── VocabularyHub.tsx    # Bilingual Lexicon Explorer
│   │   ├── KnowledgeGraph.tsx   # Interactive Conceptual Network
│   │   ├── RevisionEngine.tsx   # Leitner Flashcards & Mistake Book
│   │   └── DashboardHub.tsx     # Metrics, Study Planner, JSON Importer
│   ├── types/
│   │   └── ethics.ts            # Strict TypeScript domain schemas
│   ├── App.tsx                  # Root application view
│   ├── main.tsx                 # React DOM bootstrap
│   └── index.css                # Tailwind CSS v4 styling & animations
├── CONTENT-UPDATE-GUIDE.md      # Step-by-step instructions for adding content
├── package.json                 # Dependencies & build scripts
├── vite.config.ts               # Vite configuration with base './'
└── README.md                    # Project documentation
```

---

## ⚖️ 6. Official Sources & Content Integrity

In strict adherence to the ETHICS MASTER Content Integrity Charter:
- **Zero Hallucination Policy**: Quotations, statistics, judgments, and rules are never fabricated. All quotes are explicitly tagged with verification status (`Verified Quote`, `Paraphrase`, `Attributed Idea`).
- **Official References**: Grounded in the Second Administrative Reforms Commission (4th Report "Ethics in Governance", 1st Report "RTI", 12th Report "Citizen Centric Administration"), Central Vigilance Commission (CVC) Manuals, Nolan Committee Reports, Supreme Court judgments, and the Constitution of India.

---

## 📜 7. License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
