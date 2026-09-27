// src/data/resources/pdfBooksData.ts
// Comprehensive Database of Curated Official PDF Books, NCERTs, 2nd ARC Reports, and Government Manuals
// Directly mapped to UPSC GS-IV and UPPSC Ethics Modules

import { PdfResourceItem } from '../../types/ethics';

export const PDF_RESOURCES_DATA: PdfResourceItem[] = [
  {
    id: 'ncert-psy-12',
    title: 'NCERT Class XII Psychology: Psychology',
    hindiTitle: 'एनसीईआरटी कक्षा 12 मनोविज्ञान',
    category: 'NCERT Textbook',
    authorOrBody: 'National Council of Educational Research and Training (NCERT)',
    publicationYear: '2023-24 Edition',
    officialUrl: 'https://ncert.nic.in/textbook.php?lepy1=0-9',
    pdfDirectUrl: 'https://ncert.nic.in/textbook.php?lepy1=6-9',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['Attitude', 'Emotional Intelligence', 'Persuasion & Nudge', 'Foundational Values'],
    description: 'The definitive foundational text for Syllabus Section 2 (Attitude) and Section 4 (Emotional Intelligence). Explains psychological dynamics in accessible, verified academic terminology.',
    hindiDescription: 'अभिवृत्ति (एटीट्यूड), सामाजिक प्रभाव, प्रबोधन और संवेगात्मक बुद्धि के लिए एनसीईआरटी की सबसे महत्वपूर्ण आधिकारिक पाठ्यपुस्तक।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 6',
        chapterTitle: 'Attitude and Social Cognition',
        gs4Relevance: 'The absolute core for UPSC GS-IV Syllabus Unit 2. Directly covers the CAB Model (Cognitive, Affective, Behavioral), Attitude Formation & Change, Balance Theory (Fritz Heider), Cognitive Dissonance (Festinger), and Social Facilitation.',
        keyTakeaway: 'Master the CAB model and cognitive dissonance mechanisms to score maximum marks in attitude questions.'
      },
      {
        chapterNumber: 'Chapter 7',
        chapterTitle: 'Social Influence and Group Processes',
        gs4Relevance: 'Covers the mechanics of Social Influence: Conformity, Compliance, Obedience (Milgram experiment), Group Polarization, Groupthink, and Intergroup Conflict.',
        keyTakeaway: 'Essential for understanding how peer pressure and administrative authority affect bureaucratic decision-making.'
      },
      {
        chapterNumber: 'Chapter 1',
        chapterTitle: 'Variations in Psychological Attributes',
        gs4Relevance: 'Explains the technical difference between Aptitude, Interest, and Intelligence; defines Emotional Intelligence (Salovey & Mayer model).',
        keyTakeaway: 'Provides the crisp 2-line technical definition needed for intro hooks in UPSC/UPPSC answers.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Free official open access on NCERT portal. Read Chapters 1, 6, and 7 selectively.',
    languageAvailable: ['English', 'Hindi']
  },
  {
    id: 'ncert-pol-11',
    title: 'NCERT Class XI Political Science: Political Theory',
    hindiTitle: 'एनसीईआरटी कक्षा 11 राजनीति विज्ञान: राजनीतिक सिद्धांत',
    category: 'NCERT Textbook',
    authorOrBody: 'National Council of Educational Research and Training (NCERT)',
    publicationYear: '2023-24 Edition',
    officialUrl: 'https://ncert.nic.in/textbook.php?kepo1=0-8',
    pdfDirectUrl: 'https://ncert.nic.in/textbook.php?kepo1=4-8',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['Theories & Thinkers', 'Foundational Values', 'Case Studies'],
    description: 'The cleanest, most lucid conceptual grounding for political and moral philosophy: Justice, Liberty, Equality, Rights, and the Common Good.',
    hindiDescription: 'न्याय सिद्धांत, जॉन रॉल्स का अज्ञानता का पर्दा, स्वतंत्रता, समानता एवं नागरिकता के दार्शनिक आधार हेतु सर्वश्रेष्ठ पुस्तक।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 4',
        chapterTitle: 'Social Justice',
        gs4Relevance: 'The finest explanation of John Rawls’ Theory of Justice, the "Veil of Ignorance", Difference Principle, and Distributive Justice for GS-IV.',
        keyTakeaway: 'Use Rawls’ Veil of Ignorance as your primary ethical test in welfare and displacement case studies.'
      },
      {
        chapterNumber: 'Chapter 2',
        chapterTitle: 'Freedom (Liberty)',
        gs4Relevance: 'Examines Negative vs Positive Liberty and J.S. Mill’s Harm Principle with practical dilemmas.',
        keyTakeaway: 'Crucial for justifying state intervention vs civil liberties in pandemic lockdowns or public health laws.'
      },
      {
        chapterNumber: 'Chapter 3',
        chapterTitle: 'Equality',
        gs4Relevance: 'Examines formal legal equality vs substantive equality, and moral justifications for affirmative action under Article 15/16.',
        keyTakeaway: 'Helps distinguish between mere equal treatment and equitable justice for weaker sections.'
      },
      {
        chapterNumber: 'Chapter 5',
        chapterTitle: 'Rights',
        gs4Relevance: 'Differentiates between Legal Rights, Moral Rights, and Inalienable Human Rights; explains why rights imply corresponding duties.',
        keyTakeaway: 'Vital for questions on human rights vs bureaucratic formalism in welfare distribution.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Free official open access on NCERT portal. Read Chapters 2, 3, 4, and 5.',
    languageAvailable: ['English', 'Hindi']
  },
  {
    id: 'ncert-psy-11',
    title: 'NCERT Class XI Psychology: Introduction to Psychology',
    hindiTitle: 'एनसीईआरटी कक्षा 11 मनोविज्ञान: मनोविज्ञान का परिचय',
    category: 'NCERT Textbook',
    authorOrBody: 'National Council of Educational Research and Training (NCERT)',
    publicationYear: '2023-24 Edition',
    officialUrl: 'https://ncert.nic.in/textbook.php?kepy1=0-9',
    pdfDirectUrl: 'https://ncert.nic.in/textbook.php?kepy1=9-9',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['Emotional Intelligence', 'Ethics Fundamentals', 'Dilemma Engine'],
    description: 'Foundational text covering human motivation, cognitive reasoning, biological bases of behavior, and emotion management.',
    hindiDescription: 'संवेग, प्रेरणा, निर्णय-निर्माण एवं संज्ञानात्मक पूर्वाग्रहों की वैज्ञानिक समझ के लिए महत्वपूर्ण स्रोत।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 9',
        chapterTitle: 'Motivation and Emotion',
        gs4Relevance: 'Explores physiological arousal vs cognitive appraisals of emotion (James-Lange, Cannon-Bard, Schachter-Singer theories); conflict management and anger regulation.',
        keyTakeaway: 'Use to substantiate the physiological and cognitive dimensions of Emotional Intelligence in crisis de-escalation.'
      },
      {
        chapterNumber: 'Chapter 8',
        chapterTitle: 'Thinking and Problem Solving',
        gs4Relevance: 'Cognitive biases, heuristics in decision-making, creative thinking, and overcoming mental sets in problem resolution.',
        keyTakeaway: 'Directly helps in identifying administrative blind spots and confirmation bias in case study dilemmas.'
      }
    ],
    examImportance: 'High Value Reference (Priority 2)',
    downloadNote: 'Free official open access on NCERT portal. Read Chapter 9 (Motivation & Emotion).',
    languageAvailable: ['English', 'Hindi']
  },
  {
    id: 'ncert-soc-11',
    title: 'NCERT Class XI Sociology: Introducing Sociology',
    hindiTitle: 'एनसीईआरटी कक्षा 11 समाजशास्त्र: समाजशास्त्र परिचय',
    category: 'NCERT Textbook',
    authorOrBody: 'National Council of Educational Research and Training (NCERT)',
    publicationYear: '2023-24 Edition',
    officialUrl: 'https://ncert.nic.in/textbook.php?kesy1=0-5',
    pdfDirectUrl: 'https://ncert.nic.in/textbook.php?kesy1=4-5',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['Human Values', 'Ethics and Human Interface'],
    description: 'Examines the socialization process and how social institutions inculcate moral norms, values, and ethical compasses.',
    hindiDescription: 'मूल्य संवर्धन में परिवार, समाज और शिक्षण संस्थानों की भूमिका का समाजशास्त्रीय विश्लेषण।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 4',
        chapterTitle: 'Culture and Socialisation',
        gs4Relevance: 'Directly addresses UPSC Syllabus line: "Role of family, society and educational institutions in inculcating values." Explains primary vs secondary socialization.',
        keyTakeaway: 'Provides academic terminology on how cultural norms become internal moral conscience.'
      },
      {
        chapterNumber: 'Chapter 2',
        chapterTitle: 'Terms, Concepts and their Use in Sociology',
        gs4Relevance: 'Clarifies the distinction between Social Norms, Sanctions, Values, and Social Control mechanisms.',
        keyTakeaway: 'Use to explain how societal expectations constrain or enable administrative courage.'
      }
    ],
    examImportance: 'High Value Reference (Priority 2)',
    downloadNote: 'Free official open access on NCERT portal. Read Chapter 4.',
    languageAvailable: ['English', 'Hindi']
  },
  {
    id: 'second-arc-4th-report',
    title: 'Second ARC 4th Report: Ethics in Governance',
    hindiTitle: 'द्वितीय प्रशासनिक सुधार आयोग (2nd ARC): चौथी रिपोर्ट - शासन में नैतिकता',
    category: 'Second ARC Report',
    authorOrBody: 'Second Administrative Reforms Commission, Government of India (Veerappa Moily)',
    publicationYear: '2007',
    officialUrl: 'https://darpg.gov.in/sites/default/files/ethics_in_governance.pdf',
    pdfDirectUrl: 'https://darpg.gov.in/sites/default/files/ethics_in_governance.pdf',
    fileFormat: 'PDF',
    pertainingModules: ['Probity & Governance', 'Corruption', 'RTI & Codes', 'Case Studies'],
    description: 'The single most authoritative and cited government document in UPSC GS-IV and UPPSC Ethics. The definitive blueprint on systemic corruption, vigilance, and civil service ethics.',
    hindiDescription: 'यूपीएससी एवं यूपीपीएससी नीतिशास्त्र के लिए सबसे प्रामाणिक एवं अनिवार्य सरकारी रिपोर्ट। भ्रष्टाचार, सतर्कता एवं लोक सेवा सुधार का मूल स्रोत।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 2',
        chapterTitle: 'Ethical Framework for Good Governance',
        gs4Relevance: 'Endorses the Nolan Committee Seven Principles for Indian civil services; outlines the proposed Civil Services Code of Ethics and Public Services Bill.',
        keyTakeaway: 'Must quote in all questions on civil service values, code of ethics vs conduct, and institutional integrity.'
      },
      {
        chapterNumber: 'Chapter 3',
        chapterTitle: 'Legal Framework for Fighting Corruption',
        gs4Relevance: 'Recommends amending Article 311, making sanction to prosecute time-bound, confiscating corrupt properties, and criminalizing collusive bribery.',
        keyTakeaway: 'The standard source for institutional anti-corruption reform solutions in 10-mark and 20-mark answers.'
      },
      {
        chapterNumber: 'Chapter 4',
        chapterTitle: 'Institutional Framework',
        gs4Relevance: 'Critique and strengthening of Lokpal, Lokayukta, CVC, CBI, and Special Courts under the Prevention of Corruption Act.',
        keyTakeaway: 'Provides concrete institutional recommendations for ombudsman and vigilance questions.'
      },
      {
        chapterNumber: 'Chapter 5',
        chapterTitle: 'Social Capital & Whistleblower Protection',
        gs4Relevance: 'Detailed roadmap for a statutory Whistleblowers Protection Act, witness protection, and citizen vigilance.',
        keyTakeaway: 'Essential for whistleblower dilemmas and corporate governance case studies.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Free official 295-page PDF from DARPG. Read the Executive Summary and Chapters 2, 3, 4 carefully.',
    languageAvailable: ['English']
  },
  {
    id: 'second-arc-1st-report',
    title: 'Second ARC 1st Report: Right to Information - Master Key to Good Governance',
    hindiTitle: 'द्वितीय प्रशासनिक सुधार आयोग: पहली रिपोर्ट - सूचना का अधिकार',
    category: 'Second ARC Report',
    authorOrBody: 'Second Administrative Reforms Commission, Government of India',
    publicationYear: '2006',
    officialUrl: 'https://darpg.gov.in/sites/default/files/right_to_information.pdf',
    pdfDirectUrl: 'https://darpg.gov.in/sites/default/files/right_to_information.pdf',
    fileFormat: 'PDF',
    pertainingModules: ['RTI & Codes', 'Probity & Governance'],
    description: 'Comprehensive analysis of the Right to Information Act, 2005. Pinpoints bottlenecks in implementation, Section 4 suo motu disclosure, and official secrecy.',
    hindiDescription: 'सूचना का अधिकार (आरटीआई) अधिनियम, 2005 की कमियों, धारा 4 स्वैच्छिक प्रकटीकरण एवं पारदर्शिता पर विस्तृत रिपोर्ट।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 2',
        chapterTitle: 'Official Secrets Act and Disclosure Regime',
        gs4Relevance: 'Critique of the colonial Official Secrets Act, 1923; recommends repealing Section 5 and replacing it with transparent national security exemptions.',
        keyTakeaway: 'Quote when discussing the clash between bureaucratic culture of secrecy vs democratic transparency.'
      },
      {
        chapterNumber: 'Chapter 3',
        chapterTitle: 'Implementation of the RTI Act',
        gs4Relevance: 'Tackles Public Information Officer (PIO) capacity, filing fees, frivolous applications, and digitizing records under Section 4(1)(b).',
        keyTakeaway: 'The best source of solutions for UPSC/UPPSC questions on RTI pendency and operational hurdles.'
      }
    ],
    examImportance: 'High Value Reference (Priority 2)',
    downloadNote: 'Free official PDF from DARPG. Read Chapters 1, 2, and 3.',
    languageAvailable: ['English']
  },
  {
    id: 'second-arc-12th-report',
    title: 'Second ARC 12th Report: Citizen Centric Administration - The Heart of Governance',
    hindiTitle: 'द्वितीय प्रशासनिक सुधार आयोग: 12वीं रिपोर्ट - नागरिक केंद्रित प्रशासन',
    category: 'Second ARC Report',
    authorOrBody: 'Second Administrative Reforms Commission, Government of India',
    publicationYear: '2009',
    officialUrl: 'https://darpg.gov.in/sites/default/files/citizen_centric_administration.pdf',
    pdfDirectUrl: 'https://darpg.gov.in/sites/default/files/citizen_centric_administration.pdf',
    fileFormat: 'PDF',
    pertainingModules: ['Probity & Governance', 'Work Culture', 'UPPSC Ethics Hub'],
    description: 'The foundation for Citizen\'s Charters, the Sevottam Model (IS 15700:2005), public grievance redressal, and transforming bureaucratic culture.',
    hindiDescription: 'सिटिजन चार्टर, सेवोत्तम मॉडल (Sevottam), लोक शिकायत निवारण एवं नागरिक केंद्रित प्रशासनिक संस्कृति का आधिकारिक दस्तावेज।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 4',
        chapterTitle: 'Citizen\'s Charters and the Sevottam Model',
        gs4Relevance: 'Examines why Citizen\'s Charters failed in India (lack of consultation, no compensation for delay); formulates the 3-pillar Sevottam framework.',
        keyTakeaway: 'Directly answers UPSC 2019 & 2014 questions on Citizen\'s Charters and service delivery quality.'
      },
      {
        chapterNumber: 'Chapter 5',
        chapterTitle: 'Redressal of Public Grievances',
        gs4Relevance: 'Proposes statutory institutional mechanisms for fast-tracking complaints, independent grievance ombudsmen, and citizen feedback loops.',
        keyTakeaway: 'Essential for analyzing IGRS, CM Helpline 1076, and CPGRAMS in UPPSC and UPSC.'
      },
      {
        chapterNumber: 'Chapter 6',
        chapterTitle: 'Social Audit and Citizen Participation',
        gs4Relevance: 'Role of Gram Sabhas and community-led social audits in preventing diversion of welfare funds (e.g. MGNREGS audit model).',
        keyTakeaway: 'Use as a prime institutional safeguard in welfare diversion and corruption case studies.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Free official PDF from DARPG. Chapters 4 and 5 are mandatory reading.',
    languageAvailable: ['English']
  },
  {
    id: 'cvc-vigilance-manual',
    title: 'Central Vigilance Commission: Vigilance Manual (Updated Edition)',
    hindiTitle: 'केंद्रीय सतर्कता आयोग (CVC) सतर्कता नियमावली',
    category: 'Government Manual & Policy',
    authorOrBody: 'Central Vigilance Commission (CVC), Government of India',
    publicationYear: '2021',
    officialUrl: 'https://cvc.gov.in/guidelines/vigilance-manual',
    pdfDirectUrl: 'https://cvc.gov.in/sites/default/files/vigilance_manual_2021.pdf',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['Corruption', 'Public Funds', 'Probity & Governance'],
    description: 'The statutory manual defining disciplinary procedures, vigilance classifications, procurement ethics, and whistleblower protections in India.',
    hindiDescription: 'निवारक सतर्कता (प्रिवेंटिव विजिलेंस), सार्वजनिक खरीद में शुचिता और सीवीसी के विधिक प्रावधानों की आधिकारिक मार्गदर्शिका।',
    recommendedChapters: [
      {
        chapterNumber: 'Chapter 1',
        chapterTitle: 'Concept of Vigilance and Administrative Corruption',
        gs4Relevance: 'Defines the Three Wings of Vigilance: Punitive Vigilance, Preventive Vigilance, and Surveillance Vigilance.',
        keyTakeaway: 'Essential conceptual distinction for GS-IV questions on anti-corruption strategies.'
      },
      {
        chapterNumber: 'Chapter 2',
        chapterTitle: 'Preventive Vigilance Framework & Public Procurement',
        gs4Relevance: 'SOP re-engineering, eliminating human discretion, GeM procurement portal, and Integrity Pacts in public tenders.',
        keyTakeaway: 'Use to propose concrete, SOP-based solutions in tender manipulation case studies.'
      },
      {
        chapterNumber: 'Chapter 11',
        chapterTitle: 'Public Interest Disclosure and Protection of Informers (PIDPI)',
        gs4Relevance: 'Details the operational protocol for handling whistleblower complaints while shielding the informer’s identity.',
        keyTakeaway: 'Critical for answering whistleblowing case studies where an officer discovers internal scam.'
      }
    ],
    examImportance: 'High Value Reference (Priority 2)',
    downloadNote: 'Official download available directly on the CVC portal.',
    languageAvailable: ['English']
  },
  {
    id: 'nolan-committee-report',
    title: 'The Seven Principles of Public Life (Lord Nolan Committee 1st Report)',
    hindiTitle: 'सार्वजनिक जीवन के 7 सिद्धांत (लॉर्ड नोलन समिति रिपोर्ट)',
    category: 'Government Manual & Policy',
    authorOrBody: 'Committee on Standards in Public Life, United Kingdom',
    publicationYear: '1995',
    officialUrl: 'https://www.gov.uk/government/publications/the-7-principles-of-public-life',
    fileFormat: 'Online Reader',
    pertainingModules: ['Foundational Values', 'Probity & Governance', 'UPPSC Ethics Hub'],
    description: 'The historic report that established the universal gold standard of ethical principles for holders of public office across democracies worldwide.',
    hindiDescription: 'सार्वजनिक जीवन के 7 वैश्विक मानक: निःस्वार्थता, सत्यनिष्ठा, निष्पक्षता, जवाबदेही, खुलापन, ईमानदारी और नेतृत्व।',
    recommendedChapters: [
      {
        chapterNumber: 'Section 1',
        chapterTitle: 'The Seven Principles of Public Life',
        gs4Relevance: 'Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership defined with exacting clarity.',
        keyTakeaway: 'Must memorize the exact definitions; repeatedly asked in UPSC (2018, 2022) and UPPSC (2020, 2023).'
      },
      {
        chapterNumber: 'Section 2',
        chapterTitle: 'Codes of Conduct, Independent Scrutiny and Public Appointments',
        gs4Relevance: 'How to internalize abstract values into institutional appointments, gifts registers, and conflict-of-interest declarations.',
        keyTakeaway: 'Provides international best practice comparisons for Indian administrative reforms.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Freely readable on UK Gov Standards in Public Life portal.',
    languageAvailable: ['English']
  },
  {
    id: 'unodc-e4j-integrity-series',
    title: 'UNODC Education for Justice (E4J): Integrity & Ethics Module Series',
    hindiTitle: 'संयुक्त राष्ट्र (UNODC) शिक्षा एवं न्याय: सत्यनिष्ठा एवं नीतिशास्त्र मॉड्यूल',
    category: 'International Ethics (UNODC)',
    authorOrBody: 'United Nations Office on Drugs and Crime (UNODC)',
    publicationYear: '2019-2022',
    officialUrl: 'https://www.unodc.org/e4j/en/tertiary/integrity-ethics.html',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['Theories & Thinkers', 'International Ethics', 'Case Studies'],
    description: 'An extraordinary open-access university curriculum created by global ethics scholars covering normative ethical theories, whistleblowing, and public sector dilemmas.',
    hindiDescription: 'संयुक्त राष्ट्र द्वारा तैयार किया गया वैश्विक नीतिशास्त्र पाठ्यक्रम: कर्तव्यशास्त्र, उपयोगितावाद, सद्गुण नीतिशास्त्र एवं लोक क्षेत्र नैतिकता।',
    recommendedChapters: [
      {
        chapterNumber: 'Module 1',
        chapterTitle: 'Introduction and Conceptual Framework (Ethics vs Morality)',
        gs4Relevance: 'Comprehensive distinction between Personal Morality, Professional Ethics, Social Norms, and Legal Mandates.',
        keyTakeaway: 'Use to structure high-scoring intros in Ethics vs Morality theory questions.'
      },
      {
        chapterNumber: 'Module 2',
        chapterTitle: 'Ethical Universalism vs Cultural Relativism',
        gs4Relevance: 'Addresses whether human rights are culturally contingent; crucial for Fifth Schedule tribal dilemmas and gender rights.',
        keyTakeaway: 'Helps navigate cultural conflicts without falling into moral relativism.'
      },
      {
        chapterNumber: 'Module 6',
        chapterTitle: 'Whistleblowing in the Public Sector',
        gs4Relevance: 'Explores the ethical dilemma between organizational loyalty vs duty to the public; retaliatory mechanisms and safe reporting channels.',
        keyTakeaway: 'Ideal framework for solving corporate fraud and procurement kickback case studies.'
      },
      {
        chapterNumber: 'Module 13',
        chapterTitle: 'Public Sector Ethics and Codes of Conduct',
        gs4Relevance: 'International comparative survey of how democracies handle revolving doors, post-retirement jobs, and nepotism.',
        keyTakeaway: 'Provides cutting-edge global examples (OECD, UN) to enrich GS-IV answers.'
      }
    ],
    examImportance: 'High Value Reference (Priority 2)',
    downloadNote: 'Free open access modules with downloadable PDF lecture notes on UNODC website.',
    languageAvailable: ['English']
  },
  {
    id: 'constitution-of-india-bare-act',
    title: 'The Constitution of India (Official Ministry of Law & Justice Bare Act)',
    hindiTitle: 'भारत का संविधान (विधि एवं न्याय मंत्रालय आधिकारिक बेयर एक्ट)',
    category: 'Constitutional & Legal Document',
    authorOrBody: 'Legislative Department, Ministry of Law and Justice, Government of India',
    publicationYear: '2024 Edition',
    officialUrl: 'https://legislative.gov.in/constitution-of-india/',
    pdfDirectUrl: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7abb748bb2802e3be14e6/uploads/2024/05/2024050195.pdf',
    fileFormat: 'PDF',
    pertainingModules: ['Foundational Values', 'Case Studies', 'Probity & Governance'],
    description: 'The supreme source of Constitutional Morality and ethical guidance for public administrators in the Republic of India.',
    hindiDescription: 'लोक सेवकों के लिए संवैधानिक नैतिकता एवं नैतिक मार्गदर्शन का सर्वोच्च प्रामाणिक स्रोत।',
    recommendedChapters: [
      {
        chapterNumber: 'Preamble',
        chapterTitle: 'The Sovereign Ethical Compass of the Republic',
        gs4Relevance: 'Justice (Social, Economic, Political), Liberty, Equality, Fraternity, Dignity of the Individual.',
        keyTakeaway: 'Quote in the conclusion of any case study where vulnerable citizen rights are threatened.'
      },
      {
        chapterNumber: 'Part III & IV',
        chapterTitle: 'Fundamental Rights & Directive Principles of State Policy',
        gs4Relevance: 'Articles 14, 15, 19, 21, 25, 38, 39, 46, 47, 48A.',
        keyTakeaway: 'Use to establish the legal and moral bedrock of your courses of action in case studies.'
      },
      {
        chapterNumber: 'Part XIV',
        chapterTitle: 'Articles 311 & 312: Services Under the Union & States',
        gs4Relevance: 'Civil service safeguards against arbitrary dismissal; Sardar Patel’s constitutional vision of the Steel Frame.',
        keyTakeaway: 'Directly applicable to questions on civil service autonomy vs political pressure.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Official bilingual PDF directly hosted on Ministry of Law and Justice portal.',
    languageAvailable: ['English', 'Hindi']
  },
  {
    id: 'niti-aayog-responsible-ai',
    title: 'NITI Aayog: Responsible AI for All (Approach & Principles)',
    hindiTitle: 'नीति आयोग: सभी के लिए जिम्मेदार कृत्रिम बुद्धिमत्ता (AI) सिद्धांत',
    category: 'Government Manual & Policy',
    authorOrBody: 'NITI Aayog, Government of India',
    publicationYear: '2021',
    officialUrl: 'https://www.niti.gov.in/sites/default/files/2021-02/Responsible-AI-22022021.pdf',
    pdfDirectUrl: 'https://www.niti.gov.in/sites/default/files/2021-02/Responsible-AI-22022021.pdf',
    fileFormat: 'PDF',
    pertainingModules: ['Technology & AI Case Studies', 'Current Affairs Ethics'],
    description: 'Government of India’s official framework on ethics in artificial intelligence, algorithmic bias, exclusion in welfare, and data protection.',
    hindiDescription: 'कल्याणकारी योजनाओं में एआई और एल्गोरिदम के नैतिक उपयोग, डेटा न्याय और पूर्वाग्रह निवारण पर भारत सरकार की आधिकारिक रिपोर्ट।',
    recommendedChapters: [
      {
        chapterNumber: 'Section 3',
        chapterTitle: 'Principles of Responsible AI in Governance',
        gs4Relevance: 'Principle of Safety, Equality & Non-Discrimination, Privacy, and Human-in-the-Loop oversight.',
        keyTakeaway: 'Directly quote in contemporary GS-IV case studies on facial recognition, welfare biometric errors, and deepfakes.'
      }
    ],
    examImportance: 'Supplementary / Quote Value (Priority 3)',
    downloadNote: 'Free official PDF on NITI Aayog portal.',
    languageAvailable: ['English']
  },
  {
    id: 'upsc-official-syllabus-pyq',
    title: 'UPSC Civil Services Examination Official Syllabus & Mains PYQs (2013-2024)',
    hindiTitle: 'संघ लोक सेवा आयोग (UPSC) मुख्य परीक्षा आधिकारिक पाठ्यक्रम एवं पूर्व वर्ष प्रश्न पत्र',
    category: 'Official Exam Syllabus & PYQ',
    authorOrBody: 'Union Public Service Commission (UPSC)',
    publicationYear: '2024',
    officialUrl: 'https://upsc.gov.in/examinations/previous-question-papers',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['PYQ Database', 'Mains Answer Lab', 'All Modules'],
    description: 'The authentic source of UPSC GS Paper-IV questions and the official syllabus notification.',
    hindiDescription: 'यूपीएससी सिविल सेवा मुख्य परीक्षा सामान्य अध्ययन प्रश्नपत्र-4 के सभी आधिकारिक प्रश्नपत्र (2013-2024)।',
    recommendedChapters: [
      {
        chapterNumber: 'Notification',
        chapterTitle: 'GS-IV Detailed Syllabus Headings',
        gs4Relevance: 'Understanding the exact boundaries of Section A (Theory) and Section B (Case Studies).',
        keyTakeaway: 'Always keep your study aligned to the exact wording of the commission’s notification.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Direct official downloads on UPSC website.',
    languageAvailable: ['English', 'Hindi']
  },
  {
    id: 'uppsc-official-syllabus-pyq',
    title: 'UPPSC Combined State / Upper Subordinate Official Syllabus & Question Papers',
    hindiTitle: 'उत्तर प्रदेश लोक सेवा आयोग (UPPSC PCS) आधिकारिक पाठ्यक्रम एवं प्रश्न पत्र',
    category: 'Official Exam Syllabus & PYQ',
    authorOrBody: 'Uttar Pradesh Public Service Commission (UPPSC)',
    publicationYear: '2024',
    officialUrl: 'https://uppsc.up.nic.in/',
    fileFormat: 'Official Portal / PDF',
    pertainingModules: ['UPPSC Ethics Hub', 'PYQ Database'],
    description: 'Official notification, paper pattern (8-mark 125-word & 12-mark 200-word questions), and state administration syllabus for UP PCS.',
    hindiDescription: 'यूपी पीसीएस मुख्य परीक्षा प्रश्नपत्र-6 / प्रश्नपत्र-4 का आधिकारिक पाठ्यक्रम एवं पूर्व वर्ष प्रश्न।',
    recommendedChapters: [
      {
        chapterNumber: 'Syllabus',
        chapterTitle: 'UPPSC Paper VI (Ethics, Integrity and Aptitude)',
        gs4Relevance: 'Syllabus lines emphasizing UP public administration, vigilance, and grassroots governance.',
        keyTakeaway: 'Essential for candidates preparing simultaneously for UPSC and UPPSC PCS.'
      }
    ],
    examImportance: 'Essential Reading (Priority 1)',
    downloadNote: 'Direct official downloads on UPPSC official portal.',
    languageAvailable: ['English', 'Hindi']
  }
];
