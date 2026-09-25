// src/data/current-affairs/currentAffairsData.ts
// "Turn Current Affairs into Ethics" Engine Database

import { CurrentAffairsEthicsItem } from '../../types/ethics';

export const CURRENT_AFFAIRS_DATA: CurrentAffairsEthicsItem[] = [
  {
    id: 'ca-electoral-bonds',
    title: 'Supreme Court Striking Down the Electoral Bonds Scheme',
    date: 'February 15, 2024',
    source: 'Supreme Court of India (Association for Democratic Reforms v. Union of India, 2024 INSC 113)',
    sourceUrl: 'https://main.sci.gov.in/supremecourt/2018/3342/3342_2018_1_1501_50567_Judgement_15-Feb-2024.pdf',
    verifiedDate: '2024-02-20',
    sourceType: 'Supreme Court Judgment',
    summary: 'A 5-judge Constitution Bench unanimously held that the Electoral Bonds Scheme violated voters fundamental right to information under Article 19(1)(a). The court ruled that anonymous corporate contributions undermine electoral democracy and foster quid-pro-quo arrangements between corporations and ruling parties.',
    ethicalIssues: [
      'Right to know vs Right to donor privacy',
      'Transparency in political funding vs Crony capitalism',
      'Integrity of democratic electoral processes',
      'Level playing field between ruling and opposition parties',
      'Fiduciary accountability of corporations using shareholder funds for political donations'
    ],
    valuesInvolved: ['Transparency', 'Accountability', 'Democratic Probity', 'Integrity', 'Fairness'],
    stakeholders: [
      'Voters and Citizens of India (Sovereign electorate demanding information)',
      'Political Parties (Recipients seeking funds without disclosing donors)',
      'Corporations and Business Houses (Donors balancing commercial interests with regulatory capture)',
      'Election Commission of India (Constitutional watchdog requiring transparency)',
      'State Bank of India (Fiduciary bank issuing the bonds)'
    ],
    conflictingPrinciples: 'Right of citizens to make an informed democratic choice (Article 19(1)(a)) versus the donor\'s asserted right to financial informational privacy and prevention of political victimization.',
    constitutionalValues: ['Democratic Republic', 'Free and Fair Elections', 'Rule of Law', 'Article 19(1)(a)', 'Article 14'],
    administrativeDimension: 'Civil servants, election observers, and tax authorities must prevent regulatory favors, expedited environmental clearances, or procurement awards from functioning as hidden quid-pro-quos for political donations.',
    possibleSolutions: [
      'Establish a National Election Fund with proportional state funding based on verified voter share.',
      'Mandatory real-time digital disclosure of all corporate donations above a modest threshold on ECI portal.',
      'Statutory cap limiting corporate political donations to a percentage of net profits, with mandatory shareholder board approval.'
    ],
    potentialMainsQuestion: '"The health of a democracy is directly proportional to the transparency of its political funding." In light of the Supreme Court ruling on Electoral Bonds, examine the ethical imperatives of financial transparency in elections.',
    caseStudyIdea: 'You are the District Election Officer. An anonymous donor group attempts to distribute gift cards with veiled party symbols through local convenience stores before polling day. Evaluate your administrative options.'
  },
  {
    id: 'ca-ai-deepfakes',
    title: 'Proliferation of AI Deepfakes in Elections and Public Deception',
    date: 'November 2023 – Present',
    source: 'Ministry of Electronics and Information Technology (MeitY) Advisory on Generative AI & Deepfakes',
    sourceUrl: 'https://pib.gov.in',
    verifiedDate: '2024-01-15',
    sourceType: 'Official Government Release',
    summary: 'Widespread emergence of hyper-realistic generative AI voice clones and synthetic videos targeting election candidates, public figures, and common citizens, manipulating public opinion and violating personal dignity.',
    ethicalIssues: [
      'Truth and Veracity in the digital public square',
      'Informed citizen consent versus synthetic psychological manipulation',
      'Right to Privacy and Bodily Integrity (Article 21)',
      'Erosion of epistemic trust in audio-visual evidence and judicial veracity',
      'Accountability of Big Tech platforms vs freedom of satirical speech'
    ],
    valuesInvolved: ['Truth (Satya)', 'Dignity', 'Democratic Integrity', 'Responsibility', 'Accountability'],
    stakeholders: [
      'Citizens and Electorate (Vulnerable to deceptive disinformation)',
      'Victims of Deepfakes (Facing character assassination, harassment, or financial fraud)',
      'Social Media & AI Intermediaries (Platform operators balancing engagement algorithms with content moderation)',
      'Law Enforcement and Cyber Cells (Challenged by rapid attribution and jurisdictional bounds)',
      'Democratic Institutions & Election Commission'
    ],
    conflictingPrinciples: 'Freedom of expression and technological innovation versus protection of truth, individual reputation, and electoral sanctity.',
    constitutionalValues: ['Article 21 (Dignity & Privacy)', 'Article 19(1)(a) (Freedom of speech subject to reasonable restrictions under 19(2))'],
    administrativeDimension: 'District administration and cyber cells must set up rapid-response debunking desks, deploy cryptographic watermarking detection tools, and legally hold platforms accountable under IT Rules.',
    possibleSolutions: [
      'Mandatory algorithmic provenance watermarking and metadata tracking on all synthetic media.',
      'Fast-track takedown timeline (within 2-3 hours) for non-consensual deepfakes affecting elections or personal dignity.',
      'Broad digital literacy campaigns educating citizens on verification techniques before forwarding viral media.'
    ],
    potentialMainsQuestion: 'Artificial Intelligence poses both unprecedented opportunities and existential ethical hazards to democratic discourse. Discuss the ethical dilemmas posed by deepfakes and suggest regulatory mechanisms that balance innovation with human dignity.',
    caseStudyIdea: 'On the eve of polling, a deepfake audio recording of you (the DM) appearing to instruct returning officers to slow down counting in specific booths goes viral on WhatsApp. Detail your 2-hour emergency response plan.'
  },
  {
    id: 'ca-gig-workers-welfare',
    title: 'The Gig Economy and Social Security: Rajasthan & Karnataka Gig Workers Bills',
    date: 'July 2023 – 2024',
    source: 'Rajasthan Platform Based Gig Workers (Registration and Welfare) Act, 2023',
    sourceUrl: 'https://rajasthan.gov.in',
    verifiedDate: '2024-03-01',
    sourceType: 'Parliamentary Report',
    summary: 'State legislation instituting welfare boards, transaction fees on app aggregators, and grievance redressal mechanisms for platform-based delivery workers and drivers who were previously excluded from formal labor protections.',
    ethicalIssues: [
      'Exploitation in algorithmic management (extreme work hours, arbitrary account deactivations)',
      'Erosion of the social contract: "Partner" nomenclature masking lack of healthcare, accident insurance, or retirement pensions',
      'Distributive justice in the platform economy',
      'Corporate social responsibility towards vulnerable gig laborers'
    ],
    valuesInvolved: ['Dignity of Labor', 'Social Justice', 'Fairness', 'Compassion', 'Solidarity'],
    stakeholders: [
      'Gig & Platform Workers (Informal laborers exposed to road accidents and income insecurity)',
      'Tech Aggregator Platforms (Demanding operational flexibility and asset-light models)',
      'Consumers (Benefiting from low prices and instant delivery)',
      'State Welfare Board (Enforcing social security contributions)',
      'Society at large (Preventing precarity of a growing youth workforce)'
    ],
    conflictingPrinciples: 'Free market enterprise flexibility and consumer convenience versus the constitutional duty to guarantee humane conditions of work (Article 42) and living wage (Article 43).',
    constitutionalValues: ['Article 21', 'Article 38', 'Article 42', 'Article 43', 'Social Justice'],
    administrativeDimension: 'Labor welfare commissioners must inspect algorithmic dispatch conditions, ensure fee collection into the welfare fund, and protect workers from retaliatory platform bans.',
    possibleSolutions: [
      'Universal digital portable social security cards linked to e-Shram for all platform workers.',
      'Algorithmic transparency audits ensuring fair wage calculation and human oversight before firing or deactivation.',
      'Mandatory employer-funded emergency medical and accidental insurance.'
    ],
    potentialMainsQuestion: '"The gig economy promises autonomy but frequently delivers precarity." Analyze the ethical obligations of platform companies and the state towards gig workers under constitutional socialist ideals.',
    caseStudyIdea: 'A major food delivery app company refuses to contribute to the state gig welfare fund, threatening to suspend operations and lay off 40,000 youth in your district if forced. As Labor Commissioner, how do you handle the confrontation?'
  }
];
