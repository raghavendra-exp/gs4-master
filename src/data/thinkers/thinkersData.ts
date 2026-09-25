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
    potentialMainsUsage: 'Essential for evaluating public policy cost-benefit analyses, majoritarian pitfalls, rights protection of minorities, and disaster resource triage.'
  },
  {
    id: 'th-vivekananda',
    name: 'Swami Vivekananda',
    hindiName: 'स्वामी विवेकानंद',
    category: 'Indian',
    period: '1863–1902',
    country: 'India',
    majorWorks: ['Karma Yoga (1896)', 'Raja Yoga (1896)', 'Jnana Yoga', 'Lectures from Colombo to Almora'],
    coreIdeas: [
      'Daridra Narayana Seva (Serving the poor and downtrodden as the highest living manifestation of the Divine)',
      'Practical Vedanta (Translating spiritual metaphysics into active social service and nation-building)',
      'Character-Building Education ("Education is the manifestation of the perfection already in man")',
      'Ethics of Fearlessness and Strength ("Strength is life, weakness is death; fearlessness is virtue")',
      'Universal Religious Harmony (Parliament of the World\'s Religions, Chicago 1893)'
    ],
    ethicalPhilosophy: 'Neo-Vedantic moral humanism; realization of universal oneness (Advaita) establishes the ethical foundation for universal brotherhood and selfless public service (Nishkama Karma).',
    keyConcepts: ['Daridra Narayana', 'Practical Vedanta', 'Character Building', 'Abhaya (Fearlessness)', 'Karma Yoga'],
    administrativeRelevance: 'Inspires civil servants to reject cynical bureaucratic aloofness and treat every marginalized petitioner with innate divine reverence.',
    modernApplication: 'Disaster relief missions (Ramakrishna Mission model), tribal welfare education, youth empowerment programs, and ethical motivation in public administration.',
    caseStudyExample: 'An administrator volunteering personal time and mobilizing grassroots youth volunteers to set up community kitchens and medical camps in cyclone-devastated coastal villages.',
    verifiedQuote: {
      text: 'May I be born again and again, and suffer thousands of miseries, so only that I may worship the only God that exists, the only God I believe in, the sum total of all souls—and above all, my God the wicked, my God the miserable, my God the poor of all races, of all species, is the special object of my worship.',
      context: 'Letter to Mary Hale, 1897.',
      status: 'Verified Quote',
      source: 'The Complete Works of Swami Vivekananda, Vol. 5'
    },
    pyqReferences: [
      'UPSC 2015: "What does Vivekananda mean by \'service to man is service to God\'? How can this guide a civil servant?"',
      'UPPSC 2021: "Discuss Swami Vivekananda\'s concept of character-building education and its relevance to administrative ethics."'
    ],
    potentialMainsUsage: 'Unrivaled for questions on dedication to public service, empathy for the poor, moral courage, and youth motivation.'
  },
  {
    id: 'th-phule',
    name: 'Mahatma Jyotiba Phule & Savitribai Phule',
    hindiName: 'महात्मा ज्योतिबा फुले एवं सावित्रीबाई फुले',
    category: 'Indian',
    period: 'Jyotiba (1827–1890) / Savitribai (1831–1897)',
    country: 'India (Maharashtra)',
    majorWorks: ['Gulamgiri (Slavery, 1873)', 'Shetkaryacha Asud (The Cultivator\'s Whipcord, 1883)', 'Kavya Phule (1854)'],
    coreIdeas: [
      'Universal Emancipation through Education (Knowledge is the primary weapon against social tyranny and superstition)',
      'Satyashodhak Samaj (Truth-Seekers\' Society: Eradication of caste intermediaries, child marriage, and gender oppression)',
      'Agrarian Justice (Exposing the debt traps of money-lenders and government irrigation taxes ruining peasant cultivators)',
      'Compassion in Action (Founding India\'s first school for girls at Bhidewada in 1848, opening care homes for pregnant widows and infanticide prevention)'
    ],
    ethicalPhilosophy: 'Radical egalitarian humanist ethics; moral worth belongs intrinsically to every human being irrespective of caste (Varna) or gender, demanding active dismantling of institutionalized oppression.',
    keyConcepts: ['Satyashodhak Samaj', 'Gulamgiri', 'Female Education', 'Agrarian Justice', 'Universal Human Rights'],
    administrativeRelevance: 'Compels administrators to recognize structural socioeconomic privileges and use affirmative state authority to dismantle caste and gender barriers at the grassroots level.',
    modernApplication: 'Enforcement of RTE Act in remote hamlets, Beti Bachao initiatives, farmer debt relief and cooperative credit reforms, prevention of child marriage.',
    caseStudyExample: 'A district collector taking stern administrative and police action against dominant community councils that issue decrees forbidding lower-caste girls from riding bicycles to school.',
    verifiedQuote: {
      text: 'Lack of education leads to lack of wisdom, which leads to lack of morals, which leads to lack of progress, which leads to lack of wealth, which leads to the ruin of the depressed classes. Behold what catastrophes were caused by a single lack of education!',
      context: 'Preface to Shetkaryacha Asud (The Cultivator\'s Whipcord), 1883.',
      status: 'Verified Quote',
      source: 'Selected Writings of Jotirao Phule, LeftWord Books'
    },
    pyqReferences: [
      'UPSC 2018: "Analyze the contribution of Jyotiba Phule in promoting social justice and gender empowerment in India."',
      'UPPSC 2022: "Discuss the moral ideas of Savitribai Phule regarding women\'s education and human dignity."'
    ],
    potentialMainsUsage: 'Indispensable for answers on social justice, vulnerable sections, girl child empowerment, and administrative resistance to regressive traditions.'
  },
  {
    id: 'th-tagore',
    name: 'Rabindranath Tagore',
    hindiName: 'रवींद्रनाथ टैगोर',
    category: 'Indian',
    period: '1861–1941',
    country: 'India (Bengal)',
    majorWorks: ['Gitanjali (Nobel Prize 1913)', 'Nationalism (1917)', 'The Religion of Man (1931)', 'Crisis in Civilization (1941)'],
    coreIdeas: [
      'Universal Humanism over Narrow Chauvinistic Nationalism ("Patriotism cannot buy the final shelter; my refuge is humanity")',
      'Freedom of the Mind ("Where the mind is without fear and the head is held high...")',
      'Harmony between Man and Nature (Santiniketan open-air learning as ecological pedagogy)',
      'Spiritual Freedom through Creative Expression and Compassion (The Religion of Man)'
    ],
    ethicalPhilosophy: 'Cosmopolitan humanist aestheticism; morality is not rigid mechanical asceticism, but the joyous unfolding of love, creativity, and spiritual unity with all creation.',
    keyConcepts: ['Universal Humanism', 'Critique of Narrow Nationalism', 'The Religion of Man', 'Visva-Bharati', 'Ecological Harmony'],
    administrativeRelevance: 'Guards civil servants against toxic xenophobia, majoritarian arrogance, and blind bureaucratic compartmentalization, fostering an open, global, and compassionate worldview.',
    modernApplication: 'Educational curriculum reforms emphasizing environmental sensitivity, pluralistic cultural exchange, and international diplomatic cooperation.',
    caseStudyExample: 'A cultural directorate officer defending historical monument preservation and inter-cultural art festivals against localized intolerant political vandalism.',
    verifiedQuote: {
      text: 'Where the mind is without fear and the head is held high; Where knowledge is free; Where the world has not been broken up into fragments by narrow domestic walls... Into that heaven of freedom, my Father, let my country awake.',
      context: 'Gitanjali, Poem 35 (1912).',
      status: 'Verified Quote',
      source: 'Rabindranath Tagore: Gitanjali (Song Offerings), Macmillan'
    },
    pyqReferences: [
      'UPSC 2017: "Rabindranath Tagore distinguished between true freedom and narrow nationalism. Discuss its ethical significance in contemporary times."',
      'UPPSC 2020: "Explain Tagore\'s concept of universal humanism."'
    ],
    potentialMainsUsage: 'Ideal for questions on pluralism, tolerance, creative public education, environmental ethics, and international diplomatic harmony.'
  },
  {
    id: 'th-socrates-plato',
    name: 'Socrates & Plato',
    hindiName: 'सुकरात एवं प्लेटो',
    category: 'Western',
    period: 'Socrates (c. 470–399 BCE) / Plato (c. 428–348 BCE)',
    country: 'Ancient Greece (Athens)',
    majorWorks: ['Plato: The Republic', 'The Apology', 'Crito', 'Phaedo', 'Gorgias'],
    coreIdeas: [
      'Virtue is Knowledge (Evil action is the result of ignorance; no one does wrong willingly)',
      'The Examined Life ("The unexamined life is not worth living")',
      'The Four Cardinal Virtues: Wisdom (Prudence), Courage (Fortitude), Temperance (Self-control), Justice (Harmony of the soul)',
      'Allegory of the Cave (The philosopher\'s moral duty to return to the darkness of the cave to enlighten and govern citizens)',
      'The Philosopher-King (Rulers must possess supreme moral wisdom and self-control, living without personal wealth to avoid corruption)'
    ],
    ethicalPhilosophy: 'Rationalist intellectualism and objective virtue ethics; justice in the individual is the harmony of reason, spirit, and appetite; justice in the state is each class fulfilling its proper moral role.',
    keyConcepts: ['Virtue is Knowledge', 'The Examined Life', 'Cardinal Virtues', 'Allegory of the Cave', 'Philosopher King'],
    administrativeRelevance: 'The concept of the Philosopher-King directly mirrors the ideal of the modern civil servant: an expert possessing high intellectual capability, personal detachment from private wealth, and dedication to the common good.',
    modernApplication: 'Rigorous civil service competitive examinations, public asset disclosures, ethical auditing, and institutional whistleblower protection.',
    caseStudyExample: 'An officer persistently questioning unquestioned departmental practices through "Socratic inquiry", uncovering that a legacy manual procedure was designed solely to enable corruption.',
    verifiedQuote: {
      text: 'The unexamined life is not worth living.',
      context: 'Spoken by Socrates during his trial before the Athenian jury, recorded in Plato\'s Apology (38a).',
      status: 'Verified Quote',
      source: 'Plato: Apology (Benjamin Jowett translation)'
    },
    pyqReferences: [
      'UPSC 2019: "The unexamined life is not worth living. Explain this statement in the context of administrative decision-making."',
      'UPSC 2014: "What are the four cardinal virtues according to Plato? How are they relevant to civil servants?"'
    ],
    potentialMainsUsage: 'Foundational for introducing questions on integrity, self-awareness, moral courage, and civil service meritocracy.'
  },
  {
    id: 'th-hobbes-locke-rousseau',
    name: 'Social Contract: Hobbes, Locke & Rousseau',
    hindiName: 'सामाजिक समझौता सिद्धांत: हॉब्स, लॉक एवं रूसो',
    category: 'Western',
    period: 'Hobbes (1588–1679) / Locke (1632–1704) / Rousseau (1712–1778)',
    country: 'England & France',
    majorWorks: ['Hobbes: Leviathan (1651)', 'Locke: Two Treatises of Government (1689)', 'Rousseau: The Social Contract (1762)'],
    coreIdeas: [
      'State of Nature (Hobbes: "solitary, poor, nasty, brutish, and short"; Locke: State of natural rights; Rousseau: Noble savage corrupted by private property)',
      'Natural Rights (Locke: Inalienable rights to Life, Liberty, and Property)',
      'Government as Fiduciary Trust (Locke: If the sovereign violates natural rights, citizens have the moral right to revolution)',
      'General Will (Rousseau: Sovereign authority must reflect the collective common good, not individual selfish desires)',
      'Consent of the Governed as the sole moral basis of political legitimacy'
    ],
    ethicalPhilosophy: 'Contractarian political morality; legitimate state power derives exclusively from a mutual agreement among free individuals to secure justice, peace, and mutual preservation.',
    keyConcepts: ['Social Contract', 'General Will', 'Natural Rights', 'Fiduciary Trust', 'State of Nature'],
    administrativeRelevance: 'Reminds administrators that state authority is a temporary fiduciary trust; officials are not masters of the citizenry, but servants of the collective General Will.',
    modernApplication: 'Constitutional limitations on executive emergency powers, Right to Fair Compensation in land acquisitions, participatory democracy via Gram Sabhas.',
    caseStudyExample: 'A district collector upholding citizens\' right to peaceful protest and assembly (Lockean liberty) while preventing violence and property destruction (Hobbesian order).',
    verifiedQuote: {
      text: 'Man is born free, and everywhere he is in chains. One thinks himself the master of others, and still remains a greater slave than they.',
      context: 'Opening line of The Social Contract, Book 1, Chapter 1 (1762).',
      status: 'Verified Quote',
      source: 'Jean-Jacques Rousseau: The Social Contract (G.D.H. Cole translation)'
    },
    pyqReferences: [
      'UPSC 2016: "Explain John Locke\'s concept of natural rights. How does it underpin modern human rights jurisprudence?"',
      'UPPSC 2021: "Discuss Rousseau\'s concept of \'General Will\' and its significance in democratic governance."'
    ],
    potentialMainsUsage: 'Essential for discussing democratic legitimacy, police accountability, state power boundaries, and citizen rights.'
  },
  {
    id: 'th-arendt',
    name: 'Hannah Arendt',
    hindiName: 'हन्ना आरेंट',
    category: 'Western',
    period: '1906–1975',
    country: 'Germany / United States',
    majorWorks: ['The Origins of Totalitarianism (1951)', 'The Human Condition (1958)', 'Eichmann in Jerusalem: A Report on the Banality of Evil (1963)'],
    coreIdeas: [
      'The Banality of Evil (Monstrous evil is often committed not by sadistic sociopaths, but by ordinary, unthinking bureaucrats who mechanically obey rules and compartmentalize responsibility)',
      'Thoughtlessness as Moral Failure (The refusal or inability to reflect from the standpoint of others)',
      'Plurality and Political Action (Freedom is exercised through speech and action in public spaces alongside diverse fellow citizens)',
      'Civil Disobedience as an Essential Democratic Safeguard against state overreach'
    ],
    ethicalPhilosophy: 'Phenomenological political ethics; moral responsibility demands active, critical thinking and conscience; turning oneself into a thoughtless bureaucratic cog constitutes active complicity in systemic atrocity.',
    keyConcepts: ['Banality of Evil', 'Thoughtlessness', 'Bureaucratic Complicity', 'Plurality', 'Vita Activa'],
    administrativeRelevance: 'The single most urgent warning to civil servants against blindly obeying unlawful or inhumane executive commands under the defense of "following official orders".',
    modernApplication: 'Protection of officers who record formal dissent on files; prohibition on illegal police encounter culture; prevention of bureaucratic indifference during eviction drives.',
    caseStudyExample: 'A junior town planning officer refusing to sign off on illegal demolition orders targeting minority neighborhoods, formally recording constitutional objections despite transfer threats.',
    verifiedQuote: {
      text: 'The sad truth is that most evil is done by people who never make up their minds to be good or evil... The trouble with Eichmann was precisely that so many were like him, and that the many were neither perverted nor sadistic, that they were, and still are, terribly and terrifyingly normal.',
      context: 'Eichmann in Jerusalem: A Report on the Banality of Evil (1963).',
      status: 'Verified Quote',
      source: 'Hannah Arendt: Eichmann in Jerusalem, Penguin Classics'
    },
    pyqReferences: [
      'UPSC 2020: "Explain Hannah Arendt\'s concept of the \'banality of evil\'. How is it a warning against blind bureaucratic obedience?"',
      'UPPSC 2023: "Discuss the moral responsibility of civil servants when executing controversial government policies."'
    ],
    potentialMainsUsage: 'The premier philosophical citation for critiquing mechanical rule-following, institutional complicity, and defending the moral necessity of administrative dissent.'
  },
  {
    id: 'th-confucius',
    name: 'Confucius (Kong Fuzi)',
    hindiName: 'कन्फ्यूशियस',
    category: 'Western', // Global / East Asian Classic
    period: '551–479 BCE',
    country: 'Ancient China (Lu State)',
    majorWorks: ['The Analects (Lunyu)', 'The Great Learning', 'The Doctrine of the Mean'],
    coreIdeas: [
      'Ren (Benevolence, Humaneness, Altruistic Love for humanity)',
      'Li (Propriety, Ritual etiquette, Moral decorum, and Institutional correctness)',
      'Junzi (The Exemplary Moral Gentleman / Virtuous Administrator who leads by personal character rather than laws)',
      'Moral Leadership by Example ("If the ruler is upright, all will go well even though he does not give orders; but if he himself is not upright, even though he gives orders, they will not be obeyed")',
      'Zhengming (The Rectification of Names: Things must correspond in reality to their titles; a ruler must act like a ruler, a father like a father)'
    ],
    ethicalPhilosophy: 'Relational virtue ethics emphasizing moral self-cultivation, societal harmony, filial reverence, and leadership through moral magnetism and personal integrity.',
    keyConcepts: ['Ren (Benevolence)', 'Li (Propriety)', 'Junzi (Noble Administrator)', 'Rectification of Names', 'Moral Magnetism'],
    administrativeRelevance: 'Emphasizes that public administration is transformed not by multiplying punitive laws, but by upright superiors who inspire moral conduct across ranks through personal self-restraint.',
    modernApplication: 'Code of Ethics implementation; institutional anti-harassment decorum; public service leadership by personal humility and financial probity.',
    caseStudyExample: 'A District Collector setting an ethical benchmark by flying economy class, declining official VIP perks, and working in non-air-conditioned district field camps during energy shortages.',
    verifiedQuote: {
      text: 'To govern is to be upright. If you lead with uprightness, who will dare not to be upright?',
      context: 'The Analects, Book XII, Chapter 17.',
      status: 'Verified Quote',
      source: 'Confucius: The Analects (translated by D.C. Lau, Penguin Books)'
    },
    pyqReferences: [
      'UPSC 2016: "Leadership by moral example is more powerful than governance through laws. Comment in the light of Confucius\' teachings."',
      'UPPSC 2022: "Explain the Confucian concept of \'Junzi\' (the exemplary person) and its relevance for public servants."'
    ],
    potentialMainsUsage: 'Exceptional for questions on ethical leadership, work culture, organizational tone-at-the-top, and moral character in governance.'
  }
];

