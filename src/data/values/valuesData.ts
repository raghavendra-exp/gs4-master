// src/data/values/valuesData.ts
// Comprehensive Value Matrix for Human Values and Foundational Civil Service Values

import { ValueItem } from '../../types/ethics';

export const VALUES_DATA: ValueItem[] = [
  {
    id: 'val-integrity',
    name: 'Integrity',
    hindiName: 'सत्यनिष्ठा',
    category: 'Foundational',
    definition: 'Unflinching adherence to moral and ethical principles; soundness of moral character; alignment of thought, speech, and action even without external supervision.',
    dimensions: [
      'Financial Incorruptibility',
      'Intellectual Honesty in Analysis',
      'Moral Courage against Coercion',
      'Refusal to Exploit Discretionary Loopholes'
    ],
    importanceInCivilServices: 'Integrity guarantees that public authority and state resources entrusted to an officer are safeguarded from private predation, sustaining citizen trust in democratic governance.',
    personalExample: 'Refusing to use official vehicle, staff, or stationary for private family functions.',
    administrativeExample: 'An officer ordering an impartial forensic audit into a flagship infrastructure project despite subtle hints of displeasure from political superiors.',
    constitutionalConnection: 'Underpins Article 311 (safeguards against arbitrary dismissals) and the Preamble\'s commitment to Justice and Rule of Law.',
    thinkerAssociated: 'Sardar Vallabhbhai Patel (The "Steel Frame" address, 1947)',
    historicalExample: 'Lal Bahadur Shastri resigning as Railway Minister in 1956 taking moral responsibility for the Ariyalur train disaster.',
    modernExample: 'IAS officer U. Sagayam, who exposed illegal granite quarrying in Tamil Nadu, submitting an exhaustive 600-page report despite multiple transfers and harassment.',
    quote: {
      text: 'Integrity is doing the right thing, even when no one is looking.',
      speaker: 'C.S. Lewis',
      status: 'Attributed Idea'
    },
    potentialCaseStudyTopic: 'Political pressure to award a multi-crore sewage treatment plant tender to a politically connected, unqualified vendor.',
    potentialMainsQuestion: 'What do you understand by "integrity" in civil services? How is it different from mere honesty? Discuss with practical illustrations.'
  },
  {
    id: 'val-compassion',
    name: 'Compassion',
    hindiName: 'करुणा',
    category: 'Foundational',
    definition: 'Deep emotional awareness of the distress and vulnerability of others coupled with an active moral resolve to alleviate their suffering.',
    dimensions: [
      'Proactive Sensitivity towards the Marginalized',
      'Humane Application of Administrative Rules',
      'Restoration of Human Dignity',
      'Preventing Exclusion in Digital Welfare Systems'
    ],
    importanceInCivilServices: 'Compassion ensures that government welfare is delivered not as cold bureaucratic charity, but as an affirmative realization of constitutional human dignity.',
    personalExample: 'Volunteering off-duty hours to teach children in an unauthorized urban slum.',
    administrativeExample: 'A Sub-Divisional Magistrate using disaster relief discretionary contingency funds to arrange immediate shelter, medical checkups, and baby food for flood-displaced informal laborers.',
    constitutionalConnection: 'Enshrined in Directive Principles (Articles 39A, 41, 46) and Fundamental Duties (Article 51A(g): "to have compassion for living creatures").',
    thinkerAssociated: 'Gautama Buddha (Karuna & Metta); Mahatma Gandhi',
    historicalExample: 'Emperor Ashoka\'s transformation after the Kalinga war, renouncing violence and establishing medical dispensaries, shade trees, and rest houses for humans and animals (Rock Edict II).',
    modernExample: 'IAS officer Prashant Nair launching "Compassionate Kozhikode" and "Operation Sulaimani", an initiative ensuring dignified, free food coupons for the hungry without making them beg.',
    quote: {
      text: 'The best way to find yourself is to lose yourself in the service of others.',
      speaker: 'Mahatma Gandhi',
      status: 'Verified Quote'
    },
    potentialCaseStudyTopic: 'An aged widow without Aadhaar card or documentation seeking widow pension to pay for dialysis treatments.',
    potentialMainsQuestion: 'Compassion without institutional discipline leads to favoritism; rules without compassion produce tyranny. How can a civil servant reconcile both?'
  },
  {
    id: 'val-impartiality',
    name: 'Impartiality & Objectivity',
    hindiName: 'निष्पक्षता एवं वस्तुनिष्ठता',
    category: 'Foundational',
    definition: 'Making administrative decisions based strictly on demonstrable evidence, verified data, and constitutional law, free from subjective bias, favoritism, or prejudice.',
    dimensions: [
      'Evidence-Based Policy Formulation',
      'Algorithmic & Data Transparency',
      'Substantive Neutrality across Communities',
      'Immunity to Confirmation & Anchoring Biases'
    ],
    importanceInCivilServices: 'Guarantees that state decisions can withstand legal scrutiny and public audit, ensuring that no citizen receives preferential or detrimental treatment due to identity.',
    personalExample: 'Evaluating candidates in an interview panel without being influenced by alma mater, regional background, or personal recommendations.',
    administrativeExample: 'A district collector allocating drought-relief tankers strictly based on remote-sensing groundwater stress maps rather than political requests.',
    constitutionalConnection: 'Core requirement of Article 14 (Equality before Law) and Article 15 (Prohibition of discrimination).',
    thinkerAssociated: 'Max Weber (Rational-Legal Authority); John Rawls (Veil of Ignorance)',
    historicalExample: 'Emperor Jahangir installing the "Chain of Justice" (Zanjir-i-Adl) accessible to any citizen seeking direct, unbiased redressal.',
    modernExample: 'Chief Election Commissioner T.N. Seshan implementing the Model Code of Conduct impartially against cabinet ministers and ruling parties.',
    quote: {
      text: 'Justice is the first virtue of social institutions, as truth is of systems of thought.',
      speaker: 'John Rawls',
      status: 'Verified Quote'
    },
    potentialCaseStudyTopic: 'A land acquisition corridor where political representatives demand altering the highway alignment to spare their commercial plots while demolishing marginal farmers land.',
    potentialMainsQuestion: 'Objectivity and empathy are often viewed as contradictory in public administration. Argue why both are essential for balanced governance.'
  },
  {
    id: 'val-constitutional-morality',
    name: 'Constitutional Morality',
    hindiName: 'संवैधानिक नैतिकता',
    category: 'Constitutional',
    definition: 'Commitment to the foundational values, institutional checks and balances, pluralism, and democratic processes enshrined in the Constitution rather than majoritarian sentiment.',
    dimensions: [
      'Subordination of Majoritarian Will to Fundamental Rights',
      'Respect for Separation of Powers and Statutory Autonomy',
      'Protection of Dissent and Pluralism',
      'Institutional Restraint and Substantive Due Process'
    ],
    importanceInCivilServices: 'Serves as the ultimate ethical compass for administrators when faced with ambiguous executive orders, social dogma, or populist pressures.',
    personalExample: 'Defending the equal rights of minority and marginalized groups in community meetings despite hostile social pressure.',
    administrativeExample: 'A police officer providing security to a constitutionally protected peaceful protest despite pressure from local political bodies to deny permission.',
    constitutionalConnection: 'Supreme Court jurisprudence in Navtej Johar (2018), Sabarimala (2018), and Manoj Narula (2014) judgments.',
    thinkerAssociated: 'Dr. B.R. Ambedkar (Constituent Assembly speech, November 4, 1948)',
    historicalExample: 'Dr. B.R. Ambedkar ensuring the inclusion of fundamental rights and constitutional remedies (Article 32) as the "heart and soul" of the Constitution.',
    modernExample: 'Courts upholding individual freedom of choice and bodily autonomy against conservative public opposition using constitutional morality as the guiding beacon.',
    quote: {
      text: 'Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it.',
      speaker: 'Dr. B.R. Ambedkar',
      status: 'Verified Quote'
    },
    potentialCaseStudyTopic: 'Local community demanding kangaroo court / panchayat punishment against an inter-caste couple in violation of statutory law and individual rights.',
    potentialMainsQuestion: 'Discuss the concept of "Constitutional Morality" in the light of recent Supreme Court pronouncements. How does it guide civil service conduct?'
  },
  {
    id: 'val-courage',
    name: 'Moral Courage',
    hindiName: 'नैतिक साहस',
    category: 'Personal',
    definition: 'The mental and moral resolve to stand up for ethical principles, speak truth to power, and resist wrongful orders despite impending threats to career, reputation, or safety.',
    dimensions: [
      'Speaking Truth to Superiors and Ministers',
      'Whistleblowing against Systemic Corruption',
      'Resisting Extralegal Coercion and Bribery',
      'Taking Responsibility for Honest Administrative Mistakes'
    ],
    importanceInCivilServices: 'Without moral courage, values like integrity, honesty, and empathy remain passive intentions that collapse under real-world administrative pressure.',
    personalExample: 'Intervening when colleagues engage in derogatory workplace harassment or communal banter.',
    administrativeExample: 'An SP refusing to dilute FIR charges against a powerful politician\'s son involved in a fatal hit-and-run accident, ensuring transparent forensic inquiry.',
    constitutionalConnection: 'Protected under Article 51A(h) (spirit of inquiry and reform) and the Whistle Blowers Protection Act, 2014.',
    thinkerAssociated: 'Socrates (Trial and Apology); Raja Ram Mohan Roy',
    historicalExample: 'Socrates choosing to drink hemlock rather than recant his philosophical questioning and moral convictions before the Athenian assembly.',
    modernExample: 'Whistleblower officer Sanjiv Chaturvedi documenting illegal forest land allocations and AIIMS procurement scams despite facing punitive suspensions.',
    quote: {
      text: 'Courage is the most important of all the virtues because without courage, you can\'t practice any other virtue consistently.',
      speaker: 'Maya Angelou',
      status: 'Verified Quote'
    },
    potentialCaseStudyTopic: 'An officer discovers that safety clearances for an industrial chemical plant near a residential zone were fraudulently obtained with kickbacks to senior ministry officials.',
    potentialMainsQuestion: '"Moral courage is the bridge between ethical ideals and administrative reality." Elucidate with suitable examples.'
  },
  {
    id: 'val-humility',
    name: 'Humility and Service Orientation',
    hindiName: 'विनम्रता एवं सेवा-भाव',
    category: 'Foundational',
    definition: 'Freedom from bureaucratic arrogance; recognizing that public power is a solemn trust held on behalf of the citizenry, treating every common person with innate dignity.',
    dimensions: [
      'Accessible and Courteous Citizen Engagement (Jan-Sampark)',
      'Receptivity to Constructive Feedback and Audit Criticisms',
      'Eradicating Feudal "Mai-Baap" Bureaucratic Mindset',
      'Readiness to Learn from Grassroots Field Realities'
    ],
    importanceInCivilServices: 'Transforms the civil servant from an aloof ruler into a responsive facilitator, directly enhancing the responsiveness of governance.',
    personalExample: 'Patiently listening to an illiterate complainant without dismissing their petition or demanding convoluted paperwork.',
    administrativeExample: 'A district collector conducting surprise night stays in remote tribal hamlets (Gram-Vastavya) to personally experience drinking water and electricity challenges.',
    constitutionalConnection: 'Preamble ("We, the People of India" as the ultimate sovereign source of authority).',
    thinkerAssociated: 'Mahatma Gandhi (Trusteeship theory); Swami Vivekananda (Daridra Narayana)',
    historicalExample: 'Swami Vivekananda\'s exhortation: "Serving the poor and downtrodden is the truest worship of God (Daridra Narayana Seva)."',
    modernExample: 'Civil servants utilizing social media platforms and instant messaging for rapid, courteous grievance resolution during flash floods and cyclones.',
    quote: {
      text: 'True humility is not thinking less of yourself; it is thinking of yourself less.',
      speaker: 'C.S. Lewis',
      status: 'Attributed Idea'
    },
    potentialCaseStudyTopic: 'Junior staff in a municipal office treating citizens seeking birth and death certificates with contempt and deliberate delays.',
    potentialMainsQuestion: 'How can an attitude of humility and service-orientation be cultivated among newly recruited civil servants? Suggest systemic reforms.'
  }
];
