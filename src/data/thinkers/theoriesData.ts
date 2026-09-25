// src/data/thinkers/theoriesData.ts
// Comprehensive Ethical Theories database for Theory Simulator and Comparative Analysis

import { EthicalTheory } from '../../types/ethics';

export const ETHICAL_THEORIES: EthicalTheory[] = [
  {
    id: 'th-deontology',
    name: 'Deontology (Duty-Based Ethics)',
    school: 'Deontology',
    proponents: ['Immanuel Kant', 'W.D. Ross', 'Thomas Nagel'],
    corePremise: 'Morality is bound to duty; actions are intrinsically right or wrong regardless of consequences. Certain moral boundaries must never be breached.',
    evaluationCriterion: 'Adherence to universal moral duties, laws, and the Categorical Imperative. Treatment of individuals as ends, never as mere instruments.',
    decisionRule: 'Ask: Can this action\'s maxim be willed as a universal law for all rational beings? Does it treat every human with inviolable dignity?',
    strengths: [
      'Establishes absolute safeguards for individual rights and human dignity.',
      'Prevents vulnerable minorities from being sacrificed for the greater good.',
      'Clear, predictable principles immune to flawed outcome predictions.'
    ],
    limitations: [
      'Can lead to moral rigidity and catastrophic results when duties conflict (e.g. telling the truth to a murderer).',
      'Neglects real-world human suffering produced by following abstract rules blindly.'
    ],
    administrativeImplication: 'Precludes torture, extrajudicial encounters, falsification of data, and using citizens as disposable tools for meeting administrative targets.',
    scenarioEvaluation: {
      scenarioTitle: 'Encounter killing of a notorious gang leader to restore public calm',
      howItJudges: 'Deontology categorically condemns the encounter as murder and violation of universal due process, regardless of whether crime rates plummet afterwards.',
      verdict: 'Completely Unacceptable. The state has an absolute duty to uphold constitutional law and due process without exception.'
    }
  },
  {
    id: 'th-utilitarianism',
    name: 'Utilitarianism (Consequentialist Welfare Ethics)',
    school: 'Utilitarianism',
    proponents: ['Jeremy Bentham', 'John Stuart Mill', 'Peter Singer'],
    corePremise: 'The moral worth of an action is determined solely by its outcomes; maximize net happiness/utility and minimize suffering for the greatest number.',
    evaluationCriterion: 'Net aggregate utility: Total pleasure/well-being produced minus total pain/harm inflicted across all affected sentient beings.',
    decisionRule: 'Choose the policy or action that generates the highest aggregate net social welfare among all available alternatives.',
    strengths: [
      'Highly practical for public policy, cost-benefit analysis, and disaster resource triage.',
      'Pragmatic, flexible, and democratic—every person\'s well-being counts equally in the calculus.'
    ],
    limitations: [
      'Risk of "Tyranny of the Majority"—can sanction oppressing vulnerable minorities if the majority benefits.',
      'Difficulty in quantifying qualitative human values like dignity, freedom, and emotional grief.'
    ],
    administrativeImplication: 'Guides budget allocation, public health vaccination drives, emergency ward triage, and critical infrastructure projects.',
    scenarioEvaluation: {
      scenarioTitle: 'Diverting emergency hospital oxygen supply to ICU with 10 critically ill patients vs 1 terminal patient',
      howItJudges: 'Calculates expected lives saved and quality-adjusted life years, directing oxygen where it saves the greatest number of lives.',
      verdict: 'Allocate oxygen to the 10 patients to maximize aggregate survival and minimize preventable family grief.'
    }
  },
  {
    id: 'th-virtue-ethics',
    name: 'Virtue Ethics (Character-Centric)',
    school: 'Virtue Ethics',
    proponents: ['Aristotle', 'Confucius', 'Alasdair MacIntyre', 'Thomas Aquinas'],
    corePremise: 'Morality is not merely about following rules or tallying consequences, but about being a virtuous person with noble character and practical wisdom (Phronesis).',
    evaluationCriterion: 'Does the action exemplify cardinal virtues (Courage, Temperance, Justice, Prudence) and avoid the vices of deficiency or excess (The Golden Mean)?',
    decisionRule: 'What would a person of exemplary character and practical wisdom do in this specific contextual dilemma?',
    strengths: [
      'Holistic and developmental; focuses on moral motivation, emotional maturity, and lifelong character formation.',
      'Acknowledges human complexity and situational nuances rather than rigid formulas.'
    ],
    limitations: [
      'Can be ambiguous in providing concrete rules during novel technological or legal emergencies.',
      'Cultural relativity of what constitutes a "virtuous person" across different societies.'
    ],
    administrativeImplication: 'Emphasizes civil service integrity, empathy, professional pride, and institutional mentorship over mere mechanical rule compliance.',
    scenarioEvaluation: {
      scenarioTitle: 'Handling a volatile communal riot with stone-pelting mobs',
      howItJudges: 'An administrator acts with the Golden Mean of Courage: neither paralyzed in cowardice nor using disproportionate lethal force (rashness), but deploying measured, firm crowd control.',
      verdict: 'Deploy disciplined, proportional force while opening peaceful negotiation channels through trusted community elders.'
    }
  },
  {
    id: 'th-rawls-justice',
    name: 'Rawlsian Justice as Fairness (Social Contract)',
    school: 'Justice Theory',
    proponents: ['John Rawls', 'Thomas Scanlon'],
    corePremise: 'Justice requires institutional arrangements that rational persons would agree to behind a Veil of Ignorance, prioritizing the protection of the least advantaged.',
    evaluationCriterion: 'Maximin principle: Does the policy improve the condition of the worst-off social group while preserving equal basic liberties for all?',
    decisionRule: 'Design and evaluate policies assuming you might turn out to be the poorest, most vulnerable, or marginalized individual in that society.',
    strengths: [
      'Provides a rigorous philosophical foundation for welfare policies and affirmative action.',
      'Reconciles individual liberty with egalitarian economic redistribution.'
    ],
    limitations: [
      'Highly risk-averse assumption that rational people will always prioritize the worst-case scenario.',
      'Can disincentivize merit and innovation if redistributive taxation becomes confiscatory.'
    ],
    administrativeImplication: 'Demands that welfare safety nets (food security, public schooling, Ayushman Bharat healthcare) receive budgetary priority over elite amenities.',
    scenarioEvaluation: {
      scenarioTitle: 'Land acquisition for a high-speed bullet train displacing forest-dwelling tribal families',
      howItJudges: 'Evaluates the policy through the eyes of the displaced tribal family. If the project worsens their existential vulnerability, it is unjust unless comprehensive rehabilitation guarantees their enhanced well-being.',
      verdict: 'Disallow acquisition until full, dignified, land-for-land resettlement, forest rights compensation, and livelihood restoration are legally guaranteed.'
    }
  },
  {
    id: 'th-care-ethics',
    name: 'Ethics of Care (Relational & Contextual)',
    school: 'Care Ethics',
    proponents: ['Carol Gilligan', 'Nel Noddings', 'Virginia Held'],
    corePremise: 'Moral reasoning should prioritize relationships, compassion, emotional connection, and responsiveness to human vulnerability rather than detached, abstract contractual rules.',
    evaluationCriterion: 'Does the action preserve caring human relationships, protect vulnerable dependents, and respond with genuine empathy to contextual suffering?',
    decisionRule: 'How can we address the particular needs of the persons involved with minimal harm and maximal relational healing?',
    strengths: [
      'Corrects male-dominated, hyper-individualistic, abstract legalistic frameworks.',
      'Deeply attuned to marginalized caregivers, children, the elderly, and disabled individuals.'
    ],
    limitations: [
      'Can be prone to favoritism, nepotism, or parochially favoring those emotionally closest to us over distant strangers.',
      'Lacks clear institutional mechanisms for macro-level state governance.'
    ],
    administrativeImplication: 'Transforms public service delivery from adversarial bureaucratization into compassionate citizen support (e.g. child welfare services, geriatric care, victim assistance).',
    scenarioEvaluation: {
      scenarioTitle: 'An impoverished grandmother caring for orphaned grandchildren lacks biometric Aadhaar verification for food rations',
      howItJudges: 'Care ethics demands immediate nutritional provision based on direct relationship and vulnerability, overriding abstract biometric verification hurdles.',
      verdict: 'Provide emergency food grains immediately under official discretion; follow up with home-visit doorstep Aadhaar registration later.'
    }
  },
  {
    id: 'th-gandhian-sarvodaya',
    name: 'Gandhian Sarvodaya and Means-Ends Purity',
    school: 'Gandhian Ethics',
    proponents: ['Mahatma Gandhi', 'Vinoba Bhave', 'Jayaprakash Narayan'],
    corePremise: 'True progress is Sarvodaya (upliftment of all) through Antyodaya (beginning with the last and weakest). Means and ends are convertibly connected: impure means corrupt noble ends.',
    evaluationCriterion: 'Does the decision restore moral dignity and economic self-reliance to the poorest person (Gandhian Talisman)? Are the methods entirely truthful and non-violent?',
    decisionRule: 'Recall the face of the poorest person. Will this step restore to him control over his own life and destiny? Can the means be defended openly in the light of truth?',
    strengths: [
      'Uncompromising moral integrity that prevents moral corruption within public institutions.',
      'Fosters self-reliance (Swaraj) and participatory democracy from the grassroots up.'
    ],
    limitations: [
      'Extremely demanding moral standard that is difficult to sustain amidst modern geopolitical realpolitik and rapid industrialization.',
      'Total non-violence can create strategic vulnerabilities against ruthless external aggression.'
    ],
    administrativeImplication: 'Promotes Gram Swaraj, ethical trusteeship in public corporations, conflict resolution through dialogue, and social audit by Gram Sabhas.',
    scenarioEvaluation: {
      scenarioTitle: 'Using fabricated evidence to convict an infamous extortionist who has terrorized a city',
      howItJudges: 'Gandhian ethics vehemently forbids fabricating evidence; achieving a "good end" (stopping an extortionist) through "immoral means" (lying) poisons the soul of the justice system.',
      verdict: 'Strictly prohibit fabrication. Secure lawful conviction through patient forensic investigation and witness protection; never compromise truth.'
    }
  }
];
