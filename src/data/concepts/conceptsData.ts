// src/data/concepts/conceptsData.ts
// In-depth conceptual database following: CONCEPT → MEANING → DIMENSIONS → EXAMPLE → COUNTER-EXAMPLE → ADMINISTRATIVE APPLICATION → CONFLICT/DILEMMA → THINKER → CURRENT AFFAIRS → PYQ → CASE STUDY → ANSWER FRAMEWORK

import { ConceptItem } from '../../types/ethics';

export const CONCEPTS_DATA: ConceptItem[] = [
  {
    id: 'c-ethics-intro',
    slug: 'ethics-and-human-interface',
    title: 'Ethics and Human Interface',
    hindiTitle: 'नीतिशास्त्र और मानव अंतर्संबंध',
    category: 'Ethics Fundamentals',
    simpleMeaning: 'Ethics is the systematic study of what is morally right and wrong, good and bad in human actions, guiding individuals and institutions on how they ought to behave.',
    philosophicalMeaning: 'The branch of normative philosophy concerned with evaluating human conduct through rational reflection on moral principles, virtues, duties, and consequences to realize the summum bonum (supreme good) of human existence.',
    dimensions: [
      'Normative Ethics (What ought we to do? Utilitarianism, Deontology, Virtue)',
      'Meta-Ethics (What do moral terms mean? Moral realism vs relativism)',
      'Applied Ethics (Bioethics, Administrative Ethics, Environmental Ethics, Tech Ethics)',
      'Descriptive Ethics (What do communities actually believe and practice?)'
    ],
    example: 'A government doctor serving during an epidemic despite personal risk to life, driven by medical ethics and duty of care.',
    counterExample: 'A pharmaceutical manufacturer artificially inflating prices of life-saving oxygen cylinders during a public health emergency.',
    administrativeApplication: 'Civil servants must balance procedural conformity with moral substantive justice, ensuring state power serves citizen welfare and constitutional morality.',
    ethicalDilemma: 'Procedural rigidity versus moral urgency: Should a food supply officer dispense ration to a starving elderly widow who lacks biometric Aadhaar authentication?',
    keyThinkers: ['Aristotle', 'Immanuel Kant', 'John Stuart Mill', 'Mahatma Gandhi'],
    currentAffairsExample: 'Implementation of the Digital Personal Data Protection (DPDP) Act, balancing state surveillance needs with citizens fundamental right to privacy (K.S. Puttaswamy v. Union of India).',
    constitutionalLink: {
      articles: ['Article 14', 'Article 21', 'Article 38'],
      values: ['Justice', 'Equality', 'Human Dignity', 'Rule of Law'],
      relevance: 'The Indian Constitution represents an organic ethical document translating abstract moral ideals into enforceable rights and state duties.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Morality',
        hindiTerm: 'नैतिकता',
        difference: 'Morality is primarily personal and subjective, rooted in individual conscience, faith, or family culture; Ethics is a structured, rational, and socially/professionally codified system of standards.'
      },
      {
        term: 'Law',
        hindiTerm: 'विधि / कानून',
        difference: 'Law is backed by state coercion and establishes minimum acceptable conduct; Ethics demands aspirational excellence and internalised moral duty beyond external punishment.'
      },
      {
        term: 'Values',
        hindiTerm: 'मूल्य',
        difference: 'Values are core beliefs and preferences regarding what is desirable or worthy; Ethics evaluates actions against universal moral standards to judge whether those desires are right or wrong.'
      }
    ],
    pyqs: [
      'UPSC 2014: "What do you understand by ethics and private versus public relationships? Discuss with examples."',
      'UPSC 2020: "Hatred is destructive of a person\'s wisdom and conscience. Discuss how this affects ethical decision-making in public administration."',
      'UPPSC 2022: "Explain the role of ethics in human life. How does it influence personal and professional conduct?"'
    ],
    caseStudyRefId: 'cs-ration-biometrics',
    answerFramework: {
      introduction: 'Define ethics as the rational evaluation of voluntary human actions against normative standards of justice, duty, and human flourishing.',
      bodyPoints: [
        'Determinants of ethics: Intent, object, circumstances, and consequences (Thomistic Action Theory).',
        'Human interface: How personal values interact with organizational culture, legal mandates, and social expectations.',
        'Administrative imperative: Civil servants act as trustees of public resources where ethical erosion leads to institutional cynicism.'
      ],
      conclusion: 'Conclude with Gandhian Talisman: True ethical validation lies in whether the action restores dignity and agency to the poorest and weakest.'
    },
    sources: ['2nd ARC 4th Report: Ethics in Governance', 'Stanford Encyclopedia of Philosophy: Normative Ethics']
  },
  {
    id: 'c-integrity',
    slug: 'integrity-in-civil-services',
    title: 'Integrity (Personal, Professional & Institutional)',
    hindiTitle: 'सत्यनिष्ठा (व्यक्तिगत, व्यावसायिक एवं संस्थागत)',
    category: 'Foundational Values',
    simpleMeaning: 'The undivided consistency between one\'s moral convictions, spoken words, and actual deeds, remaining steadfast even when unobserved or under intense pressure.',
    philosophicalMeaning: 'Wholeness and moral coherence (from Latin "integer" meaning untouched or whole); the refusal to compromise core moral principles for personal gain, organizational survival, or expediency.',
    dimensions: [
      'Personal Integrity (Internal moral compass and refusal to lie or self-deceive)',
      'Professional Integrity (Strict adherence to professional codes, conflict-of-interest disclosure)',
      'Institutional Integrity (Defending statutory autonomy, procedural fairness, and institutional credibility against corruptive co-optation)',
      'Intellectual Integrity (Willingness to acknowledge uncomfortable facts, truth over pleasing superiors)'
    ],
    example: 'Shri Satyendra Dubey (IES officer), who refused to sign off on corrupt subcontracting on the Golden Quadrilateral highway project despite death threats.',
    counterExample: 'An officer certifying substandard construction materials for kickbacks, compromising passenger safety on railway tracks.',
    administrativeApplication: 'Officers must maintain complete financial probity, transparent decision logs, and recuse themselves immediately when personal interests intersect public decisions.',
    ethicalDilemma: 'Integrity vs Organisational Loyalty: Should an auditor report irregularities committed by a mentor-boss whose protection had shielded the junior earlier?',
    keyThinkers: ['Socrates', 'Sardar Vallabhbhai Patel', 'B.R. Ambedkar', 'Second ARC'],
    currentAffairsExample: 'Supreme Court quashing the Electoral Bonds Scheme (2024), citing the fundamental right to information regarding political donations to safeguard electoral integrity.',
    constitutionalLink: {
      articles: ['Article 311', 'Article 51A(h)'],
      values: ['Probity', 'Trusteeship', 'Rule of Law'],
      relevance: 'Constitutional safeguards for civil servants were instituted to protect officers of integrity from capricious political reprisals.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Honesty',
        hindiTerm: 'ईमानदारी',
        difference: 'Honesty means telling the truth and not stealing; Integrity goes further, demanding active defense of moral wholeness and standing up against wrong even at personal cost.'
      },
      {
        term: 'Probity',
        hindiTerm: 'शुचिता',
        difference: 'Integrity is internal moral steadfastness; Probity is the external, demonstrable proof of incorruptibility and unimpeachable financial rectitude in public governance.'
      }
    ],
    pyqs: [
      'UPSC 2019: "Integrity is a value that empowers the human being. Justify with suitable illustrations."',
      'UPSC 2016: "Explain how integrity and objectivity complement each other in civil service."',
      'UPPSC 2021: "Distinguish between honesty and integrity. Why is integrity indispensable for civil servants?"'
    ],
    caseStudyRefId: 'cs-tendering-pressure',
    answerFramework: {
      introduction: 'Quote C.S. Lewis: "Integrity is doing the right thing, even when no one is watching." Define it as constitutional alignment between belief, rule, and action.',
      bodyPoints: [
        'Patel\'s vision of the "Steel Frame": Civil service integrity as the sheet anchor of a diverse democracy.',
        'Three-tier integrity: Personal conscience, professional compliance, institutional guardianship.',
        'Pressures: Political patronages, transfer threats, societal expectations; remedies: institutional disclosures and statutory whistleblowing safeguards.'
      ],
      conclusion: 'Integrity is not merely the absence of corruption, but the active presence of moral courage and public stewardship.'
    },
    sources: ['Central Vigilance Commission Manual (2021)', 'Nolan Committee on Standards in Public Life (1995)']
  },
  {
    id: 'c-impartiality-nonpartisanship',
    slug: 'impartiality-and-non-partisanship',
    title: 'Impartiality and Non-Partisanship',
    hindiTitle: 'निष्पक्षता एवं गैर-तरफदारी (गैर-पक्षपात)',
    category: 'Foundational Values',
    simpleMeaning: 'Making administrative decisions based purely on objective merit and law without bias, prejudice, or political allegiance.',
    philosophicalMeaning: 'The principle that equal cases must be treated equally (Aristotelian formal justice), operating behind a "Veil of Ignorance" (John Rawls) where identity does not dictate entitlement.',
    dimensions: [
      'Political Non-Partisanship (Serving any democratically elected government with equal loyalty and competence)',
      'Social Impartiality (Immunity to caste, communal, linguistic, or kinship affiliations)',
      'Substantive Fairness (Treating unequals unequally through affirmative action without subjective bias)'
    ],
    example: 'Chief Election Commissioner T.N. Seshan enforcing the Model Code of Conduct uniformly against both ruling ministers and opposition leaders.',
    counterExample: 'A district magistrate fast-tracking development grants exclusively to villages loyal to the incumbent political representative while neglecting others.',
    administrativeApplication: 'Ensuring that transfer policies, vendor selections, and welfare rollouts are conducted strictly on transparent criteria without fear or favor.',
    ethicalDilemma: 'Non-Partisanship vs Moral Conscience: Must an officer implement a legally passed government policy that the officer believes will harm a vulnerable tribal community?',
    keyThinkers: ['Max Weber', 'John Rawls', 'T.N. Seshan', '2nd ARC'],
    currentAffairsExample: 'Election Commission of India issuing uniform show-cause notices across political parties for violation of MCC during general elections.',
    constitutionalLink: {
      articles: ['Article 14', 'Article 15', 'Article 16'],
      values: ['Equality of Opportunity', 'Secularism', 'Natural Justice'],
      relevance: 'Articles 14 and 15 strictly prohibit arbitrary classification and discrimination by the state apparatus.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Neutrality',
        hindiTerm: 'तटस्थता',
        difference: 'Neutrality can imply indifference or inaction; Non-partisanship means active commitment to the Constitution and rule of law while remaining detached from partisan party politics.'
      },
      {
        term: 'Apathy',
        hindiTerm: 'उदासीनता',
        difference: 'Apathy is emotional detachment from public pain; Impartiality is fairness in judgment while maintaining deep administrative empathy for the public.'
      }
    ],
    pyqs: [
      'UPSC 2018: "What do you understand by the terms \'impartiality\' and \'non-partisanship\' in public service? Illustrate with examples."',
      'UPSC 2021: "Examine the role of non-partisanship in ensuring public trust in administration."'
    ],
    caseStudyRefId: 'cs-communal-clash-curfew',
    answerFramework: {
      introduction: 'Define impartiality as objective adherence to principles of natural justice without personal predispositions, and non-partisanship as political detachment of the civil service.',
      bodyPoints: [
        'Weberian rational-legal bureaucracy: Civil servant as the permanent executive, ensuring continuity across regime changes.',
        'Safeguarding the vulnerable: Impartiality prevents the state machinery from becoming the coercive instrument of dominant factions.',
        'Distinction: Commitment to constitutional philosophy (Directive Principles) vs subservience to transient political manifestos.'
      ],
      conclusion: 'The civil servant\'s loyalty is pledged neither to a political party nor to personal ideology, but unreservedly to the Constitution of India.'
    },
    sources: ['Central Civil Services (Conduct) Rules 1964, Rule 3(1)', '2nd ARC 10th Report: Refurbishing Personnel Administration']
  },
  {
    id: 'c-empathy-compassion',
    slug: 'empathy-tolerance-and-compassion',
    title: 'Empathy, Tolerance and Compassion towards Weaker Sections',
    hindiTitle: 'कमजोर वर्गों के प्रति समानुभूति, सहिष्णुता एवं करुणा',
    category: 'Foundational Values',
    simpleMeaning: 'The emotional capacity to understand others suffering (empathy), combined with patient accommodation of differences (tolerance) and active desire to relieve distress (compassion).',
    philosophicalMeaning: 'Rooted in the Buddhist concept of Karuna (compassion) and Schopenhauer\'s metaphysics of morals, where recognizing shared human vulnerability compels altruistic administrative intervention.',
    dimensions: [
      'Cognitive Empathy (Intellectually understanding a vulnerable citizen\'s constraints)',
      'Affective Empathy (Emotionally feeling another\'s distress)',
      'Compassionate Action (Translating feeling into institutional relief without breaking statutory probity)',
      'Tolerance (Respectful accommodation of divergent beliefs, identities, and worldviews)'
    ],
    example: 'IAS officer Armstrong Pame building the 100km "People\'s Road" in remote Manipur through crowdfunding when government funds were stalled, connecting isolated villages to hospitals.',
    counterExample: 'An officer ordering the demolition of homeless shelters in freezing winter nights without providing alternative transit accommodation.',
    administrativeApplication: 'Exercising administrative discretion to assist elderly, differently-abled, transgender, and impoverished citizens who may lack identity documents or literacy.',
    ethicalDilemma: 'Compassion vs Legality: A destitute woman arrives 5 minutes past deadline to apply for life-saving medical aid for her child. Overlooking the deadline could expose the officer to audit objections.',
    keyThinkers: ['Gautama Buddha', 'Mahatma Gandhi', 'Arthur Schopenhauer', 'Amartya Sen'],
    currentAffairsExample: 'Supreme Court directing state governments to provide dry rations and registration to migrant workers on e-Shram portal without insisting on mandatory identity cards during crises.',
    constitutionalLink: {
      articles: ['Article 39A', 'Article 41', 'Article 46'],
      values: ['Social Justice', 'Fraternity', 'Dignity of Individual'],
      relevance: 'Directive Principles mandate the state to promote with special care the educational and economic interests of the weaker sections.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Sympathy',
        hindiTerm: 'सहानुभूति',
        difference: 'Sympathy is feeling sorrow for someone from a distance ("I feel sorry for you"); Empathy is experiencing their perspective ("I understand your pain from within"); Compassion moves from feeling to tangible action.'
      }
    ],
    pyqs: [
      'UPSC 2017: "One of the tests of integrity is complete refusal to be compromised. Explain. Contrast this with the requirement of compassion."',
      'UPSC 2019: "What are the basic principles of public life according to the Nolan Committee? How does compassion enrich public service?"'
    ],
    caseStudyRefId: 'cs-destitute-shelter',
    answerFramework: {
      introduction: 'Cite Gandhi\'s Talisman: "Recall the face of the poorest and the weakest man whom you may have seen..." Define empathy as the emotional engine of social justice.',
      bodyPoints: [
        'Administrative empathy bridges the chasm between cold bureaucratic rules and lived human suffering.',
        'Tolerance prevents majoritarian bias and ensures fair hearing to marginalized voices.',
        'Synthesizing compassion with rule of law: Using legitimate official discretion, fast-track emergency provisions, and proactive welfare reach.'
      ],
      conclusion: 'Rules without compassion produce tyranny; compassion without rules produces chaos. The civil servant harmonizes both through institutionalized empathy.'
    },
    sources: ['Supreme Court in In Re: Problems and Miseries of Migrant Labourers (2021)', 'Second ARC 4th Report']
  },
  {
    id: 'c-emotional-intelligence',
    slug: 'emotional-intelligence-in-administration',
    title: 'Emotional Intelligence: Concepts and Administrative Utility',
    hindiTitle: 'भावनात्मक समझ (संवेगात्मक बुद्धि): अवधारणा एवं प्रशासनिक उपयोगिता',
    category: 'Emotional Intelligence',
    simpleMeaning: 'The ability to perceive, understand, manage, and constructively utilize emotions in oneself and in interpersonal relationships.',
    philosophicalMeaning: 'Harmonization of reason (logos) and passion (pathos) as advocated by Aristotle in the Nicomachean Ethics: "Anyone can become angry—that is easy. But to be angry with the right person, to the right degree, at the right time, for the right purpose, and in the right way—that is not easy."',
    dimensions: [
      'Self-Awareness (Recognizing own stress triggers, biases, and emotional blind spots)',
      'Self-Regulation (Remaining calm under public provocation, maintaining composure during crises)',
      'Internal Motivation (Driven by public service calling rather than prestige or illicit wealth)',
      'Empathy (Reading unspoken public grievances and staff anxieties)',
      'Social Skills (Negotiation, crisis de-escalation, conflict resolution, inspiring teams)'
    ],
    example: 'A district collector facing a violent mob following a custodial death, calmly listening to family members, ensuring transparent post-mortem video recording, and diffusing tension without police firing.',
    counterExample: 'An officer losing temper during an open public grievance hearing (Jan Sunwai), publicly insulting a petitioner, and ordering detention.',
    administrativeApplication: 'EI enables civil servants to manage high-stress public agitations, negotiate inter-departmental conflicts, communicate empathetically during natural disasters, and resist political provocation.',
    ethicalDilemma: 'Emotional attachment vs Objective justice: An officer emotionally sympathizes with an agitated union leader who is an old acquaintance, but must deal firmly with an illegal strike blocking an emergency hospital gate.',
    keyThinkers: ['Daniel Goleman', 'Peter Salovey & John Mayer', 'Aristotle'],
    currentAffairsExample: 'District administrators using empathetic listening, community leaders mediation, and transparent updates to address vaccine hesitancy during the COVID-19 pandemic.',
    constitutionalLink: {
      articles: ['Article 311', 'Article 19(1)(b)'],
      values: ['Public Order', 'Democratic Dialogue', 'Peaceful Assembly'],
      relevance: 'The state must balance the maintenance of public order with respecting citizens fundamental right to peaceful protest.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Cognitive Intelligence (IQ)',
        hindiTerm: 'बौद्धिक लब्धि',
        difference: 'IQ represents analytical and logical reasoning capacity; EQ determines how effectively that cognitive capacity is translated into human collaboration, leadership, and crisis management.'
      }
    ],
    pyqs: [
      'UPSC 2013: "What is \'emotional intelligence\' and how can it be developed in people? How does it help an individual in taking ethical decisions?"',
      'UPSC 2017: "How will you apply emotional intelligence in administrative practices? Discuss with real-life scenarios."',
      'UPPSC 2020: "Explain the components of emotional intelligence as propounded by Daniel Goleman."'
    ],
    caseStudyRefId: 'cs-mob-lynching-rumor',
    answerFramework: {
      introduction: 'Define Emotional Intelligence based on Salovey-Mayer and Goleman models as the capacity to recognize, evaluate, and regulate emotional dynamics in self and others.',
      bodyPoints: [
        'Self-regulation prevents impulsive retaliation against hostile media or political taunts.',
        'Empathetic perspective-taking allows anticipation of public backlash before enacting sensitive eviction or acquisition policies.',
        'Crisis leadership: In disasters, calm emotional leadership from the DM prevents collective panic and mobilizes rescue teams.'
      ],
      conclusion: 'IQ gets an administrator appointed; EQ makes an administrator effective, humane, and revered.'
    },
    sources: ['Daniel Goleman: Emotional Intelligence (1995)', 'LBSNAA Training Manual on Civil Service Leadership']
  },
  {
    id: 'c-probity-governance',
    slug: 'probity-in-governance-and-anti-corruption',
    title: 'Probity in Governance and Anti-Corruption Architecture',
    hindiTitle: 'शासन में शुचिता एवं भ्रष्टाचार-विरोधी ढाँचा',
    category: 'Probity & Governance',
    simpleMeaning: 'The highest standard of honesty, uprightness, transparency, and financial incorruptibility in public administration.',
    philosophicalMeaning: 'Probity represents the institutional manifestation of the social contract, where public servants act as fiduciary trustees of public goods, adhering to strict accountability to preserve democratic legitimacy.',
    dimensions: [
      'Procedural Probity (Strict adherence to procurement rules, CVC guidelines, GFR 2017)',
      'Substantive Probity (Ensuring decisions genuinely maximize public good, not crony interests)',
      'Financial Propriety (Treating public funds with greater frugality than one\'s personal money)',
      'Conflict of Interest Safeguards (Mandatory declaration of assets, cooling-off periods)'
    ],
    example: 'E. Sreedharan (Metro Man) implementing Delhi Metro projects ahead of schedule and within allocated budget with zero tolerance for corruption and strict vendor vetting.',
    counterExample: 'Public officials colluding with private vendors to split contract packages to evade mandatory e-tendering thresholds and siphon developmental funds.',
    administrativeApplication: 'Instituting transparent GeM (Government e-Marketplace) procurement, social audits, digital bill tracking, and robust internal audit oversight.',
    ethicalDilemma: 'Speed vs Procedure: A critical bridge collapses during monsoons. Following standard 45-day tendering delays rescue supplies to 50 cut-off villages, while emergency single-source contracting invites future vigilance inquiries.',
    keyThinkers: ['Kautilya (Arthashastra)', 'Santhanam Committee (1964)', 'Second ARC', 'Nolan Committee'],
    currentAffairsExample: 'Implementation of faceless assessment in income tax and online GeM portal procurement to reduce human discretion and eliminate rent-seeking.',
    constitutionalLink: {
      articles: ['Article 148 (CAG)', 'Article 320 (UPSC)', '73rd/74th Amendments (Social Audits)'],
      values: ['Transparency', 'Accountability', 'Democratic Trusteeship'],
      relevance: 'The CAG acts as the constitutional watchdog of public purse ensuring no rupee is spent without parliamentary appropriation and propriety.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Legality',
        hindiTerm: 'वैधता',
        difference: 'An action may be technically legal through bureaucratic loopholes, but still violate probity if it sacrifices public interest for private enrichment.'
      }
    ],
    pyqs: [
      'UPSC 2014: "Probity in governance is an essential requirement for economic development and social justice. Discuss."',
      'UPSC 2019: "What do you understand by probity in governance? Based on your understanding, suggest measures for ensuring probity in government."',
      'UPPSC 2023: "Examine the recommendations of the Second Administrative Reforms Commission regarding probity in public life."'
    ],
    caseStudyRefId: 'cs-procurement-kickback',
    answerFramework: {
      introduction: 'Define probity as institutional uprightness and strict adherence to Nolan\'s principles of selflessness, integrity, and accountability.',
      bodyPoints: [
        'Kautilya\'s reminder in Arthashastra: "Just as it is impossible not to taste honey placed on the tongue, it is hard for a king\'s servant not to touch public money; hence vigilant oversight is vital."',
        'Pillars of probity: Robust institutional checks (CVC, Lokpal, CAG, CBI), statutory transparency (RTI Act), citizen oversight (Citizen Charters, Social Audit).',
        'Preventive vigilance over punitive vigilance: Digitization, reducing bureaucratic discretion, whistleblower protection.'
      ],
      conclusion: 'Probity is the lifeblood of democracy; without it, state welfare becomes an engine of extraction and citizen alienation.'
    },
    sources: ['2nd ARC 4th Report: Ethics in Governance', 'CVC Preventive Vigilance Guidelines']
  }
];
