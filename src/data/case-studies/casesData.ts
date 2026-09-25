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
  },
  {
    id: 'cs-tribal-mining-pesa',
    title: 'The Sacred Ridge vs Rare Earth Mining: Tribal Rights, Gram Sabha Autonomy, and National Economic Priorities',
    year: 2024,
    exam: 'UPSC',
    difficulty: 'UPSC_Standard',
    domain: 'Environmental Clearance',
    administrativeRole: 'District Collector & Magistrate',
    scenario: 'You are the District Magistrate of a Fifth Schedule tribal-dominated district. A major state-owned corporation, in joint venture with a multinational tech conglomerate, has discovered massive deposits of Neodymium and Dysprosium (vital rare earth elements required for India\'s semiconductor, electric vehicle, and defense missile manufacturing). The Union Ministry of Mines has classified the project as of "Highest Strategic National Importance" with an investment outlay of ₹25,000 crore. However, the mineral vein lies directly beneath the Niyamgiri-style sacred forested hills revered by the Primitive Vulnerable Tribal Group (PVTG) Dongria Kondh community as the seat of their presiding deity. Under the Forest Rights Act (FRA), 2006 and the Panchayats (Extension to Scheduled Areas) Act (PESA), 1996, free, prior, and informed consent of the local Gram Sabhas is statutorily mandatory. The tribal elders unanimously oppose the mining, stating that blasting the hill destroys their spiritual identity, medicinal flora, and perennial streams. A top infrastructure secretary calls you privately, urging you to "expedite the environment hearing, manage the local chiefs with welfare sops, or certify deemed consent through a curtailed quorum" before the Prime Minister\'s upcoming investment summit. Media reports allege that Maoist sympathizers are fanning the tribal agitation, while local unemployed youth are demanding factory jobs.',
    facts: [
      'Fifth Schedule tribal district with PVTG population possessing deep ancestral and spiritual links to the hill ecosystem.',
      'Rare earth mining project worth ₹25,000 crore is deemed vital for India\'s national semiconductor and defense sovereignty.',
      'PESA Act, 1996 and FRA, 2006 mandate genuine Gram Sabha resolution and consent prior to land acquisition.',
      'Gram Sabhas have resolutely voted against mining in their preliminary deliberations.',
      'Senior state infrastructure leadership is mounting informal pressure to bypass or dilute Gram Sabha quorum rules.',
      'Tension is brewing with youth desiring industrial employment on one side, and PVTG elders fearing cultural genocide on the other.',
      'Security agencies warn of insurgent exploitation if state force is deployed against peaceful tribals.'
    ],
    stakeholders: [
      {
        name: 'PVTG Tribal Community (Dongria Kondh)',
        role: 'Indigenous custodians of the sacred forest land',
        interests: 'Preservation of religious identity, community forest rights, pristine water sources, and ancestral habitat',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'District Magistrate (You)',
        role: 'Constitutional trustee of Fifth Schedule protections and district magistrate',
        interests: 'Upholding rule of law, statutory compliance with PESA/FRA, public order, and economic balance',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'National Strategic & Economic Interests',
        role: 'Sovereign push for critical mineral independence and industrial manufacturing',
        interests: 'Timely mineral extraction, national security supply chains, industrial investment',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'Local Youth & Informal Labor',
        role: 'Aspirants for economic modernization and employment',
        interests: 'Modern education, industrial wages, infrastructure, ending intergenerational poverty',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Ecological Integrity of the Watershed',
        role: 'Non-human stakeholder sustaining biodiversity and 3 downstream rivers',
        interests: 'Preventing deforestation, soil erosion, and toxic mine drainage into drinking aquifers',
        vulnerabilityLevel: 'High'
      }
    ],
    ethicalIssues: [
      'Utilitarian aggregate national wealth versus Kantian categorical duty towards indigenous human dignity',
      'Procedural subversion: Manufacturing fraudulent "deemed consent" versus genuine constitutional democracy',
      'Environmental Justice: Disproportionate ecological burden thrust upon historically marginalized adivasis',
      'Constitutional Morality under Fifth Schedule vs bureaucratic complicity in corporate coercion',
      'Intergenerational equity: Preserving ecological balance versus short-term mineral exploitation'
    ],
    competingValues: [
      'National Strategic Development vs Tribal Autonomy & Cultural Preservation',
      'Procedural Substantive Justice vs Administrative Expediency',
      'Economic Modernization vs Indigenous Ecological Heritage',
      'Career Protection vs Uncompromising Constitutional Duty'
    ],
    legalProvisions: [
      'Panchayats (Extension to Scheduled Areas) Act (PESA), 1996 - Section 4(i) (Mandatory Gram Sabha consultation before land acquisition in Scheduled Areas)',
      'Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 (FRA) - Section 3 and 4',
      'Supreme Court landmark judgment in Orissa Mining Corporation vs Ministry of Environment & Forests (2013) [Niyamgiri Judgment: Gram Sabhas possess final authority to decide whether mining impinges upon religious and cultural rights under Article 25]',
      'Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act (LARR), 2013'
    ],
    constitutionalArticles: [
      'Fifth Schedule (Special provisions as to the administration and control of Scheduled Areas and Scheduled Tribes)',
      'Article 21 (Right to Livelihood, Clean Environment, and Dignity)',
      'Article 25 (Freedom of Conscience and Right to freely profess religious practices, including sacred tribal groves)',
      'Article 46 (Directive Principle to promote with special care the educational and economic interests of Scheduled Tribes and protect them from social injustice)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Acquiesce to the Secretary\'s informal directives: Organize a fast-track Gram Sabha hearing with handpicked cooperative headmen, certify approval, and deploy heavy police protection to initiate boundary fencing.',
        pros: ['Guarantees immediate career advancement and commendation from political leadership', 'Ensures national mineral extraction begins ahead of the global summit'],
        cons: ['Blatant illegality violating PESA, FRA, and Supreme Court Niyamgiri precedent', 'Triggers violent tribal rebellion and potential Maoist resurgence', 'Destroys irrecoverable indigenous heritage and moral legitimacy of the state'],
        legalityScore: 2,
        integrityScore: 1,
        fairnessScore: 1,
        publicInterestScore: 3,
        feasibilityScore: 7,
        longTermImpactScore: 1
      },
      {
        id: 'opt-b',
        text: 'Issue an outright flat rejection of the mining proposal immediately without consulting the Union Government, declaring the entire hill permanently untouchable and banning all government surveyors.',
        pros: ['Earns heroic adulation from tribal activists and environmental NGOs', 'Protects tribal cultural autonomy completely'],
        cons: ['Exceeds statutory authority of a District Magistrate to unilaterally cancel national policy', 'Fails to explore technological alternatives like underground deep drilling or alternative ore veins', 'Leaves local youth trapped in economic stagnation without addressing genuine infrastructure needs'],
        legalityScore: 6,
        integrityScore: 7,
        fairnessScore: 6,
        publicInterestScore: 5,
        feasibilityScore: 4,
        longTermImpactScore: 5
      },
      {
        id: 'opt-c',
        text: 'Conduct an impeccably transparent, videographed Gram Sabha process as mandated by the Supreme Court, while simultaneously commissioning a multi-disciplinary technical review to explore non-invasive directional extraction and an unprecedented community equity-ownership model.',
        pros: ['Absolute fidelity to Constitutional Morality, PESA, and the 2013 Niyamgiri verdict', 'Provides complete transparency, preempting litigation and insurgent exploitation', 'Explores high-tech alternative mining methods (e.g. horizontal directional tunneling from outside the sacred crest) that spare the deity grove', 'Proposes statutory tribal equity sharing (District Mineral Foundation + corporate shares) if and only if consented by the people'],
        cons: ['Takes longer than the arbitrary summit deadline, requiring moral fortitude to withstand administrative pressure', 'Requires tireless consensus-building and bilingual technical communication with elders'],
        legalityScore: 10,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 9,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Stand steadfast on Constitutional Morality and the Supreme Court\'s Niyamgiri jurisprudence. The DM is a trustee of the Constitution, not a facilitator of corporate subversion. Ensure that every Gram Sabha meeting is conducted with full quorum, without armed police presence inside the assembly, and fully videographed with independent observers from the State Human Rights Commission. Send an evidence-based formal report to the Union and State governments delineating the statutory verdict of the tribals, accompanied by scientific Geological Survey alternatives to explore buffer-zone extraction without violating the sacred hill crest.',
    implementationPlan: [
      'Immediate (Day 1-3): Politely and firmly convey to the Infrastructure Secretary in writing that the Supreme Court\'s Niyamgiri ruling makes genuine Gram Sabha consent legally non-negotiable, and that procedural tampering will result in immediate High Court quashing and contempt.',
      'Week 1: Issue formal notifications for Gram Sabha conventions across all 12 affected villages in their indigenous dialect; invite independent retired judges and tribal researchers as neutral observers.',
      'Week 2: Set up bilingual digital audio-visual presentations detailing the exact spatial impact, water table studies, and rehabilitation blueprints so villagers possess unmanipulated information.',
      'Execution: Conduct open, videographed Gram Sabhas. Record the genuine verdict without coercion. If rejected, faithfully register the rejection in the statutory land acquisition portal.',
      'Long-Term: Propose a Special Tribal Livelihood and Eco-Tourism Corridor funded by the National Critical Mineral Fund to generate employment for youth without destroying the forest sanctuary.'
    ],
    institutionalSafeguards: [
      'Establish independent videography and biometric attendance protocols for all Fifth Schedule Gram Sabha meetings.',
      'Mandate that any mineral exploration inside tribal zones must include an autonomous Social Impact Assessment (SIA) conducted by premier tribal research institutes.',
      'Institutionalize 25% revenue-sharing equity directly with the Gram Sabha through the District Mineral Foundation (DMF) trust.'
    ],
    modelConclusion: 'Development without consent is not progress; it is subjugation. The true greatness of a constitutional democracy is measured not by the tonnage of rare earth ores it digs up, but by its capacity to protect the sacred dignity of its most vulnerable citizens against the juggernaut of predatory expediency.',
    relevantThinkers: ['John Rawls (Difference Principle & Justice as Fairness)', 'Verrier Elwin (Tribal Panchsheel)', 'Mahatma Gandhi (Trusteeship & Gram Swaraj)'],
    relevantQuotes: [
      'Tribals should develop along the lines of their own genius and we should avoid imposing anything upon them. — Jawaharlal Nehru (Tribal Panchsheel)',
      'The earth provides enough to satisfy every man\'s needs, but not every man\'s greed. — Mahatma Gandhi'
    ]
  },
  {
    id: 'cs-posh-star-performer',
    title: 'The Cost of High Performance: Workplace Sexual Harassment, Institutional Prestige, and the Test of the POSH Act',
    year: 2023,
    exam: 'UPSC',
    difficulty: 'UPSC_Standard',
    domain: 'Gender & Vulnerable Groups',
    administrativeRole: 'Principal Secretary / Head of Department',
    scenario: 'You are the Principal Secretary heading the Department of Information Technology and E-Governance. A young, brilliant contractual data scientist, Priya, submits a formal written complaint to you alleging persistent sexual harassment, unwelcome physical overtures, and sexually suggestive late-night messages by Dr. Raman, the Chief Technology Officer (CTO). Dr. Raman is a globally acclaimed artificial intelligence scientist who was personally recruited by the Chief Minister. Under his leadership, your state\'s flagship citizen service portal won the Prime Minister\'s Award for Excellence, saving ₹1,200 crore annually in fraudulent leakage. Dr. Raman is currently leading the final stages of a ₹3,000 crore cybersecurity overhaul project scheduled for launch in 30 days. When informally questioned, Dr. Raman dismisses the allegations as "misinterpreted friendly mentorship," claiming Priya became disgruntled because she received an average quarterly appraisal. He warns that if an inquiry is initiated, he will immediately resign, join a private tech titan in Singapore, and the entire cybersecurity migration will collapse, triggering systemic state vulnerability. Several senior colleagues advise you to "counsel Priya, transfer her with a promotion to another department, and hush up the matter" to protect the state\'s prestige and prevent a scandal.',
    facts: [
      'Formal written complaint of sexual harassment submitted by a junior contractual female scientist against the CTO.',
      'Complainant provides digital evidence (screenshots of persistent late-night suggestive messages and voice notes).',
      'Accused is an internationally celebrated expert driving the state\'s mission-critical ₹3,000 crore cybersecurity project.',
      'Accused threatens instant resignation and departure abroad if subjected to formal inquiry, risking project collapse.',
      'Departmental peers urge informal settlement, victim transfer, and cover-up in the guise of "public interest and state prestige".',
      'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 mandates statutory inquiry by the Internal Committee (IC).'
    ],
    stakeholders: [
      {
        name: 'Priya (Contractual Data Scientist)',
        role: 'Victim of workplace harassment asserting her fundamental right to safe employment',
        interests: 'Justice, safety, dignity, non-retaliation, protection against career destruction',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'Principal Secretary (You)',
        role: 'Head of Department and custodian of statutory compliance and moral culture',
        interests: 'Enforcing rule of law, zero tolerance for harassment, institutional integrity, project continuity',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Dr. Raman (Chief Technology Officer)',
        role: 'Accused senior scientist wielding enormous organizational indispensability',
        interests: 'Reputational preservation, evasion of penal liability, exerting leverage via critical projects',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'State Government & Public Cyber Infrastructure',
        role: 'Beneficiary of the ₹3,000 crore cybersecurity migration',
        interests: 'Continuity of critical cyber defense, avoidance of high-profile corruption or sex scandal',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'All Female Employees in Public Service',
        role: 'Silent observers judging whether the state protects victims or coddles powerful predators',
        interests: 'Institutional credibility of grievance redressal, fearless working conditions',
        vulnerabilityLevel: 'High'
      }
    ],
    ethicalIssues: [
      'Utilitarian compromise of gender justice: Sacrificing an individual woman\'s constitutional rights for collective technological efficiency',
      'Rule of Law vs Personality Cult: Is an individual irreplaceable enough to be above the law of the land?',
      'Institutional Hypocrisy: Touting "Mission Shakti" and women empowerment while muffling complaints within high offices',
      'Victimization and Power Asymmetry: Exploitation of vulnerable contractual status by tenured senior leadership',
      'Natural Justice and Procedural Integrity: Upholding unbiased investigation without pre-judging guilt or burying truth'
    ],
    competingValues: [
      'Gender Justice & Human Dignity vs Administrative Convenience & Technological Continuity',
      'Statutory Compliance (POSH Act) vs Institutional Reputation Protection',
      'Zero Tolerance Integrity vs Utilitarian Pragmatism',
      'Accountability of the Powerful vs Fear of Talent Flight'
    ],
    legalProvisions: [
      'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act) - Sections 4, 9, 11, 12 (Interim relief) and Section 19 (Duties of Employer)',
      'Supreme Court Vishaka vs State of Rajasthan (1997) guidelines: Safe workplace is an integral facet of fundamental rights',
      'Section 354A of Indian Penal Code / BNS provisions regarding workplace sexual harassment',
      'Central Civil Services (Conduct) Rules, 1964 - Rule 3C (Prohibition of sexual harassment)'
    ],
    constitutionalArticles: [
      'Article 14 (Right to Equality before Law)',
      'Article 15 (Prohibition of discrimination on grounds of sex)',
      'Article 19(1)(g) (Right to practice any profession in a safe and non-coercive environment)',
      'Article 21 (Right to Life with Dignity and bodily autonomy)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Persuade Priya to accept a generous promotion and lateral transfer to the State Data Analytics Center, close the complaint informally, and warn Dr. Raman behind closed doors to be discreet.',
        pros: ['Ensures the ₹3,000 crore cybersecurity overhaul proceeds smoothly without talent disruption', 'Avoids scandalous media exposure for the government'],
        cons: ['Blatant illegality under Section 16 & 19 of the POSH Act, inviting severe statutory penalties', 'Normalizes predatory behavior and sends a chilling message that powerful men enjoy criminal impunity', 'Destroys Priya\'s faith in justice and causes profound psychological trauma'],
        legalityScore: 2,
        integrityScore: 1,
        fairnessScore: 1,
        publicInterestScore: 3,
        feasibilityScore: 8,
        longTermImpactScore: 1
      },
      {
        id: 'opt-b',
        text: 'Summarily terminate Dr. Raman\'s contract immediately without inquiry to exhibit decisive zero tolerance, and issue a public press release branding him a predator.',
        pros: ['Projects aggressive commitment to women\'s safety', 'Wins immediate applause on social media'],
        cons: ['Violates the foundational principle of Natural Justice (Audi Alteram Partem)', 'Leaves the state open to massive defamation and wrongful termination litigation', 'Causes total, sudden collapse of the statewide cybersecurity project without handover'],
        legalityScore: 4,
        integrityScore: 5,
        fairnessScore: 3,
        publicInterestScore: 4,
        feasibilityScore: 6,
        longTermImpactScore: 3
      },
      {
        id: 'opt-c',
        text: 'Immediately transfer the complaint to the statutory Internal Complaints Committee (IC) with external NGO oversight; provide interim protection to Priya; simultaneously activate a shadow technical architecture team to de-risk project reliance on Dr. Raman.',
        pros: ['Strict, flawless adherence to the POSH Act, 2013 and Supreme Court mandates', 'Guarantees fair, confidential, evidence-based inquiry without bias', 'Grants Priya interim relief (paid leave or option to work from home without appraisal victimisation)', 'Deprives Dr. Raman of blackmail leverage by onboarding a high-level technical backup team from NIC/CDAC to document institutional knowledge'],
        cons: ['Requires managing political fallout and firm administrative nerve against corporate threats', 'Adds temporary operational stress to project timelines'],
        legalityScore: 10,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 10,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Maintain uncompromising adherence to the Rule of Law and Gender Justice. No individual, regardless of scientific brilliance or political clout, is indispensable or above the law. Immediately forward the complaint to the presiding officer of the Internal Complaints Committee (headed by a senior female officer and including an external independent member). Enforce Section 12 interim measures: protect Priya from any adverse appraisal or hostile environment. Refuse to be blackmailed by Dr. Raman\'s resignation threat; immediately mobilize senior scientists from the National Informatics Centre (NIC) and C-DAC to audit and take charge of critical repository access keys, ensuring institutional resilience.',
    implementationPlan: [
      'Hour 0-2: Formally hand over Priya\'s sealed complaint to the IC Presiding Officer; instruct the committee to commence independent proceedings as per statutory timelines (completion within 90 days).',
      'Hour 2-4: Grant Priya immediate interim relief under Section 12 of POSH Act (reassigning her reporting manager to an independent joint director, ensuring her contractual tenure is automatically protected).',
      'Hour 4-8: Summon an emergency technical continuity conclave with the Director-General of NIC and CERT-In. Secure two senior enterprise architects on emergency deputation to mirror all technical architecture and eliminate single-person dependency on Dr. Raman.',
      'Formal Communication: Inform Dr. Raman in writing that the law must take its course, that the government expects full cooperation with the IC, and that any retaliatory action or evidence tampering will result in immediate police referral under the BNS.',
      'Institutional Reform: Conduct mandatory POSH sensitization and gender audit across all department offices, contracts, and vendor partnerships.'
    ],
    institutionalSafeguards: [
      'Institute mandatory third-party gender audits of all high-tech state laboratories and outsourced contract setups.',
      'Establish technical succession protocols so no single consultant or expert holds monopoly power over state critical infrastructure.',
      'Mandate that contractual personnel receive identical POSH protections and whistleblower immunity as permanent civil servants.'
    ],
    modelConclusion: 'An administration that trades the dignity and safety of its women for technological milestones builds its edifice upon quicksand. True excellence is never purely technical; it is fundamentally moral. Upholding the rule of law against the powerful is the highest acid test of civil service integrity.',
    relevantThinkers: ['Immanuel Kant (Categorical Imperative: Humanity as an end, never as a mere means)', 'B.R. Ambedkar (Social Democracy & Emancipation of Women)', 'John Stuart Mill (The Subjection of Women)'],
    relevantQuotes: [
      'I measure the progress of a community by the degree of progress which women have achieved. — Dr. B.R. Ambedkar',
      'There is no greater test of human virtue than to refuse to purchase public advantage at the expense of a private wrong.'
    ]
  },
  {
    id: 'cs-police-encounter-pressure',
    title: 'The Trap of Instant Justice: Public Clamor for Encounters, Political Ultimatum, and the Rule of Law',
    year: 2024,
    exam: 'UPSC',
    difficulty: 'UPSC_Standard',
    domain: 'Police Administration',
    administrativeRole: 'Senior Superintendent of Police (SSP)',
    scenario: 'You are the Senior Superintendent of Police (SSP) of a sensitive industrial district. A horrific crime occurs: a 7-year-old schoolgirl from a Dalit laborer family is abducted, brutally gang-raped, and murdered, her body dumped near a railway culvert. The district erupts in ferocious public grief and fury. Within 36 hours, your forensic team tracks down and arrests four suspects, including a habitual offender with political connections. As news of the arrests spreads, a crowd of 15,000 citizens, led by local student unions and political opposition, surrounds the police station, pelting stones, attempting to breach the perimeter to lynch the suspects, and chanting "Encounter them right now or we burn the city!" Multiple regional television news anchors run sensationalist prime-time debates praising "instant bulldozer and encounter justice" from neighboring regions and branding you a "spineless officer protecting rapists". Late at night, the State Home Minister calls your private phone, explicitly stating: "The Chief Minister is facing immense pressure in the Assembly tomorrow. Take the accused out under the pretext of scene recreation, stage an encounter, and close this chapter tonight. You will be decorated with a Gallantry Medal, and I will personally ensure the magisterial inquiry is buried. If you refuse, you will be suspended by sunrise for failure of law and order."',
    facts: [
      'Barbaric gang-rape and murder of a 7-year-old Dalit child sparking massive public outrage and grief.',
      'Four suspects apprehended within 36 hours with strong forensic, CCTV, and eyewitness evidence.',
      'Mob of 15,000 people demanding instant summary execution (lynching or police encounter) outside police station.',
      'Sensational media trial glorifying extra-judicial encounter killings and mocking legal due process.',
      'Direct ministerial command demanding a fake encounter staged during crime-scene recreation, coupled with career threats and gallantry allurements.',
      'The Constitution, CrPC/BNSS, Supreme Court PUCL judgment (2014), and NHRC guidelines strictly prohibit staged encounters.'
    ],
    stakeholders: [
      {
        name: 'The Deceased Child & Bereaved Family',
        role: 'Victims of heinous brutality demanding swift, unshakeable justice',
        interests: 'Fast-track trial, capital punishment through legal verdict, state compensation, human dignity',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'Senior Superintendent of Police (You)',
        role: 'District police chief torn between political coercion, mob frenzy, and constitutional duty',
        interests: 'Preserving the Rule of Law, preventing mob violence, ethical integrity, career survival',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'The Four Accused Suspects',
        role: 'Individuals accused of heinous crimes entitled to constitutional due process and fair trial',
        interests: 'Physical safety from lynching or extrajudicial execution, legal defense under Article 22',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'The Agitated Public & Civil Society',
        role: 'Citizens consumed by righteous anger but seduced by violent retribution',
        interests: 'Deterrence against horrific crimes, safety of women and children, emotional catharsis',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'The Democratic Republic & Justice System',
        role: 'The institutional framework of constitutional governance',
        interests: 'Upholding Rule of Law vs descending into mobocracy and police vigilantism',
        vulnerabilityLevel: 'High'
      }
    ],
    ethicalIssues: [
      'Rule of Law vs Retributive Vigilantism: Can extra-judicial murder ever deliver true justice?',
      'Constitutional Due Process (Article 21) vs Populist Bloodlust and Media Trials',
      'Obedience to Unlawful Superior Orders: The Nuremberg defense in democratic administration',
      'Integrity under Extreme Duress: Withstanding ministerial threats of suspension and false glory',
      'The danger of false closure: Real accomplices or systemic lapses remain hidden when suspects are silenced in staged encounters'
    ],
    competingValues: [
      'Constitutional Due Process vs Instant Retributive Catharsis',
      'Moral Courage & Professional Integrity vs Political Compliance & Career Self-Preservation',
      'Human Rights & Rule of Law vs Populist Majoritarian Pressure',
      'Institutional Legitimacy of the Judiciary vs Police Despotism'
    ],
    legalProvisions: [
      'Supreme Court landmark verdict in People\'s Union for Civil Liberties (PUCL) vs State of Maharashtra (2014) [16-point mandatory guidelines: Mandatory CID/independent team inquiry into encounters, magisterial inquest under Section 176 CrPC/BNSS, immediate intimation to NHRC, automatic FIR against police officers involved]',
      'National Human Rights Commission (NHRC) Guidelines on Encounter Deaths (1997 & 2010)',
      'Indian Penal Code / BNS provisions regarding Murder (Section 302 / 103 BNS) and Criminal Conspiracy',
      'Police Act, 1861 and State Police Rules'
    ],
    constitutionalArticles: [
      'Article 21 (No person shall be deprived of his life or personal liberty except according to procedure established by law)',
      'Article 14 (Equality before the law and equal protection of the laws)',
      'Article 22 (Protection against arbitrary arrest and detention; right to legal counsel)',
      'Article 50 (Separation of Judiciary from Executive - Police cannot act as judge, jury, and executioner)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Surrender to ministerial pressure: Stage the encounter tonight during crime scene reconstruction, claim the suspects snatched police service weapons, and celebrate the instant pacification of the mob.',
        pros: ['Defuses immediate public rage and halts rioting overnight', 'Secures political patronage, avoids immediate suspension, and yields medals'],
        cons: ['Blatant state-sponsored murder violating Article 21 and the PUCL judgment', 'Inevitable judicial scrutiny, independent CBI inquiry, and criminal conviction of involved officers', 'Subverts the civilizational foundation of the Indian Republic into a banana republic'],
        legalityScore: 1,
        integrityScore: 1,
        fairnessScore: 1,
        publicInterestScore: 2,
        feasibilityScore: 7,
        longTermImpactScore: 1
      },
      {
        id: 'opt-b',
        text: 'Refuse the minister\'s order publicly via a viral midnight press conference, resign from the Indian Police Service in protest, and leave the police station undefended.',
        pros: ['Dramatically exhibits personal moral purity and moral outrage'],
        cons: ['Abandons duty in the middle of a catastrophic crisis, allowing the mob to breach the police station and lynch the accused', 'Results in total breakdown of law and order, police firing, and civilian deaths', 'An act of administrative desertion rather than responsible ethical leadership'],
        legalityScore: 4,
        integrityScore: 6,
        fairnessScore: 3,
        publicInterestScore: 2,
        feasibilityScore: 3,
        longTermImpactScore: 2
      },
      {
        id: 'opt-c',
        text: 'Firmly reject the unlawful directive; secretly transfer the accused to a high-security Central Prison under armed judicial remand; address the public and media with evidence of the watertight chargesheet; establish a Fast-Track Special Court with day-to-day hearings.',
        pros: ['Absolute fidelity to the Constitution, Rule of Law, and Article 21', 'Protects suspects from both mob lynching and extra-judicial execution', 'Channels public rage into legitimate legal retribution: a water-tight forensic chargesheet filed within 7 days', 'Invokes Fast-Track Special Court under POCSO/BNS ensuring lawful capital conviction without procedural loopholes'],
        cons: ['Immediate risk of punitive transfer by the disgruntled minister (a badge of honor for an ethical officer)', 'Requires exceptional crowd control and physical tactical fortitude to withstand mob sieges'],
        legalityScore: 10,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 10,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Stand immovable upon the bedrock of Constitutional Morality and the Rule of Law. Reject the minister\'s illegal order with polite administrative finality ("Sir, as per Supreme Court PUCL directives and the Constitution, I cannot execute an extrajudicial killing; our forensic evidence is flawless, and we will secure death penalty through the court in 30 days"). Secretly shift the accused under heavy escort to the high-security central jail under midnight magisterial authorization. Face the mob personally with the District Magistrate, broadcast the undeniable forensic proof, and commit to a 7-day chargesheet and day-to-day trial. Prepare to bear any punitive administrative retaliation with dignity.',
    implementationPlan: [
      'Night 1 (00:00 - 02:00): Execute secret tactical transit of the accused to the High-Security Divisional Jail using decoy vehicles, with judicial magistrate remand granted via electronic video link.',
      'Night 1 (02:00 - 04:00): Deploy Rapid Action Force (RAF) and anti-riot barricades with water cannons around the police station; instruct officers strictly to exercise minimum non-lethal force.',
      'Day 1 Morning: Convene a live televised joint press conference with the District Magistrate and Forensic Science Director. Display the chain of custody, DNA match, CCTV corroboration, and announce that the chargesheet will be submitted in 7 days under POCSO Section 35.',
      'Legal Acceleration: Formally petition the High Court Chief Justice to designate a Dedicated Fast-Track Special Court for day-to-day trial, appointing a legendary Special Public Prosecutor known for securing convictions.',
      'Victim Support: Personally deliver ₹25 lakh state victim compensation and psychological trauma support to the bereaved family, standing with them as a compassionate state guardian.'
    ],
    institutionalSafeguards: [
      'Implement the Supreme Court\'s Prakash Singh (2006) directives on Police Reforms, separating investigative police from law-and-order wings.',
      'Mandate that any police encounter death must trigger an automatic FIR registered by an independent district investigation team under judicial magistrate oversight.',
      'Body cameras and GPS geo-tagging on all police vehicles deployed for crime scene visits to prevent fabricated encounters.'
    ],
    modelConclusion: 'When the police become the executioner, the badge loses its constitutional sanctity and becomes a license for lawlessness. True justice is not the satisfying of a lynch mob\'s primal scream, but the patient, unshakeable triumph of the Rule of Law over darkness.',
    relevantThinkers: ['Cesare Beccaria (On Crimes and Punishments: Certainty of punishment deters crime, not theatrical cruelty)', 'Mahatma Gandhi (Means and Ends: Evil means cannot yield just ends)', 'Lon L. Fuller (The Morality of Law)'],
    relevantQuotes: [
      'In a civilized society, the rule of law is the sole barrier that stands between order and the law of the jungle. — Supreme Court of India',
      'I have always believed that an eye for an eye only ends up making the whole world blind. — Mahatma Gandhi'
    ]
  },
  {
    id: 'cs-ai-facial-recognition-slum',
    title: 'Algorithmic Evictions: Facial Recognition Welfare Audits, Data Injustice, and Slum Rehabilitation',
    year: 2024,
    exam: 'UPSC',
    difficulty: 'Advanced',
    domain: 'Technology & AI',
    administrativeRole: 'Municipal Commissioner & Smart City CEO',
    scenario: 'You are the Municipal Commissioner of a metropolitan city spearheading an ambitious ₹8,000 crore Smart City Slum Redevelopment and In-Situ Housing Scheme. To eliminate ghost beneficiaries, political patronage, and middleman fraud, the Municipal Corporation deploys an advanced AI-driven facial recognition biometric surveillance system to survey 45,000 slum households living along an urban canal embankment. The software algorithm was procured from a celebrated private tech startup. However, three months into the audit, an independent data audit by IIT researchers reveals that the AI algorithm suffers from a 28% false negative error rate when scanning women, elderly citizens, and dark-skinned manual laborers whose faces are altered by age, cataracts, burns, or lack of high-resolution digital lighting in tin shacks. As a direct consequence, 3,200 genuine, destitute families have been classified by the AI algorithm as "Unauthorized Intruders / Non-Residents" and have been issued automatic 7-day demolition eviction notices with zero entitlement to newly constructed pucca rehabilitation flats. The tech company claims that their algorithm is proprietary IP and that manual reviews are too expensive and will derail the World Bank project financing deadline. The Mayor and local ruling party councillors urge you to proceed with the bulldozer eviction, arguing that "a few wrongful omissions are a normal cost of massive urban modernization."',
    facts: [
      '45,000 slum households being audited for rehabilitation into permanent housing using an AI facial recognition tool.',
      'AI algorithm has a proven 28% false negative failure rate heavily biased against impoverished, dark-skinned, and elderly residents.',
      '3,200 genuine families are facing imminent bulldozing of their shacks and permanent homelessness due to algorithmic failure.',
      'Private tech firm refuses to open the proprietary black-box algorithm and resists manual physical verification.',
      'Political executive (Mayor) and World Bank funding deadlines exert fierce pressure to clear the canal embankment immediately.',
      'The Digital Personal Data Protection Act, 2023 and Supreme Court Puttaswamy judgment mandate necessity, proportionality, and non-discrimination.'
    ],
    stakeholders: [
      {
        name: '3,200 Excluded Slum Families',
        role: 'Vulnerable citizens facing arbitrary homelessness and loss of human dignity',
        interests: 'Secure shelter, fair physical verification, human appeal, fundamental right to life',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'Municipal Commissioner (You)',
        role: 'Executive head balancing urban development timelines with administrative justice',
        interests: 'Preventing human rights catastrophe, ensuring ethical AI governance, meeting legitimate infrastructure targets',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Private Tech Vendor',
        role: 'Software provider defending proprietary algorithms and commercial margins',
        interests: 'Protecting IP, avoiding financial liability for faulty models, avoiding expensive manual audits',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'The City & Canal Basin Ecology',
        role: 'Urban ecosystem plagued by monsoon urban flooding due to clogged canal banks',
        interests: 'Desiltation of canal, flood prevention for 5 million citizens, hygienic modern housing',
        vulnerabilityLevel: 'Medium'
      }
    ],
    ethicalIssues: [
      'Algorithmic Injustice and Technological Determinism: Treating automated code as infallible while treating human beings as disposable',
      'Data Colonialism: Subjecting impoverished populations to untested algorithmic experiments without informed consent',
      'Right to Explanation vs Proprietary Black-Box Systems in public welfare distribution',
      'Utilitarian aggregate urban renewal versus fundamental rights of the poorest urban denizens',
      'State delegation of sovereign discretionary power to unaccountable commercial software'
    ],
    competingValues: [
      'Technological Modernization & Speed vs Human Dignity & Natural Justice',
      'Commercial Proprietary Secrecy vs Democratic Transparency & Explainability',
      'Efficiency of Smart City Delivery vs Empathy for Marginalized Groups',
      'Administrative Compliance with Funding Deadlines vs Ethical Duty to the Destitute'
    ],
    legalProvisions: [
      'Digital Personal Data Protection Act (DPDP), 2023 - Principles of purpose limitation and data minimization',
      'Supreme Court landmark verdict in K.S. Puttaswamy vs Union of India (2017) [Nine-judge bench establishing Right to Privacy under Article 21 and the triple test of Legality, Need, and Proportionality]',
      'Supreme Court judgment in Olga Tellis vs Bombay Municipal Corporation (1985) [Right to Livelihood and Shelter under Article 21; right to reasonable hearing prior to eviction]',
      'NITI Aayog National Strategy for Artificial Intelligence: #AIForAll and Responsible AI Principles'
    ],
    constitutionalArticles: [
      'Article 21 (Right to Life, encompassing shelter, livelihood, and privacy)',
      'Article 14 (Equality before Law and protection against arbitrary algorithmic classification)',
      'Article 39(b) & (c) (Distribution of material resources to subserve common good)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Proceed with the scheduled demolition using the AI audit list to meet the World Bank deadline; advise the 3,200 evicted families to file appeals at the municipal tribunal afterwards.',
        pros: ['Guarantees immediate receipt of the next ₹2,000 crore World Bank funding tranche', 'Clears the canal embankment before the monsoon'],
        cons: ['Renders over 15,000 poor human beings destitute and homeless on the street', 'Severe human rights violation under Article 21 and Olga Tellis precedent', 'Catastrophic PR disaster and national judicial condemnation'],
        legalityScore: 3,
        integrityScore: 2,
        fairnessScore: 1,
        publicInterestScore: 4,
        feasibilityScore: 8,
        longTermImpactScore: 2
      },
      {
        id: 'opt-b',
        text: 'Scrap the entire ₹8,000 crore Smart City housing project, terminate all software contracts, and allow the slum to remain permanently on the flood-prone embankment.',
        pros: ['Completely shields the 3,200 families from any immediate eviction distress'],
        cons: ['Leaves 45,000 families living in disease, squalor, and annual flood drownings', 'Causes loss of multi-thousand crore infrastructure funding for the city', 'Paralyzes urban renewal through administrative cowardice'],
        legalityScore: 5,
        integrityScore: 6,
        fairnessScore: 5,
        publicInterestScore: 3,
        feasibilityScore: 4,
        longTermImpactScore: 2
      },
      {
        id: 'opt-c',
        text: 'Issue an immediate stay on eviction notices for all disputed households; mandate a hybrid Physical-Social Verification Drive led by ward revenue teams and citizen representatives; hold the tech vendor contractually liable for algorithm retraining with algorithmic audits.',
        pros: ['Upholds the fundamental right to shelter and natural justice under Article 21', 'Corrects the 28% algorithmic bias through verified ground records (ration cards, voter IDs, electricity bills, school records)', 'Compels the vendor under penalty clauses to retrain facial models with diverse local datasets', 'Maintains project momentum while ensuring zero wrongful human evictions'],
        cons: ['Pushes project handover by 45 days, requiring negotiation with funding agencies', 'Demands intense administrative deployment of municipal revenue inspectors'],
        legalityScore: 10,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 10,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Champion Ethical and Responsible AI. Technology must be a servant of human welfare, never its executioner. Immediately suspend the demolition notices issued to the 3,200 flagged families. Institute an emergency 21-day "On-Site Physical Verification and Grievance Camp" inside the slum settlements, where joint teams of revenue officers, ward council members, and community volunteers cross-verify claims using multi-document proof (voter ID, electricity bills, school admissions). Issue a formal contractual breach notice to the AI software provider under public procurement integrity covenants, requiring them to eliminate algorithmic demographic bias at their own expense before receiving further payments.',
    implementationPlan: [
      'Day 1: Issue executive order freezing all demolition notices issued on the basis of standalone algorithmic mismatch; notify the World Bank team of a 45-day technical verification grace period.',
      'Day 2-5: Establish 10 decentralized physical verification kiosks directly inside the slum settlements equipped with document scanners and assisted by local civil society volunteers.',
      'Day 6-20: Process the 3,200 flagged households. Any resident with 3 valid physical proof documents (ration card, electricity bill, local clinic card) will be issued an irrevocable provisional allotment certificate.',
      'Contractual Action: Invoke quality-of-service SLA penalty clauses on the private tech vendor, withholding 30% milestone fees until third-party audit by IIT/NIT verifies false negative rates drop below 1%.',
      'Policy Institutionalization: Formulate the "Municipal Charter on Algorithmic Governance & Welfare AI", mandating that no citizen can be deprived of a statutory benefit solely by an automated algorithm without mandatory human review.'
    ],
    institutionalSafeguards: [
      'Establish a permanent Municipal Algorithmic Ethics Oversight Committee to audit any public sector AI deployment.',
      'Mandate "Human-in-the-Loop" as a non-negotiable statutory rule in all public welfare and municipal exclusion decisions.',
      'Incorporate open-source transparency requirements in all state civic software procurements.'
    ],
    modelConclusion: 'Smart cities cannot be built upon blind algorithms and broken lives. True urban intelligence lies not in the resolution of surveillance cameras, but in the sensitivity of administrative conscience that ensures the humblest citizen is never rendered an error code in the state\'s database.',
    relevantThinkers: ['Amartya Sen (Capability Approach & Development as Freedom)', 'John Rawls (Veil of Ignorance: What rules would you want if you were an elderly slum resident?)', 'Hannah Arendt (Dangers of Automated Bureaucratic Detachment)'],
    relevantQuotes: [
      'Development is about expanding the real freedoms that people enjoy. — Amartya Sen',
      'The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and brilliant. The marriage of the two is a challenge of wisdom.'
    ]
  },
  {
    id: 'cs-industrial-effluent-cancer',
    title: 'Toxic Prosperity: Industrial Effluents, Local Livelihoods, and the Battle against an Environmental Cancer Cluster',
    year: 2023,
    exam: 'UPSC',
    difficulty: 'UPSC_Standard',
    domain: 'Corporate & CSR',
    administrativeRole: 'District Magistrate & Regional Pollution Board Head',
    scenario: 'You are the District Magistrate of an economically backward district that hosts the state\'s largest agrochemical and dye manufacturing plant, ChemVanguard Ltd. The factory is the economic lifeline of the region, directly employing 6,500 local workers and supporting over 20,000 ancillary livelihoods (truckers, canteen vendors, packaging units). In addition, the factory contributes 40% of the district\'s local municipal tax revenue and spends ₹15 crore annually on CSR-funded schools and mobile clinics. However, an alarming epidemiological study conducted by the All India Institute of Medical Sciences (AIIMS) reveals that over the past six years, the villages within a 15-kilometer radius of the factory have witnessed a 450% surge in pediatric leukemia, kidney failures, and spontaneous abortions. A surprise night inspection by your Central Pollution Control Board (CPCB) team uncovers deep underground borewells through which the factory has been secretly injecting untreated heavy metal carcinogenic effluents (hexavalent chromium and arsenic) directly into the deep groundwater aquifer, bypassing the on-site Effluent Treatment Plant (ETP) to save ₹80 lakh in monthly electricity and chemical costs. The local Member of Parliament, whose election campaign was heavily funded by the factory owners, storms into your office and warns: "If you seal this plant, 6,500 families will starve, workers will riot across the highways, and the Chief Minister will have you shunted to an insignificant post within two hours."',
    facts: [
      'ChemVanguard Ltd employs 6,500 workers and anchors the livelihood of over 20,000 local citizens.',
      'AIIMS medical study proves a 450% spike in childhood leukemia, kidney destruction, and congenital defects in surrounding villages.',
      'CPCB night raid reveals criminal covert injection of untreated hexavalent chromium and arsenic into drinking aquifers.',
      'Factory deliberately bypassed ETP to save ₹80 lakh per month in operational expenditure.',
      'Political patron (local MP) threatens district-wide rioting, worker starvation, and immediate administrative transfer if plant is shut.',
      'Environment (Protection) Act, 1986 and Water (Prevention and Control of Pollution) Act, 1974 empower closure and criminal prosecution.'
    ],
    stakeholders: [
      {
        name: 'Affected Villagers & Children',
        role: 'Innocent victims suffering catastrophic poisoning and incurable cancers',
        interests: 'Clean drinking water, life, medical treatment, environmental restoration, criminal justice',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'District Magistrate (You)',
        role: 'Guardian of public health, rule of law, and ecological sanity',
        interests: 'Stopping criminal poisoning of aquifers, upholding statutory law, managing economic transition',
        vulnerabilityLevel: 'Medium'
      },
      {
        name: 'Factory Workers & Ancillary Laborers (6,500+)',
        role: 'Working class families dependent on weekly wages for subsistence',
        interests: 'Livelihood security, alternative employment, avoiding destitution and starvation',
        vulnerabilityLevel: 'High'
      },
      {
        name: 'Factory Management & Promoters',
        role: 'Corporate polluters prioritizing profit margins over human lives',
        interests: 'Evading criminal liability, minimizing financial penalties, keeping plant running',
        vulnerabilityLevel: 'Low'
      },
      {
        name: 'Political Leadership (MP)',
        role: 'Elected representative compromised by corporate political donations',
        interests: 'Protecting political patrons, averting visible industrial shutdown, exerting executive control',
        vulnerabilityLevel: 'Low'
      }
    ],
    ethicalIssues: [
      'Right to Life (Article 21) versus Right to Livelihood: Can economic survival justify the poisoning of children?',
      'Corporate Criminality and Profit-Driven Murder: Secretly injecting arsenic to save ₹80 lakh while spending pennies on PR CSR',
      'The Precautionary Principle and Polluter Pays Principle in environmental governance',
      'Moral Courage against Political Coercion: Choosing between administrative exile and complicity in silent genocide',
      'Environmental Injustice: Poor rural villagers paying with their lives for chemical profits enjoyed by distant shareholders'
    ],
    competingValues: [
      'Right to Life & Public Health vs Economic Employment & Industrial Growth',
      'Corporate Accountability & Legal Integrity vs Political Expediency & Cronyism',
      'Intergenerational Justice vs Immediate Industrial Output',
      'Moral Duty to Innocent Children vs Fear of Personal Career Penalties'
    ],
    legalProvisions: [
      'Water (Prevention and Control of Pollution) Act, 1974 - Section 33A (Power of regulatory authorities to order closure, stoppage of electricity/water)',
      'Environment (Protection) Act, 1986 - Section 5 & Section 15 (Penalties for contravention)',
      'Supreme Court landmark judgments: Vellore Citizens\' Welfare Forum vs Union of India (1996) [Precautionary Principle and Polluter Pays Principle are essential features of sustainable development]',
      'M.C. Mehta vs Union of India (Oleum Gas Leak case - Absolute Liability Principle)',
      'Section 277 & 278 of IPC / BNS provisions on fouling water of public spring or reservoir'
    ],
    constitutionalArticles: [
      'Article 21 (Protection of Life and Personal Liberty, encompassing Right to pollution-free water and air)',
      'Article 48A (Duty of the State to protect and improve the environment and safeguard forests and wildlife)',
      'Article 51A(g) (Fundamental duty of every citizen to protect and improve the natural environment)'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Heed the MP\'s warning: Issue a secret minor administrative fine of ₹10 lakh, accept a written promise of compliance from the factory, and suppress the AIIMS cancer report.',
        pros: ['Avoids immediate factory closure and prevents worker agitation', 'Maintains political harmony and preserves your district posting'],
        cons: ['Complicity in deliberate poisoning and slow murder of thousands of innocent rural children', 'Criminal dereliction of constitutional duty', 'Inevitable public exposure, National Green Tribunal (NGT) intervention, and imprisonment'],
        legalityScore: 1,
        integrityScore: 1,
        fairnessScore: 1,
        publicInterestScore: 1,
        feasibilityScore: 7,
        longTermImpactScore: 1
      },
      {
        id: 'opt-b',
        text: 'Immediately order the total, permanent demolition of the factory at dawn without notice, freezing all assets and leaving all 6,500 workers abruptly jobless and without pending wages.',
        pros: ['Terminates the effluent discharge immediately', 'Delivers intense moral shock to corporate polluters'],
        cons: ['Triggers catastrophic socioeconomic chaos, highway blockades, and worker suicides', 'Deprives workers of their legal dues and severance pay under labor statutes', 'Likely to be stayed instantly by the High Court due to procedural haste'],
        legalityScore: 5,
        integrityScore: 7,
        fairnessScore: 4,
        publicInterestScore: 5,
        feasibilityScore: 5,
        longTermImpactScore: 4
      },
      {
        id: 'opt-c',
        text: 'Order the immediate operational shutdown of polluting manufacturing units under Section 33A; register criminal non-bailable FIRs against the promoters under the Absolute Liability Doctrine; seal the illegal borewells; mandate that the corporate entity pay 100% idle wages to workers and create a ₹100 crore escrow fund for medical treatment and aquifer bioremediation.',
        pros: ['Halts the toxic poisoning immediately, saving children\'s lives', 'Enforces Supreme Court Absolute Liability doctrine (M.C. Mehta & Vellore precedents)', 'Protects the vulnerable workers by mandating full wage continuity during shutdown funded by corporate reserves', 'Finances comprehensive cancer treatments and deep aquifer remediation via legally mandated escrow deposits'],
        cons: ['Guarantees immediate political hostility from vested lobbies', 'Requires robust multi-agency coordination to prevent law and order disturbances'],
        legalityScore: 10,
        integrityScore: 10,
        fairnessScore: 10,
        publicInterestScore: 10,
        feasibilityScore: 9,
        longTermImpactScore: 10
      }
    ],
    balancedCourseOfAction: 'Adopt Option C: Act with uncompromising moral fortitude and statutory authority. When public life and children\'s survival are at stake, no economic rationale can justify hesitation. Under Section 33A of the Water Act and Section 5 of the Environment Protection Act, immediately disconnect electricity and water supply to the manufacturing units. Register an FIR under BNS/IPC against the Managing Director and Board for criminal negligence and poisoning public aquifers. Under the Absolute Liability principle, attach corporate bank accounts to ensure worker salaries continue to be paid during the suspension period and to create a Dedicated Cancer Care & Aquifer Remediation Fund.',
    implementationPlan: [
      'Hour 0-3: Seal the illegal deep-injection borewells with forensic chain-of-custody sampling; issue formal closure order under Section 33A; notify the State Pollution Control Board and CPCB.',
      'Hour 3-6: Brief the District Police Chief (SSP) to register non-bailable FIRs against plant directors; deploy police pickets at the factory gates to secure records and prevent document destruction.',
      'Worker Protection: Issue an order under the Industrial Disputes Act and Disaster Management Act mandating that the company pay full wages during the mandatory environmental overhaul, preventing worker distress.',
      'Community Relief: Deploy 50 municipal water tankers to supply free, certified clean drinking water to all 15 affected villages; set up an emergency AIIMS/District Hospital Oncology Screening Camp.',
      'Institutional Action: File a comprehensive affidavit before the National Green Tribunal (NGT) and High Court, ensuring transparent legal backing that prevents backroom political interference.'
    ],
    institutionalSafeguards: [
      'Install IoT-enabled real-time effluent telemetry sensors connected directly to the CPCB public portal with automated alerts for flow anomalies.',
      'Establish a District Environmental Health Vigilance Cell with community representation to conduct surprise quarterly aquifer testing.',
      'Mandate that all red-category industrial units maintain mandatory Environmental Liability Insurance and medical contingency escrows.'
    ],
    modelConclusion: 'Profit soaked in the tears of poisoned children is not economic development; it is corporate barbarism. An administrator who flinches before political threats when lives are at stake fails the constitutional oath. True public service demands that the shield of the state protect the frailest child against the greed of the mightiest conglomerate.',
    relevantThinkers: ['Hans Jonas (The Imperative of Responsibility: In dubio pro malo - in doubt, prioritize preventing catastrophic harm)', 'Mahatma Gandhi (Seven Social Sins: Commerce without Morality)', 'Rachel Carson (Silent Spring: Ecological stewardship)'],
    relevantQuotes: [
      'Commerce without morality is one of the seven social sins that destroy civilization. — Mahatma Gandhi',
      'The man who moves a mountain begins by carrying away small stones. But the man who poisons the well destroys the foundation of life itself.'
    ]
  }
];
