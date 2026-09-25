// src/data/vocabulary/vocabularyData.ts
// Comprehensive Bilingual Ethics Vocabulary Database (English + Hindi) with administrative applications

import { VocabularyItem } from '../../types/ethics';

export const VOCABULARY_DATA: VocabularyItem[] = [
  {
    id: 'voc-integrity',
    term: 'Integrity',
    hindiTerm: 'सत्यनिष्ठा',
    simpleDefinition: 'Moral wholeness and steadfast honesty, doing what is right even when no one is watching.',
    technicalDefinition: 'The quality of being whole, undivided, and consistently adhering to a comprehensive code of moral and artistic values without compromise.',
    administrativeApplication: 'Civil servants must maintain unbroken alignment between public pledges, official duties, and personal conduct, refusing any form of compromise under political coercion.',
    antonym: 'Duplicity, Corruption, Hypocrisy (दोगलापन / भ्रष्टाचार)',
    relatedTerms: ['Honesty', 'Probity', 'Rectitude', 'Uprightness'],
    sampleUsage: 'The officer preserved her professional integrity by rejecting the illicit tender kickbacks and referring the matter to the state vigilance bureau.'
  },
  {
    id: 'voc-probity',
    term: 'Probity',
    hindiTerm: 'शुचिता / सत्यनिष्ठा',
    simpleDefinition: 'Complete and confirmed integrity and uprightness in public conduct, especially regarding finances and public goods.',
    technicalDefinition: 'Demonstrated adherence to the highest standards of financial propriety, institutional transparency, and incorruptibility in the exercise of public power.',
    administrativeApplication: 'Probity requires not merely not taking bribes, but conducting public auctions, tenders, and welfare distribution in a verifiable, auditable manner.',
    antonym: 'Impropriety, Malfeasance, Venality (अनुचितता / भ्रष्टता)',
    relatedTerms: ['Financial Propriety', 'Rectitude', 'Incorruptibility', 'Clean Governance'],
    sampleUsage: 'Probity in public procurement demands competitive e-tendering through the GeM portal with zero human discretion in vendor shortlisting.'
  },
  {
    id: 'voc-impartiality',
    term: 'Impartiality',
    hindiTerm: 'निष्पक्षता',
    simpleDefinition: 'Treating all parties fairly and equally without bias, prejudice, or favoritism.',
    technicalDefinition: 'The normative principle that administrative decisions should be based solely on objective, verifiable criteria without regard to subjective preferences, caste, creed, or personal affiliations.',
    administrativeApplication: 'Distributing disaster relief material strictly on physical damage assessments rather than communal or political affiliations of village wards.',
    antonym: 'Bias, Partisanship, Favoritism, Nepotism (पक्षपात / भाई-भतीजावाद)',
    relatedTerms: ['Objectivity', 'Fairness', 'Neutrality', 'Equitable Treatment'],
    sampleUsage: 'The District Collector demonstrated strict impartiality by enforcing the Model Code of Conduct uniformly against both ruling party ministers and opposition candidates.'
  },
  {
    id: 'voc-objectivity',
    term: 'Objectivity',
    hindiTerm: 'वस्तुनिष्ठता',
    simpleDefinition: 'Making judgments based on observable facts and data rather than personal feelings or opinions.',
    technicalDefinition: 'The epistemological commitment to ground policy and decisions in empirical evidence, verified statistics, and established rules, isolated from subjective bias.',
    administrativeApplication: 'Sanctioning drought relief funds based on satellite groundwater telemetry and crop cutting experiments rather than local political lobbying.',
    antonym: 'Subjectivity, Arbitrariness, Bias (व्यक्तिपरकता / मनमानापन)',
    relatedTerms: ['Evidence-Based Policy', 'Rationality', 'Empiricism', 'Impartiality'],
    sampleUsage: 'Objectivity in environmental impact assessments prevents industrial projects from masking dangerous effluent discharge data.'
  },
  {
    id: 'voc-empathy',
    term: 'Empathy',
    hindiTerm: 'समानुभूति',
    simpleDefinition: 'The ability to understand and share the feelings and perspective of another person from their shoes.',
    technicalDefinition: 'The psychological and moral capacity for cognitive perspective-taking and affective resonance with the suffering and lived experiences of others.',
    administrativeApplication: 'An administrator visiting an unauthorized slum, understanding the acute lack of sanitation from the resident perspective, and designing participatory transit shelters.',
    antonym: 'Apathy, Callousness, Indifference (उदासीनता / संवेदनहीनता)',
    relatedTerms: ['Compassion', 'Sympathy', 'Perspective-Taking', 'Emotional Intelligence'],
    sampleUsage: 'Administrative empathy bridges the chasm between cold, bureaucratic procedures and the desperate lived realities of illiterate petitioners.'
  },
  {
    id: 'voc-compassion',
    term: 'Compassion',
    hindiTerm: 'करुणा',
    simpleDefinition: 'A deep awareness of others suffering accompanied by an active desire to relieve it.',
    technicalDefinition: 'A proactive virtue combining empathetic emotional sensitivity with tangible altruistic intervention to alleviate distress and restore dignity.',
    administrativeApplication: 'Exercising administrative discretion under disaster relief contingency funds to arrange immediate medical care and food for undocumented migrant children.',
    antonym: 'Cruelty, Indifference, Ruthlessness (क्रूरता / निष्ठुरता)',
    relatedTerms: ['Karuna', 'Altruism', 'Benevolence', 'Humaneness'],
    sampleUsage: 'Compassion towards weaker sections is not a sentimental weakness; it is the constitutional engine of substantive social justice.'
  },
  {
    id: 'voc-nonpartisanship',
    term: 'Non-Partisanship',
    hindiTerm: 'गैर-तरफदारी / गैर-पक्षपात',
    simpleDefinition: 'Not supporting or acting as a partisan tool for any political party.',
    technicalDefinition: 'The permanent commitment of a civil servant to serve any democratically elected regime with equal fidelity, competence, and constitutional neutrality.',
    administrativeApplication: 'Refusing to use official social media or departmental machinery to amplify political slogans of the ruling party during election cycles.',
    antonym: 'Partisanship, Political Servility (पक्षपात / राजनीतिक चाटुकारिता)',
    relatedTerms: ['Political Neutrality', 'Civil Service Anonymity', 'Constitutional Loyalty'],
    sampleUsage: 'Non-partisanship guarantees that policy advice given to incoming ministers remains fearless, evidence-based, and objective.'
  },
  {
    id: 'voc-rectitude',
    term: 'Moral Rectitude',
    hindiTerm: 'सदाचार / नैतिक शुचिता',
    simpleDefinition: 'Righteousness and correctness in judgment, character, and conduct.',
    technicalDefinition: 'Conformity of one\'s moral character to the highest universal standards of justice, truthfulness, and duty.',
    administrativeApplication: 'Maintaining personal and professional moral conduct that inspires subordinates and commands respect from the public and judiciary.',
    antonym: 'Depravity, Immorality, Licentiousness (अनाचार / दुराचार)',
    relatedTerms: ['Virtue', 'Righteousness', 'Integrity', 'Good Will'],
    sampleUsage: 'The magistrate\'s reputation for moral rectitude ensured that both conflicting communities trusted his verdict in the contentious land dispute.'
  },
  {
    id: 'voc-altruism',
    term: 'Altruism',
    hindiTerm: 'परार्थवाद / निस्वार्थता',
    simpleDefinition: 'Unselfish concern for the well-being and happiness of others.',
    technicalDefinition: 'The moral principle or practice of selfless concern for the welfare of others, prioritizing public good above personal gain or comfort.',
    administrativeApplication: 'A forest officer risking life and limb to rescue wildlife and evacuate villagers during raging forest blazes.',
    antonym: 'Egoism, Selfishness, Narcissism (स्वार्थवाद / अहंकारवाद)',
    relatedTerms: ['Selflessness', 'Benevolence', 'Philanthropy', 'Public Service Calling'],
    sampleUsage: 'True public service is rooted in altruism—the profound joy of dedicating one\'s intellect to uplifting the most vulnerable.'
  },
  {
    id: 'voc-conscience',
    term: 'Conscience',
    hindiTerm: 'अंतरात्मा / विवेक',
    simpleDefinition: 'An inner feeling or voice acting as a guide to the rightness or wrongness of one\'s behavior.',
    technicalDefinition: 'The practical moral judgment of human reason concerning the morality of a concrete action here and now, informed by rational principles and constitutional ethics.',
    administrativeApplication: 'When administrative rules remain silent or ambiguous during a novel crisis, the officer\'s educated conscience must act as the primary guide for justice.',
    antonym: 'Moral Blindness, Callousness (विवेकशून्यता)',
    relatedTerms: ['Moral Compass', 'Inner Voice', 'Practical Reason', 'Synderesis'],
    sampleUsage: 'The officer refused to sign the fraudulent land conversion file because his conscience would not allow him to dispossess hundreds of tribal families.'
  },
  {
    id: 'voc-phronesis',
    term: 'Phronesis (Practical Wisdom)',
    hindiTerm: 'व्यावहारिक प्रज्ञा / प्रज्ञान',
    simpleDefinition: 'The practical ability to make the right ethical decision in a specific, complex real-world situation.',
    technicalDefinition: 'Aristotelian intellectual virtue that enables a person to deliberate well about what is good and beneficial for human flourishing in concrete particulars.',
    administrativeApplication: 'Balancing the strict letter of environmental norms with the livelihood needs of impoverished traditional fishermen through phased adoption of sustainable gear.',
    antonym: 'Dogmatism, Foolishness, Incompetence (कट्टरता / अदूरदर्शिता)',
    relatedTerms: ['Practical Wisdom', 'Prudence', 'Administrative Judgment', 'Discretion'],
    sampleUsage: 'Mechanical rule compliance cannot substitute for phronesis when an administrator must resolve unprecedented communal crises.'
  },
  {
    id: 'voc-categorical-imperative',
    term: 'Categorical Imperative',
    hindiTerm: 'निरपेक्ष आदेश / बिना शर्त कर्तव्य',
    simpleDefinition: 'An absolute moral command that applies to all rational beings without any conditions or exceptions.',
    technicalDefinition: 'Immanuel Kant\'s supreme principle of morality: act only according to maxims that you can simultaneously will as universal laws, and treat humanity always as an end, never as a mere means.',
    administrativeApplication: 'Prohibiting police brutality and custodial torture categorically, regardless of whether it could extract confessions to solve high-profile crimes.',
    antonym: 'Hypothetical Imperative, Instrumental Opportunism (सापेक्ष आदेश / अवसरवादिता)',
    relatedTerms: ['Deontology', 'Universalizability', 'Duty for Duty\'s Sake', 'Kingdom of Ends'],
    sampleUsage: 'Kant\'s categorical imperative strictly forbids using vulnerable citizens as disposable test subjects in unverified clinical trials.'
  }
];
