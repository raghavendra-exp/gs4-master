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
  }
];
