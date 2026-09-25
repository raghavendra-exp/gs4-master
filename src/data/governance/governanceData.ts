// src/data/governance/governanceData.ts
// Comprehensive Database of Probity, Governance, RTI, Codes, and Second ARC Reports

import { GovernanceModuleItem } from '../../types/ethics';

export const GOVERNANCE_MODULES: GovernanceModuleItem[] = [
  {
    id: 'gov-nolan',
    title: 'The Nolan Committee Principles of Public Life',
    topic: 'Nolan Principles',
    summary: 'Formulated in 1995 by Lord Nolan in the UK, these Seven Principles constitute the globally benchmarked code of ethical standards expected of all holders of public office.',
    officialProvisions: [
      '1. Selflessness: Holders of public office should act solely in terms of the public interest.',
      '2. Integrity: Holders of public office must avoid placing themselves under any obligation to people or organisations that might try inappropriately to influence them.',
      '3. Objectivity: Holders of public office must act and take decisions impartially, fairly and on merit, using the best evidence and without discrimination or bias.',
      '4. Accountability: Holders of public office are accountable to the public for their decisions and actions and must submit themselves to whatever scrutiny is appropriate.',
      '5. Openness: Holders of public office should act and take decisions in an open and transparent manner. Information should not be withheld from the public unless there are clear and lawful reasons for so doing.',
      '6. Honesty: Holders of public office should be truthful.',
      '7. Leadership: Holders of public office should exhibit these principles in their own behaviour. They should actively promote and robustly support the principles and be willing to challenge poor behaviour wherever it occurs.'
    ],
    institutionalMechanisms: [
      'Adoption in the draft Public Services Bill (Second ARC 10th Report)',
      'Central Civil Services (Conduct) Rules, Rule 3',
      'Mandatory asset declarations for all Group A and B civil servants'
    ],
    challenges: [
      'Lack of legal enforceability for pure aspirational codes',
      'Informal bureaucratic subcultures prioritizing loyalty to hierarchical superiors over public selflessness',
      'Opaque political-bureaucratic nexus in procurement and transfers'
    ],
    reformsSuggested: [
      'Enact a statutory Public Services Code with an independent Civil Services Authority',
      'Institutionalize ethical audits as part of annual departmental evaluations',
      'Incorporate 360-degree ethical feedback in performance appraisals (APAR)'
    ],
    secondARCLink: 'Second ARC 4th Report extensively endorses the Seven Nolan Principles as foundational to ethical governance in India.',
    caseIllustration: 'An officer disclosing an investment in a green-tech firm and voluntarily stepping aside from the departmental tender committee evaluating solar equipment bids (Exemplifying Integrity, Selflessness, and Openness).'
  },
  {
    id: 'gov-2nd-arc-ethics',
    title: 'Second ARC 4th Report: "Ethics in Governance"',
    topic: 'Second ARC 4th Report',
    summary: 'The landmark blueprint submitted in 2007 by the Second Administrative Reforms Commission under Veerappa Moily, identifying systemic causes of corruption in India and proposing structural anti-corruption remedies.',
    officialProvisions: [
      'Constitutional reform: Amend Article 311 to expedite departmental inquiries against corrupt officers while maintaining natural justice protections.',
      'Creation of the Lokpal at the Centre and statutory Lokayuktas in all states with independent investigative wings.',
      'Strengthening Prevention of Corruption Act (PCA) by criminalizing collusive bribery and making sanction to prosecute time-bound (max 3 months).',
      'Confiscation of properties acquired through corrupt means before final judicial disposal where prima facie illicit wealth is proven.',
      'Systemic electoral reforms: State funding of elections, fast-tracking disqualification of candidates facing serious criminal charges.'
    ],
    institutionalMechanisms: [
      'Lokpal and Lokayuktas Act, 2013',
      'Central Vigilance Commission (CVC) statutory powers under CVC Act 2003',
      'Special CBI and State Anti-Corruption Bureau courts'
    ],
    challenges: [
      'Delays in granting sanction to prosecute by competent ministries under Section 17A of PCA',
      'Vacancies in Lokpal and State Lokayuktas and inadequate investigative staff',
      'Under-utilization of asset confiscation provisions'
    ],
    reformsSuggested: [
      'Automated deemed sanction if ministry fails to decide within 90 days',
      'Independent prosecution directorate separated from executive police control',
      'Comprehensive witness and whistleblower protection fund'
    ],
    secondARCLink: 'Direct recommendations from Chapters 2, 3, and 4 of the 4th Report.',
    caseIllustration: 'An officer identifying collusive bidding between local contractors and invoking 2nd ARC guidelines to refer the syndicate to the Competition Commission of India and CVC.'
  },
  {
    id: 'gov-rti',
    title: 'Right to Information (RTI) Act, 2005 & Culture of Transparency',
    topic: 'RTI',
    summary: 'The statutory embodiment of Article 19(1)(a), giving every Indian citizen the legal right to inspect public works, obtain documents, and demand accountability from public authorities.',
    officialProvisions: [
      'Section 4(1)(b): Proactive voluntary disclosure (Suo Motu disclosure) by all public authorities across 17 categories.',
      'Section 6 & 7: Time-bound disposal (30 days normal, 48 hours where life and liberty are at stake).',
      'Section 8: Limited, narrow exemptions (national security, commercial confidence, personal privacy without public interest).',
      'Section 20: Personal monetary penalty (₹250/day up to ₹25,000) on Public Information Officers (PIOs) for deliberate refusal or destruction of information.'
    ],
    institutionalMechanisms: [
      'Central Information Commission (CIC) and State Information Commissions (SICs)',
      'Public Information Officers (PIOs) and First Appellate Authorities (FAAs) in every public office',
      'Online RTI Portal (rtionline.gov.in) for paperless filing'
    ],
    challenges: [
      'Massive backlog of second appeals in State Information Commissions',
      'Frivolous or black-mailing RTI applications by local mafias versus physical attacks and murders of genuine RTI whistleblowers',
      'Poor record management and reluctance towards proactive Section 4 suo motu disclosure',
      '2019 RTI amendments altering tenure and salary autonomy of Information Commissioners'
    ],
    reformsSuggested: [
      'Strict digitisation and indexing of all government files within 6 months',
      'Proactive publication of all welfare beneficiary lists, tenders above ₹5 lakhs, and transfer orders',
      'Dedicated police protection protocol for RTI activists facing threats'
    ],
    secondARCLink: 'Second ARC 1st Report "Right to Information: Master Key to Good Governance" dedicated entirely to strengthening RTI implementation.',
    caseIllustration: 'A citizen discovering through RTI that a municipal road was billed three times in 18 months despite never being paved, leading to immediate vigilance recovery and blacklisting of the contractor.'
  },
  {
    id: 'gov-citizen-charters',
    title: 'Citizen\'s Charters and the Sevottam Model',
    topic: 'Citizen Charters',
    summary: 'A formal commitment by a public agency regarding the standards, quality, timeframes, and grievance redressal mechanisms of public service delivery to eliminate arbitrary administrative delays.',
    officialProvisions: [
      'Six Core Principles: Standards of service, Quality, Transparency, Choice, Value for Taxpayers money, Accountability.',
      'The Sevottam Framework (DARPG): 3 Pillars - Implementation of Citizen\'s Charter, Public Grievance Redressal Mechanism, and Service Delivery Capability.',
      'State-level Public Service Guarantee Acts (Right to Public Services Acts across MP, Bihar, UP, Maharashtra) providing statutory penalty for delayed services.'
    ],
    institutionalMechanisms: [
      'CPGRAMS (Centralised Public Grievance Redress and Monitoring System)',
      'Designated Officers under State Right to Service legislations',
      'Third-party Social Audits'
    ],
    challenges: [
      'Charters created as decorative paper posters without consulting frontline staff or citizens',
      'Lack of legal enforceability at the central level (pending Public Services Guarantee Bill)',
      'Absence of compensation mechanisms paid directly to the aggrieved citizen for administrative delays'
    ],
    reformsSuggested: [
      'Pass a national Right to Public Services and Grievance Redressal Bill with automatic compensation for delays',
      'Decentralized charter formulation through participatory workshops with service recipients',
      'Real-time digital dashboard tracking delay rates by officer desk'
    ],
    secondARCLink: 'Second ARC 12th Report "Citizen Centric Administration: The Heart of Governance" emphasizes the Sevottam model as the gold standard.',
    caseIllustration: 'A passport office operating under the Passport Seva Kendra model, where time per citizen at each counter is measured electronically, cutting waiting times from 90 days to 7 days.'
  },
  {
    id: 'gov-codes-comparison',
    title: 'Code of Ethics versus Code of Conduct',
    topic: 'Codes of Ethics & Conduct',
    summary: 'Differentiating between broad aspirational moral principles that guide internal reasoning (Code of Ethics) and specific enforceable behavioral rules that regulate official conduct (Code of Conduct).',
    officialProvisions: [
      'Code of Ethics: Aspirational, value-oriented document articulating core institutional philosophies (e.g. Integrity, Compassion, Public Interest, Trusteeship).',
      'Code of Conduct: Mandatory, prescriptive regulatory rulebook prescribing specific do\'s and don\'ts (e.g. CCS Conduct Rules 1964: prohibition on accepting gifts above prescribed value, taking part in politics, acquiring immovable property without permission).',
      'Sanction: Code of Ethics appeals to internal conscience and professional pride; Code of Conduct enforces disciplinary penalties under CCS (CCA) Rules 1965 (censure, withholding promotion, dismissal).'
    ],
    institutionalMechanisms: [
      'Central Civil Services (Conduct) Rules, 1964',
      'All India Services (Conduct) Rules, 1968',
      'Second ARC Draft Public Services Code'
    ],
    challenges: [
      'India currently has extensive Codes of Conduct (negative prohibitions), but lacks a comprehensive, statutory overarching Code of Ethics for the higher civil services.',
      'Rule-book formalism leads officers to follow the bare letter of conduct rules while violating the substantive spirit of ethics.'
    ],
    reformsSuggested: [
      'Enact a unified statutory Public Services Act articulating both the Code of Ethics (values) and Code of Conduct (rules)',
      'Mandatory annual ethics refreshers in LBSNAA and state administrative academies'
    ],
    secondARCLink: 'Second ARC 10th Report recommended replacing outdated conduct rules with a comprehensive values-based Public Services Code.',
    caseIllustration: 'An officer who accepts no gifts (following Code of Conduct) but deliberately avoids speaking to impoverished citizens visiting his office during public hours (violating the Code of Ethics).'
  },
  {
    id: 'gov-public-funds-probity',
    title: 'Utilization of Public Funds and Financial Probity',
    topic: 'Public Funds',
    summary: 'The ethical, transparent, and prudent management of state treasury resources anchored in the Canons of Financial Propriety, General Financial Rules (GFR 2017), and Parliamentary accountability.',
    officialProvisions: [
      'Canons of Financial Propriety (GFR Rule 21): Every officer is expected to exercise the same vigilance in respect of expenditure incurred from public money as a person of ordinary prudence would exercise in respect of expenditure of his own money.',
      'Public Procurement Integrity: Mandatory procurement via Government e-Marketplace (GeM portal) to eliminate middleman collusion and discretionary favoritism.',
      'Article 266 (Consolidated Fund of India), Article 112 (Annual Financial Statement), Article 114 (Appropriation Bills), Article 148-151 (Comptroller and Auditor General of India statutory audits).'
    ],
    institutionalMechanisms: [
      'Comptroller & Auditor General of India (CAG) - Compliance, Financial, and Performance Audits',
      'Public Accounts Committee (PAC) and Estimates Committee of Parliament',
      'Public Financial Management System (PFMS) for real-time tracking of scheme expenditures',
      'Treasury Single Account (TSA) system to prevent parking of unspent funds in commercial bank accounts'
    ],
    challenges: [
      '"March Rush" (uncontrolled, hurried year-end spending to exhaust budgetary allocations before lapse)',
      'Parking of scheme funds in commercial bank accounts to earn illicit interest while showing 100% utilization on paper',
      'Cost and time overruns in major infrastructure projects due to poor DPR planning and administrative delay',
      'Off-budget borrowings and opaque sovereign guarantees that conceal true fiscal deficits'
    ],
    reformsSuggested: [
      'Outcome Budgeting & Social Audits: Evaluating tangible human outcomes achieved rather than mere financial outflows spent',
      'Rolling multi-year budgetary allocations to eliminate the perverse incentives of the March Rush',
      'Mandatory Integrity Pacts for all public procurement tenders above ₹5 crore',
      'Direct Benefit Transfer (DBT) directly into Aadhaar-seeded accounts, eliminating ghost leakage'
    ],
    secondARCLink: 'Second ARC 14th Report "Strengthening Financial Management Systems" advocates replacing cash accounting with accrual accounting and instituting mandatory internal audit wings.',
    caseIllustration: 'A District Magistrate refusing to rush ₹12 crore into unverified street-lighting purchases in the last 48 hours of March 31st, returning the unspent balance to the treasury with a comprehensive justification.'
  },
  {
    id: 'gov-preventive-vigilance-corruption',
    title: 'Preventive Vigilance and Anti-Corruption Architecture',
    topic: 'Corruption',
    summary: 'Shifting the anti-corruption paradigm from purely punitive detection (post-facto punishment) to proactive preventive vigilance through structural re-engineering of discretionary processes.',
    officialProvisions: [
      'Three Wings of Vigilance: Punitive Vigilance (FIR, prosecution, dismissal), Preventive Vigilance (simplifying rules, reducing discretion, digitization), and Surveillance Vigilance (intelligence gathering on suspect officials).',
      'Central Vigilance Commission Act, 2003 (Statutory independence, superintendence over CBI corruption inquiries).',
      'Whistle Blowers Protection Act, 2014 & CVC PIDPI (Public Interest Disclosure and Protection of Informers) Resolution protecting bona fide whistleblowers against victimization.'
    ],
    institutionalMechanisms: [
      'Central Vigilance Commission (CVC) and Chief Vigilance Officers (CVOs) in every ministry/PSU',
      'Central Bureau of Investigation (Anti-Corruption Division) and State Anti-Corruption Bureaus / Vigilance Directorates',
      'Lokpal and Lokayuktas under the Lokpal Act, 2013',
      'Special Courts under the Prevention of Corruption Act (PCA)'
    ],
    challenges: [
      'High rate of acquittals and decade-long judicial pendency in corruption trials',
      'Section 17A of PCA (2018 amendment) requiring prior government sanction before investigating any public servant, creating a bureaucratic shield',
      'Inadequate physical and institutional protection for whistleblowers leading to intimidation and killings',
      'Collusive corruption where both giver and taker gain, eliminating natural complainants'
    ],
    reformsSuggested: [
      'Time-bound (90 days) statutory decision on prosecution sanctions, failing which deemed sanction applies',
      'Independent Directorate of Prosecution separated from political and executive police interference',
      'Confiscation of ill-gotten wealth through Benami Transactions (Prohibition) Amendment Act, 2016',
      'Comprehensive technological automation to eliminate human discretion at high-rent touchpoints (driving licenses, property registries, passport issuance)'
    ],
    secondARCLink: 'Second ARC 4th Report Chapter 4 details comprehensive systemic reforms to curb both petty and grand collusive corruption.',
    caseIllustration: 'A Transport Department head eliminating touts and discretionary fitness test approvals by introducing fully automated computerized sensor-based driving test tracks (Preventive Vigilance in action).'
  },
  {
    id: 'gov-work-culture-service-delivery',
    title: 'Work Culture, Motivation, and Quality of Public Service Delivery',
    topic: 'Work Culture',
    summary: 'Cultivating an empathetic, outcome-oriented, and ethical administrative work culture that dismantles the colonial "mai-baap" bureaucratic psyche in favor of democratic service stewardship.',
    officialProvisions: [
      'Characteristics of Colonial Bureaucracy (Weberian Pathology): Rigid red tape, excessive proceduralism, risk-aversion, secrecy, status consciousness, and aloofness from citizens.',
      'Characteristics of Democratic Civil Service Culture: Citizen-first orientation, empathy for the marginalized, collaborative problem-solving, transparency, speed, and continuous learning.',
      'Mission Karmayogi (National Programme for Civil Services Capacity Building - NPCSCB) transitioning civil servants from "Rule-based" to "Role-based" competence.'
    ],
    institutionalMechanisms: [
      'iGOT Karmayogi digital learning platform for continuous civil service competency building',
      'Sevottam Model (IS 15700:2005) quality certification for government offices',
      'E-Office implementation replacing physical slow-moving file hierarchies with transparent digital movement'
    ],
    challenges: [
      'Entrenched hierarchy where junior staff fear expressing dissenting technical opinions',
      'Protection without accountability under Article 311 leading to indifference and absenteeism in remote rural postings',
      'Burnout, cynicism, and low emotional morale among frontline functionaries (anganwadi workers, lekhpals, police constables)',
      'Transfer and posting industry creating perverse incentives for subservience over merit'
    ],
    reformsSuggested: [
      'Transparent Civil Services Board for fixed tenures to insulate officers from arbitrary punitive transfers',
      'Institutionalizing psychological well-being, peer recognition, and leadership development programs',
      'Decentralizing financial and administrative powers to cutting-edge frontline workers with accountability',
      'Public felicitation and fast-track career opportunities for proven innovators and incorruptible officers'
    ],
    secondARCLink: 'Second ARC 10th Report "Refurbishing of Personnel Administration" urges moving towards domain specialization, performance-linked incentives, and modern human resource management.',
    caseIllustration: 'A District Collector holding daily 1-hour open staff coffee conclaves to listen to grassroots difficulties of field revenue inspectors, transforming a toxic department into a mission-driven team.'
  }
];
