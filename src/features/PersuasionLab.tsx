// src/features/PersuasionLab.tsx
// Interactive Persuasion, Social Influence & Behavioral Nudge Laboratory
// Tailored for UPSC GS-IV (Attitude & Persuasion) and State PSCs

import React, { useState } from 'react';
import { useEthics } from '../context/EthicsContext';
import { 
  Zap, 
  Sparkles, 
  Brain, 
  ShieldCheck, 
  Target, 
  Users, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  BookOpen, 
  FileText,
  Compass,
  ArrowRight
} from 'lucide-react';

interface PersuasionScenario {
  id: string;
  title: string;
  hindiTitle: string;
  domain: string;
  targetGroup: string;
  psychologicalBarrier: string;
  whyCoercionFails: string;
  persuasiveStrategy: {
    ethos: string; // Credible messenger
    pathos: string; // Emotional & values hook
    logos: string; // Rational & economic logic
    nudgeLever: string; // Choice architecture
  };
  cialdiniPrinciples: string[];
  keyMottoOrSlogan: string;
  administrativeActions: string[];
  ethicalCheck: string;
  sampleQuestion: string;
  modelAnswerFramework: {
    introduction: string;
    arguments: string[];
    diagramNote: string;
    conclusion: string;
  };
}

const PERSUASION_SCENARIOS: PersuasionScenario[] = [
  {
    id: 'stubble-burning',
    title: 'Parali Dahan (Stubble Burning) Prevention',
    hindiTitle: 'पराली दहन रोकथाम: दंडात्मक बनाम प्रबोधन दृष्टिकोण',
    domain: 'Environmental Ethics & Agrarian Administration',
    targetGroup: 'Marginal & smallholder paddy farmers in Punjab, Haryana, and Western UP',
    psychologicalBarrier: 'Economic anxiety regarding narrow 15-day window for sowing Rabi wheat; fear of yield loss; habituation to fire as traditional cleansing; hostility towards urban elites lecturing farmers.',
    whyCoercionFails: 'Filing FIRs against thousands of marginal farmers creates rural resentment, vote-bank backlash, covert night-burning, and destroys administrative trust.',
    persuasiveStrategy: {
      ethos: 'Deploy respected village elders, progressive award-winning farmers, and agricultural university extension scientists rather than police or revenue officers.',
      pathos: 'Frame stubble smoke not as "polluting Delhi\'s air", but as "destroying our own children\'s lungs and killing the mother soil (Dharti Mata) microorganisms that feed our families."',
      logos: 'Demonstrate soil health card data showing that burning destroys 5.5 kg nitrogen, 2.3 kg phosphorus, and micro-nutrients per ton; compare cost-benefit of Happy Seeder and bio-decomposer pellets.',
      nudgeLever: 'Subsidized Custom Hiring Centers (CHCs) with free WhatsApp tractor booking; financial incentive (₹1000/acre) deposited within 48 hours for verified zero-burning.'
    },
    cialdiniPrinciples: ['Social Proof (Displaying banners of 100% Zero-Burning Villages)', 'Reciprocity (Free soil testing and seed subsidies for compliant panchayats)', 'Authority (Agricultural scientists validating Happy Seeder yield increase)'],
    keyMottoOrSlogan: '"पराली नहीं, धरती की जान जला रहे हैं" (We are not burning stubble; we are burning the soul of Mother Earth)',
    administrativeActions: [
      'Identify progressive village headmen (Sarpanches) to pledge zero-burning at the Akal Takht / local temples.',
      'Deploy mobile demonstration vans conducting live Happy Seeder sowing in front of skeptical farmers.',
      'Establish WhatsApp-based booking for balers and combine harvesters with SMS confirmation.',
      'Create public honor boards at Tehsil offices celebrating "Dharti Mitra" (Friends of Earth) Panchayats.'
    ],
    ethicalCheck: 'Ensure alternatives are genuinely available and affordable before issuing any statutory penalties; never penalize subsistence farmers who lack machinery access.',
    sampleQuestion: 'UPSC 2021: "Coercive legal sanctions often fail to alter entrenched social practices. Explain how social influence and persuasion can resolve the recurring menace of stubble burning."',
    modelAnswerFramework: {
      introduction: 'Stubble burning is fundamentally an economic and behavioral challenge rooted in the CAB model of attitude. While laws provide the baseline, lasting behavioral transformation necessitates Aristotle\'s Rhetoric and Nudge Architecture.',
      arguments: [
        'Shift the Cognitive Domain: Dispel the myth that ash improves soil fertility using scientific soil health cards (Logos).',
        'Awaken the Affective Domain: Localize the emotional cost—highlight pediatric asthma among farming families rather than distant urban air quality indexes (Pathos).',
        'Harness Social Proof & Messenger Effect: Involve religious and agricultural role models to create positive peer pressure (Ethos).',
        'Nudge via Frictionless Choice: Provide subsidized machinery through Uberized apps, making zero-burning easier than setting fire (Thaler\'s Nudge).'
      ],
      diagramNote: 'Diagram: Triangle of Persuasion (Ethos - Pathos - Logos) converging onto "Habitual Zero-Burning Action".',
      conclusion: 'Sustainable ecological administration rests not on police FIRs, but on empowering the farmer from an alleged polluter into an honored custodian of soil health.'
    }
  },
  {
    id: 'open-defecation',
    title: 'Sustaining Open Defecation Free (ODF+) Behaviors',
    hindiTitle: 'खुले में शौच मुक्ति (ODF+) व्यवहार की निरंतरता',
    domain: 'Public Health & Sanitation',
    targetGroup: 'Rural patriarchal households resistant to indoor toilet usage',
    psychologicalBarrier: 'Deep-seated cultural notions of ritual purity (considering a toilet inside the home courtyard as spiritually impure); habit of morning socializing in open fields.',
    whyCoercionFails: 'Locking water connections or publicly shaming people via whistle-blowing leads to human rights violations, loss of human dignity, and violent backlash.',
    persuasiveStrategy: {
      ethos: 'Local ASHA and Anganwadi workers, village female pradhans, and respected elderly matriarchs.',
      pathos: 'Rebrand the toilet from a mere sanitary box to "Izzat Ghar" (Dignity Home) for sisters, mothers, and daughters; evoke the protective moral duty of the patriarch.',
      logos: 'Present WHO/UNICEF data linking open defecation to child stunting, diarrheal deaths, and high out-of-pocket medical expenditure.',
      nudgeLever: 'Twin-pit toilet technology demonstration showing how safe decomposed manure is produced, shattering touch-taboos; making toilet doors visually attractive with vibrant Madhubani/Warli folk art.'
    },
    cialdiniPrinciples: ['Commitment and Consistency (Public community pledges)', 'Liking and Social Proof (The whole village celebrating ODF status)', 'Reciprocity (Sanitation awards for whole panchayats)'],
    keyMottoOrSlogan: '"घर में बहू-बेटी का सम्मान, हर घर में हो इज्जत घर का निर्माण" (Dignity of our daughters and wives: A toilet in every home)',
    administrativeActions: [
      'Community-Led Total Sanitation (CLTS) "Triggering" walks where community elders map faecal-oral contamination paths.',
      'Naming and painting every completed toilet as "Izzat Ghar" with the mother\'s name inscribed.',
      'Engage school children as "Swachhata Doots" to gently remind fathers and grandfathers.',
      'Provide rapid geotagged subsidy disbursement directly into the female head of the family\'s bank account.'
    ],
    ethicalCheck: 'Strictly prohibit aggressive vigilante shaming, confiscation of ration cards, or physical harassment of the poor who lack functional toilets.',
    sampleQuestion: 'UPSC 2016: "Explain the role of social influence and persuasion in bringing about behavioral changes in society, with special reference to the Swachh Bharat Abhiyan."',
    modelAnswerFramework: {
      introduction: 'Swachh Bharat Abhiyan succeeded where previous subsidy programs stalled because it prioritized "Software over Hardware"—shifting mental attitudes through social influence and persuasive communication.',
      arguments: [
        'Affective Awakening: Moving from sanitation as a medical topic to "Dignity and Honor" (Izzat Ghar), engaging the emotional core of rural families.',
        'Messenger Credibility: Prime Minister wielded the broom at Valmiki Basti (Ethos), shattering colonial taboos around sanitation labor.',
        'Community Social Proof: Community-Led Total Sanitation (CLTS) triggered collective revulsion, leading to community-wide resolutions.',
        'Cognitive Restructuring: Dismantling ritual pollution notions through scientific twin-pit demonstrations.'
      ],
      diagramNote: 'Cyclic Diagram: Awareness (IEC) → Affective Shift (Dignity) → Social Conformity → Institutionalized Habit.',
      conclusion: 'Sanitation is the ultimate test of human dignity; when persuasion turns a state scheme into a Jan Andolan, societal transformation becomes permanent.'
    }
  },
  {
    id: 'vaccine-hesitancy',
    title: 'Overcoming Vaccine Hesitancy & Immunization Resistance',
    hindiTitle: 'टीकाकरण हिचकिचाहट एवं भ्रांतियों का निवारण',
    domain: 'Public Health & Crisis Communication',
    targetGroup: 'Minority enclaves, remote tribal hamlets, and socially conservative demographic pockets',
    psychologicalBarrier: 'Conspiracy theories regarding fertility loss; religious superstitions; deep historical mistrust of state medical machinery; viral social media disinformation.',
    whyCoercionFails: 'Mandatory vaccination under threat of fine or withholding food rations fuels persecution complexes, panic, and underground evasion.',
    persuasiveStrategy: {
      ethos: 'Faith leaders (Imams, Pandits, Church pastors), traditional tribal healers (Vaidyas), and local trusted community doctors taking the shot on camera.',
      pathos: 'Evoke parental love and moral duty: "Protecting our precious children from crippling paralysis and fatal illness is the highest holy duty."',
      logos: 'Present clear vernacular infographics showing that 99.8% of vaccinated children remain safe; explain how herd immunity shields grandparents.',
      nudgeLever: 'Mobile vaccination vans arriving directly at community centers or weekly haats; administering drops during trusted routine checkups; offering nutritional baby kits as positive reinforcement.'
    },
    cialdiniPrinciples: ['Authority (Trusted local doctors and clerics)', 'Social Proof (Influential families in the mohalla visibly displaying vaccination certificates)', 'Scarcity (Limited mobile camp dates creating urgent demand)'],
    keyMottoOrSlogan: '"सुरक्षा का टीका, बच्चे की लंबी उम्र का वादा" (The protective vaccine: A promise of a long, healthy life)',
    administrativeActions: [
      'Convene multi-faith religious council at the Collectorate to issue joint theological endorsements of vaccine safety.',
      'Deploy street plays (Nukkad Natak) and puppet shows in local dialects debunking viral fertility myths.',
      'Designate "Vaccine Champions"—mothers whose children recovered and thrived after full immunization.',
      'Rapid Response Cyber Team to immediately debunk fake WhatsApp audio clips within 2 hours.'
    ],
    ethicalCheck: 'Respect informed consent; never use deceptive coercion; answer every scientific doubt with transparency and patience.',
    sampleQuestion: 'UPSC 2021: "Vaccine hesitancy is a complex social and psychological phenomenon. How can a District Magistrate employ persuasive communication to achieve universal immunization?"',
    modelAnswerFramework: {
      introduction: 'Vaccine hesitancy stems not from malice, but from fear and information asymmetry. Overcoming it demands the empathetic application of Emotional Intelligence and Aristotle\'s persuasive triad.',
      arguments: [
        'Ethos: Counter state skepticism by delegating the message to trusted community pillars—local faith leaders and grassroots ASHA workers.',
        'Pathos: Reframe the dialogue from bureaucratic target-achievement to parental protective instinct and spiritual duty of preserving life.',
        'Logos: Transparent vernacular communication on safety data and adverse event following immunization (AEFI) management.',
        'Nudge: Reduce logistical friction by setting up walk-in clinics at weekly haats and religious congregations.'
      ],
      diagramNote: 'Matrix: Fear-based Rumor vs Empathetic Fact-Check + Trusted Messenger = Attitudinal Shift.',
      conclusion: 'In public health, trust is the real vaccine. When administration communicates with compassion and cultural humility, hesitancy dissolves into collective solidarity.'
    }
  },
  {
    id: 'source-waste-segregation',
    title: 'Source Segregation of Municipal Solid Waste',
    hindiTitle: 'शहरी ठोस अपशिष्ट का स्रोत पर पृथक्करण',
    domain: 'Urban Governance & Civic Ethics',
    targetGroup: 'Urban residents, gated societies, and commercial shopkeepers',
    psychologicalBarrier: 'Apathy and laziness ("Why separate when municipal trucks mix it anyway?"); perception of waste as someone else\'s job; lack of domestic segregation infrastructure.',
    whyCoercionFails: 'Spot fines on thousands of flats are impossible to enforce, breed corruption among sanitary inspectors, and create endless legal squabbles.',
    persuasiveStrategy: {
      ethos: 'Resident Welfare Association (RWA) leaders, green building champions, and celebrity brand ambassadors.',
      pathos: 'Highlight the inhuman plight of manual waste pickers who get sliced by broken glass and infected by hazardous needles when waste is mixed; appeal to civic pride.',
      logos: 'Illustrate how wet waste produces clean compost and biogas, while dry waste yields circular economy revenue; show landfill fires and toxic leachate destroying city groundwater.',
      nudgeLever: 'Color-coded bins (Green for Wet, Blue for Dry) provided directly to households; default rule: municipal collection vehicles refuse to lift unsegregated bins (choice architecture with clear consequence).'
    },
    cialdiniPrinciples: ['Consistency (Signing a green apartment pledge)', 'Social Proof (Color-coded green flags hoisted on societies achieving 100% segregation)', 'Reciprocity (5% rebate in municipal property tax for compliant societies)'],
    keyMottoOrSlogan: '"हरा गीला, नीला सूखा — कचरे का सम्मान, शहर की पहचान" (Green wet, Blue dry: Honor waste, elevate our city)',
    administrativeActions: [
      'Implement Indore Model: Compartmentalized collection vehicles with cheerful jingles reminding citizens to separate at the doorstep.',
      'Gamify segregation: Publish monthly ward rankings in newspapers, awarding the "Golden Bin" to top residential societies.',
      'Mandate that bulk waste generators (hotels, apartments) compost wet waste in-situ or pay processing surcharges.',
      'Conduct educational tours of landfill sites for schoolchildren and RWAs to witness waste crisis firsthand.'
    ],
    ethicalCheck: 'Ensure municipal collection trucks never mix segregated waste; maintain the state\'s end of the social contract.',
    sampleQuestion: 'UPPSC 2022: "Urban cleanliness cannot be achieved by sanitation workers alone. Discuss how civic ethics and behavioral nudges can institutionalize source waste segregation."',
    modelAnswerFramework: {
      introduction: 'Waste segregation is the foundational pillar of civic ethics. Moving from the "NIMBY" (Not In My Backyard) mentality to circular responsibility requires shifting civic attitudes through structured nudges.',
      arguments: [
        'Dignity of Labor (Affective Domain): Showing the human face of waste collection—unsegregated waste forces workers to touch toxic refuse, violating constitutional dignity (Article 21).',
        'Frictionless Choice Architecture: Color-coded bin distribution and clear pictorial labels eliminate cognitive ambiguity (Thaler\'s Nudge).',
        'Social Norms & Competition: Indore\'s ward ranking model leverages peer competition and collective civic pride (Cialdini\'s Social Proof).',
        'Fiscal Nudges: Linking property tax rebates to verified household segregation creates economic alignment (Logos).'
      ],
      diagramNote: 'Diagram: Household Segregation → Mechanized Logistics → Dignified Labor → Clean City Equilibrium.',
      conclusion: 'A truly civilized society is judged not by the height of its skyscrapers, but by how thoughtfully it manages its waste. Source segregation is a tangible daily act of constitutional citizenship.'
    }
  },
  {
    id: 'road-safety-helmets',
    title: 'Youth Road Safety & Helmet / Seatbelt Compliance',
    hindiTitle: 'युवा सड़क सुरक्षा: हेलमेट एवं सीटबेल्ट अनुपालन',
    domain: 'Police Administration & Youth Psychology',
    targetGroup: 'College students and young two-wheeler riders (18–25 years)',
    psychologicalBarrier: 'Optimism bias ("Accidents happen to others, not me"); peer pressure viewing helmets as uncool; rebellion against police authority; discomfort in tropical heat.',
    whyCoercionFails: 'Challans and speed cameras lead to evasion, bribe-giving, hiding in alleyways, and dangerous high-speed flight from police checkpoints.',
    persuasiveStrategy: {
      ethos: 'Popular youth sportspersons, motorcycling vloggers, and trauma surgeons from city hospitals.',
      pathos: 'Show grieving parents who lost young sons/daughters to head injuries; visual campaign: "A helmet may mess up your hairstyle for an hour; an accident will mess up your brain for life."',
      logos: 'Present neurosurgical statistics proving that ISI-certified helmets reduce fatal brain trauma risk by 74%; demonstrate the financial devastation of ICU hospitalization.',
      nudgeLever: 'Subsidized stylish ISI helmets sold at college gates; "No Helmet, No Fuel" policy strictly enforced at petrol pumps; rewarding compliant riders with free coffee/cinema vouchers at traffic stops.'
    },
    cialdiniPrinciples: ['Liking (Youth vloggers demonstrating stylish riding gear)', 'Authority (Trauma surgeons sharing CT scans of skull fractures)', 'Scarcity and Incentive (Surprise rewards for safe riders instead of only fines)'],
    keyMottoOrSlogan: '"स्टाइल एक पल की, जान ज़िंदगी भर की" (Style lasts a moment; life is for a lifetime)',
    administrativeActions: [
      'Replace punitive traffic stops with "Surprise Appreciation Drives": Traffic police stop helmet-wearing youth to gift them roses and safety certificates.',
      'Mandatory road safety orientation and simulated collision experience before issuing driving licenses.',
      'Install "Wall of Life" memorials outside major colleges commemorating victims and celebrating survivors saved by helmets.',
      'Enforce "No Helmet, No Campus Entry" across all university gates.'
    ],
    ethicalCheck: 'Prevent predatory traffic police harassment; ensure traffic cameras are audited and free from algorithmic bribery or extortion.',
    sampleQuestion: 'UPSC 2017: "Young citizens frequently flout traffic rules, leading to catastrophic loss of life. How can an ethical administrator use social marketing and positive reinforcement to build a culture of safety?"',
    modelAnswerFramework: {
      introduction: 'Road accidents kill over 1.5 lakh Indians annually, disproportionately young lives. Traditional enforcement relies on fear, which breeds evasion. Transforming road safety requires positive behavioral psychology and social marketing.',
      arguments: [
        'Overcoming Optimism Bias: Direct exposure to trauma reality through immersive VR safety demos and neurosurgeon testimonials (Logos + Pathos).',
        'Incentive Reversal: Moving from purely negative punishment (challans) to positive reinforcement—rewarding compliant drivers with insurance discounts and civic recognition.',
        'Choice Architecture: Implementing "No Helmet, No Fuel" eliminates decision leeway at the point of fuel replenishment (Nudge).',
        'Peer Norming: Enlisting university student unions and youth motorcycle clubs to redefine helmets from an administrative nuisance to a symbol of responsible adulthood (Ethos).'
      ],
      diagramNote: 'Behavioral Flowchart: Risk Illusion → Emotional Wake-Up → Social Rewarding → Automatic Habit.',
      conclusion: 'The road is a public commons where safety is a shared moral covenant. When wearing a helmet becomes an act of self-respect and love for one\'s family, the rule of law becomes self-enforcing.'
    }
  },
  {
    id: 'child-marriage',
    title: 'Eradicating Child Marriage & Female Foeticide',
    hindiTitle: 'बाल विवाह एवं कन्या भ्रूण हत्या उन्मूलन',
    domain: 'Social Justice & Women Empowerment',
    targetGroup: 'Rural patriarchal families and traditional community councils (Khap/Caste Panchayats)',
    psychologicalBarrier: 'Economic burden perception of daughters ("Paraya Dhan"); fear of adolescent elopement and family honor; cost savings in mass weddings (Akshaya Tritiya).',
    whyCoercionFails: 'Crashing weddings with police creates intense social ostracism for the bride, covert midnight ceremonies, and village-wide hostility towards administrative spies.',
    persuasiveStrategy: {
      ethos: 'Successful rural girls who became civil servants, pilots, or entrepreneurs; progressive caste panchayat elders who banned child marriage.',
      pathos: 'Delineate the devastating physical trauma of adolescent pregnancy, maternal mortality, and shattered childhood dreams; invoke the sacred daughter (Kanya).',
      logos: 'Demonstrate economic data: Educated girls generate 3x higher family income; state conditional cash transfers (Sukanya Samriddhi, Kanya Sumangala) make keeping girls in school profitable.',
      nudgeLever: 'Conditional Cash Transfers linked to milestones (matriculation, reaching 18 years); free bicycles and digital tablets for girls continuing higher secondary education; making wedding banquet halls and priests sign mandatory birth-certificate verification pledges.'
    },
    cialdiniPrinciples: ['Commitment (Gram Sabhas passing public zero-child-marriage resolutions)', 'Reciprocity (Special development grants for villages maintaining zero child marriages)', 'Social Proof (Mass felicitations for families sending daughters to university)'],
    keyMottoOrSlogan: '"बेटी को दो शिक्षा का मान, मत छीनो उसका बचपन और अरमान" (Honor daughters with education; do not steal their childhood and dreams)',
    administrativeActions: [
      'Empower adolescent girl clubs (Kishori Mandals) with direct, confidential SOS hotlines to the District Magistrate.',
      'Mandatory age verification protocol for priests, qazis, banquet hall owners, and tent suppliers under penalty of abetment.',
      'Honor progressive panchayat headmen with the "Kanya Gaurav Puraskar" at Republic Day ceremonies.',
      'Link flagship village infrastructure funds to female literacy rates and sex ratio at birth.'
    ],
    ethicalCheck: 'Protect whistleblowers and vulnerable girls from honor killings and domestic violence after marriage cancellations.',
    sampleQuestion: 'UPSC 2019: "Laws prohibiting deep-rooted social evils like child marriage remain toothless without attitudinal revolution. Analyze the role of persuasive leadership in dismantling such customs."',
    modelAnswerFramework: {
      introduction: 'Child marriage represents the convergence of economic vulnerability, patriarchy, and structural violence. While the Prohibition of Child Marriage Act provides the legal sword, eradication demands a moral and attitudinal renaissance.',
      arguments: [
        'Economic Realignment (Logos): Disproving the "Paraya Dhan" myth through Sukanya Samriddhi and Kanya Sumangala cash transfers, aligning household self-interest with girl education.',
        'Affective Empathy (Pathos): Awakening parental conscience to the grave physiological and psychological horrors of teenage pregnancy.',
        'Internal Reformers (Ethos): Enlisting enlightened community elders to denounce child marriage from within community platforms rather than external patronization.',
        'Institutional Nudges: Making age verification mandatory for printing wedding cards and booking halls, inserting systemic friction into illegal ceremonies.'
      ],
      diagramNote: 'Diagram: Structural Barrier (Patriarchy) → Counter-Levers (Incentives + Education + Moral Persuasion) → Emancipated Girl Child.',
      conclusion: 'A girl child is not a liability to be offloaded, but a sovereign bearer of human potential. True governance begins when the state protects every daughter\'s right to fly before she is asked to nest.'
    }
  }
];

export const PersuasionLab: React.FC = () => {
  const { hindiMode } = useEthics();
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(PERSUASION_SCENARIOS[0].id);
  const [activeTab, setActiveTab] = useState<'scenarios' | 'theory' | 'campaign-builder'>('scenarios');
  const [copiedFramework, setCopiedFramework] = useState<boolean>(false);

  // Campaign Builder States
  const [targetIssue, setTargetIssue] = useState<string>('Tax Compliance');
  const [demographic, setDemographic] = useState<string>('Urban Small Traders');
  const [persuasiveLever, setPersuasiveLever] = useState<string>('Social Proof & Pride');
  const [messengerType, setMessengerType] = useState<string>('Respected Local Trade Association President');

  const currentScenario = PERSUASION_SCENARIOS.find(s => s.id === selectedScenarioId) || PERSUASION_SCENARIOS[0];

  const handleCopyFramework = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFramework(true);
    setTimeout(() => setCopiedFramework(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Syllabus Section 2: Attitude & Social Influence</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Persuasion & Behavioral Nudge Lab
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              {hindiMode 
                ? 'प्रबोधन एवं सामाजिक प्रभाव प्रयोगशाला: अरस्तू का वक्तृत्वशास्त्र, सियालदिनी के सिद्धांत एवं प्रशासनिक नज़ आर्किटेक्चर'
                : 'Master Aristotle’s Rhetoric, Cialdini’s Influence Principles, and Thaler’s Nudge Architecture for High-Yield GS-IV Answers'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('scenarios')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'scenarios'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Target className="w-3.5 h-3.5 inline mr-1.5" />
              6 Exam Scenarios
            </button>
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'theory'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 inline mr-1.5" />
              Theory Matrix
            </button>
            <button
              onClick={() => setActiveTab('campaign-builder')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'campaign-builder'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 inline mr-1.5" />
              Campaign Builder
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: 6 Exam Scenarios */}
      {activeTab === 'scenarios' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Scenario Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase text-slate-400 font-bold px-1">
              Select High-Yield Exam Scenario:
            </h3>
            {PERSUASION_SCENARIOS.map((scenario) => {
              const isSelected = scenario.id === selectedScenarioId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wide">
                      {scenario.domain}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
                  </div>
                  <h4 className={`text-sm font-bold mt-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {scenario.title}
                  </h4>
                  {hindiMode && (
                    <p className="text-xs text-slate-400 mt-1">
                      {scenario.hindiTitle}
                    </p>
                  )}
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    Target: {scenario.targetGroup}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Scenario Deep Dive */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
                <div>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                    {currentScenario.domain}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-2">
                    {currentScenario.title}
                  </h2>
                  {hindiMode && (
                    <p className="text-sm text-slate-400 mt-0.5">
                      {currentScenario.hindiTitle}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-mono">Core Slogan / Hook:</span>
                  <span className="text-xs font-bold text-amber-300 italic bg-amber-950/40 px-3 py-1 rounded-lg border border-amber-800/40">
                    {currentScenario.keyMottoOrSlogan}
                  </span>
                </div>
              </div>

              {/* Psychological Diagnostic */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/80 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Psychological Barrier & Inertia</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentScenario.psychologicalBarrier}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-bold text-red-400 block mb-1">
                      Why Coercive Penalties Backfire:
                    </span>
                    <p className="text-xs text-slate-400">
                      {currentScenario.whyCoercionFails}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950/80 border border-emerald-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Cialdini Levers & Social Proof</span>
                  </div>
                  <div className="space-y-2">
                    {currentScenario.cialdiniPrinciples.map((principle, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <span>{principle}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-bold text-amber-400 block mb-1">
                      Nudge Choice Architecture:
                    </span>
                    <p className="text-xs text-slate-300">
                      {currentScenario.persuasiveStrategy.nudgeLever}
                    </p>
                  </div>
                </div>
              </div>

              {/* Aristotle's Triad Breakdown */}
              <div className="mb-6">
                <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-3 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-amber-400" />
                  <span>Aristotle\'s Triad: The Persuasion Engine</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/30">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-mono font-bold uppercase">
                      1. Ethos (Credibility)
                    </span>
                    <h4 className="text-xs font-bold text-white mt-2">Messenger Stature:</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {currentScenario.persuasiveStrategy.ethos}
                    </p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 font-mono font-bold uppercase">
                      2. Pathos (Emotions)
                    </span>
                    <h4 className="text-xs font-bold text-white mt-2">Values & Pride Hook:</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {currentScenario.persuasiveStrategy.pathos}
                    </p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 font-mono font-bold uppercase">
                      3. Logos (Logic)
                    </span>
                    <h4 className="text-xs font-bold text-white mt-2">Evidence & Rational Cost:</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {currentScenario.persuasiveStrategy.logos}
                    </p>
                  </div>
                </div>
              </div>

              {/* Administrative Action Checklist */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 mb-6">
                <h4 className="text-xs font-mono uppercase text-amber-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ground Administrative Execution Protocol:</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentScenario.administrativeActions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-amber-400 font-mono font-bold">{i + 1}.</span>
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ethical Guardrail */}
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-3 flex items-start gap-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                    Ethical Guardrail (Persuasion vs Manipulation):
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {currentScenario.ethicalCheck}
                  </p>
                </div>
              </div>

              {/* UPSC / UPPSC Model Answer Framework */}
              <div className="bg-gradient-to-br from-slate-950 to-indigo-950/30 border border-indigo-500/30 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase">
                    <FileText className="w-4 h-4" />
                    <span>Mains Model Answer Framework</span>
                  </div>
                  <button
                    onClick={() => handleCopyFramework(
                      `Q: ${currentScenario.sampleQuestion}\n\nINTRO:\n${currentScenario.modelAnswerFramework.introduction}\n\nARGUMENTS:\n${currentScenario.modelAnswerFramework.arguments.join('\n')}\n\nDIAGRAM NOTE:\n${currentScenario.modelAnswerFramework.diagramNote}\n\nCONCLUSION:\n${currentScenario.modelAnswerFramework.conclusion}`
                    )}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-xs font-medium transition-all"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedFramework ? 'Copied!' : 'Copy Answer Framework'}</span>
                  </button>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 mb-3">
                  <span className="text-xs font-bold text-amber-400 block font-mono mb-1">Target Question:</span>
                  <p className="text-xs text-white italic font-serif">"{currentScenario.sampleQuestion}"</p>
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div>
                    <span className="font-bold text-indigo-300">1. Introduction:</span>
                    <p className="text-slate-400 mt-0.5">{currentScenario.modelAnswerFramework.introduction}</p>
                  </div>
                  <div>
                    <span className="font-bold text-indigo-300">2. Structured Arguments (Body):</span>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-slate-300">
                      {currentScenario.modelAnswerFramework.arguments.map((arg, idx) => (
                        <li key={idx}>{arg}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                    <span className="font-bold text-amber-300 font-mono text-[11px]">Diagram Blueprint: </span>
                    <span className="text-slate-400">{currentScenario.modelAnswerFramework.diagramNote}</span>
                  </div>
                  <div>
                    <span className="font-bold text-indigo-300">3. Conclusion:</span>
                    <p className="text-slate-400 mt-0.5">{currentScenario.modelAnswerFramework.conclusion}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Theoretical Matrix */}
      {activeTab === 'theory' && (
        <div className="space-y-8">
          {/* CAB Model vs Cognitive Dissonance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase mb-3">
                <Brain className="w-4 h-4" />
                <span>The Core Engine of Attitude</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The CAB Model of Attitude</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                An attitude is an enduring evaluation of people, objects, or ideas. It consists of three interrelated components:
              </p>
              <div className="space-y-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-indigo-400">1. Cognitive (Beliefs & Knowledge):</span>
                  <p className="text-xs text-slate-400 mt-1">
                    What a person rationally believes to be true. E.g., believing that vaccines contain dangerous foreign elements. Persuasion must provide verifiable counter-facts (Logos).
                  </p>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-rose-400">2. Affective (Feelings & Emotions):</span>
                  <p className="text-xs text-slate-400 mt-1">
                    The emotional tone, prejudice, pride, or disgust. E.g., feeling that open defecation is natural while an indoor toilet is unholy. Persuasion must evoke dignity and pride (Pathos).
                  </p>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-emerald-400">3. Behavioral (Action Tendency):</span>
                  <p className="text-xs text-slate-400 mt-1">
                    The predisposition to act in a certain way. E.g., habitually throwing plastic on the road. Persuasion uses defaults, social friction, and nudges to build new habits.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase mb-3">
                <Zap className="w-4 h-4" />
                <span>Leon Festinger\'s Mechanism</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cognitive Dissonance Theory</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                When a person\'s behavior contradicts their core values or beliefs, it produces intense psychological discomfort ("dissonance"). The mind strives to resolve this tension by modifying beliefs or behavior.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-amber-300 block mb-1">Administrative Application:</span>
                  <p className="text-xs text-slate-300">
                    A village patriarch views himself as a protective guardian of his family\'s honor, but engages in open defecation. When public health workers show that open defecation exposes his daughters to harassment and childhood disease, a deep dissonance is created: <span className="italic">"How can I be a protective father if my custom endangers my daughter?"</span> The easiest way to resolve this dissonance is to construct and use a toilet.
                  </p>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-cyan-300 block mb-1">Key Insight for UPSC:</span>
                  <p className="text-xs text-slate-400">
                    Rather than attacking citizens as "backward", align the desired behavior with their existing high-order values (Honor, Religious duty, Love for children, Patriotism).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cialdini's 6 Weapons of Influence */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Robert Cialdini’s 6 Principles of Ethical Persuasion</h3>
            <p className="text-xs text-slate-400 mb-6">
              Systematic behavioral shortcuts that govern human compliance, adapted for public administration:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-amber-400 font-mono uppercase">1. Reciprocity</span>
                <p className="text-xs text-slate-300 mt-2">
                  People feel obliged to return favors. If the administration first fixes irrigation canals or provides free quality seeds, farmers eagerly reciprocate by halting stubble burning.
                </p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-indigo-400 font-mono uppercase">2. Commitment & Consistency</span>
                <p className="text-xs text-slate-300 mt-2">
                  People desire consistency with public pledges. When shopkeepers publicly sign an anti-polythene pledge banner in their market association, compliance surges by 80%.
                </p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-emerald-400 font-mono uppercase">3. Social Proof</span>
                <p className="text-xs text-slate-300 mt-2">
                  People look to what peers are doing. Displaying: "9 out of 10 citizens in your ward segregate their daily waste" induces the remaining 10% to conform rapidly.
                </p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-rose-400 font-mono uppercase">4. Authority</span>
                <p className="text-xs text-slate-300 mt-2">
                  People defer to recognized domain experts. In vaccine hesitancy, a white-coated paediatrician explaining immunology carries 10x more weight than a police magistrate.
                </p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-cyan-400 font-mono uppercase">5. Liking</span>
                <p className="text-xs text-slate-300 mt-2">
                  People comply with those they like and relate to. Employing local folk artists, local dialect speakers, and approachable young officers defuses bureaucratic aloofness.
                </p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-purple-400 font-mono uppercase">6. Scarcity</span>
                <p className="text-xs text-slate-300 mt-2">
                  People value what is scarce or time-bound. Announcing: "Special 10% solar rooftop subsidy available for the first 500 households in this block" triggers immediate registration.
                </p>
              </div>
            </div>
          </div>

          {/* Thaler's Nudge vs Coercion & Ethical Boundaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Thaler & Sunstein’s Nudge (EAST Framework)</h3>
              <p className="text-xs text-slate-400 mb-4">
                A nudge alters people\'s behavior in a predictable way without forbidding any options or significantly changing their economic incentives:
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-amber-400">Easy:</strong> Make the default option the desired one (e.g. opt-out organ donation in Spain).
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-indigo-400">Attractive:</strong> Grab visual attention through color coding, icons, and gamified leaderboards.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-400">Social:</strong> Harness networks—show that most peers are already adopting the ethical behavior.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-cyan-400">Timely:</strong> Prompt people at the exact moment of decision (e.g., SMS reminder on tax deadline eve).
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Persuasion vs Manipulation: Ethical Boundary</h3>
              <p className="text-xs text-slate-400 mb-4">
                UPSC frequently tests whether public behavioral modification infringes upon individual liberty and dignity:
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <span className="text-emerald-400 font-bold block mb-1">Ethical Persuasion / Nudge:</span>
                  <p className="text-slate-300">
                    Transparent intention; preserves genuine freedom of choice; aims strictly at individual and public welfare; grounded in truth and verifiable facts; respects human agency.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/30">
                  <span className="text-red-400 font-bold block mb-1">Unethical Manipulation / Dark Nudge:</span>
                  <p className="text-slate-300">
                    Deceptive or concealed intent; exploits cognitive vulnerabilities (fear, anxiety, shame); serves vested political or commercial interests; removes opt-out dignity; resembles totalitarian propaganda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Interactive Campaign Builder */}
      {activeTab === 'campaign-builder' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wide">
              Mains Answer Generator
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Interactive Persuasion Campaign Designer
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select administrative parameters to construct an exam-ready attitudinal change strategy for any civil service interview or GS-IV question.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1.5">1. Administrative Target:</label>
              <select
                value={targetIssue}
                onChange={(e) => setTargetIssue(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:border-amber-400 focus:outline-none"
              >
                <option value="Tax Compliance">Voluntary Tax Compliance</option>
                <option value="Female Literacy">Rural Female Higher Education</option>
                <option value="Organ Donation">Posthumous Organ Donation</option>
                <option value="Water Conservation">Jal Shakti Water Conservation</option>
                <option value="Cyber Fraud Awareness">Senior Citizen Cyber Hygiene</option>
                <option value="Anti-Littering">Clean Public Tourist Sites</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1.5">2. Target Audience:</label>
              <select
                value={demographic}
                onChange={(e) => setDemographic(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:border-amber-400 focus:outline-none"
              >
                <option value="Urban Small Traders">Urban Small Traders & Shopkeepers</option>
                <option value="Rural Patriarchal Elders">Rural Patriarchs & Family Heads</option>
                <option value="College Youth">University & College Youth</option>
                <option value="Urban Middle Class">Urban Apartment Dwellers</option>
                <option value="Senior Citizens">Retired Senior Citizens</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1.5">3. Persuasive Lever:</label>
              <select
                value={persuasiveLever}
                onChange={(e) => setPersuasiveLever(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:border-amber-400 focus:outline-none"
              >
                <option value="Social Proof & Pride">Social Proof & Civic Pride</option>
                <option value="Cognitive Dissonance">Cognitive Dissonance via Family Duty</option>
                <option value="EAST Nudge Architecture">Default Nudge & Friction Elimination</option>
                <option value="Reciprocity & Tangible Return">Reciprocity & Immediate Value Return</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1.5">4. Credible Messenger (Ethos):</label>
              <select
                value={messengerType}
                onChange={(e) => setMessengerType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:border-amber-400 focus:outline-none"
              >
                <option value="Respected Local Trade Association President">Respected Local Association President</option>
                <option value="Local Faith Leader / Priest / Imam">Trusted Local Religious / Cultural Elder</option>
                <option value="Young Olympic Athlete / Cultural Icon">Youth Sports / Cultural Icon</option>
                <option value="ASHA Worker / Grassroots Nurse">Grassroots Healthcare Worker</option>
                <option value="District Magistrate with High Moral Stature">District Magistrate Personally</option>
              </select>
            </div>
          </div>

          {/* Generated Blueprint */}
          <div className="bg-slate-950 border border-amber-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">
                  Bespoke Administrative Strategy Blueprint: {targetIssue}
                </h3>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                UPSC 150-Word Ready
              </span>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1 font-mono">1. Diagnosis & Barrier:</span>
                <p>
                  Targeting <strong className="text-white">{demographic}</strong> for <strong className="text-white">{targetIssue}</strong> requires overcoming psychological inertia and cynicism towards bureaucratic bureaucracy. Coercion alone breeds tax evasion or concealment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-indigo-400 font-bold block mb-1 font-mono">Ethos (Messenger):</span>
                  <p>
                    Deploy <strong className="text-white">{messengerType}</strong> to spearhead the narrative, stripping away adversarial bureaucratic posturing and building authentic relational credibility.
                  </p>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-rose-400 font-bold block mb-1 font-mono">Pathos (Emotional Hook):</span>
                  <p>
                    Frame the issue around <strong className="text-white">{persuasiveLever}</strong>: Connect compliance with civic self-respect, community welfare, and the moral legacy handed down to future generations.
                  </p>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1 font-mono">Logos & Nudge:</span>
                  <p>
                    Provide frictionless digital interfaces; display transparent dashboards showing exactly how local revenue translates into local parks, schools, and hospitals (Tangible Reciprocity).
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1 font-mono">Synthesis & Conclusion:</span>
                <p className="italic text-slate-300">
                  "Administrative authority gains enduring compliance not through the fear of penalties, but through the willing partnership of the citizen. By aligning behavioral nudges with moral dignity, state objectives transform into self-sustaining civic traditions."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
