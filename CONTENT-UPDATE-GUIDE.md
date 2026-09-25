# ETHICS MASTER (GS-IV) — CONTENT UPDATE & SCALING GUIDE

Welcome to the content administration guide for **ETHICS MASTER** — the professional digital textbook, case study reasoning lab, and PYQ database for UPSC Civil Services GS-IV and UPPSC Ethics.

This application is strictly designed following the **Separation of Concerns Principle**:
> **Application Logic & UI components NEVER contain hard-coded question banks or case study texts.**
> All content resides as type-safe, modular data files under `/src/data/`. New content items can be continuously scaled (to 500+, 1,000+, 5,000+ records) without modifying any React components.

---

## 1. Directory Structure for Content

All data is structured under `/src/data/`:

| Directory | Target File | Content Stored |
|---|---|---|
| `/src/data/concepts/` | `conceptsData.ts` | 52 Syllabic Modules following the 12-Step Pedagogical Model |
| `/src/data/values/` | `valuesData.ts` | Foundational & Constitutional Values Matrix with Hindi terms |
| `/src/data/thinkers/` | `thinkersData.ts` | Indian & Western Moral Thinkers, Major Works, Quotes |
| `/src/data/thinkers/` | `theoriesData.ts` | Normative Ethical Theories (Deontology, Utilitarianism, Rawls, etc.) |
| `/src/data/case-studies/` | `casesData.ts` | 14-Step Case Study Simulator Scenarios & Decision Matrices |
| `/src/data/pyq/` | `pyqData.ts` | UPSC GS-IV & UPPSC Ethics PYQs with model approaches |
| `/src/data/examples/` | `examplesData.ts` | Documented Administrative & Historical Examples Bank |
| `/src/data/quotes/` | `quotesData.ts` | Strictly Verified Quotes Bank with Authenticity Status |
| `/src/data/current-affairs/` | `currentAffairsData.ts` | Turn Current Affairs into Ethics Engine Events |
| `/src/data/governance/` | `governanceData.ts` | Nolan Principles, Second ARC 4th Report, RTI, Codes |
| `/src/data/vocabulary/` | `vocabularyData.ts` | 300+ Bilingual Ethics Terms (English + Hindi) |
| `/src/data/questions/` | `theoryQuestionsData.ts` | Scalable MCQs, Drills, and Flashcards Deck |

---

## 2. Adding a New Case Study

To add a new case study to the **Case Study Simulator**, open `/src/data/case-studies/casesData.ts` and append a new `CaseStudyItem` object:

```typescript
{
  id: 'cs-my-new-case',
  title: 'Descriptive Case Title',
  year: 2025,
  exam: 'UPSC',
  difficulty: 'UPSC_Standard',
  domain: 'Procurement & Tenders', // Or 'Law & Order', 'Welfare Delivery', etc.
  administrativeRole: 'District Magistrate',
  scenario: 'Full incident brief containing realistic administrative tensions...',
  facts: [
    'Fact 1...',
    'Fact 2...'
  ],
  stakeholders: [
    {
      name: 'Vulnerable Group',
      role: 'Impacted community',
      interests: 'Livelihood and safety',
      vulnerabilityLevel: 'High'
    }
  ],
  ethicalIssues: [
    'Right to Life vs Fiscal Compliance',
    'Integrity under Political Pressure'
  ],
  competingValues: [
    'Public Interest vs Political Expediency',
    'Compassion vs Regulatory Rigidity'
  ],
  legalProvisions: [
    'Prevention of Corruption Act, 1988',
    'General Financial Rules, 2017'
  ],
  constitutionalArticles: [
    'Article 14',
    'Article 21'
  ],
  options: [
    {
      id: 'opt-a',
      text: 'First alternative course of action...',
      pros: ['Immediate compliance'],
      cons: ['Moral failure'],
      legalityScore: 5,
      integrityScore: 3,
      fairnessScore: 2,
      publicInterestScore: 2,
      feasibilityScore: 9,
      longTermImpactScore: 2
    },
    {
      id: 'opt-b',
      text: 'Balanced second alternative course of action...',
      pros: ['Saves lives', 'Follows statutory exceptions'],
      cons: ['Requires rapid coordination'],
      legalityScore: 9,
      integrityScore: 10,
      fairnessScore: 10,
      publicInterestScore: 10,
      feasibilityScore: 9,
      longTermImpactScore: 10
    }
  ],
  balancedCourseOfAction: 'Comprehensive multi-horizon resolution...',
  implementationPlan: [
    'Immediate (0-2 hrs): ...',
    'Short-Term (48 hrs): ...',
    'Long-Term Systemic: ...'
  ],
  institutionalSafeguards: [
    'Mandatory social audits',
    'Digital whistleblower hotlines'
  ],
  modelConclusion: 'Synthesizing constitutional morality and public trust...',
  relevantThinkers: ['Immanuel Kant', 'Mahatma Gandhi'],
  relevantQuotes: ['Integrity is doing the right thing...']
}
```

---

## 3. Adding a New Current Affairs Ethical Deconstruction

Open `/src/data/current-affairs/currentAffairsData.ts` and add:

```typescript
{
  id: 'ca-event-slug',
  title: 'Official Event Name',
  date: 'Month Year',
  source: 'Supreme Court of India / PIB / Ministry Name',
  sourceUrl: 'https://official-link',
  verifiedDate: 'YYYY-MM-DD',
  sourceType: 'Supreme Court Judgment', // or 'Official Government Release', 'Parliamentary Report'
  summary: 'Factual summary of the issue...',
  ethicalIssues: ['Ethical issue 1', 'Ethical issue 2'],
  valuesInvolved: ['Integrity', 'Transparency', 'Human Dignity'],
  stakeholders: ['Citizens', 'State Executive', 'Vulnerable Communities'],
  conflictingPrinciples: 'Principle A vs Principle B...',
  constitutionalValues: ['Article 14', 'Article 21'],
  administrativeDimension: 'How civil servants must handle this on the ground...',
  possibleSolutions: ['Solution 1', 'Solution 2'],
  potentialMainsQuestion: 'Sample 10/15-marker GS-IV question...',
  caseStudyIdea: 'Brief description of an administrative case study derived from this event...'
}
```

---

## 4. Content Verification Policy (Strict Integrity)

As mandated by Section 4 and Section 60 of the ETHICS MASTER charter:
- **Never fabricate quotes or statements.** If a quote cannot be verified from published works or official speeches, mark its `status` as `'Attributed Idea'` or `'Popularly Attributed'`, never `'Verified Quote'`.
- **Always cite authentic sources:** 2nd Administrative Reforms Commission (4th Report "Ethics in Governance", 1st Report "RTI", 12th Report "Citizen Centric Administration"), Central Vigilance Commission (CVC) Manuals, Nolan Committee Reports, Supreme Court reported judgments, or official committee reports.
