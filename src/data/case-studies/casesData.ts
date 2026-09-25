// src/data/case-studies/casesData.ts
// Comprehensive Case Study Database for the Case Study Simulator & Ethical Reasoning Lab

import { CaseStudyItem } from '../../types/ethics';

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'cs-ration-biometrics',
    title: 'The Biometric Barrier: Rule Compliance versus Impending Starvation',
    year: 2024,
    exam: 'UPSC',
    difficulty: 'UPSC_Standard',
    domain: 'Welfare Delivery',
    administrativeRole: 'District Supply Officer (DSO)',
    scenario: 'You are the District Supply Officer (DSO) in a backward rural district. An 82-year-old bedridden widow, Somwati, lives alone in a remote hamlet. Her leprosy-affected fingers and cataract-clouded eyes fail to register on the point-of-sale (PoS) biometric machine at the local Fair Price Shop (FPS). The dealer, citing strict state digital audit rules against non-biometric distribution, refuses to issue her subsidized wheat and rice. Somwati has had no solid meal for four days and her health is rapidly deteriorating. A local grassroots activist files an urgent petition on her behalf and threatens a public protest in front of your office. The state civil supplies manual strictly warns that any manual grain release without biometric confirmation or written ministry approval will result in automatic disciplinary suspension and recovery from the issuing officer salary.',
    facts: [
      'Beneficiary is an 82-year-old destitute widow suffering from leprosy and cataract.',
      'PoS biometric machine fails due to worn fingerprints and ocular issues.',
      'Fair Price Shop dealer is bound by computerized distribution rules with zero tolerance for manual override.',
      'Beneficiary has faced food deprivation for 4 consecutive days, risking starvation death.',
      'State policy mandates digital biometric verification to eliminate ghost ration cards.',
      'Local activist has issued an ultimatum of mass agitation outside the collectorate.',
      'Manual release without prior state sanction risks immediate disciplinary suspension of the DSO.'
    ],
    stakeholders: [
      {
        name: 'Somwati (Destitute Widow)',
        role: 'Primary beneficiary whose fundamental right to food and life (Article 21) is imperiled',
        interests: 'Immediate nutrition, dignity, hassle-free life-sustaining food rations',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'District Supply Officer (You)',
        role: 'Administrative decision-maker balancing statutory rules with moral responsibility',
        interests: 'Preserving innocent life while maintaining legal conformity and career integrity',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Fair Price Shop (FPS) Dealer',
        role: 'Grassroots distributor executing digital mandate',
        interests: 'Avoiding audit penalties, stock mismatch inquiries, or license cancellation',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'Local Social Activist & Media',
        role: 'Advocacy group amplifying administrative failure and public outrage',
        interests: 'Securing immediate justice for the victim, media visibility, policy reform',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'State Government & Food Department',
        role: 'Policy regulator curbing leakage and ghost beneficiaries through biometric authentication',
        interests: 'Financial probity, zero pilferage, systemic integrity of welfare schemes',
        vulnerabilityLevel: 'Low'
      }
    ],
    ethicalIssues: [
      'Right to Life (Article 21) versus rigid technological formalism',
      'Letter of the Law versus Spirit of the Law',
      'Administrative empathy versus fear of disciplinary audit penalties',
      'Digital exclusion in welfare architecture affecting vulnerable citizens',
      'Moral obligation to prevent starvation versus bureaucratic self-preservation'
    ],
    competingValues: [
      'Procedural Propriety vs Substantive Justice',
      'Compassion vs Regulatory Compliance',
      'Technological Efficiency vs Human Dignity',
      'Administrative Risk-taking vs Career Self-Preservation'
    ],
    legalProvisions: [
      'National Food Security Act (NFSA), 2013 (Section 3: Right to receive foodgrains at subsidized prices)',
      'Supreme Court directives in In Re: Problems of Migrant Workers & Swaraj Abhiyan vs Union of India (No genuine citizen to be denied food due to biometric glitches)',
      'Section 7 of the Aadhaar Act (Alternative mechanisms of verification where biometrics fail)'
    ],
    constitutionalArticles: [
      'Article 21 (Protection of Life and Personal Liberty, encompassing Right to Food)',
      'Article 14 (Equality before Law and non-arbitrary state action)',
      'Article 47 (Duty of the State to raise the level of nutrition and standard of living)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Strictly follow the rules: Deny manual ration until the state headquarters issues a formal written waiver. Advise the activist to apply through the official web portal.',
        pros: ['Absolute protection against vigilance inquiry and audit objection', 'Strict procedural compliance'],
        cons: ['High probability of starvation death of the elderly woman', 'Extreme moral failure and public outrage', 'Violation of Article 21 and Supreme Court judgments'],
        legalityScore: 4,
        integrityScore: 3,
        fairnessScore: 1,
        publicInterestScore: 2,
        feasibilityScore: 8,
        longTermImpactScore: 1
      },
      {
        id: 'opt-b',
        text: 'Pay for the widow ration out of personal pocket or district contingency relief, avoiding official documentation.',
        pros: ['Provides immediate relief to the dying woman', 'Defuses immediate media and activist crisis'],
        cons: ['Treats a systemic legal entitlement as personal charity', 'Fails to solve the problem for hundreds of other elderly/leprosy patients in the district', 'Leaves underlying policy flaw unaddressed'],
        legalityScore: 7,
        integrityScore: 6,
        fairnessScore: 6,
        publicInterestScore: 6,
        feasibilityScore: 9,
        longTermImpactScore: 4
      },
      {
        id: 'opt-c',
        text: 'Immediately authorize emergency grain release using the District Collector discretionary relief quota, depute a team for doorstep OTP/nominee authentication, and issue an order for alternative verification across the district.',
        pros: [
          'Immediate life-saving relief provided lawfully through emergency contingency powers',
          'Utilizes alternative authentication mechanisms recognized under Section 7 of Aadhaar Act and NFSA',
          'Initiates systemic institutional reform for all elderly, disabled, and leprosy patients across the district'
        ],
        cons: [
          'Requires immediate administrative coordination and explanatory reporting to the state department',
          'Demands active monitoring to prevent fraudulent misuse of the alternative authentication window'
        ],
        legalityScore: 9,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 10,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Exercise emergency executive authority in consultation with the District Magistrate to disburse immediate dry ration under the National Food Security Act emergency relief provisions. Implement the "Nominee Authentication" or "Doorstep Verification" mechanism under Section 7 of Aadhaar Act, while simultaneously submitting a formal institutional exception report to the Department of Food & Public Distribution.',
    implementationPlan: [
      'Immediate (Within 2 Hours): Dispatch an inspection team with the Tehsildar and Medical Officer to Somwati residence with one month\'s food grains and medical aid under the District Red Cross / Disaster Contingency Fund.',
      'Short Term (24-48 Hours): Issue a district-wide circular activating the "Guardian/Nominee System", allowing elderly and disabled citizens to nominate an authenticated relative or Anganwadi worker to collect rations on their behalf.',
      'Medium Term (1-2 Weeks): Conduct a district-wide biometric survey of leprosy homes, elderly care centers, and disabled individuals to issue offline smart cards or exception register approvals.',
      'Long Term: Submit a comprehensive policy reform proposal to the State Secretary (Food & Civil Supplies) to establish automated Iris scanners and home-delivery mechanisms (e-Seva) as mandated under 2nd ARC recommendations.'
    ],
    institutionalSafeguards: [
      'Establish a District Food Vigilance and Grievance Committee under Section 15 of NFSA 2013.',
      'Mandate surprise social audits by Gram Sabhas to ensure the exception register is not co-opted by black-marketeers.',
      'Implement GPS-tracked doorstep delivery vehicles for remote hamlets.'
    ],
    modelConclusion: 'Administration exists for human welfare, not the reverse. By harmonizing statutory discretion with constitutional morality (Article 21) and Gandhian Antyodaya, a civil servant ensures that technological modernization serves as an instrument of empowerment rather than an engine of bureaucratic exclusion.',
    relevantThinkers: ['Mahatma Gandhi (Talisman)', 'John Rawls (Difference Principle)', 'Amartya Sen (Entitlement Theory of Famine)'],
    relevantQuotes: [
      'Recall the face of the poorest and the weakest man whom you may have seen...',
      'Starvation is the characteristic of some people not having enough food to eat. It is not the characteristic of there being not enough food to eat.'
    ]
  },
  {
    id: 'cs-tendering-pressure',
    title: 'The Tendering Dilemma: Political Pressure versus Public Safety in Highway Construction',
    year: 2023,
    exam: 'UPSC',
    difficulty: 'UPSC_Standard',
    domain: 'Procurement & Tenders',
    administrativeRole: 'Project Director, National Highways Authority of India (NHAI)',
    scenario: 'You are the Project Director of NHAI overseeing a ₹1,200 crore expressway project connecting a major industrial corridor. During the technical bid evaluation, a construction firm owned by the close relative of an influential Minister fails key structural safety and soil-bearing qualifications. The Minister calls you directly, subtly hinting that your prestigious upcoming foreign training and promotion depend on finding a way to "qualify" his relative firm. He asserts that the technical parameters were "overly stringent" and that the firm will partner with an experienced international consultant post-award. Your Chief General Manager also advises you off-the-record to "cooperate", warning that defiance will lead to punitive transfer to a remote regional office and an adverse annual confidential report (ACR). Meanwhile, internal NHAI geological reports indicate that the expressway passes through landslide-prone hilly terrain, where substandard culvert and bridge construction would cause catastrophic bridge collapses during monsoon floods.',
    facts: [
      'Project involves a high-value ₹1,200 crore expressway in geologically fragile hilly terrain.',
      'Firm belonging to the Minister\'s relative failed mandatory technical qualification criteria on soil-bearing and safety.',
      'Direct political pressure and quid-pro-quo incentives (foreign training, promotion) offered to compromise evaluation.',
      'Explicit threats of adverse ACR and punitive transfer communicated by superior officer.',
      'Geological reports predict high risk of fatal structural collapses if unqualified contractors build the bridges and culverts.'
    ],
    stakeholders: [
      {
        name: 'Traveling Public & Commuters',
        role: 'End-users whose lives depend directly on structural bridge and highway safety',
        interests: 'Accident-free, world-class, durable highway infrastructure',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'Project Director (You)',
        role: 'Fiduciary guardian of public procurement and engineering integrity',
        interests: 'Protecting public safety, maintaining professional ethics, safeguarding career from arbitrary malice',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Influential Minister & Relative\'s Firm',
        role: 'Political executive seeking illegal commercial patronage',
        interests: 'Securing lucrative government contract regardless of competence',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'Chief General Manager (Superior)',
        role: 'Senior bureaucrat choosing risk aversion and subservience over institutional duty',
        interests: 'Avoiding conflict with the ministry, self-preservation',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'Qualified Competing Bidders',
        role: 'Firms meeting technical criteria in a level playing field',
        interests: 'Fair, transparent, competitive procurement based on merit',
        vulnerabilityLevel: 'Medium'
      }
    ],
    ethicalIssues: [
      'Integrity under coercion: Personal advancement versus public safety',
      'Fiduciary duty of a public servant as a custodian of taxpayer money',
      'Conflict of interest and corrupt political cronyism in state procurement',
      'Responsibility for human lives: Foreseeable risk of catastrophic bridge collapse',
      'Institutional erosion: Failure of senior management to defend objective standards'
    ],
    competingValues: [
      'Professional Integrity vs Self-Preservation / Career Ambition',
      'Public Safety vs Political Expediency',
      'Transparency and Rule of Law vs Hierarchical Conformity'
    ],
    legalProvisions: [
      'General Financial Rules (GFR), 2017 (Rule 173: Transparency, competition, and fairness in public procurement)',
      'Prevention of Corruption Act, 1988 (Section 7: Public servant obtaining undue advantage; Section 13: Criminal misconduct)',
      'Central Vigilance Commission (CVC) Procurement Guidelines on Technical Bid Evaluation',
      'Right to Fair Competition under the Competition Act, 2002'
    ],
    constitutionalArticles: [
      'Article 14 (Equality before Law, prohibition of arbitrariness in government contracts)',
      'Article 21 (Right to Safe Public Infrastructure as an extension of Right to Life)',
      'Article 311 (Protection against arbitrary punitive actions)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Succumb to pressure: Dilute the technical qualification criteria to accommodate the Minister\'s firm, believing that post-award supervision can prevent accidents.',
        pros: ['Guaranteed career progression, promotion, and foreign training', 'Avoids punitive transfer and superior displeasure'],
        cons: ['Severe criminal liability under Prevention of Corruption Act', 'Direct moral complicity in future structural collapses and loss of human lives', 'Complete surrender of professional integrity'],
        legalityScore: 1,
        integrityScore: 1,
        fairnessScore: 1,
        publicInterestScore: 1,
        feasibilityScore: 9,
        longTermImpactScore: 1
      },
      {
        id: 'opt-b',
        text: 'Proceed on medical leave or request immediate transfer to escape the dilemma, leaving the decision to an incoming junior officer.',
        pros: ['Protects self from both the Minister\'s wrath and direct corrupt acts'],
        cons: ['Act of moral cowardice (Nishkriya)', 'Leaves the project exposed to an acquiescent replacement who will clear the substandard firm', 'Abdicates sworn professional responsibility'],
        legalityScore: 5,
        integrityScore: 3,
        fairnessScore: 4,
        publicInterestScore: 3,
        feasibilityScore: 8,
        longTermImpactScore: 2
      },
      {
        id: 'opt-c',
        text: 'Form an independent Multi-Disciplinary Technical Evaluation Committee (including IIT professors/geological experts), document all technical deficiencies transparently on the Central Public Procurement Portal (CPPP), reject the non-compliant bid with detailed scientific reasons, and apprise the NHAI Chairman and CVC in writing.',
        pros: [
          'Guarantees world-class public safety and structural durability of the expressway',
          'Upholds strict legal compliance under GFR 2017 and CVC guidelines',
          'Creates an unassailable digital trail of institutional rectitude that protects against frivolous vigilance vendettas'
        ],
        cons: [
          'May attract political displeasure and risk of transfer',
          'Requires sustained moral courage and institutional resilience'
        ],
        legalityScore: 10,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 10,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Stand steadfast on engineering and legal integrity. Public safety is non-negotiable. Institutionalize the decision by involving an external expert committee, creating an immutable electronic paper trail on the CPPP portal, and documenting the geological necessity of the technical criteria. Report any extralegal pressure to the Chief Vigilance Officer (CVO) and NHAI Chairman.',
    implementationPlan: [
      'Step 1: Convene the formal Technical Evaluation Committee (TEC) comprising senior highway engineers, structural specialists, and an external technical expert from an IIT/NIT.',
      'Step 2: Formulate an exhaustive, objective technical evaluation matrix cross-referencing soil-bearing parameters, slope stability standards (IRC:SP:48), and past audited financial turnover.',
      'Step 3: Upload the comprehensive rejection justification with scientific rationale on the online procurement portal, ensuring complete public transparency.',
      'Step 4: Send a formal confidential D.O. (Demi-Official) letter to the Member (Projects) and Chairman NHAI detailing the technical vulnerability of the terrain and the necessity of strict compliance.',
      'Step 5: Maintain all file noting records and emails in encrypted off-site backups to preempt any vindictive alteration of records or malicious ACR remarks.'
    ],
    institutionalSafeguards: [
      'Institutionalize automated algorithmic bid scoring on GeM/CPPP where human subjective intervention is prohibited during technical filtering.',
      'Whistleblower protection invoking the CVC PIDRE (Public Interest Disclosure and Protection of Informers) resolution.',
      'Independent Engineering Audits (IEA) mandated for all projects exceeding ₹500 crores.'
    ],
    modelConclusion: 'As Sardar Patel reminded the first batch of civil servants, the "Steel Frame" exists precisely to provide fearless, truthful advice without trembling before political pressure. By placing human safety and public trust above temporary career convenience, the administrator fulfills the highest calling of constitutional trusteeship.',
    relevantThinkers: ['Immanuel Kant (Categorical Imperative: Duty for Duty\'s sake)', 'Sardar Vallabhbhai Patel (Civil Service Integrity)', 'Nolan Committee (Selflessness & Integrity)'],
    relevantQuotes: [
      'Integrity is doing the right thing, even when no one is watching.',
      'A civil servant who yields to wrongful pressure ceases to be a servant of the public and becomes an instrument of tyranny.'
    ]
  },
  {
    id: 'cs-communal-clash-curfew',
    title: 'The Tense Festival: Communal Flashpoint, Social Media Rumors, and Religious Rights',
    year: 2022,
    exam: 'UPSC',
    difficulty: 'UPSC_Standard',
    domain: 'Police Administration',
    administrativeRole: 'District Magistrate (DM)',
    scenario: 'You are the District Magistrate of a communally sensitive district. A major religious procession of Community A is scheduled to pass through a narrow market street where Community B\'s historic place of worship is located. Tensions are running high due to provocative speeches circulating on social media over the past 48 hours. Intelligence reports indicate that fringe elements from both sides are armed with glass bottles, acid bulbs, and improvised weapons to provoke clashes. The organizers of the procession belong to the dominant local political faction and have obtained oral assurances from the local MLA that the route cannot be altered. Leaders of Community B announce that if the procession enters their lane with high-decibel DJ systems playing derogatory slogans, they will physically block the street. Just 3 hours before the procession begins, a viral video showing a desecration rumor sends hundreds of youth rushing onto the streets, lighting tyres and shouting incendiary slogans. Your Senior Superintendent of Police (SSP) recommends either imposing an immediate Section 144 curfew and stopping the procession entirely, or deploying heavy force and letting the procession pass through the original route to prevent a political backlash.',
    facts: [
      'Sensitive district with historical record of communal riots.',
      'High-decibel procession scheduled through a narrow lane adjacent to another community\'s shrine.',
      'Provocative fake video went viral, causing youth mobilization and tyre-burning.',
      'Local political pressure from the ruling party MLA to allow the unhindered original route.',
      'SSP offers two binary extremes: Total curfew/cancellation or forceful passage with heavy police presence.'
    ],
    stakeholders: [
      {
        name: 'General Innocent Residents & Shopkeepers',
        role: 'Peaceful citizens whose lives, businesses, and safety are in immediate jeopardy',
        interests: 'Peace, communal harmony, prevention of arson and bodily harm',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'District Magistrate & SSP (Administration)',
        role: 'Law and order authorities bound by constitutional duty to preserve peace and justice',
        interests: 'Preventing loss of life, impartial enforcement of law, preventing communal escalation',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Community A Procession Organizers',
        role: 'Religious group demanding cultural-religious celebration along traditional route',
        interests: 'Carrying out procession without feeling suppressed or discriminated against',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Community B Congregants',
        role: 'Religious group fearing desecration, harassment, and targeted violence',
        interests: 'Sanctity of place of worship, security of life and neighborhood',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Local Political Representatives',
        role: 'Elected leaders facing electoral pressures and communal polarization incentives',
        interests: 'Appeasing their vote bank, maintaining political clout',
        vulnerabilityLevel: 'Low'
      }
    ],
    ethicalIssues: [
      'Right to religious freedom (Article 25) versus Public Order and Morality',
      'Duty to preserve innocent lives versus political pressure from ruling factions',
      'Combating hate speech and viral disinformation in digital public squares',
      'Impartiality in policing: Refusal to appear partisan to either community',
      'Proportionality in use of state force: Avoiding both apathy and trigger-happy excesses'
    ],
    competingValues: [
      'Public Order vs Religious Liberty',
      'Administrative Impartiality vs Political Compliance',
      'Firm Law Enforcement vs Empathetic Community De-escalation'
    ],
    legalProvisions: [
      'Section 144 CrPC / Section 163 BNSS (Power to issue urgent orders in apprehended danger)',
      'Section 153A, 295A IPC / BNS (Promoting enmity between different groups on grounds of religion)',
      'Information Technology Act, 2000 (Section 69A: Emergency blocking of malicious disinformation content)',
      'Supreme Court directives in Tehseen Poonawalla vs Union of India (Guidelines on preventive, remedial, and punitive measures against mob violence)'
    ],
    constitutionalArticles: [
      'Article 25 (Freedom of conscience and religion subject to public order, morality, and health)',
      'Article 21 (Protection of Life and Personal Liberty)',
      'Article 14 (Equality before Law and equal protection of the laws)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Yield to the political MLA: Allow the procession through the original route with high-decibel music and armed escort, threatening Community B with mass arrests if they protest.',
        pros: ['Appeases ruling political leaders and organizers in the short term'],
        cons: ['Almost inevitable trigger for deadly communal riots, arson, and police firing', 'Blatant violation of administrative impartiality', 'Long-term erosion of public trust in the secular state'],
        legalityScore: 2,
        integrityScore: 1,
        fairnessScore: 1,
        publicInterestScore: 1,
        feasibilityScore: 6,
        longTermImpactScore: 1
      },
      {
        id: 'opt-b',
        text: 'Impose blanket shoot-at-sight curfew, cancel all religious festivities entirely, and arrest organizers of both sides indiscriminately.',
        pros: ['Halts immediate physical clashes in that specific hour'],
        cons: ['Deepens communal bitterness, victimhood mentality, and public hostility', 'Excessive, disproportionate state coercion penalizing innocent devotees', 'Guarantees future retaliatory flare-ups'],
        legalityScore: 6,
        integrityScore: 6,
        fairnessScore: 5,
        publicInterestScore: 5,
        feasibilityScore: 7,
        longTermImpactScore: 4
      },
      {
        id: 'opt-c',
        text: 'Adopt an active Multi-Track De-escalation Strategy: Temporarily suspend mobile internet to arrest viral rumors; summon the Joint Peace Committee (Aman Committee) of both community elders; negotiate a modified, secure alternative bypass route with mutually agreed volume caps and no provocative banners; deploy rapid riot-control units equipped with body cameras along sensitive junctions.',
        pros: [
          'Prevents bloodbath while respecting legitimate religious celebration via peaceful compromise',
          'Arrests viral disinformation before panic consumes neighboring towns',
          'Demonstrates visible, resolute administrative neutrality and high emotional intelligence',
          'Complies with Supreme Court guidelines in Tehseen Poonawalla case'
        ],
        cons: [
          'Requires intense, rapid negotiation and round-the-clock physical presence of the DM and SSP',
          'Extremists on both fringes will be disgruntled and seek political retribution'
        ],
        legalityScore: 10,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 10,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Exercise decisive administrative authority anchored in constitutional secularism and Emotional Intelligence. The Right to Religion under Article 25 is expressly subject to Public Order. Immediately debunk the viral rumor through verified official press statements and temporary local cyber restrictions. Negotiate an alternative ceremonial route through the Peace Committee, enforce strict prohibitions on provocative slogans and DJ sound systems, and deploy visible, non-lethal, video-monitored riot control detachments.',
    implementationPlan: [
      'Action Hour 0-1: Issue emergency orders under Section 144 / BNSS regulating assembly sizes, banning loudspeakers/DJ amplifiers, and invoking temporary 12-hour internet suspension under Telecom Suspension Rules to snuff out the viral rumor.',
      'Action Hour 1-2: Release a verified video statement by the DM, SSP, and doctors proving the desecration video is fake archive footage from another state, broadcasting it across local TV channels, radio, and police loudspeakers.',
      'Action Hour 2-3: Hold an emergency peace conclave with senior community leaders, temple trustees, mosque committee elders, and the MLA in the Collectorate conference room. Secure written consensus for an agreed alternative perimeter route that bypasses the narrow contested lane.',
      'Execution: Deploy female police battalions, Rapid Action Force (RAF), and drone cameras to continuously monitor the procession. The DM and SSP must physically walk alongside the procession at key intersections to project moral and physical administrative presence.',
      'Follow-up: Register non-bailable FIRs against miscreants who originated and propagated the fake video under cyber and hate speech statutes, ensuring strict, non-partisan prosecution.'
    ],
    institutionalSafeguards: [
      'Institutionalize permanent Mohalla Peace Committees meeting monthly to build inter-community social capital.',
      'Establish a 24x7 District Cyber Social Media Monitoring Cell to detect and debunk hate speech before viral dissemination.',
      'Standard Operating Procedure (SOP) requiring all festival routes to obtain written police verification 30 days in advance.'
    ],
    modelConclusion: 'Public order is not maintained by brute force or partisan surrender, but by impartial justice, moral authority, and high emotional intelligence. When the administrator stands as an unshakeable guardian of constitutional brotherhood, the secular foundations of our republic remain impregnable against divisive tempests.',
    relevantThinkers: ['Daniel Goleman (Emotional Intelligence & Crisis De-escalation)', 'Mahatma Gandhi (Communal Harmony)', 'Aristotle (Doctrine of the Mean)'],
    relevantQuotes: [
      'Peace is not the absence of conflict, but the ability to cope with conflict by peaceful means.',
      'The true measure of administrative strength is not how quickly it draws the sword, but how skillfully it dispels the fog of communal madness.'
    ]
  }
];
