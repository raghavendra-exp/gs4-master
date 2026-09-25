// src/data/thinkers/thinkersData.ts
// Comprehensive Database of Indian and Western Moral Thinkers, Philosophers, and Reformers

import { ThinkerItem } from '../../types/ethics';

export const THINKERS_DATA: ThinkerItem[] = [
  {
    id: 'th-gandhi',
    name: 'Mahatma Gandhi',
    hindiName: 'महात्मा गांधी',
    category: 'Indian',
    period: '1869–1948',
    country: 'India',
    majorWorks: ['Hind Swaraj (1909)', 'My Experiments with Truth (1927)', 'Sarvodaya', 'Constructive Programme'],
    coreIdeas: [
      'Purity of Means and Ends (Means are after all everything; as the means so the end)',
      'Satya (Truth) and Ahimsa (Non-violence) as inseparable twin pillars',
      'Trusteeship Theory (Wealth owners act as trustees of societal wealth, not masters)',
      'Sarvodaya (Welfare and upliftment of all, beginning with the last person: Antyodaya)',
      'Seven Social Sins: Politics without principles, Wealth without work, Commerce without morality, Pleasure without conscience, Education without character, Science without humanity, Worship without sacrifice'
    ],
    ethicalPhilosophy: 'Teleological deontology grounded in moral truth (Satyagraha); evil cannot be defeated by greater evil, only by unyielding ethical integrity and soul-force.',
    keyConcepts: ['Satyagraha', 'Ahimsa', 'Trusteeship', 'Antyodaya', 'Gandhian Talisman', 'Swaraj'],
    administrativeRelevance: 'The Gandhian Talisman provides civil servants with an infallible touchstone during policy dilemmas: evaluate whether a decision restores control to the poorest individual.',
    modernApplication: 'Community policing, non-violent consensus building, decentralized Panchayati Raj empowerment, and sustainable low-carbon development.',
    caseStudyExample: 'Resolving land acquisition conflicts by transparent village dialogues, participatory consent, and holistic rehabilitation rather than police coercion.',
    verifiedQuote: {
      text: 'Whenever you are in doubt, or when the self becomes too much with you, apply the following test: Recall the face of the poorest and the weakest man whom you may have seen, and ask yourself if the step you contemplate is going to be of any use to him.',
      context: 'Written in August 1947, known worldwide as "Gandhi\'s Talisman".',
      status: 'Verified Quote',
      source: 'Mahatma: Life of Mohandas Karamchand Gandhi, Vol. 8 by D.G. Tendulkar'
    },
    pyqReferences: [
      'UPSC 2018: "State the Seven Social Sins propounded by Mahatma Gandhi and explain their contemporary relevance."',
      'UPSC 2021: "Explain Gandhi\'s view on the relationship between means and ends."',
      'UPPSC 2022: "Discuss the concept of Trusteeship propounded by Mahatma Gandhi."'
    ],
    potentialMainsUsage: 'Perfect for concluding questions on welfare exclusion, corporate social responsibility, grassroots governance, and ethical leadership.'
  },
  {
    id: 'th-ambedkar',
    name: 'Dr. B.R. Ambedkar',
    hindiName: 'डॉ. बी.आर. अम्बेडकर',
    category: 'Indian',
    period: '1891–1956',
    country: 'India',
    majorWorks: ['Annihilation of Caste (1936)', 'The Buddha and His Dhamma (1957)', 'States and Minorities (1947)', 'Philosophy of Hinduism'],
    coreIdeas: [
      'Constitutional Morality over unexamined Social Tradition',
      'Fraternity as the foundation of Liberty and Equality (The Trinity cannot be divorced)',
      'Social Democracy as a prerequisite for political democracy ("One person, one vote, but one person, one value is missing")',
      'Ethical transformation through Dhamma (Pradnya/Wisdom, Karuna/Compassion, Sheel/Morality)',
      'Rights-based empowerment: Educate, Agitate, Organize'
    ],
    ethicalPhilosophy: 'Rational-humanist social justice framework emphasizing human dignity, eradication of graded inequality, and institutional guarantees of fundamental rights.',
    keyConcepts: ['Constitutional Morality', 'Social Democracy', 'Fraternity', 'Annihilation of Caste', 'Dhamma', 'Rule of Law'],
    administrativeRelevance: 'Reminds civil servants that their loyalty is to constitutional morality, not orthodox societal prejudices or majoritarian dogma.',
    modernApplication: 'Strict enforcement of the SC/ST Prevention of Atrocities Act, affirmative action, inclusive urban planning, and anti-manual scavenging implementation.',
    caseStudyExample: 'A village temple or public well where dominant caste groups illegally bar entry to Dalits; the administration enforcing constitutional rights with firm police protection and legal action.',
    verifiedQuote: {
      text: 'Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it.',
      context: 'Constituent Assembly of India debate, November 4, 1948.',
      status: 'Verified Quote',
      source: 'Constituent Assembly Debates, Vol. VII'
    },
    pyqReferences: [
      'UPSC 2019: "Constitutional morality is not a natural sentiment. Explain in the context of civil service ethics."',
      'UPPSC 2023: "Discuss Dr. B.R. Ambedkar\'s contribution to social justice and constitutional morality."'
    ],
    potentialMainsUsage: 'Essential for questions on social justice, vulnerable sections, affirmative action, and administrative resistance to majoritarian pressures.'
  },
  {
    id: 'th-kautilya',
    name: 'Kautilya (Chanakya)',
    hindiName: 'कौटिल्य (चाणक्य)',
    category: 'Indian',
    period: 'c. 375–283 BCE',
    country: 'Ancient India (Magadha)',
    majorWorks: ['Arthashastra (Treatise on Statecraft, Economics and Governance)'],
    coreIdeas: [
      'Prajasukhe Sukham Rajnah (In the happiness of his subjects lies the king\'s happiness; in their welfare his welfare)',
      'Yogakshema (State responsibility for not just security/Raksha, but productive welfare and prosperity/Yogakshema)',
      'Realistic view of human corruption: Forty ways of embezzlement; need for continuous audit and intelligence oversight',
      'Saptanga Theory of State (The King, Ministers, Territory/People, Fort, Treasury, Army, Allies)',
      'Merit-based bureaucracy and strict surveillance of corrupt officials'
    ],
    ethicalPhilosophy: 'Pragmatic political realism (Rajdharma) subordinate to the ultimate preservation, security, and material-spiritual welfare of the commonwealth.',
    keyConcepts: ['Yogakshema', 'Prajasukhe Sukham Rajnah', 'Rajdharma', 'Saptanga Theory', 'Preventive Vigilance'],
    administrativeRelevance: 'The earliest systematic model of public administration in India, emphasizing fiscal discipline, proactive anti-corruption intelligence, and citizen-centric governance.',
    modernApplication: 'CVC surveillance systems, Comptroller & Auditor General (CAG) audit mechanisms, Whistleblower portals, and economic security policies.',
    caseStudyExample: 'Institutionalizing surprise forensic audits and digital tracking in state food grain godowns to detect diversion and leakage into black markets.',
    verifiedQuote: {
      text: 'In the happiness of his subjects lies the king’s happiness; in their welfare his welfare. He shall not consider as good only that which pleases him but treat as beneficial to him whatever pleases his subjects.',
      context: 'Arthashastra, Book 1, Chapter 19, Verse 34.',
      status: 'Verified Quote',
      source: 'Kautilya’s Arthashastra (R.P. Kangle translation, Part II)'
    },
    pyqReferences: [
      'UPSC 2016: "Discuss Kautilya\'s views on corruption in public life and the methods he recommended to curb it."',
      'UPPSC 2021: "Examine the concept of \'Yogakshema\' in Arthashastra and its relevance to modern welfare administration."'
    ],
    potentialMainsUsage: 'Invaluable for answers on anti-corruption architecture, public financial propriety, intelligence ethics, and public welfare state models.'
  },
  {
    id: 'th-buddha',
    name: 'Gautama Buddha',
    hindiName: 'गौतम बुद्ध',
    category: 'Indian',
    period: 'c. 563–483 BCE',
    country: 'Ancient India',
    majorWorks: ['Dhammacakkappavattana Sutta', 'Four Noble Truths', 'Noble Eightfold Path', 'Dhammapada'],
    coreIdeas: [
      'Madhyama Pratipada (The Middle Path: Avoidance of extreme indulgence and extreme asceticism)',
      'Four Noble Truths (Dukkha, Samudaya, Nirodha, Magga)',
      'Noble Eightfold Path (Right View, Right Resolve, Right Speech, Right Action, Right Livelihood, Right Effort, Right Mindfulness, Right Concentration)',
      'Four Brahma-Viharas (Universal Compassion/Karuna, Loving-Kindness/Metta, Sympathetic Joy/Mudita, Equanimity/Upekkha)',
      'Pratityasamutpada (Dependent Origination: Interconnectedness of all existence)'
    ],
    ethicalPhilosophy: 'Virtue-centered psychology of moral purification; suffering originates from craving and ignorance, and ethical self-mastery leads to liberation (Nirvana).',
    keyConcepts: ['Middle Path', 'Karuna', 'Metta', 'Noble Eightfold Path', 'Brahma-Viharas', 'Ahimsa'],
    administrativeRelevance: 'Promotes emotional stability (Upekkha) during crises, compassionate service towards vulnerable communities, and balanced pragmatic problem-solving without dogmatic extremism.',
    modernApplication: 'Environmental protection through awareness of ecological interdependence; conflict de-escalation; work-life balance and mental health in public services.',
    caseStudyExample: 'Balancing industrial expansion with ecological preservation through a pragmatic "Middle Path" of sustainable green technologies and tribal forest rights.',
    verifiedQuote: {
      text: 'Radiate boundless love towards the entire world—above, below, and across—unhindered, without ill will, without enmity.',
      context: 'Karaniya Metta Sutta (Discourse on Loving-Kindness).',
      status: 'Verified Quote',
      source: 'Sutta Nipata 1.8 (Pali Canon)'
    },
    pyqReferences: [
      'UPSC 2015: "What are the core teachings of Buddhism that are relevant to ethics in governance?"',
      'UPPSC 2020: "Explain the administrative utility of the Buddhist concept of the Middle Path."'
    ],
    potentialMainsUsage: 'Ideal for empathy, environmental ethics, conflict resolution, mental balance, and non-extremist administrative compromise.'
  },
  {
    id: 'th-kant',
    name: 'Immanuel Kant',
    hindiName: 'इमैनुएल कांट',
    category: 'Western',
    period: '1724–1804',
    country: 'Prussia (Germany)',
    majorWorks: ['Groundwork of the Metaphysics of Morals (1785)', 'Critique of Practical Reason (1788)', 'Critique of Pure Reason (1781)'],
    coreIdeas: [
      'Deontology (Duty-based ethics; morality is determined by adherence to universal moral law, regardless of consequences)',
      'The Categorical Imperative (Formula 1: Act only according to that maxim whereby you can at the same time will that it should become a universal law)',
      'Formula of Humanity (Formula 2: Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end in itself)',
      'Good Will (The only thing good without qualification; doing duty for the sake of duty alone: Duty for Duty\'s sake)'
    ],
    ethicalPhilosophy: 'Pure rational deontology; moral acts must proceed from unconditional duty (Categorical Imperative) rather than instrumental desire or utility calculations.',
    keyConcepts: ['Categorical Imperative', 'Deontology', 'Duty for Duty\'s Sake', 'Kingdom of Ends', 'Autonomy of Will'],
    administrativeRelevance: 'Bars civil servants from using vulnerable citizens as expendable instruments for statistical targets or political goals; establishes non-negotiable red lines against bribery, fabrication of evidence, and custodial violence.',
    modernApplication: 'Bioethics and clinical trials (mandatory informed consent, no human exploitation); AI ethics (citizens cannot be treated as mere data fodder); strict anti-torture protocols.',
    caseStudyExample: 'Refusing an illegal "encounter" killing of an alleged terrorist, upholding judicial due process because human beings cannot be discarded outside constitutional rule of law.',
    verifiedQuote: {
      text: 'Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end.',
      context: 'Groundwork of the Metaphysics of Morals, Second Section, 429.',
      status: 'Verified Quote',
      source: 'Immanuel Kant: Practical Philosophy (Cambridge Edition)'
    },
    pyqReferences: [
      'UPSC 2017: "What is meant by the \'Categorical Imperative\' of Immanuel Kant? How can it be used in administrative decision making?"',
      'UPSC 2022: "Explain the difference between deontology and utilitarianism with administrative examples."'
    ],
    potentialMainsUsage: 'Foundational for arguing against utilitarian trade-offs where human rights or due process are sacrificed for administrative speed or majoritarian benefits.'
  },
  {
    id: 'th-rawls',
    name: 'John Rawls',
    hindiName: 'जॉन रॉल्स',
    category: 'Western',
    period: '1921–2002',
    country: 'United States',
    majorWorks: ['A Theory of Justice (1971)', 'Political Liberalism (1993)', 'The Law of Peoples (1999)'],
    coreIdeas: [
      'Justice as Fairness: Justice is the first virtue of social institutions',
      'Original Position and the Veil of Ignorance (Design social rules without knowing one\'s gender, wealth, caste, abilities, or social status)',
      'First Principle (Equal Basic Liberties: Each person has an equal right to the most extensive basic liberties compatible with similar liberties for all)',
      'Second Principle Part A (Difference Principle: Social and economic inequalities are permissible only if they work to the maximum benefit of the least advantaged members of society: Maximin rule)',
      'Second Principle Part B (Fair Equality of Opportunity: Offices and positions must be open to all under conditions of fair equal opportunity)'
    ],
    ethicalPhilosophy: 'Egalitarian social contract liberalism; rational self-interested actors behind a Veil of Ignorance would prudently choose principles protecting the most vulnerable against worst-case deprivation.',
    keyConcepts: ['Veil of Ignorance', 'Difference Principle', 'Justice as Fairness', 'Original Position', 'Maximin Rule', 'Basic Liberties'],
    administrativeRelevance: 'Provides intellectual justification for affirmative action (reservations), progressive taxation, subsidized healthcare, and free primary education to level historic structural inequalities.',
    modernApplication: 'Universal health coverage policies; digital inclusion programs; social security pensions for the elderly destitute; disaster relief prioritizing impoverished settlements.',
    caseStudyExample: 'Allocating scarce affordable housing units or drinking water pipelines to marginalized slum settlements before upgrading golf courses or affluent suburbs.',
    verifiedQuote: {
      text: 'Justice is the first virtue of social institutions, as truth is of systems of thought. A theory however elegant and economical must be rejected or revised if it is untrue; likewise laws and institutions no matter how efficient and well-arranged must be reformed or abolished if they are unjust.',
      context: 'Opening paragraph of Chapter 1 of A Theory of Justice (1971).',
      status: 'Verified Quote',
      source: 'John Rawls: A Theory of Justice, Harvard University Press'
    },
    pyqReferences: [
      'UPSC 2019: "Explain John Rawls\' concept of \'justice as fairness\'. How can it be applied to remove socio-economic inequality in India?"',
      'UPSC 2023: "Discuss the administrative utility of the \'Veil of Ignorance\' in policy formulation."'
    ],
    potentialMainsUsage: 'The single most effective theoretical framework for justifying inclusive growth, affirmative action, and social security in GS-IV answers.'
  },
  {
    id: 'th-aristotle',
    name: 'Aristotle',
    hindiName: 'अरस्तू',
    category: 'Western',
    period: '384–322 BCE',
    country: 'Ancient Greece (Athens)',
    majorWorks: ['Nicomachean Ethics', 'Politics', 'Rhetoric'],
    coreIdeas: [
      'Virtue Ethics (Arete): Focus on character and virtues rather than isolated rules or consequences',
      'Eudaimonia (Human flourishing, living well, and realizing one\'s rational potential)',
      'Doctrine of the Mean (Golden Mean: Moral virtue is the intermediate state between excess and deficiency, e.g., Courage is the mean between cowardice and rashness)',
      'Phronesis (Practical wisdom: The prudence to choose the right action in complex real-world situations)',
      'Man is by nature a political and social animal (Zoon Politikon)'
    ],
    ethicalPhilosophy: 'Teleological virtue ethics; human happiness consists in the lifelong cultivation of intellectual and moral virtues through habitual practice.',
    keyConcepts: ['Virtue Ethics', 'Golden Mean', 'Eudaimonia', 'Phronesis (Practical Wisdom)', 'Habituation'],
    administrativeRelevance: 'Trains administrators to avoid rigid extremes, balancing firmness with compassion and law with equity through seasoned practical wisdom (Phronesis).',
    modernApplication: 'Civil service leadership training; institutional character building; balanced environmental-industrial regulations avoiding both mindless exploitation and anti-development paralysis.',
    caseStudyExample: 'A district collector regulating public protest: not resorting to excessive force (rashness) nor fleeing in indecision (cowardice), but deploying proportional, disciplined presence (courage).',
    verifiedQuote: {
      text: 'Virtue is a state of character concerned with choice, lying in a mean, that is, the mean relative to us, this being determined by a rational principle.',
      context: 'Nicomachean Ethics, Book II, Chapter 6.',
      status: 'Verified Quote',
      source: 'Aristotle: Nicomachean Ethics (W.D. Ross translation)'
    },
    pyqReferences: [
      'UPSC 2018: "Explain the doctrine of the \'Golden Mean\' as propounded by Aristotle. How is it relevant in public administration?"',
      'UPPSC 2021: "Discuss Aristotle\'s concept of virtue and practical wisdom (Phronesis)."'
    ],
    potentialMainsUsage: 'Excellent for discussing civil service character, discretionary judgment, avoiding administrative extremism, and balancing conflicting virtues.'
  },
  {
    id: 'th-mill',
    name: 'John Stuart Mill & Jeremy Bentham',
    hindiName: 'जॉन स्टुअर्ट मिल एवं जेरेमी बेंथम',
    category: 'Western',
    period: 'Bentham (1748–1832) / Mill (1806–1873)',
    country: 'Great Britain',
    majorWorks: ['Bentham: An Introduction to the Principles of Morals and Legislation (1789)', 'Mill: Utilitarianism (1861)', 'Mill: On Liberty (1859)'],
    coreIdeas: [
      'Utilitarianism (Actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse of happiness)',
      'Bentham\'s Quantitative Hedonism: "Push-pin is as good as poetry" if the quantity of pleasure is equal; Felicific Calculus (Intensity, Duration, Certainty, Propinquity, Fecundity, Purity, Extent)',
      'Mill\'s Qualitative Hedonism: Higher intellectual/moral pleasures are superior to lower bodily pleasures ("Better to be Socrates dissatisfied than a pig satisfied")',
      'The Harm Principle (Mill): Power can only be rightfully exercised over any member of a civilized community against his will to prevent harm to others',
      'Rule Utilitarianism vs Act Utilitarianism'
    ],
    ethicalPhilosophy: 'Consequentialist normative theory; the morality of an act depends entirely upon the net utility (welfare, pleasure, reduction of suffering) it creates for the greatest number.',
    keyConcepts: ['Greatest Happiness Principle', 'Qualitative Hedonism', 'Harm Principle', 'Felicific Calculus', 'Rule Utilitarianism'],
    administrativeRelevance: 'Underpins cost-benefit analysis, triage in disaster management, epidemiological health investments, and infrastructure resource allocation.',
    modernApplication: 'Vaccine prioritization matrices; municipal budget optimization; mass transit systems over private vehicle lanes.',
    caseStudyExample: 'During an epidemic with limited antiviral vials, prioritizing frontline healthcare workers and high-mortality senior citizens to maximize systemic recovery.',
    verifiedQuote: {
      text: 'The creed which accepts as the foundation of morals, Utility, or the Greatest Happiness Principle, holds that actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse of happiness.',
      context: 'Utilitarianism (1861), Chapter 2.',
      status: 'Verified Quote',
      source: 'J.S. Mill: Utilitarianism, Parker, Son, and Bourn'
    },
    pyqReferences: [
      'UPSC 2017: "The greatest happiness of the greatest number is often invoked in administration. What are its ethical limitations?"',
      'UPSC 2020: "Distinguish between act utilitarianism and rule utilitarianism with administrative examples."'
    ],
    potentialMainsUsage: 'Crucial for explaining policy trade-offs, public utility projects, and simultaneously critiquing majoritarian tyranny over minority rights.'
  }
];
