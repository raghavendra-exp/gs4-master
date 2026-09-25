// src/data/pyq/pyqData.ts
// Comprehensive Database of actual UPSC GS-IV and UPPSC Ethics PYQs with model approaches and frequency metrics

import { PYQItem } from '../../types/ethics';

export const PYQ_DATABASE: PYQItem[] = [
  {
    id: 'pyq-upsc-2023-q1',
    exam: 'UPSC',
    year: 2023,
    paper: 'GS-IV',
    questionNumber: 'Q1(a)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Ethics and Human Interface',
    subtopic: 'Essence and Determinants of Ethics',
    directive: 'What do you understand by',
    questionText: 'What do you understand by "moral integrity" and "professional competence" in the context of civil services? Can one exist without the other? Explain with examples.',
    hindiText: 'सिविल सेवाओं के संदर्भ में "नैतिक सत्यनिष्ठा" और "व्यावसायिक सक्षमता" से आप क्या समझते हैं? क्या एक के बिना दूसरा संभव है? उदाहरण सहित समझाइए।',
    modelApproach: {
      introduction: 'Define moral integrity as internal alignment with constitutional values and truth, and professional competence as the requisite domain knowledge, problem-solving skills, and administrative agility.',
      dimensionsToAddress: [
        'Quadrant analysis: High Competence + Low Integrity (Dangerous predator/scamster, e.g. white-collar corruption).',
        'High Integrity + Low Competence (Well-meaning but ineffective administrator who causes paralysis or delay).',
        'Low Integrity + Low Competence (Total liability to public administration).',
        'High Integrity + High Competence: The ideal civil servant (e.g. E. Sreedharan, T.N. Seshan).'
      ],
      thinkerQuotesToUse: ['Dr. APJ Abdul Kalam: "Knowledge without character is a power for evil."', 'Second ARC 4th Report on ethical competence'],
      diagramSuggestion: '2x2 Matrix plotting Integrity (X-axis) against Competence (Y-axis) with the four quadrants labeled.',
      examplesToQuote: ['E. Sreedharan combining world-class engineering acumen with unimpeachable financial rectitude.'],
      conclusion: 'Conclude that integrity provides the moral direction (the steering wheel), while competence provides the administrative horsepower (the engine). One without the other invites disaster.'
    },
    frequencyScore: 9,
    source: 'UPSC Civil Services Examination Mains 2023 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2023-q2',
    exam: 'UPSC',
    year: 2023,
    paper: 'GS-IV',
    questionNumber: 'Q2(b)',
    marks: 10,
    wordLimit: 150,
    type: 'Quote-based',
    topic: 'Human Values & Thinkers',
    subtopic: 'Gandhian Ethics',
    directive: 'Explain',
    questionText: '"The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer." - Mahatma Gandhi. What does this quotation convey to you in the present context?',
    hindiText: '"प्रार्थना में झुकने वाले एक हज़ार सिरों की तुलना में दयालुता का सबसे सरल कार्य कहीं अधिक शक्तिशाली है।" - महात्मा गांधी। वर्तमान संदर्भ में यह कथन आपके लिए क्या संदेश देता है?',
    modelApproach: {
      introduction: 'Analyze Gandhi\'s insight: Ritualistic piety or passive moral virtue is hollow without practical, tangible benevolence (Karuna in action).',
      dimensionsToAddress: [
        'Administrative empathy over performative proceduralism: Helping a destitute elder get pension vs mere polite speeches.',
        'Bridging the social chasm: In a cynical world, micro-acts of compassion build immense social capital and public trust.',
        'Humanizing the state machinery: How compassionate officers transform impersonal desks into centers of hope.'
      ],
      thinkerQuotesToUse: ['Gautama Buddha: "Better than a thousand hollow words is one word that brings peace."', 'Mother Teresa on humble acts of love'],
      diagramSuggestion: 'Flow diagram: Passive Moral Belief → Empathetic Action → Restoring Dignity → Building Institutional Trust.',
      examplesToQuote: ['IAS officer Armstrong Pame building 100km road via community crowdfunding; Operation Sulaimani food coupon initiative in Kozhikode.'],
      conclusion: 'In civil administration, true worship of the constitutional sovereign (We, the People) happens not in ceremonial rhetoric, but at the window where a weeping citizen finds relief.'
    },
    frequencyScore: 8,
    source: 'UPSC Civil Services Examination Mains 2023 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2022-q1',
    exam: 'UPSC',
    year: 2022,
    paper: 'GS-IV',
    questionNumber: 'Q1(a)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Foundational Values for Civil Service',
    subtopic: 'Rules, Regulations and Conscience',
    directive: 'Discuss',
    questionText: 'Wisdom lies in knowing what to reckon with and what to overlook. How will you apply this principle in your administrative decisions where rules and conscience conflict?',
    hindiText: 'बुद्धिमत्ता इसमें निहित है कि क्या ध्यान में रखा जाए और किसे अनदेखा किया जाए। जब नियमों और अंतरात्मा में संघर्ष हो, तो आप प्रशासनिक निर्णयों में इस सिद्धांत को कैसे लागू करेंगे?',
    modelApproach: {
      introduction: 'Interpret the quote as the exercise of Phronesis (Aristotle\'s practical wisdom) and principled administrative discretion rather than blind mechanical formalism.',
      dimensionsToAddress: [
        'Recognize the purpose of rules: Rules are means to achieve public good and justice, not ends in themselves.',
        'What to reckon with: Constitutional morality, saving life, fundamental rights, procedural accountability.',
        'What to overlook: Minor technical discrepancies, procedural bottlenecks that deprive a starving person of food or healthcare.',
        'The test of Conscience: Conscience must be educated by constitutional principles, not subjective whim.'
      ],
      thinkerQuotesToUse: ['Aristotle on Phronesis (Practical Wisdom)', 'Justice Krishna Iyer: "Law is not a brooding omnipresence in the sky but a human tool to serve human needs."'],
      diagramSuggestion: 'Venn diagram showing intersection of Law, Conscience, and Public Interest.',
      examplesToQuote: ['Officers accepting informal affidavit or witness testimony to release life-saving medicines when documents were lost in floods.'],
      conclusion: 'A wise administrator does not break the law, but bends the procedure within lawful discretionary bounds to ensure substantive justice triumphs over cold paperwork.'
    },
    frequencyScore: 9,
    source: 'UPSC Civil Services Examination Mains 2022 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2021-q4',
    exam: 'UPSC',
    year: 2021,
    paper: 'GS-IV',
    questionNumber: 'Q4(a)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Attitude and Social Influence',
    subtopic: 'Persuasion and Behavioral Change',
    directive: 'Examine',
    questionText: 'Attitude is an important component that goes as input in the development of human being. How to build a suitable attitude needed for a public servant?',
    hindiText: 'अभिवृत्ति (मनोवृत्ति) एक महत्वपूर्ण घटक है जो मानव के विकास में एक इनपुट के रूप में कार्य करता है। एक लोक सेवक के लिए आवश्यक उपयुक्त अभिवृत्ति का निर्माण कैसे किया जाए?',
    modelApproach: {
      introduction: 'Define attitude through the CAB model (Cognitive belief, Affective emotion, Behavioral tendency) as a psychological orientation shaping how an officer evaluates citizens and public duty.',
      dimensionsToAddress: [
        'Key attributes needed: Citizen-centricity, empathy for weaker sections, political neutrality, responsiveness, incorruptibility.',
        'Methods of attitude formation & change: Value-grounded foundation training (LBSNAA Bharat Darshan), exposure to extreme rural poverty (Karmayogi Mission), transformative mentorship, cognitive dissonance interventions.',
        'Nudge and role-modeling: Observing upright seniors and learning from social reformers.'
      ],
      thinkerQuotesToUse: ['Gordon Allport: "Attitudes determine for each individual what he will see and hear, what he will think and what he will do."'],
      diagramSuggestion: 'CAB Model Triangle (Cognitive - Affective - Behavioral) feeding into Civil Service Orientation.',
      examplesToQuote: ['Mission Karmayogi competency-based capacity building framework for Indian civil servants.'],
      conclusion: 'Conclude with Sardar Patel\'s reminder: Civil service is a calling of dedicated selflessness where true reward is public trust and national consolidation.'
    },
    frequencyScore: 8,
    source: 'UPSC Civil Services Examination Mains 2021 General Studies Paper IV'
  },
  {
    id: 'pyq-uppsc-2023-q1',
    exam: 'UPPSC',
    year: 2023,
    paper: 'UPPSC Ethics',
    questionNumber: 'Q1',
    marks: 8,
    wordLimit: 125,
    type: 'Theory',
    topic: 'Probity in Governance',
    subtopic: 'Nolan Committee Principles',
    directive: 'Explain',
    questionText: 'Explain the Nolan Committee\'s recommendations on the standards of public life. Which of these principles is most vital in Indian public administration?',
    hindiText: 'सार्वजनिक जीवन के मानकों पर नोलन समिति की सिफारिशों की व्याख्या कीजिए। भारतीय लोक प्रशासन में इनमें से कौन सा सिद्धांत सर्वाधिक महत्वपूर्ण है?',
    modelApproach: {
      introduction: 'Detail the UK Nolan Committee (1995) formulation of the Seven Principles of Public Life: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership.',
      dimensionsToAddress: [
        'Explain each of the 7 principles briefly.',
        'Argue why Integrity and Selflessness are the paramount foundational pillars in the Indian socio-economic milieu where deep disparities create enormous temptations for rent-seeking.',
        'Link with Second ARC 4th Report recommendations adopting the Nolan principles for Indian civil services.'
      ],
      thinkerQuotesToUse: ['Lord Nolan: "Public office is a public trust."', 'Second ARC 4th Report on Ethics in Governance'],
      diagramSuggestion: '7-pointed star or cyclic diagram representing the Seven Principles of Public Life.',
      examplesToQuote: ['Adoption of Nolan principles in the draft Public Services Bill and Central Civil Services Conduct Rules.'],
      conclusion: 'Adherence to these principles transforms governance from an extractive colonial apparatus into an accountable democratic service.'
    },
    frequencyScore: 10,
    source: 'UPPSC Combined State / Upper Subordinate Services Mains Examination 2023'
  },
  {
    id: 'pyq-upsc-2020-duty-vs-relations',
    exam: 'UPSC',
    year: 2020,
    paper: 'GS-IV',
    questionNumber: 'Q2(a)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Public Service Ethics',
    subtopic: 'Private vs Public Relationships',
    directive: 'Discuss',
    questionText: 'A public servant faces severe ethical dilemmas when duty to the public clashes with obligations towards family or personal friendships. How should an ethical officer navigate such conflicts?',
    hindiText: 'एक लोक सेवक को गंभीर नैतिक दुविधाओं का सामना करना पड़ता है जब जनता के प्रति कर्तव्य परिवार या व्यक्तिगत मित्रता के दायित्वों से टकराता है। एक नैतिक अधिकारी को ऐसे संघर्षों से कैसे निपटना चाहिए?',
    modelApproach: {
      introduction: 'Distinguish between the ethos of private relationships (anchored in unconditional affection, partiality, loyalty, and reciprocity) and public relationships (governed by constitutional neutrality, non-partisanship, equity, and the Nolan principle of selflessness).',
      dimensionsToAddress: [
        'Nature of conflict: Conflict of interest (actual, potential, or perceived), nepotism risks, emotional pressure to grant undue official favors.',
        'Principles for resolution: Absolute primacy of public interest and the Constitution over private loyalties.',
        'Institutional protocols: Voluntary recusal from tender committees or recruitment panels where relatives are contenders; proactive formal disclosure to superiors.',
        'Emotional intelligence: Communicating with family members about professional boundaries without damaging familial bonds.'
      ],
      thinkerQuotesToUse: ['Bhagavad Gita: Nishkama Karma (Detached duty transcending personal attachments)', 'Kautilya\'s Arthashastra: "In the happiness of his subjects lies the king\'s happiness."'],
      diagramSuggestion: 'Concentric circles: Innermost (Personal Loyalties) subsumed under Outer Circle (Rule of Law & Public Trust).',
      examplesToQuote: ['IAS officers formally recusing themselves from land acquisition compensation awards when family property falls in the highway corridor.'],
      conclusion: 'Public office is held in fiduciary trust for the sovereign people. When private affection is allowed to steer the public pen, the moral sanctity of the republic is poisoned.'
    },
    frequencyScore: 9,
    source: 'UPSC Civil Services Examination Mains 2020 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2019-citizen-charters',
    exam: 'UPSC',
    year: 2019,
    paper: 'GS-IV',
    questionNumber: 'Q4(b)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Probity in Governance',
    subtopic: 'Citizen Charters & Service Delivery',
    directive: 'Critically Examine',
    questionText: 'Citizen\'s Charters were envisaged as an effective tool for empowering citizens and curbing administrative complacency, but have largely failed in India. Critically examine the deficiencies and suggest remedial measures.',
    hindiText: 'नागरिक अधिकार पत्र (सिटिजन चार्टर) को नागरिकों को सशक्त बनाने और प्रशासनिक उदासीनता पर अंकुश लगाने के लिए एक प्रभावी उपकरण के रूप में परिकल्पित किया गया था, लेकिन भारत में वे काफी हद तक विफल रहे हैं। कमियों का समालोचनात्मक परीक्षण कीजिए तथा उपचारात्मक उपाय सुझाइए।',
    modelApproach: {
      introduction: 'Define Citizen\'s Charter (introduced in UK 1991, adopted in India 1997) as a public declaration of service commitments, standards, timelines, grievance redressal channels, and citizen entitlements.',
      dimensionsToAddress: [
        'Root causes of failure: Top-down drafting without citizen consultation; vague unmeasurable commitments ("prompt delivery"); complete absence of legal enforceability or financial compensation for delays; lack of staff training and bureaucratic inertia.',
        '2nd ARC 12th Report ("Citizen Centric Administration") critique: Charters became mere decorative wall-hangings rather than living operational tools.',
        'Remedial architecture: Adopt Sevottam Model (IS 15700:2005) with 3 pillars (Charter compliance, Public grievance, Service capability); enact Right to Services legislation with automatic penalty deductions from erring officials\' salaries.'
      ],
      thinkerQuotesToUse: ['Second ARC 12th Report: "Citizen\'s Charter is not a one-time exercise; it is an ongoing dialogue between service provider and user."', 'Amartya Sen on citizen agency'],
      diagramSuggestion: 'Sevottam Model Pyramid: Base (Delivery Capability), Middle (Grievance Redressal), Peak (Citizen\'s Charter).',
      examplesToQuote: ['UP Janhit Guarantee Act, 2011 and Bihar Right to Public Services Act enforcing time-bound delivery with daily monetary fines.'],
      conclusion: 'A Citizen\'s Charter must transform from a passive public relations pamphlet into an actionable, legally backed social contract where time-bound delivery is a justiciable right.'
    },
    frequencyScore: 9,
    source: 'UPSC Civil Services Examination Mains 2019 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2018-nolan-reforms',
    exam: 'UPSC',
    year: 2018,
    paper: 'GS-IV',
    questionNumber: 'Q1(b)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Foundational Values for Civil Service',
    subtopic: 'Nolan Principles and Institutionalization',
    directive: 'Discuss',
    questionText: 'State the Nolan Committee\'s Seven Principles of Public Life. What institutional and systemic reforms are necessary to internalize these values in Indian civil services?',
    hindiText: 'सार्वजनिक जीवन के सात सिद्धांतों (नोलन समिति) का उल्लेख कीजिए। भारतीय सिविल सेवाओं में इन मूल्यों को आंतरिक बनाने के लिए कौन से संस्थागत और प्रणालीगत सुधार आवश्यक हैं?',
    modelApproach: {
      introduction: 'Enumerate the Seven Principles formulated by Lord Nolan (1995): Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership.',
      dimensionsToAddress: [
        'Briefly outline how each principle addresses systemic vulnerabilities in public decision-making.',
        'Reforms for internalization: Transform civil service training from rote colonial rulebooks to behavioral dilemma simulations (Mission Karmayogi); institute independent performance appraisals replacing subjective ACR/APAR with 360-degree feedback; mandatory public asset disclosure on web portals; robust statutory Whistleblowers Protection Act implementation.',
        'Adopt the Second ARC recommendation of enacting a comprehensive Civil Services Code of Ethics distinct from the negative Conduct Rules.'
      ],
      thinkerQuotesToUse: ['Second ARC 4th Report: "A society that cannot distinguish between vice and virtue will soon lose the capacity to govern itself."', 'Lord Nolan on ethical stewardship'],
      diagramSuggestion: 'Hub-and-spoke model with "Constitutional Governance" at center, connected to the 7 Nolan spokes.',
      examplesToQuote: ['Adoption of SPARROW digital 360-degree appraisal system; CVC\'s Preventive Vigilance portal.'],
      conclusion: 'Nolan principles cannot remain abstract aspirations; they must be hardwired into the daily incentive structures, disciplinary procedures, and digital accountability systems of the civil service.'
    },
    frequencyScore: 10,
    source: 'UPSC Civil Services Examination Mains 2018 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2017-utilitarian-limits',
    exam: 'UPSC',
    year: 2017,
    paper: 'GS-IV',
    questionNumber: 'Q2(b)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Ethical Theories',
    subtopic: 'Utilitarianism & Consequentialism',
    directive: 'Critically Examine',
    questionText: '"The greatest happiness of the greatest number" is frequently invoked as the guiding yardstick for public administration and developmental policies. What are its ethical and constitutional limitations?',
    hindiText: '"अधिकतम व्यक्तियों का अधिकतम सुख" को अक्सर लोक प्रशासन और विकासात्मक नीतियों के लिए मार्गदर्शक मानदंड के रूप में उद्धृत किया जाता है। इसकी नैतिक और संवैधानिक सीमाएं क्या हैं?',
    modelApproach: {
      introduction: 'Introduce Jeremy Bentham\'s principle of Utility (Greatest Happiness of the Greatest Number) and J.S. Mill\'s consequentialist philosophy, acknowledging its value in public health, mass transit, and municipal budgeting.',
      dimensionsToAddress: [
        'The Tyranny of the Majority: Utilitarianism permits sacrificing vulnerable minorities (e.g. adivasis displaced for dams) to maximize aggregate happiness for urban consumers.',
        'Commodification of Rights: Fails to recognize that human dignity, bodily integrity, and fundamental rights (Articles 14, 21) are inalienable and cannot be subjected to a cost-benefit felicific calculus.',
        'Kantian Deontological counter-critique: Human beings are ends in themselves, never mere instruments for collective utility.',
        'Rawlsian critique: Justice as Fairness mandates the Difference Principle—inequalities are justified only if they benefit the least advantaged, which utilitarianism violates.'
      ],
      thinkerQuotesToUse: ['John Rawls: "Each person possesses an inviolability founded on justice that even the welfare of society as a whole cannot override."', 'Immanuel Kant on treating humanity as an end'],
      diagramSuggestion: 'Spectrum comparing Bentham\'s Aggregation vs Rawls\' Difference Principle vs Gandhian Antyodaya.',
      examplesToQuote: ['Forced land evictions for luxury expressways justified under "GDP growth" while leaving displaced subsistence farmers destitute.'],
      conclusion: 'Indian constitutional democracy is not a majoritarian utilitarian machine; it is anchored in the transformative justice of BR Ambedkar and the Antyodaya of Mahatma Gandhi, where the tear of the last person carries supreme moral weight.'
    },
    frequencyScore: 10,
    source: 'UPSC Civil Services Examination Mains 2017 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2016-persuasion-swachh-bharat',
    exam: 'UPSC',
    year: 2016,
    paper: 'GS-IV',
    questionNumber: 'Q3(a)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Attitude and Social Influence',
    subtopic: 'Persuasion in Public Programs',
    directive: 'Explain',
    questionText: 'Explain the role of social influence and persuasion in bringing about behavioral changes in society, with special reference to the Swachh Bharat Abhiyan.',
    hindiText: 'स्वच्छ भारत अभियान के विशेष संदर्भ में, समाज में व्यवहार परिवर्तन लाने में सामाजिक प्रभाव और प्रबोधन (पर्सुएशन) की भूमिका की व्याख्या कीजिए।',
    modelApproach: {
      introduction: 'Highlight that sustainable development challenges cannot be solved through coercive fines or brick-and-mortar infrastructure alone; they require psychological transformation through social influence and persuasive communication.',
      dimensionsToAddress: [
        'Persuasion mechanics: Shifting attitudes via the CAB model—Cognitive (germ theory, stunting, child mortality), Affective (dignity of women, self-respect/Izzatghar), Behavioral (daily toilet habituation).',
        'Social Influence techniques: Leveraging Social Proof (Cialdini) via community ODF triggering (CLTS - Community-Led Total Sanitation); peer surveillance through "Nigrani Samitis" and "Vanar Senas".',
        'Ethos, Pathos, Logos: Prime Ministerial leadership as credible messenger (Ethos), emotional appeal of protecting daughters\' modesty at dusk (Pathos), scientific evidence on diarrheal disease reduction (Logos).'
      ],
      thinkerQuotesToUse: ['Robert Cialdini on Social Proof and Reciprocity', 'Mahatma Gandhi: "Sanitation is more important than political independence."'],
      diagramSuggestion: 'Triad showing Information (IEC) → Affective Awakening (Dignity) → Social Conformity (Peer Pressure) → Habitual Action.',
      examplesToQuote: ['Swachhata Doots, Darwaza Band campaign featuring cultural icons, naming toilets "Izzat Ghar" (Dignity Home) across rural Uttar Pradesh.'],
      conclusion: 'Swachh Bharat proved that when administration aligns infrastructure with behavioral psychology, state policy evolves into a mass Jan Andolan.'
    },
    frequencyScore: 9,
    source: 'UPSC Civil Services Examination Mains 2016 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2015-code-ethics-vs-conduct',
    exam: 'UPSC',
    year: 2015,
    paper: 'GS-IV',
    questionNumber: 'Q2(b)',
    marks: 10,
    wordLimit: 150,
    type: 'Theory',
    topic: 'Probity in Governance',
    subtopic: 'Codes of Ethics vs Codes of Conduct',
    directive: 'Illustrate',
    questionText: 'Differentiate between "Code of Ethics" and "Code of Conduct". Illustrate with suitable examples from public administration.',
    hindiText: '"आचार संहिता" (कोड ऑफ एथिक्स) और "आचरण नियमावली" (कोड ऑफ कंडक्ट) में अंतर स्पष्ट कीजिए। लोक प्रशासन से उपयुक्त उदाहरणों द्वारा स्पष्ट कीजिए।',
    modelApproach: {
      introduction: 'Define Code of Ethics as a broad, aspirational, value-driven framework outlining the philosophical ideals and moral compass of an organization, whereas Code of Conduct is a specific, prescriptive, enforceable set of dos and don\'ts detailing prohibited behaviors.',
      dimensionsToAddress: [
        'Structural comparison table: Purpose (Internalized moral guidance vs External compliance); Nature (Aspirational vs Restrictive); Enforcement (Conscience & professional peer review vs Penal disciplinary proceedings); Flexibility (High discretion vs Rigid literal interpretation).',
        'Administrative examples: Code of Ethics = Commitment to constitutional values, empathy for the poor, upholding public trust. Code of Conduct = CCS Conduct Rules 1964 (e.g., prohibition of accepting gifts exceeding ₹5000, ban on political party membership, mandatory clearance before publishing articles).',
        'Second ARC recommendation: India possesses elaborate Conduct Rules but lacks an overarching, legally recognized Civil Services Code of Ethics.'
      ],
      thinkerQuotesToUse: ['Second ARC 4th Report: "A code of conduct without a code of ethics is like a building without foundations."', 'Lord Nolan on ethical standards'],
      diagramSuggestion: 'Two-tier pyramid: Broad Code of Ethics forming the foundational moral base; specific Code of Conduct forming the operational regulatory capstone.',
      examplesToQuote: ['Central Civil Services (Conduct) Rules, 1964 as Code of Conduct; Draft Public Services Bill, 2007 as proposed Code of Ethics.'],
      conclusion: 'While a Code of Conduct punishes the wrongdoer, a Code of Ethics inspires the virtuous administrator. A vibrant democracy requires both.'
    },
    frequencyScore: 8,
    source: 'UPSC Civil Services Examination Mains 2015 General Studies Paper IV'
  },
  {
    id: 'pyq-upsc-2023-samuel-johnson',
    exam: 'UPSC',
    year: 2023,
    paper: 'GS-IV',
    questionNumber: 'Q2(a)',
    marks: 10,
    wordLimit: 150,
    type: 'Quote-based',
    topic: 'Human Values & Thinkers',
    subtopic: 'Integrity and Knowledge',
    directive: 'Explain',
    questionText: '"Integrity without knowledge is weak and useless, and knowledge without integrity is dangerous and dreadful." - Samuel Johnson. What does this quotation convey to you in the present context of public administration?',
    hindiText: '"ज्ञान के बिना सत्यनिष्ठा कमजोर और बेकार है, और सत्यनिष्ठा के बिना ज्ञान खतरनाक और भयानक है।" - सैमुअल जॉनसन। लोक प्रशासन के वर्तमान संदर्भ में यह उद्धरण आपको क्या संदेश देता है?',
    modelApproach: {
      introduction: 'Deconstruct Samuel Johnson\'s profound aphorism highlighting the indivisible symbiosis between Moral Integrity (the ethical compass) and Knowledge/Competence (the administrative instrument).',
      dimensionsToAddress: [
        'Dimension 1: Integrity without knowledge is weak and useless. A completely honest officer who lacks legal acumen, data proficiency, or financial understanding will cause policy stagnation, succumb to crafty corrupt subordinates, and fail to deliver welfare.',
        'Dimension 2: Knowledge without integrity is dangerous and dreadful. A brilliant, highly educated civil servant devoid of ethical mooring uses their expertise to execute sophisticated white-collar scams, manipulate legal loopholes, and exploit public funds with impunity (e.g. Enron, high-level procurement kickbacks, subprime mortgage crisis).',
        'The Constitutional Ideal: Synthesizing intellect with character (Swami Vivekananda: "Education is character-building").'
      ],
      thinkerQuotesToUse: ['Dr. B.R. Ambedkar: "Educate, Agitate, Organize — but character is higher than intellect."', 'Martin Luther King Jr.: "Intelligence plus character — that is the goal of true education."'],
      diagramSuggestion: '2x2 Matrix showing (Low/High Knowledge vs Low/High Integrity) highlighting "Dangerous Predator" vs "Ideal Civil Servant".',
      examplesToQuote: ['E. Sreedharan (technological mastery combined with incorruptibility) vs corrupt technocrats manipulating municipal software.'],
      conclusion: 'In the era of artificial intelligence, high-frequency trading, and complex financial architecture, knowledge without moral integrity will turn the state into a predatory machine. Integrity must captain the ship of intellect.'
    },
    frequencyScore: 10,
    source: 'UPSC Civil Services Examination Mains 2023 General Studies Paper IV'
  },
  {
    id: 'pyq-uppsc-2022-ei-conflict',
    exam: 'UPPSC',
    year: 2022,
    paper: 'UPPSC Ethics',
    questionNumber: 'Q3',
    marks: 8,
    wordLimit: 125,
    type: 'Theory',
    topic: 'Emotional Intelligence',
    subtopic: 'Conflict Resolution & Crowd Management',
    directive: 'Examine',
    questionText: 'Examine the role of Emotional Intelligence (EI) in conflict resolution and crowd management in sensitive districts of Uttar Pradesh.',
    hindiText: 'उत्तर प्रदेश के संवेदनशील जिलों में संघर्ष समाधान और भीड़ प्रबंधन में संवेगात्मक बुद्धि (इमोशनल इंटेलिजेंस) की भूमिका का परीक्षण कीजिए।',
    modelApproach: {
      introduction: 'Define Emotional Intelligence (Daniel Goleman) as the ability to perceive, understand, manage, and channel emotions in oneself and others to navigate high-stakes crisis environments constructively.',
      dimensionsToAddress: [
        'Self-Regulation under Provocation: In communal flare-ups or highway blockades in sensitive districts (e.g., western UP or purvanchal), an officer must suppress retaliatory anger, maintain composure, and project calm authority.',
        'Empathy & Social Awareness: Reading crowd psychology, distinguishing between genuine aggrieved citizens and mischievous instigators; respecting cultural religious sensitivities during festivals and processions.',
        'Relationship Management: Activating Aman (Peace) Committees, negotiating through trusted local clerics, priests, and elders to defuse rumors before violence erupts.'
      ],
      thinkerQuotesToUse: ['Daniel Goleman: "Emotional intelligence accounts for 80% of leadership success."', 'Aristotle on anger: "Anyone can become angry — that is easy. But to be angry with the right person, to the right degree, at the right time..."'],
      diagramSuggestion: 'Goleman\'s 4 EI Quadrants (Self-Awareness, Self-Management, Social Awareness, Relationship Management) mapped to Riot Prevention.',
      examplesToQuote: ['Police officers pacifying aggressive crowds through respectful dialogue during religious festivals, preventing lathicharge or firing.'],
      conclusion: 'In Uttar Pradesh\'s intricate socio-cultural landscape, the batons of the police cannot establish lasting peace; only emotional intelligence can disarm the incendiary fuel of mistrust.'
    },
    frequencyScore: 9,
    source: 'UPPSC Combined State / Upper Subordinate Services Mains Examination 2022'
  },
  {
    id: 'pyq-uppsc-2021-rti-bottlenecks',
    exam: 'UPPSC',
    year: 2021,
    paper: 'UPPSC Ethics',
    questionNumber: 'Q5',
    marks: 8,
    wordLimit: 125,
    type: 'Theory',
    topic: 'RTI & Transparency',
    subtopic: 'Accountability vs Administrative Paralysis',
    directive: 'Discuss',
    questionText: 'The Right to Information (RTI) Act is a revolutionary weapon for transparency, but frivolous applications and lack of proactive disclosure have created operational bottlenecks. Discuss.',
    hindiText: 'सूचना का अधिकार (आरटीआई) अधिनियम पारदर्शिता का एक क्रांतिकारी हथियार है, लेकिन निरर्थक आवेदनों और सक्रिय प्रकटीकरण की कमी ने परिचालन संबंधी बाधाएं उत्पन्न की हैं। चर्चा कीजिए।',
    modelApproach: {
      introduction: 'Describe RTI Act 2005 as the sunshine legislation that transformed Indian democracy from a culture of official secrecy (Official Secrets Act, 1923) into an open, participatory republic.',
      dimensionsToAddress: [
        'Operational Bottlenecks: Floods of repetitive, vindictive, or frivolous queries by blackmailers; huge pendency before State Information Commissions (SIC); understaffed Public Information Officers (PIOs).',
        'The Core Root Cause: Widespread violation of Section 4(1)(b) regarding mandatory Suo-Motu (proactive) digital disclosure. If government departments proactively published tenders, beneficiary lists, and budget expenditures online, 70% of RTIs would become redundant.',
        'Balanced Solution: Strengthen digital disclosure under Digital India; penalize deliberate delays under Section 20 while instituting filters for vexatious queries as observed by Supreme Court in CBSE vs Aditya Bandopadhyay.'
      ],
      thinkerQuotesToUse: ['Justice K.K. Mathew in Raj Narain case: "In a government of responsibility like ours, where all the agents of the public must be responsible for their conduct, there can but few secrets."', 'Second ARC 1st Report on RTI'],
      diagramSuggestion: 'Vicious Cycle: Weak Suo-Motu Disclosure → Surge in Manual RTIs → Heavy PIO Backlog → Citizens Disillusioned.',
      examplesToQuote: ['Jan Soochna Portal (Rajasthan) and UP e-District portal proactively displaying public schemes and ration records.'],
      conclusion: 'Transparency is not an administrative burden; it is the oxygen of democratic accountability. Strengthening Section 4 proactive disclosure is the singular cure for RTI bottlenecks.'
    },
    frequencyScore: 9,
    source: 'UPPSC Combined State / Upper Subordinate Services Mains Examination 2021'
  },
  {
    id: 'pyq-uppsc-2020-neutrality-vs-commitment',
    exam: 'UPPSC',
    year: 2020,
    paper: 'UPPSC Ethics',
    questionNumber: 'Q2',
    marks: 8,
    wordLimit: 125,
    type: 'Theory',
    topic: 'Foundational Values for Civil Service',
    subtopic: 'Civil Service Neutrality vs Committed Bureaucracy',
    directive: 'Critically Examine',
    questionText: 'Distinguish between "Civil Service Neutrality" and "Committed Bureaucracy". In a developing welfare democracy like India, which orientation is more desirable?',
    hindiText: '"सिविल सेवा तटस्थता" और "प्रतिबद्ध नौकरशाही" के बीच अंतर स्पष्ट कीजिए। भारत जैसे विकासशील कल्याणकारी लोकतंत्र में कौन सा दृष्टिकोण अधिक वांछनीय है?',
    modelApproach: {
      introduction: 'Clarify the two contrasting philosophies: Civil Service Neutrality (the Weberian/Westminster ideal of non-partisan execution of lawful political directives regardless of party affiliation) vs Committed Bureaucracy (ideological or political subservience vs constitutional dedication).',
      dimensionsToAddress: [
        'The Danger of Political Commitment: Bureaucrats committed to a specific ruling party or political patron lead to politicized administration, witch-hunts, cronyism, and complete collapse of the rule of law.',
        'The Indian Nuance (Indira Gandhi era debate): Neutrality must not mean moral indifference, apathy, or lack of zeal for social transformation.',
        'Constitutional Commitment: The ideal Indian civil servant must be Politically Neutral (giving fearless, objective counsel to any elected government) but Constitutionally Committed (fervently devoted to the Preamble, Directive Principles, social justice, and poverty eradication).'
      ],
      thinkerQuotesToUse: ['Sardar Vallabhbhai Patel (Constituent Assembly debate on Article 312): "Do not pull the service into politics; let them work without fear or favor."', 'Max Weber on bureaucratic rational-legal authority'],
      diagramSuggestion: 'Triangular Balance: Apex (Constitutional Commitment) supported by Base (Political Neutrality + Professional Competence).',
      examplesToQuote: ['Officers who fearlessly record dissenting notes against illegal political orders while implementing lawful welfare schemes with missionary passion.'],
      conclusion: 'A civil servant must be an unshakeable neutral umpire in the electoral arena, but a committed warrior for the constitutional emancipation of the poor.'
    },
    frequencyScore: 10,
    source: 'UPPSC Combined State / Upper Subordinate Services Mains Examination 2020'
  }
];
