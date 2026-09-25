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
  },
  {
    id: 'c-attitude-cab',
    slug: 'attitude-structure-formation-moral-political',
    title: 'Attitude: Structure, CAB Model, Moral & Political Attitude',
    hindiTitle: 'अभिवृत्ति (मनोवृत्ति): संरचना, सीएबी मॉडल, नैतिक एवं राजनीतिक अभिवृत्ति',
    category: 'Attitude',
    simpleMeaning: 'A learned psychological tendency to evaluate a particular person, group, policy, or idea with some degree of favor or disfavor.',
    philosophicalMeaning: 'The enduring disposition of consciousness that mediates between inner moral beliefs and overt social action, structured by the classical Tripartite (CAB) psychological framework.',
    dimensions: [
      'Cognitive Component (Beliefs, factual knowledge, and intellectual assumptions)',
      'Affective Component (Emotional feelings, gut reactions, likes, and dislikes)',
      'Behavioral Component (Predisposition or intent to act toward the attitude object)',
      'Moral Attitude (Convictions rooted in virtues, justice, taboos, and moral duties)',
      'Political Attitude (Dispositions toward state authority, ideology, democracy, and political institutions)'
    ],
    example: 'An administrator possessing a strong positive attitude toward gender equality proactively establishing women-only grievance desks (Sakhi Desks) and fast-tracking anti-dowry investigations.',
    counterExample: 'A rural development official holding a deep-seated feudal attitude that tribal communities are "naturally lazy", leading to apathy in processing Forest Rights Act community claims.',
    administrativeApplication: 'Cultivating citizen-centric, non-hierarchical, and empathetic attitudes among civil servants during foundation training (Mission Karmayogi, LBSNAA village stays).',
    ethicalDilemma: 'Cognitive Dissonance: An officer personally holding conservative attitudes regarding inter-caste marriages must impartially provide state protection and legal security to an inter-faith/caste couple facing community boycott.',
    keyThinkers: ['Gordon Allport', 'Leon Festinger (Cognitive Dissonance)', 'Carl Hovland', 'Mahatma Gandhi'],
    currentAffairsExample: 'Administrative campaigns addressing gender bias and declining child sex ratio through "Beti Bachao, Beti Padhao", shifting parental attitudes via behavioral nudges rather than coercion.',
    constitutionalLink: {
      articles: ['Article 51A(h) (Scientific Temper)', 'Article 51A(e) (Renouncing practices derogatory to the dignity of women)'],
      values: ['Democratic Temper', 'Gender Equality', 'Scientific Temperament'],
      relevance: 'Fundamental Duties require citizens and administrators to actively reform retrograde social attitudes.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Aptitude',
        hindiTerm: 'अभिक्षमता',
        difference: 'Aptitude is an innate or acquired talent/potential to acquire specific knowledge or skills (e.g. analytical ability); Attitude is a mental orientation or predisposition of like/dislike toward people or tasks.'
      },
      {
        term: 'Value',
        hindiTerm: 'मूल्य',
        difference: 'Values are overarching, abstract ideals of what is intrinsically worthy (e.g. Freedom, Honesty); Attitudes are concrete evaluations focused on specific targets, policies, or groups.'
      }
    ],
    pyqs: [
      'UPSC 2021: "Attitude is an important component that goes as input in the development of human being. How to build a suitable attitude needed for a public servant?"',
      'UPSC 2016: "Explain how education and socialization influence the development of moral and political attitudes in individuals."',
      'UPPSC 2022: "What is attitude? Discuss the components of attitude with administrative examples."'
    ],
    caseStudyRefId: 'cs-ration-biometrics',
    answerFramework: {
      introduction: 'Define attitude as a learned psychological disposition toward evaluating entities favorably or unfavorably, structured by the CAB (Cognitive, Affective, Behavioral) model.',
      bodyPoints: [
        'Katz\'s four functional dimensions: Instrumental (utility), Knowledge (simplifying world), Value-expressive (identity), Ego-defensive (protecting self-esteem).',
        'Moral vs Political attitude: Moral attitudes are characterized by universalism and emotional conviction; political attitudes govern civic participation and state legitimacy.',
        'Administrative cultivation: Field exposure, empathetic role-modeling, institutional incentives, and behavioral nudges.'
      ],
      conclusion: 'As Gordon Allport observed, attitudes determine what an individual sees, hears, and does. In civil services, an attitude of humility and constitutional stewardship is paramount.'
    },
    sources: ['Gordon Allport: Handbook of Social Psychology', 'Mission Karmayogi National Programme for Civil Services Capacity Building (NPCSCB)']
  },
  {
    id: 'c-social-influence-persuasion',
    slug: 'social-influence-persuasion-nudge-theory',
    title: 'Social Influence, Persuasion & Nudge Theory in Administration',
    hindiTitle: 'सामाजिक प्रभाव, अनुनयन एवं प्रशासन में नज थ्योरी',
    category: 'Human Interface',
    simpleMeaning: 'The ways in which individuals change their beliefs, feelings, or behaviors under the influence of others, and the deliberate communication process of convincing people to adopt beneficial behaviors.',
    philosophicalMeaning: 'The exercise of communicative rationality (Jürgen Habermas) where persuasion seeks voluntary cognitive alignment through reasoned dialogue, in contrast to coercive administrative force (Danda).',
    dimensions: [
      'Three Levels of Social Influence (Herbert Kelman): Compliance (external reward/avoiding punishment), Identification (desire to be like an admired figure), Internalization (genuine acceptance of values)',
      'Aristotelian Rhetoric: Ethos (Credibility & Integrity of the speaker), Pathos (Emotional appeal & Empathy), Logos (Logic, Evidence, and Reason)',
      'Nudge Theory & Choice Architecture (Thaler & Sunstein: Altering behavior in predictable ways without forbidding any options or changing economic incentives)',
      'Counter-resistance techniques (Overcoming reactance, status quo bias, and cultural taboos)'
    ],
    example: 'Swachh Bharat Abhiyan using community-led total sanitation (CLTS), triggering peer pride and social disgust, combined with influential cultural icons (Vidya Balan, Amitabh Bachchan) to end open defecation.',
    counterExample: 'Local administration imposing arbitrary electricity blackouts or seizing ration cards of citizens who are hesitant to take vaccines, producing hostility and distrust.',
    administrativeApplication: 'Utilizing non-coercive persuasion to promote voluntary waste segregation, stubble burning cessation, organ donation pledges, and electronic FASTag adoption.',
    ethicalDilemma: 'Nudge vs Manipulation: Where does ethical behavioral nudging end and deceptive psychological manipulation of vulnerable citizens begin?',
    keyThinkers: ['Aristotle', 'Herbert Kelman', 'Richard Thaler & Cass Sunstein', 'Jürgen Habermas'],
    currentAffairsExample: 'Traffic police departments in Indian metros using humorous memes, pedestrian-friendly zebra crossings, and public pledge campaigns to deter drunk driving and helmetless riding.',
    constitutionalLink: {
      articles: ['Article 19(1)(a)', 'Article 47', 'Article 48A'],
      values: ['Democratic Consensus', 'Voluntary Civic Duty', 'Human Dignity'],
      relevance: 'A democratic republic respects citizen agency by prioritizing reasoned persuasion over authoritarian coercion.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Coercion',
        hindiTerm: 'बलप्रयोग / दबाव',
        difference: 'Coercion uses threats, sanctions, or physical force, eliminating free choice; Persuasion relies on voluntary intellectual or emotional conviction while preserving citizen agency.'
      },
      {
        term: 'Propaganda',
        hindiTerm: 'दुष्प्रचार',
        difference: 'Propaganda uses half-truths, emotional distortion, and hidden agendas to serve the propagandist\'s narrow ends; Ethical persuasion is transparent, truthful, and serves the public interest.'
      }
    ],
    pyqs: [
      'UPSC 2019: "Persuasion is an effective tool to bring about behavioral change. Illustrate how civil servants can use persuasion to implement developmental policies."',
      'UPSC 2022: "Explain the role of social influence in shaping human behavior. How can it be used to address public health crises?"'
    ],
    caseStudyRefId: 'cs-communal-clash-curfew',
    answerFramework: {
      introduction: 'Define social influence as the process whereby interpersonal dynamics alter attitudes, and persuasion as communication intended to influence voluntary decisions through reason and credibility.',
      bodyPoints: [
        'Kelman\'s triad: Moving citizens from mere compliance (fear of challan) to internalization (respect for pedestrian safety).',
        'Aristotle\'s Rhetoric: Ethos (clean reputation of DM), Logos (groundwater depletion data), Pathos (future of children).',
        'Ethical limits: Transparency, non-deception, preserving reversibility, and safeguarding vulnerable demographics.'
      ],
      conclusion: 'Conclude with Gandhi: "Action through love and moral persuasion melts the stone heart of opposition; coercion only temporarily suppresses dissent."'
    },
    sources: ['Richard Thaler & Cass Sunstein: Nudge (2008)', 'Robert Cialdini: Influence - The Psychology of Persuasion']
  },
  {
    id: 'c-objectivity-biases',
    slug: 'objectivity-cognitive-biases-evidence-based-governance',
    title: 'Objectivity, Cognitive Biases & Evidence-Based Governance',
    hindiTitle: 'वस्तुनिष्ठता, संज्ञानात्मक पूर्वाग्रह एवं साक्ष्य-आधारित शासन',
    category: 'Foundational Values',
    simpleMeaning: 'The commitment to evaluate facts, policies, and decisions purely on empirical evidence and rational merit, unclouded by personal feelings, communal prejudice, or cognitive shortcuts.',
    philosophicalMeaning: 'The epistemological discipline of setting aside subjective perspectives to perceive things as they truly are (as-it-isness), ensuring that administrative power operates as a rational-legal instrument of justice.',
    dimensions: [
      'Confirmation Bias (Seeking only evidence that confirms preexisting beliefs while ignoring contrary data)',
      'Anchoring Bias (Fixating excessively on the first piece of information received during an investigation)',
      'Availability Heuristic (Overestimating probability based on vivid, emotionally dramatic recent headlines)',
      'Ingroup/Outgroup Bias (Favoring individuals sharing one\'s caste, region, religion, or service cadre)',
      'Framing Effect (Drawing different conclusions depending on how data or policy options are presented)'
    ],
    example: 'An SP ordering forensic ballistic and gunpowder residue testing before concluding whether an exchange of fire was genuine self-defense or a staged fake encounter.',
    counterExample: 'A district magistrate assuming a petitioner from a marginalized community is "habitual liar" without inspecting land boundary demarcations and revenue maps.',
    administrativeApplication: 'Instituting third-party randomized control trials, geographic information system (GIS) mapping for drought declarations, and anonymous file evaluations in civil service transfers.',
    ethicalDilemma: 'Objectivity vs Urgent Empathy: An audit team discovers a hospital disbursed life-saving chemotherapy to poor patients without waiting for official income certificate verification. Strict objectivity penalizes the doctors for procedural lapse.',
    keyThinkers: ['Francis Bacon (Idols of the Mind)', 'Daniel Kahneman (Thinking, Fast and Slow)', 'Max Weber'],
    currentAffairsExample: 'Implementation of the Faceless Assessment Scheme in Central Board of Direct Taxes (CBDT), eliminating human interface to neutralize personal discretion and regional bias.',
    constitutionalLink: {
      articles: ['Article 14', 'Article 16'],
      values: ['Equality of Opportunity', 'Non-Arbitrariness', 'Natural Justice'],
      relevance: 'The Supreme Court in E.P. Royappa (1974) held that arbitrariness is the direct antithesis of Article 14 equality.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Cold Neutrality',
        hindiTerm: 'संवेदनहीन तटस्थता',
        difference: 'Cold neutrality ignores human suffering; Objectivity demands accuracy in factual judgment while channeling state resources toward constitutional welfare priorities.'
      }
    ],
    pyqs: [
      'UPSC 2017: "Objectivity is considered one of the foundational values of civil services. How does it protect an administrator from unconscious cognitive biases?"',
      'UPSC 2021: "Discuss how evidence-based policy making strengthens public accountability."'
    ],
    caseStudyRefId: 'cs-tendering-pressure',
    answerFramework: {
      introduction: 'Define objectivity as the unwavering adherence to empirical reality, data, and established laws, untainted by subjective bias or emotion.',
      bodyPoints: [
        'Kahneman\'s System 1 (Fast, emotional, biased) vs System 2 (Slow, analytical, objective): Civil servants must activate System 2 deliberation in crises.',
        'Baconian Idols: Overcoming Idols of the Tribe (human prejudice) and Idols of the Cave (personal upbringing).',
        'Administrative antidotes: Double-blind evaluations, algorithmic transparency, audit trails, and multi-disciplinary expert committees.'
      ],
      conclusion: 'Objectivity without empathy becomes ruthless bureaucracy; empathy without objectivity becomes chaotic favoritism. The civil servant harmonizes both through principled evidence.'
    },
    sources: ['Daniel Kahneman: Thinking, Fast and Slow (2011)', 'Francis Bacon: Novum Organum']
  },
  {
    id: 'c-laws-rules-conscience',
    slug: 'laws-rules-regulations-and-conscience-ethical-guidance',
    title: 'Laws, Rules, Regulations & Conscience as Sources of Ethical Guidance',
    hindiTitle: 'विधि, नियम, विनियम एवं अंतरात्मा: नैतिक मार्गदर्शन के स्रोत',
    category: 'Public Service Ethics',
    simpleMeaning: 'The external legal framework (laws, rules, codes) and internal moral faculty (conscience) that civil servants rely upon to determine the right course of action.',
    philosophicalMeaning: 'The tension between positive law (lex humana) and higher moral/natural law (lex naturalis). Conscience represents practical reason (Synderesis) evaluating whether an external statute aligns with foundational human justice.',
    dimensions: [
      'Law (Enacted by sovereign legislature; provides binding baseline of conduct with state sanctions)',
      'Rules & Regulations (Subordinate legislation detailing operational procedures and administrative execution)',
      'Professional Codes (Codes of Ethics & Conduct guiding institutional culture)',
      'Informed Conscience (The rational moral compass, cultivated through constitutional philosophy and empathy)',
      'Harmonization Protocol (What to do when law is silent, ambiguous, or seemingly unjust)'
    ],
    example: 'An SDM faced with a sudden river embankment breach utilizing emergency disaster management powers to commandeer private earth-moving machinery, prioritizing human life over ordinary procurement timeframes.',
    counterExample: 'Nazi bureaucrat Adolf Eichmann claiming at the Nuremberg trials that he was "merely obeying statutory orders and state regulations" while executing crimes against humanity (Hannah Arendt\'s "Banality of Evil").',
    administrativeApplication: 'When administrative rules fail to anticipate unprecedented technological, environmental, or pandemic situations, the officer\'s educated conscience must guide discretionary action toward constitutional justice.',
    ethicalDilemma: 'The Letter versus the Spirit: An officer discovers that implementing a strict environmental demolition order will throw 500 destitute weaver families into homelessness during sub-zero winter temperatures before transit shelters are ready.',
    keyThinkers: ['Thomas Aquinas (Natural Law)', 'Henry David Thoreau (Civil Disobedience)', 'Hannah Arendt', 'Justice V.R. Krishna Iyer'],
    currentAffairsExample: 'Supreme Court invoking Article 142 (complete justice) to order compensation and relief to victims where statutory provisions and executive timelines had caused prolonged administrative gridlock.',
    constitutionalLink: {
      articles: ['Article 13', 'Article 21', 'Article 142'],
      values: ['Substantive Due Process', 'Justice', 'Rule of Law'],
      relevance: 'Laws must pass the constitutional test of fairness, justice, and reasonableness (Maneka Gandhi v. Union of India).'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Blind Obedience',
        hindiTerm: 'अंधी आज्ञाकारिता',
        difference: 'Blind obedience suspends critical moral judgment and obeys any command; Conscience subjects every order to the higher test of constitutional morality.'
      }
    ],
    pyqs: [
      'UPSC 2016: "Law and ethics are considered to be the two tools for controlling human conduct so as to make it conducive to civilized social existence. Discuss how they differ and complement each other."',
      'UPSC 2022: "Wisdom lies in knowing what to reckon with and what to overlook. How will you apply this principle where rules and conscience conflict?"'
    ],
    caseStudyRefId: 'cs-ration-biometrics',
    answerFramework: {
      introduction: 'Quote Martin Luther King Jr.: "An unjust law is no law at all." Differentiate positive law as state command and conscience as internal moral rationality.',
      bodyPoints: [
        'Aquinas\'s hierarchy: Eternal Law → Natural Law → Divine Law → Human Law. Human law derives validity only insofar as it conforms to natural justice.',
        'The civil servant\'s oath: Loyalty is not pledged to administrative superiors or arbitrary circulars, but to the Constitution of India.',
        'Practical administrative resolution: Never resort to corrupt or illegal conduct; interpret rules with purposeful construction (benign interpretation) to maximize fundamental rights.'
      ],
      conclusion: 'Rules provide the protective banks of the river; conscience provides the living water. Without rules, administration floods in chaos; without conscience, it parches into tyranny.'
    },
    sources: ['Thomas Aquinas: Summa Theologiae (Treatise on Law)', 'Second ARC 4th Report: Ethics in Governance']
  },
  {
    id: 'c-accountability-transparency',
    slug: 'accountability-transparency-social-audit-rti',
    title: 'Accountability, Transparency, RTI & Social Audit',
    hindiTitle: 'जवाबदेही, पारदर्शिता, आरटीआई एवं सामाजिक अंकेक्षण',
    category: 'RTI & Transparency',
    simpleMeaning: 'The obligation of public authorities to explain and justify their actions to the public, backed by unhindered access to official records and citizen-led audits.',
    philosophicalMeaning: 'The institutional embodiment of popular sovereignty in democratic theory (Rousseau & Locke), where the state is never the master of the people, but an accountable trustee.',
    dimensions: [
      'Horizontal Accountability (Checks and balances between Legislature, Executive, Judiciary, CAG, CVC, Lokpal)',
      'Vertical Accountability (Citizens holding the government accountable via elections, RTI, public hearings, media)',
      'Social Accountability (Grassroots social audits, Citizen Report Cards, Jan Sunwais)',
      'Proactive Transparency (Section 4(1)(b) suo motu disclosure under the RTI Act, 2005)',
      'Financial Propriety Audit (CAG scrutiny of efficiency, economy, and effectiveness)'
    ],
    example: 'Villagers in rural Rajasthan inspecting MGNREGA muster rolls in open Gram Sabha social audits, identifying non-existent ghost workers and forcing recovery of siphoned wages.',
    counterExample: 'A municipal department classifying routine pothole repair contracts as "confidential" under national security exemptions to prevent public scrutiny.',
    administrativeApplication: 'Publishing all public welfare beneficiary rosters, tender evaluations, and officer tour diaries online on departmental websites without waiting for formal RTI applications.',
    ethicalDilemma: 'Transparency vs Personal Privacy: Should the medical records and travel expenses of public officials funded by the exchequer be made entirely public under the RTI Act?',
    keyThinkers: ['Jeremy Bentham (Panopticon & Public Scrutiny)', 'Aruna Roy', 'Amartya Sen', 'Nolan Committee'],
    currentAffairsExample: 'Supreme Court ruling that the Office of the Chief Justice of India comes under the purview of the Right to Information Act, balancing judicial independence with democratic transparency.',
    constitutionalLink: {
      articles: ['Article 19(1)(a) (Right to Know)', 'Article 148 (CAG)', '73rd & 74th Amendments (Gram Sabha Oversight)'],
      values: ['Democratic Sovereignty', 'Openness', 'Citizen Empowerment'],
      relevance: 'The Supreme Court in State of UP v. Raj Narain (1975) established that the right to know is implicit in Article 19(1)(a) freedom of speech.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Responsibility',
        hindiTerm: 'उत्तरदायित्व',
        difference: 'Responsibility is internal moral obligation to perform a duty well; Accountability is the external institutional liability to answer for that performance and face consequences for failure.'
      }
    ],
    pyqs: [
      'UPSC 2018: "The Right to Information Act is not just about giving information; it is about citizen empowerment and creating a culture of openness. Discuss."',
      'UPSC 2020: "What are the essential components of social accountability? How does social audit strengthen grassroots democracy?"'
    ],
    caseStudyRefId: 'cs-procurement-kickback',
    answerFramework: {
      introduction: 'Quote Louis Brandeis: "Sunlight is said to be the best of disinfectants; electric light the most efficient policeman." Define accountability as the bedrock of representative democracy.',
      bodyPoints: [
        'Paradigm shift: From colonial culture of secrecy (Official Secrets Act 1923) to democratic culture of open information (RTI Act 2005).',
        'Mechanisms: Social audit under MGNREGA Section 17, Citizen Charters with compensation clauses, CPGRAMS online grievance tracking.',
        'Second ARC 1st Report recommendations: Shift from passive reactive disclosure to automated algorithmic pro-active disclosure.'
      ],
      conclusion: 'Transparency is not an administrative burden, but the shield of the honest officer and the sword of the sovereign citizen.'
    },
    sources: ['2nd ARC 1st Report: Right to Information - Master Key to Good Governance', 'Central Information Commission Annual Reports']
  },
  {
    id: 'c-corruption-typology',
    slug: 'corruption-causes-consequences-institutional-remedies',
    title: 'Corruption: Typologies, Institutional Anatomy & Preventative Vigilance',
    hindiTitle: 'भ्रष्टाचार: वर्गीकरण, संस्थागत विश्लेषण एवं निवारक सतर्कता',
    category: 'Corruption',
    simpleMeaning: 'The abuse of entrusted public power, office, or resources for private personal, familial, or partisan gain.',
    philosophicalMeaning: 'The moral decay of the civic body politic, wherein the fiduciary covenant of public trusteeship is broken, turning the state from an instrument of common welfare into an extractive syndicate.',
    dimensions: [
      'Petty/Speed Corruption (Low-level extortive bribery paid to access basic statutory citizen services)',
      'Grand Corruption (High-level policy subversion, resource looting, and mega-scams involving political executives)',
      'Collusive Corruption (Bribe-giver and bribe-taker collude to defraud the exchequer, e.g. tax evasion, procurement kickbacks)',
      'Regulatory Capture (Regulatory agencies co-opted to serve commercial interests of the very corporations they oversee)',
      'Robert Klitgaard Equation: Corruption = Monopoly + Discretion - Accountability (C = M + D - A)'
    ],
    example: 'Implementation of the Government e-Marketplace (GeM) and faceless income-tax assessments, systematically eliminating monopoly and human discretion to dismantle bribery chains.',
    counterExample: 'Transport department officials demanding illegal monthly "hafta" from truck drivers at state border check-posts, inflating logistics costs across the nation.',
    administrativeApplication: 'Civil servants deploying preventive vigilance (systemic procedural simplification, e-tendering, rotating sensitive posts) rather than relying exclusively on post-facto punitive vigilance.',
    ethicalDilemma: 'Facilitation Payment vs Starvation: A junior clerk demands ₹200 to process an impoverished mother\'s widow pension application. Does an activist commit an ethical violation by paying the petty bribe to save her starving children?',
    keyThinkers: ['Kautilya (Arthashastra)', 'Santhanam Committee (1964)', 'Robert Klitgaard', 'Second ARC 4th Report'],
    currentAffairsExample: 'Amendments to the Prevention of Corruption Act (2018), explicitly criminalizing the giving of a bribe (Section 8) while providing a 7-day safe-harbor reporting window for coerced victims.',
    constitutionalLink: {
      articles: ['Article 311', 'Article 14', 'Article 21'],
      values: ['Rule of Law', 'Public Probity', 'Economic Justice'],
      relevance: 'The Supreme Court in Subramanian Swamy v. Manmohan Singh (2012) held that corruption is a human rights violation that deprives citizens of social justice.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Maladministration',
        hindiTerm: 'कुप्रशासन',
        difference: 'Maladministration may result from incompetence, delays, or poor judgment without illicit financial gain; Corruption specifically involves corrupt intent and personal or factional enrichment.'
      }
    ],
    pyqs: [
      'UPSC 2016: "Discuss Kautilya\'s views on corruption in public life and the methods he recommended to curb it."',
      'UPSC 2021: "Examine the role of Lokpal and Central Vigilance Commission in combating corruption in India."'
    ],
    caseStudyRefId: 'cs-tendering-pressure',
    answerFramework: {
      introduction: 'Quote Kautilya: "Just as fish moving under water cannot be known when drinking water, so the servants of the king cannot be known when taking money." Define corruption using Klitgaard\'s formula.',
      bodyPoints: [
        'Santhanam Committee (1964) pillars: Administrative delays, excessive discretionary powers, and lack of exemplary punishment as root causes.',
        'Collusive vs Coercive corruption: Why 2018 PCA amendment penalized bribe-giving to dismantle commercial cronyism.',
        'Tripartite anti-corruption architecture: Investigative (CBI/ACB), Oversight (CVC/Lokpal), and Auditing (CAG).'
      ],
      conclusion: 'Eradicating corruption requires more than punitive raids; it demands structural digitization to remove human rent-seeking discretion and moral leadership at the top.'
    },
    sources: ['Santhanam Committee Report on Prevention of Corruption (1964)', '2nd ARC 4th Report: Ethics in Governance']
  },
  {
    id: 'c-corporate-governance',
    slug: 'corporate-governance-csr-and-business-ethics',
    title: 'Corporate Governance, Business Ethics & CSR',
    hindiTitle: 'कॉर्पोरेट शासन, व्यावसायिक नीतिशास्त्र एवं नैगम सामाजिक उत्तरदायित्व (CSR)',
    category: 'Corporate Governance',
    simpleMeaning: 'The system of rules, practices, and institutional checks by which a company is directed, managed, and held accountable to shareholders, employees, and society.',
    philosophicalMeaning: 'The expansion of moral responsibility beyond the Friedmanite shareholder-wealth doctrine ("the social responsibility of business is to increase its profits") to the Stakeholder Capitalism model (Edward Freeman) and Gandhian Trusteeship.',
    dimensions: [
      'Board Accountability & Independent Directors (Preventing promoter domination and safeguarding minority shareholders)',
      'Statutory Corporate Social Responsibility (Section 135 of the Companies Act, 2013 mandating 2% net profit spending on social causes)',
      'Environmental, Social & Governance (ESG) Criteria and Sustainable Supply Chains',
      'Whistleblower Protection Mechanisms in Corporate Boardrooms (Kotak Committee Recommendations)',
      'Ethical Marketing & Data Privacy (Preventing dark patterns, predatory pricing, and consumer manipulation)'
    ],
    example: 'Tata Group\'s historic tradition of housing over 60% of Tata Sons ownership in philanthropic trusts, funding world-class cancer hospitals and scientific research institutions in India.',
    counterExample: 'The Satyam Computer Services fraud (2009) or Enron scandal (2001), where corporate leadership fabricated billions in fictitious cash balances with collusive auditor compliance.',
    administrativeApplication: 'Ministry of Corporate Affairs (MCA), SEBI, and regulatory civil servants enforcing strict audit disclosure, investigating insider trading, and preventing round-tripping of black money through shell companies.',
    ethicalDilemma: 'Profit Maximization vs Environmental Stewardship: A chemical company operates within minimum legal effluent standards, but local villagers report rising skin diseases. Upgrading to zero-liquid discharge will slash dividends and trigger shareholder lawsuits.',
    keyThinkers: ['Milton Friedman', 'R. Edward Freeman (Stakeholder Theory)', 'Mahatma Gandhi (Trusteeship)', 'Uday Kotak Committee'],
    currentAffairsExample: 'SEBI mandating Business Responsibility and Sustainability Reporting (BRSR) for top 1,000 listed entities, requiring verified ESG disclosures.',
    constitutionalLink: {
      articles: ['Article 39(b) & (c) (Preventing concentration of wealth to common detriment)', 'Article 21'],
      values: ['Economic Justice', 'Fair Competition', 'Environmental Stewardship'],
      relevance: 'Corporate power must align with constitutional goals of inclusive development and social welfare.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Corporate Philanthropy',
        hindiTerm: 'कॉर्पोरेट दानशीलता',
        difference: 'Philanthropy is voluntary, discretionary charity given from profits; Corporate Governance is the ethical management of the core operations that generate those profits.'
      }
    ],
    pyqs: [
      'UPSC 2017: "Corporate Social Responsibility (CSR) has made companies more responsible towards society. Critically analyze the ethical dimensions of CSR in India."',
      'UPSC 2023: "Discuss the role of independent directors in ensuring corporate governance and protecting public investments."'
    ],
    caseStudyRefId: 'cs-tendering-pressure',
    answerFramework: {
      introduction: 'Define corporate governance as the ethical stewardship of corporations ensuring fairness to all stakeholders—shareholders, employees, consumers, and the environment.',
      bodyPoints: [
        'Shift from Shareholder primacy (Friedman) to Stakeholder trusteeship (Gandhian model): Business operates within society\'s moral license.',
        'India\'s pioneering statutory CSR: Section 135 of Companies Act, 2013—moving from patronizing philanthropy to democratic developmental partnership.',
        'Regulatory vigilance: SEBI, MCA, National Financial Reporting Authority (NFRA), and protection for corporate whistleblowers.'
      ],
      conclusion: 'Commerce without morality is one of Gandhi\'s Seven Sins. Sustainable capitalism demands that corporate balance sheets reflect ecological sustainability and social dignity.'
    },
    sources: ['Companies Act, 2013 (Section 135)', 'SEBI Kotak Committee on Corporate Governance (2017)']
  },
  {
    id: 'c-international-ethics',
    slug: 'international-ethics-war-climate-justice-foreign-aid',
    title: 'International Ethics: Just War, Climate Justice & Global Commons',
    hindiTitle: 'अंतर्राष्ट्रीय नीतिशास्त्र: न्यायसंगत युद्ध सिद्धांत, जलवायु न्याय एवं वैश्विक धरोहर',
    category: 'International Ethics',
    simpleMeaning: 'The application of moral principles, human rights, and distributive justice to international relations, global diplomacy, war, climate change, and foreign aid.',
    philosophicalMeaning: 'The philosophical debate between Political Realism (Thucydides, Machiavelli: "The strong do what they can and the weak suffer what they must") and Cosmopolitan Moral Universalism (Immanuel Kant\'s Perpetual Peace: Universal hospitality and international law).',
    dimensions: [
      'Just War Theory (Jus ad Bellum: Just cause, legitimate authority; Jus in Bello: Proportionality, non-combatant immunity; Jus post Bellum: Just peace)',
      'Climate Justice & Common but Differentiated Responsibilities (CBDR-RC): Historical carbon debt of Global North vs developmental needs of Global South',
      'Refugee Ethics & Principle of Non-Refoulement (Universal human duty to protect those fleeing war and persecution)',
      'Ethics of Foreign Aid & Conditionality (Aid as altruistic development vs neo-colonial leverage)',
      'Ethics of Nuclear Weapons and Sovereign Security'
    ],
    example: 'India providing free COVID-19 vaccines to over 90 developing countries under "Vaccine Maitri", treating healthcare solidarity as a global moral duty rather than pure commercial transaction.',
    counterExample: 'Developed industrial nations consuming 80% of historical carbon space and refusing to provide promised climate finance to island nations facing existential sea-level submersion.',
    administrativeApplication: 'Foreign service diplomats, trade negotiators, and environmental officials balancing sovereign national interests with global ethical responsibilities under international treaties.',
    ethicalDilemma: 'National Security vs Universal Human Rights: Should a nation admit persecuted refugees when intelligence agencies report that hostile states may infiltrate armed operatives among the fleeing civilians?',
    keyThinkers: ['Immanuel Kant (Perpetual Peace)', 'Saint Thomas Aquinas & Michael Walzer (Just and Unjust Wars)', 'Peter Singer (One World: The Ethics of Globalization)', 'Jawaharlal Nehru (Panchsheel)'],
    currentAffairsExample: 'Debates over the loss and damage fund agreed at COP28 and the legal immunity of humanitarian aid convoys in active conflict zones under the Geneva Conventions.',
    constitutionalLink: {
      articles: ['Article 51 (Promotion of international peace and security)', 'Article 21'],
      values: ['Vasudhaiva Kutumbakam (The World is One Family)', 'International Law', 'Peaceful Dispute Settlement'],
      relevance: 'Article 51 of the Directive Principles mandates the state to foster respect for international law and treaty obligations.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Realpolitik',
        hindiTerm: 'यथार्थवादी राजनीति',
        difference: 'Realpolitik prioritizes national power and self-interest above all moral constraints; International ethics insists that power must be checked by universal human rights and global treaties.'
      }
    ],
    pyqs: [
      'UPSC 2014: "The international community is facing unprecedented ethical challenges regarding climate change and refugees. Discuss with suitable examples."',
      'UPSC 2020: "What do you understand by the concept of \'Just War\'? How is it relevant in contemporary international geopolitics?"'
    ],
    caseStudyRefId: 'cs-communal-clash-curfew',
    answerFramework: {
      introduction: 'Quote Indian philosophical heritage: "Ayam nijah paro veti ganana laghuchetasam... Vasudhaiva Kutumbakam" (To narrow minds, this is mine and that is yours; but to the noble, the whole world is one family).',
      bodyPoints: [
        'Just War Theory: Michael Walzer\'s conditions of proportionality, last resort, and absolute protection of innocent civilians.',
        'Climate Justice: The moral illegitimacy of shifting historical carbon debt onto impoverished developing states.',
        'India\'s foreign policy tradition: Non-alignment, Panchsheel, non-aggression, and generous disaster assistance across South Asia (SAGAR doctrine).'
      ],
      conclusion: 'In an interconnected world, national borders cannot be moral boundaries. Global challenges—pandemics, climate chaos, nuclear threats—require ethical multilateralism anchored in shared human destiny.'
    },
    sources: ['Michael Walzer: Just and Unjust Wars', 'Peter Singer: One World - The Ethics of Globalization']
  },
  {
    id: 'c-private-public-relationships',
    slug: 'ethics-in-private-and-public-relationships-conflict-of-interest',
    title: 'Ethics in Private versus Public Relationships & Conflict of Interest',
    hindiTitle: 'निजी एवं सार्वजनिक संबंधों में नीतिशास्त्र तथा हित-संघर्ष (Conflict of Interest)',
    category: 'Public Service Ethics',
    simpleMeaning: 'The critical moral boundary between one\'s personal life (family, friends, personal business) and one\'s public official duties, ensuring private loyalties never compromise public trust.',
    philosophicalMeaning: 'The Weberian rationalization of the administrative role, requiring total separation between the official persona (subordinate to public law) and private life, preventing nepotistic feudal patronage.',
    dimensions: [
      'Private Morality (Guided by affection, loyalty, reciprocal obligations, and family care)',
      'Public Morality (Guided by universal law, impartiality, non-partisanship, transparency, and public interest)',
      'Actual Conflict of Interest (Personal financial/kinship interests directly intersect official decision)',
      'Potential Conflict of Interest (A foreseeable situation where private interest could influence public duty)',
      'Perceived/Apparent Conflict of Interest (Public reasonably perceives bias, damaging institutional credibility even if no actual bias exists)',
      'Resolution Protocol: Complete disclosure, voluntary recusal, and transferring the matter to an independent committee'
    ],
    example: 'An IAS officer chairing a public procurement committee discovering that her first cousin has submitted a bid as a consortium partner, immediately disclosing the relationship in writing, and formally recusing herself from the committee.',
    counterExample: 'A district education officer awarding a ₹50-lakh school textbook printing contract to her husband\'s printing press without disclosing the marital relationship or conducting an open tender.',
    administrativeApplication: 'Civil servants filing annual property returns, observing cooling-off periods before joining private firms post-retirement, and strictly rejecting corporate hospitality or gifts from regulated entities.',
    ethicalDilemma: 'Kinship Duty vs Administrative Probity: An honest police officer\'s younger brother is arrested with commercial quantities of narcotics. The elderly parents weep, begging the officer to speak to the investigating sub-inspector to dilute the charges.',
    keyThinkers: ['Max Weber (Bureaucratic Impersonality)', 'Lord Nolan', 'Second ARC 4th Report'],
    currentAffairsExample: 'Supreme Court judges recusing themselves from hearing cases involving former legal clients, companies where they hold shares, or parties represented by close relatives to uphold the adage: "Justice must not only be done, but must also be seen to be done."',
    constitutionalLink: {
      articles: ['Article 14', 'Article 16'],
      values: ['Impartiality', 'Nemo Judex In Causa Sua (No one should be a judge in their own cause)', 'Rule of Law'],
      relevance: 'The doctrine of natural justice strictly prohibits pecuniary or personal bias in administrative decisions.'
    },
    differenceFromSimilarTerms: [
      {
        term: 'Nepotism',
        hindiTerm: 'भाई-भतीजावाद',
        difference: 'Nepotism is the actual corrupt act of giving preferential jobs or contracts to relatives; Conflict of interest is the situational condition that creates the temptation or appearance of such bias.'
      }
    ],
    pyqs: [
      'UPSC 2014: "What do you understand by ethics in private and public relationships? Discuss with suitable illustrations."',
      'UPSC 2019: "Explain the concept of \'Conflict of Interest\'. How should a civil servant handle situations of apparent conflict of interest?"'
    ],
    caseStudyRefId: 'cs-tendering-pressure',
    answerFramework: {
      introduction: 'Define private relationships as personal, emotional bonds governed by loyalty and love, whereas public relationships are governed by constitutional law, impartiality, and public trust.',
      bodyPoints: [
        'The principle of role differentiation: An individual operates under different moral codes in personal vs official spheres.',
        'Conflict of interest taxonomy: Actual, potential, and perceived; why perceived conflict destroys public faith even without financial bribe.',
        'Institutional remedy triad: Disclosure (bringing into daylight) → Recusal (stepping aside) → Institutional oversight (independent clearance).'
      ],
      conclusion: 'Conclude with Lord Denning\'s golden rule: "Justice must be rooted in confidence: and confidence is destroyed when right-minded people go away thinking: \'The judge was biased.\'"'
    },
    sources: ['2nd ARC 4th Report: Ethics in Governance (Chapter on Conflict of Interest)', 'CCS (Conduct) Rules 1964, Rule 3(2)']
  }
];

