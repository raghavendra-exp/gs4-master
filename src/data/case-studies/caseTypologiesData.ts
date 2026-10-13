// src/data/case-studies/caseTypologiesData.ts
// Standardized Section B Case Study Typologies & UP-Specific Regional Case Scenarios
// Designed for UPSC GS-IV (125 Marks) & UPPSC GS-IV (120 Marks)

import { CaseTypologyItem, UpCaseStudyItem } from '../../types/ethics';

export const CASE_TYPOLOGIES: CaseTypologyItem[] = [
  {
    id: 'typology-1',
    typeNumber: 1,
    title: 'Crisis Management, Mob Violence & Law and Order De-escalation',
    category: 'Law & Order / Crisis',
    archetypeScenario: 'A sudden provocative incident (e.g., desecration of a religious site, vehicular accident involving different communities, or social media blasphemy rumor) triggers a 5,000-strong agitated mob outside a police station or district collectorate demanding immediate extra-judicial action or summary lynching. Local political patrons pressure the administration for selective arrests, while media vans arrive for live broadcast.',
    stakeholderMap: {
      direct: ['District Magistrate & Superintendent of Police (Executive leadership)', 'Agitated mob and protest ringleaders', 'Victim family and targeted vulnerable community'],
      indirect: ['Local political representatives / MLAs seeking electoral polarization', 'Media channels hungry for sensational breaking news', 'Shopkeepers and daily-wage earners at risk of economic arson'],
      systemic: ['Rule of Law and legitimacy of the State (Article 14 & 21)', 'Social cohesion and communal amity (Article 51A(e))', 'Police morale and human rights compliance (NHRC guidelines)']
    },
    primaryEthicalDilemmas: [
      'Duty to preserve human life vs Duty to maintain public order (Article 21)',
      'Immediate expediency (appeasing the mob through symbolic unlawful promises) vs Long-term constitutional integrity (due process)',
      'Political obedience to local ruling party bosses vs Non-partisan civil service neutrality (Rule 3 of All India Services Conduct Rules)'
    ],
    optionsTested: [
      {
        optionName: 'Option A: Yield to Mob Demand & Announce Immediate Arrest/Demolition',
        description: 'Appease the crowd by summarily arresting suspects without preliminary evidence or registering arbitrary FIRs.',
        ethicalEvaluation: 'Utilitarian short-term gain (temporary dispersal) but catastrophic Deontological and Constitutional violation. Subverts due process, violates natural justice, and sets an illegal precedent of state capitulation to mobocracy.',
        feasibilityVerdict: 'Strictly Unacceptable / Unconstitutional.'
      },
      {
        optionName: 'Option B: Immediate Indiscriminate Kinetic Lethal Force',
        description: 'Order immediate heavy lathi-charge and police firing without gradual warning protocols.',
        ethicalEvaluation: 'Violates the principle of proportionality and the doctrine of minimum necessary force. Causes civilian casualties, triggers mass martyrdom complex, and inflames district-wide rebellion.',
        feasibilityVerdict: 'Gross Disproportionate Force / Administrative Failure.'
      },
      {
        optionName: 'Option C: Multi-Pronged Constitutional De-escalation & Firm Restraint',
        description: 'Deploy layered riot-control perimeter, cut off rumor channels via temporary telecom advisory, engage credible community elders in the collectorate chamber for dialogue, establish transparent executive inquiry, and maintain firm defensive posture with non-lethal crowd dispersal gears.',
        ethicalEvaluation: 'Harmonizes Kantian duty (protecting due process) with Utilitarian outcome (minimizing loss of life). Exemplifies Emotional Intelligence and Professional Fortitude.',
        feasibilityVerdict: 'Gold Standard Administrative Course of Action.'
      }
    ],
    balancedCourseOfAction: 'Adopt a graduated 4-tier de-escalation response: (1) Containment & Buffer creation using rapid deployment force; (2) Information sanitization via verified district PR handles and DM video addresses; (3) Multi-faith peace dialogue with genuine non-political influencers; (4) Firm lawful prosecution of instigators through CCTV/drone forensic evidence without partisan witch-hunting.',
    administrativeSOP: [
      'Immediate promulgation of Section 163 BNSS (erstwhile 144 CrPC) in sensitive zones.',
      'Deployment of video recording teams and drone cameras to document all instigators before any physical engagement.',
      'Activation of the District Peace Committee (जिला शांति समिति) within 60 minutes.',
      'Regular 30-minute verified press briefings by DM/SP to starve rumor mills.'
    ],
    relevantThinkerQuotes: [
      'Sant Kabir: "कबीरा खड़ा बज़ार में, मांगे सबकी खैर। ना काहू से दोस्ती, ना काहू से बैर॥"',
      'Gautama Buddha: "Hatred is never appeased by hatred; it is conquered only by compassion and calm discernment."',
      'Dr. B.R. Ambedkar: "Constitutional morality is not a natural sentiment. It has to be cultivated."'
    ]
  },
  {
    id: 'typology-2',
    typeNumber: 2,
    title: 'Environmental Clearance vs Industrial Development & Tribal Displacement',
    category: 'Environmental vs Development',
    archetypeScenario: 'A ₹10,000-crore greenfield semiconductor or thermal power project is approved by the central cabinet in a remote backward district. It promises 25,000 direct jobs, massive state tax revenue, and regional transformation. However, the site overlaps with pristine eco-sensitive forests and sacred ancestral lands of an indigenous tribal community. Environmental impact assessments reveal risk of groundwater depletion and biodiversity loss. Local villagers declare a protest blockading surveying teams.',
    stakeholderMap: {
      direct: ['Indigenous tribal community and forest dwellers (FRA 2006 rights)', 'District Collector / Forest Settlement Officer', 'Industrial project proponent and investors'],
      indirect: ['Unemployed local youth awaiting manufacturing jobs', 'Environmental NGOs and scientific ecologists', 'State government pushing ease of doing business'],
      systemic: ['Sustainable Development Goals (SDG 13 - Climate, SDG 8 - Decent Work)', 'Inter-generational and Intra-generational equity', 'Trust of marginalized citizens in constitutional guarantees (Schedule V)']
    },
    primaryEthicalDilemmas: [
      'Economic growth and poverty alleviation (Utilitarian greatest happiness) vs Ecological conservation and indigenous human rights (Deontological rights of the minority)',
      'National strategic technological self-reliance vs Local cultural identity and heritage preservation',
      'Short-term electoral and corporate pressure vs Long-term planetary stewardship (Anthropocentrism vs Ecocentrism)'
    ],
    optionsTested: [
      {
        optionName: 'Option A: Heavy-Handed Eviction using Police Protection',
        description: 'Disperse protesting tribal leaders, fence off the forest tract, and clear land rapidly to meet corporate investment MoUs.',
        ethicalEvaluation: 'Crude Utilitarianism that crushes vulnerable minorities under the tyranny of the majority. Violates Forest Rights Act 2006, PESA 1996, and Supreme Court rulings (Niyamgiri judgment).',
        feasibilityVerdict: 'Illegal, Ethically Bankrupt, and sparks Naxalite/extremist alienation.'
      },
      {
        optionName: 'Option B: Outright Cancellation of the Industrial Project',
        description: 'Recommend complete scrapping of the project to preserve 100% forest cover.',
        ethicalEvaluation: 'Ecocentric purity, but ignores the desperate economic deprivation, lack of healthcare, and youth unemployment in the backward region.',
        feasibilityVerdict: 'Unrealistic, rejects modern sustainable development.'
      },
      {
        optionName: 'Option C: Buddhist Middle Path & Democratic FPIC Model',
        description: 'Re-align project layout using GIS to protect sacred groves and contiguous dense forest canopy; hold transparent Gram Sabha hearings under PESA/FRA; negotiate an enhanced Resettlement & Rehabilitation (R&R) package with equity stakes, skill academies, and permanent community royalty reserves.',
        ethicalEvaluation: 'Integrates Rawlsian Difference Principle (ensuring the least advantaged benefit most) with Brundtland Sustainable Development.',
        feasibilityVerdict: 'Equitable, Constitutional, and Sustainable.'
      }
    ],
    balancedCourseOfAction: 'Enforce genuine Free, Prior and Informed Consent (FPIC) through Gram Sabha consultations; mandate project re-engineering to protect critical biosphere zones; establish an independent ecological oversight committee with local tribal representation; execute R&R with land-for-land substitution and state-funded technical apprenticeships.',
    administrativeSOP: [
      'Conduct a joint ground audit with tribal elders and independent wildlife biologists.',
      'Publish the Environmental Impact Assessment (EIA) in simple local tribal dialect.',
      'Establish an Escrow Rehabilitation Fund managed jointly by district administration and community representatives.',
      'Strict adherence to Supreme Court guidelines in Orissa Mining Corporation v. MoEF (Niyamgiri).'
    ],
    relevantThinkerQuotes: [
      'Mahatma Gandhi: "Earth provides enough to satisfy every man\'s need, but not every man\'s greed."',
      'Pandit Deendayal Upadhyaya: "Exploitation (शोषण) of nature destroys civilization; sustainable milking (दोहन) preserves life."',
      'Hans Jonas: "Act so that the effects of your action are compatible with the permanence of genuine human life."'
    ]
  },
  {
    id: 'typology-3',
    typeNumber: 3,
    title: 'Workplace Ethics, Sexual Harassment (PoSH) & Departmental Whistleblowing',
    category: 'Workplace / Harassment',
    archetypeScenario: 'A bright young female contractual data analyst in the collectorate files a written complaint of persistent sexual harassment, predatory advances, and hostile work atmosphere against the Additional District Magistrate (ADM - Development), who is a batchmate and close personal confidant of the District Magistrate. The ADM threatens the complainant with contract termination, while senior staff advise her to withdraw the complaint to preserve "departmental prestige". The DM is asked to quietly bury the complaint.',
    stakeholderMap: {
      direct: ['The complainant (Contractual employee)', 'The respondent (Senior ADM)', 'The District Magistrate (Disciplinary head & batchmate)'],
      indirect: ['Other female employees in the collectorate', 'Internal Complaints Committee (ICC) members', 'Contractual service agency'],
      systemic: ['Institutional gender justice (PoSH Act 2013 & Vishaka Guidelines)', 'Probity and credibility of public administration', 'Whistleblower protection and fear-free workspace culture']
    },
    primaryEthicalDilemmas: [
      'Professional duty and legal mandate vs Personal loyalty and friendship with a batchmate',
      'Protecting the superficial "prestige" of the department vs Delivering uncompromising justice to a subordinate',
      'Vulnerability of contractual precarious labor vs Impunity of permanent elite bureaucracy'
    ],
    optionsTested: [
      {
        optionName: 'Option A: Informal Compromise & Departmental Transfer of Complainant',
        description: 'Call both parties into a private chamber, counsel the ADM to desist, and transfer the woman to another block.',
        ethicalEvaluation: 'Gross violation of PoSH Act 2013. Victimizes the complainant (Secondary Victimization), condones predatory male entitlement, and exhibits moral cowardice.',
        feasibilityVerdict: 'Illegal, Punishable under Law, and Ethically Abhorrent.'
      },
      {
        optionName: 'Option B: Summary Dismissal of the Accused ADM without Inquiry',
        description: 'Immediately order police arrest and suspension based solely on the written petition to project a pro-women stance.',
        ethicalEvaluation: 'Violates Natural Justice (Audi Alteram Partem) and Article 311 safeguards. Procedural illegality that will be stayed by administrative tribunals.',
        feasibilityVerdict: 'Procedurally Defective & Unsustainable.'
      },
      {
        optionName: 'Option C: Strict Statutory Protocol & Institutional Recusal',
        description: 'Immediately refer the petition to the statutory Internal Complaints Committee (ICC) headed by an independent external woman jurist/NGO head; recuse oneself from the inquiry to eliminate conflict of interest; issue a protective restraining order prohibiting the ADM from supervising or terminating the complainant; provide paid interim leave or relocation to the complainant as per PoSH Sec 12.',
        ethicalEvaluation: 'Exemplifies Kantian Deontology (duty without personal exception), Rule of Law, and institutional integrity. Completely shields the victim from retaliation.',
        feasibilityVerdict: 'Mandatory, Just, and Professionally Spotless.'
      }
    ],
    balancedCourseOfAction: 'Recuse oneself formally from any supervisory role over the inquiry due to friendship; ensure the ICC functions with complete autonomy and external civil-society oversight; enforce Section 12 protections guaranteeing complainant’s contract renewal and confidentiality; implement ICC findings without fear or favor under CCS/State Conduct Rules.',
    administrativeSOP: [
      'Acknowledge receipt in writing within 24 hours and forward to ICC Presiding Officer.',
      'Ensure the ICC bench contains at least 50% women and one independent external member.',
      'Provide immediate interim protection orders under Section 12 PoSH Act (preventing any appraisal downgrade or transfer).',
      'Conclude inquiry strictly within the statutory 90-day timeline.'
    ],
    relevantThinkerQuotes: [
      'Immanuel Kant: "Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end."',
      'Dr. B.R. Ambedkar: "I measure the progress of a community by the degree of progress which women have achieved."',
      'Nolan Principles: "Integrity, Objectivity, and Leadership by Example."'
    ]
  },
  {
    id: 'typology-4',
    typeNumber: 4,
    title: 'Public Procurement, Tender Manipulation & Anti-Corruption Inquiries',
    category: 'Procurement / Integrity',
    archetypeScenario: 'As the Project Director of a ₹500-crore smart city infrastructure project, you detect that the tender specifications for automated water supply and sewerage pipes have been subtly tailor-made with restrictive proprietary clauses that match exactly one politically connected vendor. The junior technical evaluation committee has cleared this single vendor at a 35% inflated price. The Departmental Principal Secretary phones you, subtly indicating that the high-command expects the contract to be awarded before upcoming elections and warns that questioning the specifications will derail your career.',
    stakeholderMap: {
      direct: ['Project Director (Self - Public official with financial sign-off)', 'The favored corporate contractor', 'The Principal Secretary / Political hierarchy'],
      indirect: ['Citizens of the city paying municipal taxes for substandard infrastructure', 'Honest competing infrastructure bidders excluded by restrictive clauses', 'Junior engineering officers pressured into signing fraudulent clearances'],
      systemic: ['Public Trust in Governance (Second ARC 4th Report)', 'Protection of the Public Exchequer (CVC Guidelines & GFR 2017)', 'Anti-Corruption Framework (Prevention of Corruption Act 1988)']
    },
    primaryEthicalDilemmas: [
      'Career survival and compliance with hierarchical superiors vs Fiduciary duty to protect public money',
      'Timely project implementation under tight electoral deadlines vs Strict adherence to transparency and competition',
      'Collusive bureaucratic-political corruption vs Individual civil service integrity'
    ],
    optionsTested: [
      {
        optionName: 'Option A: Blind Compliance and Tender Award',
        description: 'Sign the file without dissent, trusting that the committee signatures protect you legally.',
        ethicalEvaluation: 'Collusive negligence and breach of fiduciary trust. Actionable under Section 13(1)(d) Prevention of Corruption Act (obtaining valuable pecuniary advantage for another person without public interest). Moral suicide.',
        feasibilityVerdict: 'Corrupt, Cowardly, and Legally Perilous.'
      },
      {
        optionName: 'Option B: Public Press Leak & Resignation',
        description: 'Hold a press conference exposing the tender scam, leak government files, and resign in protest.',
        ethicalEvaluation: 'Sensationalism that violates Conduct Rules regarding official secrets; leaves the public treasury unprotected because an unprincipled successor will immediately sign the scam.',
        feasibilityVerdict: 'Irresponsible Whistleblowing / Abdication of Office.'
      },
      {
        optionName: 'Option C: Bulletproof Administrative Dissent & Institutional Scrutiny',
        description: 'Record an objective, factual, evidence-backed note on the file citing General Financial Rules (GFR) Rule 144, CVC procurement manuals, and Competition Commission precedents showing restrictive cartels; recommend immediate reconstitution of the technical committee with external IIT/NIT experts; submit the noted file officially to the Competent Authority with copy marked to Chief Vigilance Officer (CVO).',
        ethicalEvaluation: 'Integrates Fortitude, Administrative Probity, and Fiduciary Duty. Creates an unshakeable institutional paper trail that makes corrupt execution legally impossible.',
        feasibilityVerdict: 'Exemplary Civil Service Leadership.'
      }
    ],
    balancedCourseOfAction: 'Refuse to approve the manipulated tender; put on record a detailed comparative analysis proving market inflation and proprietary monopolization; insist on e-procurement through Government e-Marketplace (GeM) / open competitive bidding; alert the CVO confidentially; stand resolute against illegal verbal orders in accordance with Supreme Court ruling in TSR Subramanian v. Union of India (2013).',
    administrativeSOP: [
      'Document all technical deviations against CVC Circular No. 01/02/11 on tender transparency.',
      'Record formal dissent in writing as per AIS Conduct Rule 3(2B) which mandates putting verbal orders into writing.',
      'Recommend third-party technical benchmarking through a premier engineering institute (e.g. IIT Roorkee / IIT Kanpur).',
      'Preserve certified digital backups of the file noting.'
    ],
    relevantThinkerQuotes: [
      'Kautilya (Arthashastra): "Just as it is impossible not to taste honey placed on the tongue, so it is for a servant of the king not to taste some government wealth... therefore strict deterrence and accounting is mandatory."',
      'Second ARC: "Corruption is an anti-poor, anti-growth disease. An honest officer’s pen is the supreme shield of public assets."',
      'T.N. Seshan: "Integrity is not a part-time job. It is non-negotiable every single minute."'
    ]
  }
];

export const UP_SPECIFIC_CASES: UpCaseStudyItem[] = [
  {
    id: 'up-case-1',
    title: 'Illegal Riverbed Sand Mining Mafia in Sonbhadra & Ken-Betwa Basins',
    year: 2024,
    exam: 'UPPSC',
    difficulty: 'UPPSC_Standard',
    domain: 'Environmental Clearance',
    administrativeRole: 'District Magistrate, Sonbhadra',
    scenario: 'You have recently taken charge as the District Magistrate of Sonbhadra, an ecologically fragile district rich in mineral reserves and home to large tribal and forest-dwelling populations. Over the past five years, an organized sand mining syndicate (खनन माफिया), led by a powerful local contractor who is the immediate kin of a senior state cabinet minister, has been excavating sand from riverbeds using heavy prohibited machinery (Poclain excavators) far beyond allotted lease coordinates. \n\nThe reckless mining has disrupted the natural hydrology of the river, causing severe bank erosion, depleting groundwater levels in adjacent tribal hamlets, and triggering deep hazardous underwater pits that have caused the drowning deaths of four tribal children. When an honest local Sub-Divisional Magistrate (SDM) conducted a surprise night raid and seized 15 overloaded dumpers, the mining syndicate surrounded his vehicle, physically assaulted the revenue team, and forcibly retrieved the seized vehicles. \n\nThe next morning, the local MLA and the minister’s representative visit your office. They subtly advise you to release the remaining vehicles, drop the FIRs, and "cooperate for regional development and peace", hinting that non-compliance will lead to an immediate punitive transfer to an insignificant posting and fabricated departmental inquiries against your subordinate officers.',
    facts: [
      'Illegal mechanized sand mining in violation of National Green Tribunal (NGT) orders and Sustainable Sand Mining Management Guidelines, 2016.',
      'Severe environmental degradation, groundwater depletion, and tragic loss of four tribal lives.',
      'Violent obstruction and physical assault on an executive revenue team led by an SDM performing lawful duty.',
      'Direct political intimidation by minister\'s kin and local MLA to subvert the criminal justice process.'
    ],
    stakeholders: [
      { name: 'Self (District Magistrate)', role: 'Chief Executive and District Magistrate responsible for rule of law, mineral conservation, and staff protection', interests: 'Upholding law, protecting subordinates, stopping environmental crime', vulnerabilityLevel: 'Medium' },
      { name: 'SDM and Revenue Raiding Team', role: 'Frontline field administrators who risked their lives', interests: 'Justice for assault, institutional backing from the DM, physical safety', vulnerabilityLevel: 'High' },
      { name: 'Local Tribal Hamlets & Deceased Children Families', role: 'Victims of ecological devastation and physical tragedies', interests: 'Compensation, safe drinking water, immediate cessation of illegal mining', vulnerabilityLevel: 'High' },
      { name: 'Mining Syndicate & Political Patrons', role: 'Illegal commercial operators extracting massive rent', interests: 'Impunity, profit maximization, retaining political dominance', vulnerabilityLevel: 'Low' },
      { name: 'State Government & Public Exchequer', role: 'Sovereign authority suffering royalty theft and environmental destruction', interests: 'Rule of law, revenue recovery, sustainable governance', vulnerabilityLevel: 'Low' }
    ],
    ethicalIssues: [
      'Rule of Law vs Political Coercion: Choosing between lawful duty under NGT guidelines and submitting to cabinet minister pressure.',
      'Institutional Morale vs Self-Preservation: Protecting honest subordinate officers (SDM) who performed heroic duty vs abandoning them to save one’s posting.',
      'Environmental Justice & Inter-Generational Equity vs Predatory Plunder: Safeguarding river ecosystems and vulnerable tribal lives from criminal exploitation.'
    ],
    optionsAvailable: [
      {
        optionId: 'A',
        title: 'Submit to Political Pressure & Compromise',
        description: 'Quietly dilute the FIR, release the dumpers with a nominal administrative penalty, and instruct the SDM to cease night raids to avoid confrontation.',
        merits: ['Avoids punitive political transfer; maintains smooth working relationship with local legislators.'],
        demerits: ['Destroys rule of law; demoralizes the entire district administrative machinery; emboldens the mafia; causes irreversible ecological destruction.'],
        consequences: 'Complete ethical failure. Encourages fatal assaults on civil servants and cements criminal-political nexus.'
      },
      {
        optionId: 'B',
        title: 'Confrontational Media War & Public Whistleblowing',
        description: 'Call a press conference immediately, name the cabinet minister publicly, and dare the government to transfer you.',
        merits: ['Builds instant public popularity and media martyrdom.'],
        demerits: ['Violates All India Services Conduct Rules; disrupts institutional decorum; shifts focus from concrete legal action to political drama; court cases might get jeopardized.'],
        consequences: 'Sensationalism that burns administrative bridges without dismantling the underground mafia syndicate.'
      },
      {
        optionId: 'C',
        title: 'Institutional Crackdown through Coordinated Law Enforcement & Tech Surveillance',
        description: 'Stand solidly behind the SDM; register non-bailable FIRs under Bharatiya Nyaya Sanhita, Mines & Minerals Act, and UP Gangsters and Anti-Social Activities (Prevention) Act, 1986; deploy satellite/drone geo-fencing; attach illegal assets; inform the Chief Secretary and Advocate General in writing.',
        merits: ['Upholds Rule of Law; secures subordinate morale; permanently paralyzes mafia operations through asset attachment; creates unassailable institutional paper trail.'],
        demerits: ['Risk of short-term political hostility and transfer, but protected by legal merit and public support.'],
        consequences: 'Exemplary constitutional leadership that restores public confidence in district administration.'
      }
    ],
    decisionFramework: {
      immediateActions: [
        'Ensure medical attention and top-tier security cover for the assaulted SDM and revenue team.',
        'Direct the Superintendent of Police to invoke non-bailable sections for assault on public servants and register cases under the UP Gangster Act against the syndicate ringleaders.',
        'Impound all 15 dumpers and heavy earthmovers in police custody; initiate confiscation under Section 21 of the MMDR Act.',
        'Disburse ex-gratia compensation and borewell water restoration immediately to the families of the drowned tribal children from District Mineral Foundation (DMF) funds.'
      ],
      longTermMeasures: [
        'Deploy drone surveillance and mandatory RFID/GPS digital tracking for all legal mineral transport e-rawanna slips.',
        'Re-survey all riverbed leases with satellite imagery; cancel licenses of violators and recover environmental compensation as land revenue arrears.',
        'Submit a comprehensive, evidence-packed confidential report to the Chief Secretary and Principal Secretary (Mining) detailing the organized assault.'
      ],
      constitutionalMoralJustification: 'Article 21 guarantees the right to life and a clean environment to tribal citizens. Article 14 ensures equality before law—no political connection confers immunity from criminal assault on state officers. Supreme Court in Deepak Kumar v. State of Haryana mandated strict environmental compliance for minor minerals.'
    },
    modelAnswerOutline: [
      'Introduction: Define the core dilemma as an assault on the Rule of Law and constitutional trusteeship by a politically shielded criminal syndicate.',
      'Stakeholder Analysis: Highlight the asymmetric power dynamic between marginalized tribal dwellers and the commercial-political cartel.',
      'Evaluation of Options: Reject appeasement as an abdication of duty; reject reckless media leaks; select uncompromising statutory enforcement under the UP Gangster Act and MMDR Act.',
      'Action Plan: Immediate security to staff + criminal arrest of assailants + DMF compensation to tribal victims + technological surveillance.',
      'Conclusion: Quote Kautilya and Sant Kabir on equidistant justice; an administrator’s loyalty is owed to the Constitution, not political patrons.'
    ]
  },
  {
    id: 'up-case-2',
    title: 'Maha Kumbh (Prayagraj) Mega-Crowd Safety & Stampede Risk Management',
    year: 2025,
    exam: 'UPPSC',
    difficulty: 'UPPSC_Standard',
    domain: 'Disaster Relief',
    administrativeRole: 'Mela Adhikari / Divisional Commissioner, Prayagraj',
    scenario: 'You are serving as the Mela Adhikari (Chief Festival Officer) for the Maha Kumbh Mela at Prayagraj, where an unprecedented 45 million pilgrims (श्रद्धालु) are congregated for the auspicious Mauni Amavasya royal bath (शाही स्नान). At 3:30 AM, intense bottleneck congestion occurs at the pedestrian pontoon bridges connecting the Sangam nose, compounded by dense fog, freezing cold, and sudden rumor of an electrical short circuit.\n\nA surge of 200,000 pilgrims begins pushing forward in panic. Simultaneously, a VIP convoy carrying two prominent national political dignitaries and their security escorts arrives at the VIP barrier, demanding immediate vehicular access across Pontoon Bridge No. 3, which is directly reserved for emergency medical evacuation and one-way crowd outflow. The VIP security detail threatens to report you to the Chief Minister\'s Office for insolence if their cavalcade is delayed. Any sudden movement or road closure could trigger a catastrophic, lethal stampede similar to the tragedies of past decades.',
    facts: [
      'Extreme crowd density of 45 million pilgrims in high-density riverbank floodplains.',
      'Critical bottleneck at Sangam pontoon bridges under zero-visibility fog and panic rumors.',
      'Inappropriate demand for vehicular VIP movement through an designated emergency evacuation corridor.',
      'Immediate risk of a catastrophic stampede causing hundreds of deaths.'
    ],
    stakeholders: [
      { name: 'Millions of Pilgrims (Especially elderly, women, and children)', role: 'Devotees exercising fundamental cultural and religious rights', interests: 'Physical safety, access to holy bath, safe egress', vulnerabilityLevel: 'High' },
      { name: 'Self (Mela Adhikari) & Police Administration', role: 'Incident Commanders holding sole responsibility for life and disaster prevention', interests: 'Zero casualty, crowd fluid flow, maintaining order', vulnerabilityLevel: 'Medium' },
      { name: 'VIP Convoy & Political Dignitaries', role: 'Elected representatives seeking special ceremonial bath', interests: 'Protocol, prestige, rapid access', vulnerabilityLevel: 'Low' },
      { name: 'SDRF, NDRF & Paramilitary Deployments', role: 'Tactical crowd flow and water rescue teams', interests: 'Clear commands, avoiding panic, unblocked evacuation routes', vulnerabilityLevel: 'Medium' }
    ],
    ethicalIssues: [
      'Sanctity of Human Life (Article 21) vs VIP Entitlement & Feudal Protocol: Resolving whether political dignitaries have a right to compromise the safety of millions.',
      'Crisis Communication vs Mass Panic: Calming a 200,000-strong surging crowd under fog without triggering fatal stampede.',
      'Utilitarian Preservation of Life: Prioritizing the greatest safety of the greatest number over political sycophancy.'
    ],
    optionsAvailable: [
      {
        optionId: 'A',
        title: 'Accede to VIP Request and Divert Emergency Route',
        description: 'Allow the VIP cavalcade onto Pontoon Bridge No. 3, temporarily stopping pedestrian flow.',
        merits: ['Pleases political dignitaries; avoids immediate confrontation with the CMO.'],
        demerits: ['Chokes the only evacuation route; creates an instant crush; directly triggers a lethal stampede.'],
        consequences: 'Catastrophic human tragedy with hundreds of deaths. Criminal negligence charges.'
      },
      {
        optionId: 'B',
        title: 'Firm VIP Denial & Deployment of Dynamic Crowd Flow Protocols',
        description: 'Politely but unequivocally halt the VIP convoy outside the pedestrian sector; redirect dignitaries to a designated pedestrian walkway with security on foot; activate the one-way loop protocol on all pontoon bridges; initiate multi-lingual public address and drone surveillance to dispel rumors.',
        merits: ['Guarantees crowd fluid dynamics; preserves emergency evacuation route; maintains zero stampede risk; upholds constitutional equality.'],
        demerits: ['Temporary political displeasure, easily justified by crisis disaster management reports.'],
        consequences: 'Flawless crowd management; lives protected; exemplary demonstration of crisis fortitude.'
      }
    ],
    decisionFramework: {
      immediateActions: [
        'Enforce absolute zero-vehicle policy across the Sangam sector; direct VIP security to park at outer holding zones and guide dignitaries via designated pedestrian corridors on foot.',
        'Activate dynamic crowd-holding areas (होल्डिंग एरिया) at outer parade grounds to stagger the inflow toward the Sangam nose into manageable batches.',
        'Broadcast continuous calm, reassuring announcements in Hindi, Bhojpuri, Maithili, and Bengali over public address systems debunking the rumor of short-circuit.',
        'Requisition immediate SDRF motorboat patrols along riverbanks to assist anyone forced towards water edges.'
      ],
      longTermMeasures: [
        'Institutionalize the "AI-driven Crowd Analytics & Heat-map" system permanently into the Prayagraj Mela Authority SOP.',
        'Enact statutory regulations codifying that no VIP movement shall override National Disaster Management Authority (NDMA) crowd-safety protocols.'
      ],
      constitutionalMoralJustification: 'Article 21 is supreme. The state cannot sacrifice the lives of ordinary citizens to indulge feudal VIP culture. Second ARC 3rd Report (Crisis Management) mandates absolute operational autonomy for the Incident Commander during disaster contingencies.'
    },
    modelAnswerOutline: [
      'Introduction: Frame the situation as the supreme test of Administrative Fortitude, Emotional Intelligence, and Deontological duty to protect human life.',
      'Core Dilemma: Human Life (Article 21) vs Feudal VIP Culture.',
      'Operational Course of Action: Flat refusal of vehicular VIP entry into evacuation corridors + Staggered crowd release + Calm multi-lingual public communication.',
      'SOP Execution: Hold-release cycles, drone heat-mapping, clearing bottlenecks.',
      'Conclusion: Quote Lal Bahadur Shastri and T.N. Seshan on moral firmness; an administrator in a crisis must be an unshakeable guardian of the common citizen.'
    ]
  },
  {
    id: 'up-case-3',
    title: 'Block-Level Diversion in PMAY-G & PDS by Local Cartels in Bundelkhand',
    year: 2023,
    exam: 'UPPSC',
    difficulty: 'UPPSC_Standard',
    domain: 'Welfare Delivery',
    administrativeRole: 'Chief Development Officer (CDO), Banda',
    scenario: 'You are the Chief Development Officer (CDO) of Banda district in the drought-prone Bundelkhand region of UP. During a surprise inspection in a remote block, you discover that a nexus involving the Block Development Officer (BDO), the Village Pradhan, and a local bank branch manager has been systematically extorting ₹25,000 to ₹35,000 as "cut money" from destitute Dalit and Kol tribal beneficiaries of the Pradhan Mantri Awas Yojana-Gramin (PMAY-G).\n\nBeneficiaries who refuse to pay the bribe have their geo-tagged stage-construction verification photographs rejected by the BDO on fraudulent technical grounds, freezing their second and third installments. Consequently, dozens of families are living under ripped plastic sheets during freezing winter rain. Furthermore, PDS ration dealers in the block are diverting 40% of Antyodaya wheat and rice to private flour mills in the open market, manipulating biometric POS machines by claiming "fingerprint mismatch". When you confront the BDO, he breaks down and admits that a fixed monthly extortion quota is remitted to the local Member of Legislative Council (MLC).',
    facts: [
      'Systematic extortion and embezzlement in PMAY-G targeted at vulnerable Dalit and tribal families.',
      'Freezing of legitimate construction installments causing severe physical exposure and destitution in winter.',
      'Diversion of subsidized Antyodaya grain to black market flour mills via biometric fraud.',
      'Institutionalized political kickbacks linking block bureaucracy to state legislators.'
    ],
    stakeholders: [
      { name: 'Destitute Dalit and Tribal Beneficiaries', role: 'Citizens entitled to housing and food rights under Article 21', interests: 'Safe shelter, dignity, protection from extortion', vulnerabilityLevel: 'High' },
      { name: 'Self (CDO)', role: 'Head of rural development and welfare integrity in the district', interests: 'Eradicating corruption, restoring benefits, institutional justice', vulnerabilityLevel: 'Medium' },
      { name: 'Corrupt Nexus (BDO, Pradhan, Bank Manager)', role: 'Perpetrators of collusive corruption and extortion', interests: 'Evading criminal liability, preserving illicit wealth', vulnerabilityLevel: 'Low' },
      { name: 'Local MLC & Political Patrons', role: 'Beneficiaries of kickbacks and protection racket', interests: 'Political clout, suppressing inquiries', vulnerabilityLevel: 'Low' }
    ],
    ethicalIssues: [
      'Substantive Social Justice vs Collusive Corruption: The moral atrocity of stealing homes and food from starving tribal citizens.',
      'Fiduciary Breach: State officials entrusted with poverty alleviation acting as predatory extortionists.',
      'Whistleblowing & Retribution: Taking decisive legal action against an influential political figure’s syndicate.'
    ],
    optionsAvailable: [
      {
        optionId: 'A',
        title: 'Covert Compromise & Superficial Administrative Reprimand',
        description: 'Issue mild warnings, replace the BDO with another officer, but avoid criminal FIRs or asset seizures to prevent political fallout.',
        merits: ['Avoids direct hostility with the powerful MLC; smooth career continuation.'],
        demerits: ['Abandons the victims; perpetuates systemic extortion; moral surrender of civil service integrity.'],
        consequences: 'Institutionalizes corruption; condones human suffering.'
      },
      {
        optionId: 'B',
        title: 'Comprehensive Criminal Prosecution, Direct Restitution & Social Audit',
        description: 'Immediately lodge FIRs under Prevention of Corruption Act and BNS against the BDO, Pradhan, and Bank Manager; unfreeze all stalled PMAY-G installments through special administrative camp; distribute emergency winter relief and tarpaulins; initiate forensic audit of PDS point-of-sale machines; submit an unassailable dossier to DM and Lokayukta.',
        merits: ['Delivers immediate justice and shelter to freezing families; breaks the criminal extortion cartel; enforces zero tolerance for corruption.'],
        demerits: ['Political hostility from the MLC, but completely insulated by bulletproof documentary evidence and statutory law.'],
        consequences: 'Restores public faith in the welfare state; establishes a national benchmark for anti-graft enforcement.'
      }
    ],
    decisionFramework: {
      immediateActions: [
        'Order immediate release of pending PMAY-G installments by personally verifying geo-tagged sites with a special team of independent probationary officers within 48 hours.',
        'Distribute emergency relief kits, blankets, and temporary tin-sheds from the District Disaster Relief fund to all affected tribal families.',
        'Suspend the BDO with immediate effect and recommend departmental dismissal; lodge FIR under IPC/BNS Section 409 (Criminal Breach of Trust by Public Servant) and Prevention of Corruption Act.',
        'Cancel the licenses of the corrupt PDS dealers; attach illicitly diverted grain from the private flour mills.'
      ],
      longTermMeasures: [
        'Institutionalize open village Social Audits (सामाजिक अंकेक्षण) where beneficiary lists and photo stages are displayed on Gram Panchayat notice boards.',
        'Implement biometric iris-scanners and facial recognition alongside fingerprints to dismantle "fingerprint mismatch" excuses.',
        'Submit a detailed factual report to the UP Lokayukta detailing the organized extortion network.'
      ],
      constitutionalMoralJustification: 'Dr. B.R. Ambedkar stated that political democracy is meaningless without social and economic democracy. Amartya Sen’s capability approach requires basic shelter and nourishment as inviolable freedoms. Pandit Deendayal Upadhyaya’s Antyodaya mandates priority for the last person.'
    },
    modelAnswerOutline: [
      'Introduction: Characterize the case as predatory collusive corruption preying on the most defenseless citizens, violating Articles 21, 38, and 46.',
      'Stakeholder & Dilemma Mapping: Vulnerable subalterns vs corrupt bureaucratic-political rent-seeking cartel.',
      'Immediate Humanitarian Intervention: Instant unfreezing of housing funds + physical shelter + food security before procedural delays.',
      'Legal & Punitive Architecture: FIRs under PC Act + BNS 409 + suspension of BDO + forensic PDS audit.',
      'Structural Reforms: Social audits, biometric multi-factor authentication, and Lokayukta reference.',
      'Conclusion: Quote Gandhiji’s Talisman: every administrative action must wipe away the tears of the poorest.'
    ]
  },
  {
    id: 'up-case-4',
    title: 'Communal Rumors, Deepfakes & Social Media Flare-Up in Western UP',
    year: 2024,
    exam: 'UPPSC',
    difficulty: 'UPPSC_Standard',
    domain: 'Police Administration',
    administrativeRole: 'Senior Superintendent of Police (SSP), Muzaffarnagar',
    scenario: 'You are the Senior Superintendent of Police (SSP) in a historically sensitive district in Western Uttar Pradesh. Late on a Friday evening, an AI-generated deepfake video showing the alleged desecration of a sacred religious shrine, accompanied by incendiary morphed audio accusing youth of a specific minority community, goes viral across thousands of local WhatsApp groups and Telegram channels within 45 minutes.\n\nWithin two hours, angry armed youths from both communities begin assembling in village chaupals across six communally sensitive tehsils. Sporadic stone-pelting breaks out on the highway, and two rural passenger buses are vandalized. A polarizing local political leader announces a "Maha Panchayat" the next morning at 9:00 AM to "avenge the honor of the community", while inflammatory fringe elements on the opposing side issue provocative counter-challenges.\n\nYour intelligence unit informs you that an organized criminal cyber-cell operating from across the state border orchestrates these bot networks to destabilize the district ahead of upcoming assembly by-elections. The District Magistrate looks to you for a synchronized police-magisterial security doctrine to prevent a repeat of historical communal conflagrations.',
    facts: [
      'Rapid viral dissemination of an AI-generated deepfake video designed to incite communal riots.',
      'Mobilization of thousands of agitated citizens and planned unlawful assembly (Maha Panchayat).',
      'Highway vandalism, sporadic stone-pelting, and risk of district-wide arson.',
      'Malicious cyber-warfare exploiting existing sociological fault lines before elections.'
    ],
    stakeholders: [
      { name: 'General Public & Innocent Citizens', role: 'Vulnerable to physical violence, arson, curfews, and loss of life', interests: 'Peace, safety, communal harmony', vulnerabilityLevel: 'High' },
      { name: 'Self (SSP) & District Magistrate', role: 'Joint heads of district criminal justice and public order', interests: 'Immediate containment, zero casualties, debunking disinformation', vulnerabilityLevel: 'Medium' },
      { name: 'Provocative Leaders & Cyber Instigators', role: 'Catalysts of violence seeking electoral consolidation or disorder', interests: 'Escalation, polarization, escaping detection', vulnerabilityLevel: 'Low' },
      { name: 'Frontline Police Personnel', role: 'Force maintaining order on highways and sensitive intersections', interests: 'Clear orders, personal safety, adequate anti-riot logistics', vulnerabilityLevel: 'Medium' }
    ],
    ethicalIssues: [
      'Freedom of Expression & Assembly vs Prevention of Communal Violence (Article 19 vs Public Order under Article 19(2)).',
      'Technology as an Ethical Threat: Weaponization of AI deepfakes and algorithmic virality to poison collective consciousness.',
      'Impartiality in Crisis: Ensuring police actions are strictly neutral, avoiding accusations of community bias from either group.'
    ],
    optionsAvailable: [
      {
        optionId: 'A',
        title: 'Passive Vigilance & Selective Dialogue',
        description: 'Allow the Maha Panchayat to proceed under heavy police watch, hoping speeches will blow off steam.',
        merits: ['Avoids immediate friction with local political leaders.'],
        demerits: ['Maha Panchayats historically trigger uncontrollable mass pogroms once crowds disperse into rural areas; total failure of preventive deterrence.'],
        consequences: 'Widespread communal clashes, mass displacement, and administrative collapse.'
      },
      {
        optionId: 'B',
        title: 'Comprehensive Proactive Lockdown, Cyber Counter-Narrative & Community Engagement',
        description: 'Impose Section 163 BNSS immediately; temporarily suspend mobile internet for 24 hours to halt deepfake spread; issue high-definition debunking videos by forensic cyber labs; preemptively detain notorious instigators from both sides under preventive laws; engage local peace committees (अमन कमेटियां) throughout the night.',
        merits: ['Starves the rumor mill; denies mobilization platforms; demonstrates complete non-partisan firmness; protects innocent human lives.'],
        demerits: ['Temporary citizen inconvenience due to internet suspension, fully justified under the doctrine of necessity.'],
        consequences: 'Complete restoration of peace with zero loss of life; deepfake weaponization neutralized.'
      }
    ],
    decisionFramework: {
      immediateActions: [
        'Promulgate Section 163 BNSS immediately prohibiting unlawful gatherings, processions, and the planned Maha Panchayat; deploy RAF (Rapid Action Force) and PAC at all strategic inter-district borders.',
        'Issue a temporary 24-hour telecom suspension order for mobile data under the Temporary Suspension of Telecom Services (Public Emergency or Public Safety) Rules.',
        'Release an official video debunking the deepfake across TV news channels and official social media handles, showing the forensic breakdown by the State Cyber Crime Cell proving it was an AI synthesis.',
        'Execute preventive arrests of identified communal instigators from both communities under Sections 170/126 BNSS.'
      ],
      longTermMeasures: [
        'Institutionalize the "Digital Doot" network linking trusted village school teachers, doctors, and shopkeepers to instantly flag and verify suspicious WhatsApp broadcasts.',
        'File interstate cyber-crime extradition cases against the external political cyber cell under Information Technology Act Section 66D/66F (Cyber Terrorism).'
      ],
      constitutionalMoralJustification: 'The Supreme Court in Anuradha Bhasin v. Union of India established proportionality in telecom suspensions during acute public order emergencies. Preserving communal harmony is a fundamental duty under Article 51A(e). State neutrality is the essence of secular constitutional governance.'
    },
    modelAnswerOutline: [
      'Introduction: Frame the situation as the modern evolution of communal violence driven by synthetic media (deepfakes) demanding rapid technological and ethical crisis management.',
      'Immediate Threat Vector: Psychological panic + algorithmic virality + opportunistic political mobilization.',
      'Action Strategy: Physical containment (Sec 163 BNSS + RAF deployment) + Cyber neutralization (Forensic debunking + temporary data suspension) + Preventative justice.',
      'Community Outreach: Night meetings of Aman Committees ensuring leaders from both faiths jointly broadcast appeals for calm.',
      'Conclusion: Quote Gautama Buddha on overcoming falsehood with truth and Dr. B.R. Ambedkar on fraternal peace as the prerequisite for constitutional democracy.'
    ]
  }
];
