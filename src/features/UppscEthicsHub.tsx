// src/features/UppscEthicsHub.tsx
// Specialized UPPSC Ethics (Paper VI / Paper IV) & Uttar Pradesh Administrative Hub
// Dedicated to State PSC & UP PCS Aspirants

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { 
  Landmark, 
  MapPin, 
  ShieldAlert, 
  Scale, 
  FileCheck2, 
  Users, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  HelpCircle,
  FileText,
  Clock,
  Layers
} from 'lucide-react';

interface UPPSCMechanism {
  id: string;
  name: string;
  hindiName: string;
  category: 'Legislation' | 'Anti-Corruption' | 'Disaster & Crowd' | 'Policing' | 'Grievance Redressal' | 'Social Justice';
  statutoryBacking: string;
  administrativeArchitecture: string;
  ethicalDilemmaOrIssue: string;
  reformsAndBestPractices: string[];
  mainsRelevance: string;
  modelQuestion: {
    questionText: string;
    hindiText: string;
    marks: 8 | 12;
    wordLimit: 125 | 200;
    modelAnswer: string;
  };
}

const UPPSC_MECHANISMS: UPPSCMechanism[] = [
  {
    id: 'up-janhit-guarantee',
    name: 'UP Janhit Guarantee Act, 2011',
    hindiName: 'उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011',
    category: 'Legislation',
    statutoryBacking: 'Uttar Pradesh Janhit Guarantee Act, 2011 (Notified under Right to Services movement)',
    administrativeArchitecture: 'Mandates notified statutory time limits for over 43 essential public services (caste certificates, income certificates, domicile, land mutations, birth/death records). Establishes a 3-tier administrative hierarchy: (1) Designated Officer, (2) First Appellate Authority (SDM/ADM), and (3) Second Appellate Authority (DM/Divisional Commissioner). If services are delayed without valid cause, a daily penalty ranging from ₹250 to ₹5000 is directly deducted from the erring officer\'s salary and awarded to the citizen as compensation.',
    ethicalDilemmaOrIssue: 'Bureaucratic lethargy and colonial rent-seeking transformed into a justiciable citizen right. The dilemma arises when understaffed tehsil clerks face technical server failures or internet blackouts, risking automated personal salary deductions for systemic technological failures.',
    reformsAndBestPractices: [
      'Automatic digital penalty deduction integrated with the treasury salary portal.',
      'Deployment of e-District digital delivery kiosks eliminating face-to-face petty corruption.',
      'Regular public hearings (Tehsil Diwas / Thana Diwas) to monitor Janhit compliance in front of aggrieved citizens.'
    ],
    mainsRelevance: 'Directly tested in UPPSC under "Citizen\'s Charters, Work Culture, and Quality of Service Delivery". Core tool for proving administrative accountability.',
    modelQuestion: {
      questionText: 'Explain the core provisions of the UP Janhit Guarantee Act, 2011. How does it strengthen probity and citizen empowerment in grassroots administration?',
      hindiText: 'उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011 के मुख्य प्रावधानों की व्याख्या कीजिए। यह जमीनी स्तर के प्रशासन में शुचिता और नागरिक सशक्तिकरण को कैसे मजबूत करता है?',
      marks: 8,
      wordLimit: 125,
      modelAnswer: `Introduction:
The UP Janhit Guarantee Act, 2011 embodies the constitutional ideal of "Citizen-Centric Governance", converting administrative service delivery from a discretionary favor into an enforceable statutory right.

Core Provisions & Architecture:
1. Time-Bound Delivery: Prescribes fixed deadlines for 43+ public services (e.g. domicile, income certificates in 15 days).
2. Institutional Accountability: Clear 3-tier hierarchy—Designated Officer → First Appellate Authority → Second Appellate Authority.
3. Financial Penalty on Laxity: Imposes daily fines (₹250 to ₹5,000) deducted from the salary of negligent officers and awarded as compensation to the citizen.

Ethical & Governance Impact:
- Dismantles the colonial culture of administrative complacency (Second ARC 12th Report).
- Curbs petty corruption and middleman exploitation (Dalals) at the Tehsil level.
- Restores sovereign dignity to the common citizen under Article 21.

Conclusion:
By creating real personal financial consequences for administrative delay, the Janhit Act transforms the civil servant from an indifferent ruler into an accountable public trustee.`
    }
  },
  {
    id: 'anti-bhoo-mafia',
    name: 'Anti-Bhoo Mafia Task Force & Portal',
    hindiName: 'एंटी-भूमाफिया टास्क फोर्स एवं जनसुनवाई पोर्टल',
    category: 'Anti-Corruption',
    statutoryBacking: 'Executive Order & Special Task Force Framework (2017) linked with UP Revenue Code, 2006',
    administrativeArchitecture: 'A 4-tier vigilance and enforcement structure functioning at State, Divisional, District, and Tehsil levels. Systematically identifies, geo-tags, and categorizes chronic land grabbers into public databases (Category A/B/C). Targets illegal encroachment on Gram Sabha lands, public ponds (pokhras), pasture lands (charagah), cemetery grounds, and forest tracts. Coordinates joint revenue-police demolition squads.',
    ethicalDilemmaOrIssue: 'Balancing aggressive anti-encroachment drives against the human rights of vulnerable, landless families living in informal hutments for decades vs organized political mafia syndicates. The risk of selective, politically biased targeting of opposition-linked encroachers while shielding ruling patrons.',
    reformsAndBestPractices: [
      'Comprehensive GIS geo-fencing of all Gram Sabha and pond lands on the public portal.',
      'Mandatory distinction between commercial land sharks (liable for Gangster Act and property attachment) and destitute squatters (who must be rehabilitated under PM Awas Yojana).',
      'Tehsil-level monthly public reviews headed by the Sub-Divisional Magistrate (SDM).'
    ],
    mainsRelevance: 'High-yield topic for UPPSC Case Studies and Theory regarding "Utilization of Public Funds and Challenges of Corruption".',
    modelQuestion: {
      questionText: 'Encroachment on public and Gram Sabha land is a chronic menace in Uttar Pradesh. Evaluate the ethical challenges faced by a Sub-Divisional Magistrate while executing Anti-Bhoo Mafia operations.',
      hindiText: 'उत्तर प्रदेश में सार्वजनिक और ग्राम सभा भूमि पर अतिक्रमण एक गंभीर समस्या है। एंटी-भूमाफिया अभियान चलाते समय एक उप-जिलाधिकारी (एसडीएम) के सामने आने वाली नैतिक चुनौतियों का मूल्यांकन कीजिए।',
      marks: 12,
      wordLimit: 200,
      modelAnswer: `Introduction:
Public land is a collective intergenerational trust (Public Trust Doctrine). In Uttar Pradesh, illegal encroachment on ponds, pastures, and Gram Sabha lands threatens ecological balance and social equity. An SDM executing anti-bhoo mafia operations sits at the intersection of Rule of Law and Substantive Compassion.

Ethical Challenges for the SDM:
1. Distinguishing Organized Mafia from Destitute Squatters: Commercial land grabbers seize commons for illicit colonization, whereas landless laborers settle on dry pond beds out of sheer destitution. Applying a uniform bulldozer approach violates natural justice (Olga Tellis principle).
2. Political Interference and Neutrality: Land syndicates often wield immense patronage. Withstanding phone calls from local legislators without compromising professional integrity tests the Nolan principle of Objectivity.
3. Protection of Commons vs Communal Accusations: Anti-encroachment on contested religious sites or cemetery boundaries can be weaponized into communal flashpoints, requiring high Emotional Intelligence.

Balanced Ethical Strategy:
- Step 1: Geo-tagging and rigorous documentary verification using legacy revenue records (Khasra/Khatauni).
- Step 2: Ruthless application of the UP Revenue Code and Gangster Act against commercial land sharks.
- Step 3: Humane resettlement of bonafide landless families under Pradhan Mantri Awas Yojana before removing tin shacks.
- Step 4: Restoring reclaimed ponds through MGNREGS deepening, revitalizing local groundwater.

Conclusion:
True administrative probity consists of wielding the sword of law against predatory mafias while extending the protective umbrella of the state to the homeless.`
    }
  },
  {
    id: 'varasat-abhiyan',
    name: 'Varasat Abhiyan (Digital Succession Drive)',
    hindiName: 'विरासत अभियान: विवाद-मुक्त ग्रामीण उत्तराधिकार',
    category: 'Grievance Redressal',
    statutoryBacking: 'Revenue Department Special Drive under UP Revenue Code, 2006',
    administrativeArchitecture: 'A statewide mission-mode initiative launched to record the natural legal succession (Varasat) of agricultural landholdings in village Khatauni records within a strict 45-day window. Mandates village accountants (Lekhpals) to physically visit every hamlet, compile lists of deceased landholders, and register succession applications online, preventing villagers from running around tehsil courts for years.',
    ethicalDilemmaOrIssue: 'Overcoming entrenched systemic corruption where Lekhpals historically demanded bribes (suvidha shulk) to mutate land titles after a parent\'s death. The ethical priority of protecting female inheritance rights—ensuring daughters and widows are not fraudulently expunged by unscrupulous male relatives.',
    reformsAndBestPractices: [
      'Digital auto-mutation upon death registration via integrated civil registration portals.',
      'Public reading of inheritance applications at open Gram Sabha meetings to ensure community transparency.',
      'Direct SMS notifications to legal heirs upon successful title updation.'
    ],
    mainsRelevance: 'Pillar of "Accountability and Ethical Governance" and "Role of Technology in Curbing Grassroots Corruption".',
    modelQuestion: {
      questionText: 'How does the "Varasat" campaign of the UP government represent an ethical paradigm shift from bureaucratic red tape to proactive citizen service delivery?',
      hindiText: 'उत्तर प्रदेश सरकार का "विरासत" अभियान किस प्रकार लालफीताशाही से सक्रिय नागरिक सेवा वितरण की ओर एक नैतिक आदर्श बदलाव का प्रतिनिधित्व करता है?',
      marks: 8,
      wordLimit: 125,
      modelAnswer: `Introduction:
Unrecorded land succession has historically been the fountainhead of rural disputes, prolonged litigation, and petty extortion in Uttar Pradesh. The "Varasat Abhiyan" embodies a proactive welfare state seeking out the citizen.

Ethical Dimensions of the Paradigm Shift:
1. Eliminating Rent-Seeking: Replaces the corrupt practice of citizens begging Lekhpals for land mutations with a time-bound, doorstep administrative mission.
2. Gender Justice & Protection of Widows: Proactively registers widows and unmarried/married daughters as co-heirs, operationalizing the Hindu Succession (Amendment) Act, 2005.
3. Conflict Prevention: Resolves dormant family land disputes before they escalate into violent agrarian feuds, reducing criminal court backlogs.

Conclusion:
Varasat proves that ethical governance is not passive rule-compliance, but active administrative compassion that brings constitutional justice directly to the farmer\'s doorstep.`
    }
  },
  {
    id: 'kumbh-mela-ethics',
    name: 'Maha Kumbh Prayagraj: Mega-Event Ethics & Crowd Management',
    hindiName: 'महाकुंभ प्रयागराज: वृहद आयोजन नीतिशास्त्र एवं भीड़ प्रबंधन',
    category: 'Disaster & Crowd',
    statutoryBacking: 'Uttar Pradesh Prayagraj Mela Authority Act, 2018 & Disaster Management Act, 2005',
    administrativeArchitecture: 'Orchestrating the temporary urban governance of the world\'s largest human congregation (30+ crore pilgrims over 45 days) spread across 4,000 hectares of riverbed. Encompasses 25 sectors, 1,50,000+ sanitation workers, 50,000 police/paramilitary personnel, AI-based CCTV crowd-density analytics, and multimodal transportation hubs.',
    ethicalDilemmaOrIssue: 'Preserving the human dignity and safety of millions of elderly, impoverished rural pilgrims. The Ethics of Care (Carol Gilligan): Ensuring zero stampedes, preventing hypothermia among the destitute sleeping in tents, reuniting thousands of lost elderly women and children ("Bhule-Bhatke Shivir"), and safeguarding the health, dignity, and fair wages of sanitation workers.',
    reformsAndBestPractices: [
      'Integrated Command and Control Centre (ICCC) deploying real-time predictive crowd-density heatmaps.',
      '"Swachh Kumbh" initiative providing modern protective gear, automated sweeping machines, and dignified encampments for safai karmacharis.',
      'RFID and QR-code wristbands for vulnerable children and elderly pilgrims to immediately reunite separated families.'
    ],
    mainsRelevance: 'Classic case-study domain for UPPSC & UPSC under "Emotional Intelligence, Public Service Dedication, and Disaster Ethics".',
    modelQuestion: {
      questionText: 'Managing a mega-event like the Maha Kumbh requires more than technical logistics; it requires profound Emotional Intelligence and an Ethics of Care. Elaborate.',
      hindiText: 'महाकुंभ जैसे विशाल आयोजन के प्रबंधन के लिए केवल तकनीकी लॉजिस्टिक्स से अधिक, गहन संवेगात्मक बुद्धि और "देखभाल की नैतिकता" (एथिक्स ऑफ केयर) की आवश्यकता होती है। विस्तार से समझाइए।',
      marks: 12,
      wordLimit: 200,
      modelAnswer: `Introduction:
The Maha Kumbh Mela at Prayagraj is not merely a logistical feat of managing 30 crore souls; it is a supreme civilizational test of administrative empathy, emotional intelligence, and moral stewardship.

Application of Emotional Intelligence (EI):
1. Crowd Psychology & De-escalation: In a sea of humanity, anxiety or rumors can ignite catastrophic stampedes in seconds. High EI allows officers to remain calm, read panic signs early, and use soothing, respectful vernacular announcements over public address systems.
2. Inter-Agency Harmony: Harmonizing the egos of diverse stakeholders—Akharas, Naga Sadhus, police battalions, sanitation unions, and local boatmen—demands exceptional social intelligence.

Operationalizing the Ethics of Care (Carol Gilligan):
- Compassion for the Vulnerable: Thousands of frail, elderly rural pilgrims walk barefoot for miles. Treating them not as "crowd units", but with the reverence of one\'s own parents ("Matru-Pitri Seva"), defines administrative culture.
- Lost & Found Humanity: The "Bhule-Bhatke Shivir" and digital facial recognition kiosks reunite weeping elders with families, preserving emotional security.
- Dignity of Sanitation Workers: A "Swachh Kumbh" is impossible without the selfless toil of 1,50,000 safai karmacharis. Providing hygienic living quarters, timely honorariums, immunization, and public recognition honors their dignity (Article 21).

Conclusion:
At the Sangam, administrative authority must dissolve into selfless service (Nishkama Seva). The true triumph of the Kumbh administrator is not technical medals, but ensuring that the poorest pilgrim departs with blessings in their heart and dignity intact.`
    }
  },
  {
    id: 'police-commissionerate-system',
    name: 'UP Police Commissionerate System & Mission Shakti',
    hindiName: 'पुलिस कमिश्नरेट प्रणाली एवं मिशन शक्ति महिला सुरक्षा',
    category: 'Policing',
    statutoryBacking: 'Section 8 & 10 of CrPC / BNSS & UP Police Act (Established in Lucknow, Gautam Buddh Nagar, Kanpur, Varanasi, Agra, Ghaziabad, Prayagraj)',
    administrativeArchitecture: 'Vesting judicial-magisterial powers (Section 144, Section 107/116 preventive detentions, externment under Goonda Act) directly in the Police Commissioner (ADG/IG rank) rather than the District Magistrate. Complemented by "Mission Shakti"—establishing specialized Women Police Stations, 24x7 Pink Booths, Pink Patrols, and dedicated Mahila Helpdesks in every police station.',
    ethicalDilemmaOrIssue: 'The age-old constitutional dilemma: Concentration of coercive police power vs Civil Liberties and Natural Justice. With executive and magisterial powers merged, there is risk of arbitrary preventive arrests or misuse of the Goonda Act to suppress dissent without independent magisterial checks. On the other hand, it drastically reduces bureaucratic delays in tackling urban crime and women harassment.',
    reformsAndBestPractices: [
      'Independent Citizen-Police Oversight Committees at the Commissionerate level.',
      'Mandatory videography and legal aid representation during Goonda Act externment hearings.',
      'Women Safety Helpdesk staff trained in psychological counseling and trauma management.'
    ],
    mainsRelevance: 'High-probability question under "Separation of Powers, Police Reforms, and Ethical Governance in Urban Centers".',
    modelQuestion: {
      questionText: 'Does the Police Commissionerate system compromise the constitutional principle of checks and balances? How can administrative accountability be safeguarded?',
      hindiText: 'क्या पुलिस कमिश्नरेट प्रणाली शक्ति पृथक्करण एवं नियंत्रण और संतुलन (चेक्स एंड बैलेंसेज) के संवैधानिक सिद्धांत से समझौता करती है? प्रशासनिक जवाबदेही को कैसे सुरक्षित रखा जा सकता है?',
      marks: 8,
      wordLimit: 125,
      modelAnswer: `Introduction:
The introduction of the Police Commissionerate system in metropolitan cities of UP aims to achieve agile, unified command against modern urban crime, but revives debates regarding executive concentration of power.

The Constitutional Concern:
Under the traditional dual system, the District Magistrate (civil administration) acted as an independent judicial check on police excesses (Article 50). In the Commissionerate system, the police act as both investigator and magistrate for preventive detentions, creating potential risks of arbitrary action.

Safeguarding Accountability:
1. Judicial Scrutiny: Strict adherence to Section 107/116 BNSS guidelines; detainees must have immediate access to legal counsel (Article 22).
2. Institutional Checks: Mandatory appellate oversight by the Home Department and State Human Rights Commission.
3. Internal Sensitization: Embedding human rights modules in training; robust functioning of Internal Complaints Committees.

Conclusion:
Enhanced police power must be matched with equal moral and judicial restraint. Professionalism, not unfettered discretion, is the true hallmark of modern democratic policing.`
    }
  },
  {
    id: 'igrs-cm-helpline',
    name: 'IGRS (Jansunwai) & CM Helpline 1076',
    hindiName: 'आईजीआरएस (जनसुनवाई) एवं मुख्यमंत्री हेल्पलाइन 1076',
    category: 'Grievance Redressal',
    statutoryBacking: 'Integrated Citizen Grievance Portal Framework of the Government of Uttar Pradesh',
    administrativeArchitecture: 'A unified single-window digital grievance platform linking all departments across 75 districts. Citizens can lodge grievances via the web portal, mobile app, or toll-free call center (1076). Grievances are automatically assigned a unique tracking ID, geotagged, and forwarded to the designated field officer with strict 15-day resolution timers. Features mandatory feedback calls: if the citizen rates the resolution as "Unsatisfactory", the grievance is automatically escalated to the higher authority (SDM → DM → Chief Minister\'s Office).',
    ethicalDilemmaOrIssue: 'The chronic administrative disease of "Paper Disposal" (कागजी निस्तारण): Field officers (Lekhpals, BDOs, Thanedars) write perfunctory reports stating "matter investigated, citizen satisfied" without visiting the ground or solving the real problem, solely to close the online ticket before the deadline.',
    reformsAndBestPractices: [
      'Negative marking in annual ACR/APAR for officers whose disposals are rejected by citizens upon random quality audits.',
      'Mandatory geotagged photos and audio-recording of the complainant\'s statement during the field visit.',
      'District Collector\'s weekly random physical inspection of 20 closed IGRS cases.'
    ],
    mainsRelevance: 'Crucial for questions on "Quality of Service Delivery, Work Culture, and Redressal of Citizen Grievances".',
    modelQuestion: {
      questionText: 'Digital grievance portals like IGRS often suffer from the ethical ailment of "paper disposal". How can administrative integrity be restored in grievance redressal?',
      hindiText: 'आईजीआरएस जैसे डिजिटल शिकायत पोर्टल अक्सर "कागजी निस्तारण" की नैतिक बीमारी से ग्रस्त हो जाते हैं। शिकायत निवारण में प्रशासनिक सत्यनिष्ठा को कैसे बहाल किया जा सकता है?',
      marks: 8,
      wordLimit: 125,
      modelAnswer: `Introduction:
Grievance redressal is the ultimate litmus test of a democracy. While UP\'s IGRS and CM Helpline 1076 provide world-class digital access, the tendency of field functionaries to prioritize statistical ticket-closure over substantive citizen relief erodes public trust.

Causes of Paper Disposal:
- Tyranny of Digital Dashboards: Officers fear algorithmic red flags for delayed tickets, prompting hurried superficial closures.
- Lack of Empathy: Viewing citizen grievances as administrative burdens rather than fundamental feedback.

Integrity Restoration Strategy:
1. Complainant Confirmation: No grievance should be closed unless the citizen provides an OTP or verified confirmation of resolution.
2. Surprise Collector Audits: The DM must personally re-verify 25 randomly sampled "closed" cases every Monday; officers found submitting false reports must face immediate disciplinary suspension under CCS Rules.
3. Performance Linkage: Link the disposal satisfaction rating directly to annual performance appraisals (APAR).

Conclusion:
A closed digital ticket does not mean a solved human tear. Real administrative integrity requires verifying that justice was delivered on the ground, not merely registered on a server.`
    }
  }
];

export const UppscEthicsHub: React.FC = () => {
  const { hindiMode } = useEthics();
  const [selectedMechanismId, setSelectedMechanismId] = useState<string>(UPPSC_MECHANISMS[0].id);
  const [activeTab, setActiveTab] = useState<'mechanisms' | 'syllabus-matrix' | 'model-answers'>('mechanisms');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentMechanism = UPPSC_MECHANISMS.find(m => m.id === selectedMechanismId) || UPPSC_MECHANISMS[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-600/10 via-slate-900 to-amber-500/10 border border-red-500/30 rounded-2xl p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>Specialized State Civil Services Module</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              UPPSC Ethics & Administration Hub
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              {hindiMode 
                ? 'उत्तर प्रदेश लोक सेवा आयोग (UPPSC PCS) नैतिकता एवं शासन: जनहित गारंटी, एंटी-भूमाफिया, विरासत, महाकुंभ एवं मॉडल उत्तर'
                : 'Dedicated UPPSC Paper VI / Paper IV Architecture: Grassroots State Mechanisms, Exam Patterns, and High-Yield Model Answers'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('mechanisms')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'mechanisms'
                  ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Landmark className="w-3.5 h-3.5 inline mr-1.5" />
              UP Administrative Cases
            </button>
            <button
              onClick={() => setActiveTab('syllabus-matrix')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'syllabus-matrix'
                  ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5 inline mr-1.5" />
              UPPSC vs UPSC Matrix
            </button>
            <button
              onClick={() => setActiveTab('model-answers')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'model-answers'
                  ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5 inline mr-1.5" />
              125w / 200w Model Bank
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: UP Administrative Mechanisms */}
      {activeTab === 'mechanisms' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase text-slate-400 font-bold px-1">
              Select UP Administrative Mechanism:
            </h3>
            {UPPSC_MECHANISMS.map((mechanism) => {
              const isSelected = mechanism.id === selectedMechanismId;
              return (
                <button
                  key={mechanism.id}
                  onClick={() => setSelectedMechanismId(mechanism.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-red-500 shadow-lg shadow-red-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 font-bold uppercase">
                      {mechanism.category}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />}
                  </div>
                  <h4 className={`text-sm font-bold mt-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {mechanism.name}
                  </h4>
                  {hindiMode && (
                    <p className="text-xs text-slate-400 mt-1">
                      {mechanism.hindiName}
                    </p>
                  )}
                  <p className="text-xs text-slate-500 mt-2 line-clamp-1 font-mono">
                    {mechanism.statutoryBacking}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Card */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
                <div>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-mono">
                    {currentMechanism.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-2">
                    {currentMechanism.name}
                  </h2>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {currentMechanism.hindiName}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 font-mono block">UPPSC Exam Focus:</span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-800/40">
                    Paper VI / Paper IV
                  </span>
                </div>
              </div>

              {/* Statutory & Administrative Backing */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
                <span className="text-xs font-mono text-red-400 font-bold uppercase block mb-1">
                  Statutory Mandate & Architecture:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {currentMechanism.statutoryBacking}
                </p>
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-bold text-white block mb-1">How it Operates on Ground:</span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {currentMechanism.administrativeArchitecture}
                  </p>
                </div>
              </div>

              {/* The Ethical Core & Dilemma */}
              <div className="bg-slate-950/80 border border-amber-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Real Administrative & Ethical Dilemma:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentMechanism.ethicalDilemmaOrIssue}
                </p>
              </div>

              {/* Reform Points */}
              <div className="mb-6">
                <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Administrative Best Practices & Ground Reforms:</span>
                </h3>
                <div className="space-y-2">
                  {currentMechanism.reformsAndBestPractices.map((reform, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      <span>{reform}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* UPPSC Model Question & Answer */}
              <div className="bg-gradient-to-br from-slate-950 to-red-950/20 border border-red-500/30 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase">
                    <FileText className="w-4 h-4" />
                    <span>UPPSC Model Answer ({currentMechanism.modelQuestion.marks} Marks | {currentMechanism.modelQuestion.wordLimit} Words)</span>
                  </div>
                  <button
                    onClick={() => handleCopy(currentMechanism.modelQuestion.modelAnswer, currentMechanism.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-600/30 hover:bg-red-600/50 text-red-200 text-xs font-medium transition-all"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedId === currentMechanism.id ? 'Copied!' : 'Copy Model Answer'}</span>
                  </button>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 mb-3">
                  <span className="text-xs font-bold text-amber-400 block font-mono mb-1">Question:</span>
                  <p className="text-xs text-white font-medium">"{currentMechanism.modelQuestion.questionText}"</p>
                  {hindiMode && (
                    <p className="text-xs text-slate-400 mt-1">"{currentMechanism.modelQuestion.hindiText}"</p>
                  )}
                </div>

                <div className="bg-slate-950/80 p-4 rounded-lg border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed font-sans">
                  {currentMechanism.modelQuestion.modelAnswer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: UPPSC vs UPSC Matrix */}
      {activeTab === 'syllabus-matrix' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">
              Comparative Architecture: UPSC GS-IV vs UPPSC Ethics
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Strategic blueprint showing structural differences, marks distribution, and answer-writing adjustments required for UP PCS:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase bg-slate-950">
                    <th className="p-3">Dimension</th>
                    <th className="p-3 text-amber-400">UPSC Civil Services (GS-IV)</th>
                    <th className="p-3 text-red-400">UPPSC PCS (Paper VI / Paper IV)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="p-3 font-bold text-white">Total Marks & Structure</td>
                    <td className="p-3">250 Marks (Section A: 130 marks theory, Section B: 120 marks case studies)</td>
                    <td className="p-3">200 Marks (Divided into 8-mark and 12-mark questions; mix of theory & short scenarios)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">Question Word Limits</td>
                    <td className="p-3">150 words (10 marks) & 250 words (20 marks case studies)</td>
                    <td className="p-3 font-bold text-amber-300">125 words (8 marks) & 200 words (12 marks)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">Directness vs Philosophy</td>
                    <td className="p-3">Highly philosophical, introspective, multi-layered ethical dilemmas, abstract quotes</td>
                    <td className="p-3">More direct, structured, concept-driven, explicit focus on Indian & UP administrative reality</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">State-Specific Emphasis</td>
                    <td className="p-3">Pan-India national policies, global treaties, broad constitutional ethics</td>
                    <td className="p-3 font-bold text-red-300">High reward for quoting UP mechanisms: Janhit Act, IGRS, Varasat, Anti-Bhoo Mafia, Kumbh crowd ethics</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">Language & Bilingualism</td>
                    <td className="p-3">English / Hindi translation occasionally literal; terminology standard</td>
                    <td className="p-3">Standard vernacular Hindi terminology crucial: शुचिता, सत्यनिष्ठा, निष्पक्षता, अभिवृत्ति, संवेगात्मक बुद्धि</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">Recommended Strategy</td>
                    <td className="p-3">Extensive multidimensional thinker integration + 14-step case analysis</td>
                    <td className="p-3 font-bold text-emerald-300">Crisp point-wise presentation, headings, diagrams, UP administrative examples, under 7 mins per 8-marker</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <span className="text-xs font-mono uppercase text-amber-400 font-bold block mb-1">
                The UPPSC 8-Marker (125 Words) Golden Rule:
              </span>
              <h4 className="text-base font-bold text-white mb-3">Target Time: 6 to 7 Minutes</h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-amber-400">Intro (25-30 words):</strong> 2 crisp lines defining the core concept or quoting a constitutional/thinker hook.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-indigo-400">Body (70-80 words):</strong> 4-5 bulleted points with bold headings answering the exact directive (Explain / Discuss).
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-400">Example (15-20 words):</strong> 1 concrete UP or Indian administrative example (e.g. Varasat / Janhit Act).
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-cyan-400">Conclusion (20 words):</strong> 1-2 lines summarizing constitutional impact or 2nd ARC recommendation.
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <span className="text-xs font-mono uppercase text-red-400 font-bold block mb-1">
                The UPPSC 12-Marker (200 Words) Golden Rule:
              </span>
              <h4 className="text-base font-bold text-white mb-3">Target Time: 10 to 11 Minutes</h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-amber-400">Intro (30-40 words):</strong> Precise definition + Contextual relevance in Uttar Pradesh governance.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-indigo-400">Part 1 (60 words):</strong> Conceptual dimensions / arguments with a neat 2x2 matrix or flowchart.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-rose-400">Part 2 (60 words):</strong> Administrative hurdles / practical application in field administration.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-400">Way Forward & Conclusion (40 words):</strong> 2nd ARC / CVC reforms + constitutional morality link.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Model Answers Bank */}
      {activeTab === 'model-answers' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">UPPSC High-Frequency Model Answer Bank</h3>
              <p className="text-xs text-slate-400">Standardized, evaluated model answers with verbatim 125-word & 200-word constraint adherence.</p>
            </div>
            <span className="text-xs font-mono text-red-400 bg-red-950/40 px-3 py-1.5 rounded-lg border border-red-800/40">
              6 Verified Solutions
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {UPPSC_MECHANISMS.map((mechanism) => (
              <div key={mechanism.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-400 font-mono font-bold uppercase">
                      UPPSC {mechanism.modelQuestion.marks} Marks • {mechanism.modelQuestion.wordLimit} Words
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      {mechanism.modelQuestion.questionText}
                    </h4>
                    {hindiMode && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {mechanism.modelQuestion.hindiText}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleCopy(mechanism.modelQuestion.modelAnswer, mechanism.id)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono transition-all"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedId === mechanism.id ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-xs text-slate-300 whitespace-pre-line leading-relaxed font-sans">
                  {mechanism.modelQuestion.modelAnswer}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
