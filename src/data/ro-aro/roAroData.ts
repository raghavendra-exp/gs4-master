// src/data/ro-aro/roAroData.ts
// Specialized Data for UP RO/ARO (Samiksha Adhikari / Sahayak Samiksha Adhikari)
// Covers Administrative Terminology (Paper 2), Hindi Essay Ethics (Paper 1/3), 
// UP Lokayukta Act 1975, and 3-Way Exam Comparative Matrix.

import { RoAroTermItem, RoAroEssayItem } from '../../types/ethics';

export const RO_ARO_VOCABULARY: RoAroTermItem[] = [
  {
    id: 'ro-term-1',
    englishTerm: 'Probity in Governance',
    hindiTerm: 'शासन में शुचिता',
    alternativeHindiTerms: ['सत्यनिष्ठा', 'पवित्रता', 'निष्कपटता'],
    direction: 'EnToHi',
    definition: 'Complete and confirmed integrity, uprightness, and honesty in public administration, ensuring that public office is not misused for private gain.',
    hindiDefinition: 'सार्वजनिक प्रशासन में पूर्ण एवं प्रमाणित सत्यनिष्ठा, ईमानदारी और नैतिक आचरण, जिससे सार्वजनिक पद का दुरुपयोग निजी लाभ के लिए न हो।',
    secretariatContext: 'Used in annual confidential reports (ACR/APAR) and vigilance inquiries to denote an officer of unblemished moral standing.',
    sampleNotingUsage: '"संबंधित समीक्षा अधिकारी की शासन में शुचिता असंदिग्ध है, अतः इन्हें सतर्कता प्रकोष्ठ में पदस्थापित किए जाने की संस्तुति की जाती है।"',
    commonMistakes: 'Translating probity merely as "ईमानदारी" (honesty); in official UP Secretariat terminology, "शुचिता" is the precise technical equivalent.',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-2',
    englishTerm: 'Fiduciary Duty',
    hindiTerm: 'वैश्वासिक कर्तव्य',
    alternativeHindiTerms: ['न्यासिता दायित्व', 'विश्वास आधारित दायित्व'],
    direction: 'EnToHi',
    definition: 'A legal and ethical obligation of the highest degree of good faith and loyalty where a public official holds custody over public assets or secrets as a trustee.',
    hindiDefinition: 'सर्वोच्च स्तर के सद्भाव और निष्ठा का विधिक एवं नैतिक दायित्व, जहाँ एक लोक सेवक जनता की संपत्ति अथवा गोपनीयता का न्यासी (ट्रस्टी) के रूप में संरक्षण करता है।',
    secretariatContext: 'Critical in file management, confidential file custody, and handling of financial allocations.',
    sampleNotingUsage: '"सचिवालय नियमावली के अधीन पत्रावली की गोपनीयता बनाए रखना अनुभाग अधिकारी का वैश्वासिक कर्तव्य है।"',
    commonMistakes: 'Confusing with "विधिक कर्तव्य" (Legal Duty). Fiduciary specifically entails a trust relationship (न्यास संबंध).',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-3',
    englishTerm: 'Conflict of Interest',
    hindiTerm: 'हितों का टकराव',
    alternativeHindiTerms: ['हित-द्वंद्व', 'हितों का संघर्ष'],
    direction: 'EnToHi',
    definition: 'A situation where a public servant has a private, pecuniary, or familial interest capable of compromising objective official discharge of duty.',
    hindiDefinition: 'ऐसी स्थिति जहाँ किसी लोक सेवक का व्यक्तिगत, वित्तीय या पारिवारिक हित उसके पदीय कर्तव्यों के निष्पक्ष निष्पादन को प्रभावित कर सकता है।',
    secretariatContext: 'Appears in tender evaluations, recruitment boards, and procurement files.',
    sampleNotingUsage: '"निविदा समिति के सदस्य श्री X के निकट सम्बन्धी द्वारा बोली लगाए जाने के कारण हितों का टकराव उत्पन्न होता है; अतः इन्हें समिति से पृथक किया जाए।"',
    commonMistakes: 'Using "विरोधाभास" (contradiction) instead of "हितों का टकराव".',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-4',
    englishTerm: 'Administrative Discretion',
    hindiTerm: 'प्रशासनिक स्वविवेक',
    alternativeHindiTerms: ['प्रशासनिक विवेकाधिकार', 'विवेकाधीन शक्ति'],
    direction: 'EnToHi',
    definition: 'The freedom granted to an administrator to choose between alternative courses of action within statutory boundaries without being bound by rigid rules.',
    hindiDefinition: 'विधि के दायरे में किसी प्रशासनिक अधिकारी को नियमों की कठोरता से परे जाकर उचित निर्णय लेने हेतु प्रदत्त स्वतंत्रता।',
    secretariatContext: 'Invoked while granting exemptions, special welfare benefits, or urgent relief during contingencies.',
    sampleNotingUsage: '"विशेष परिस्थितियों को दृष्टिगत रखते हुए सक्षम प्राधिकारी अपने प्रशासनिक स्वविवेक का प्रयोग कर शिथिलता प्रदान कर सकते हैं।"',
    commonMistakes: 'Equating discretion with "मनमानी" (arbitrariness); discretion must be guided by reason and public interest (Wednesbury reasonableness).',
    category: 'Administrative Discretion'
  },
  {
    id: 'ro-term-5',
    englishTerm: 'Misappropriation of Public Funds',
    hindiTerm: 'सरकारी धन का दुर्विनियोग',
    alternativeHindiTerms: ['सार्वजनिक निधि का गबन', 'अपव्यय'],
    direction: 'EnToHi',
    definition: 'The wrongful or unauthorized allocation or personal conversion of public financial resources entrusted to an official.',
    hindiDefinition: 'किसी लोक सेवक को सौंपी गई सरकारी वित्तीय निधि का अनधिकृत, विधि-विरुद्ध अथवा व्यक्तिगत उपयोग या हस्तांतरण।',
    secretariatContext: 'Standard charge framed under UP Government Servants (Discipline and Appeal) Rules, 1999 and IPC/BNS for financial embezzlement.',
    sampleNotingUsage: '"प्रथम दृष्टया वित्तीय अनियमितता एवं सरकारी धन के दुर्विनियोग का मामला प्रतीत होता है, अतः जांच अधिकारी नियुक्त किया जाए।"',
    commonMistakes: 'Using "चोरी" (theft) or "भ्रष्टाचार" (corruption) instead of the precise legal term "दुर्विनियोग".',
    category: 'Financial & Audit'
  },
  {
    id: 'ro-term-6',
    englishTerm: 'Quorum',
    hindiTerm: 'गणपूर्ति',
    alternativeHindiTerms: ['कोरम', 'न्यूनतम उपस्थिति संख्या'],
    direction: 'EnToHi',
    definition: 'The minimum number of authorized members required to be present at a meeting to validate its proceedings and make legally binding decisions.',
    hindiDefinition: 'किसी आधिकारिक बैठक की कार्यवाही को वैध बनाने और निर्णय लेने हेतु उपस्थित सदस्यों की आवश्यक न्यूनतम संख्या।',
    secretariatContext: 'Used in departmental promotion committees (DPC), tender approval boards, and cabinet sub-committees.',
    sampleNotingUsage: '"विभागीय प्रोन्नति समिति की बैठक में आवश्यक गणपूर्ति न होने के कारण कार्यवाही आगामी तिथि तक स्थगित की जाती है।"',
    commonMistakes: 'Writing "कोरम" as Hindi text rather than the authentic standard administrative Hindi term "गणपूर्ति".',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-7',
    englishTerm: 'Bona Fide',
    hindiTerm: 'सद्भावी / सद्भावपूर्ण',
    alternativeHindiTerms: ['सद्भावपूर्वक', 'सच्चे मन से'],
    direction: 'EnToHi',
    definition: 'Done in good faith without intent to deceive, defraud, or act with malice.',
    hindiDefinition: 'कपट, दुर्भावना या छल के बिना पूर्ण ईमानदारी और निष्कपट भाव से किया गया कार्य।',
    secretariatContext: 'Protects civil servants under Article 311 and statutory indemnification clauses against bonafide administrative errors.',
    sampleNotingUsage: '"अधिकारी द्वारा लिया गया निर्णय सद्भावी प्रतीत होता है, अतः दंडनीय कार्यवाही के स्थान पर चेतावनी पर्याप्त होगी।"',
    commonMistakes: 'Translating as "प्रामाणिक" (authentic) instead of "सद्भावी" (in good faith).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-8',
    englishTerm: 'Ultra Vires',
    hindiTerm: 'अधिकारतीत',
    alternativeHindiTerms: ['अधिकार क्षेत्र से बाहर', 'शक्त्यतीत'],
    direction: 'EnToHi',
    definition: 'Beyond the scope of legal power or authority granted to a particular body or officer.',
    hindiDefinition: 'किसी प्राधिकारी या निकाय को विधि द्वारा प्रदत्त वैधानिक शक्तियों या अधिकार क्षेत्र की सीमा से बाहर।',
    secretariatContext: 'Used in legal vet by the Law Department (विधि विभाग) in UP Secretariat when executive orders violate parent statutes.',
    sampleNotingUsage: '"निर्गत किया गया शासनादेश मूल अधिनियम के प्रावधानों के विपरीत होने के कारण अधिकारतीत (Ultra Vires) है।"',
    commonMistakes: 'Writing "गैर-कानूनी" (illegal) instead of the precise administrative concept "अधिकारतीत".',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-9',
    englishTerm: 'Vigilance Clearance',
    hindiTerm: 'सतर्कता अनापत्ति',
    alternativeHindiTerms: ['सतर्कता क्लीयरेंस'],
    direction: 'EnToHi',
    definition: 'Official certification issued by the Vigilance Directorate confirming that no disciplinary, corruption, or criminal proceedings are pending or contemplated against an officer.',
    hindiDefinition: 'सतर्कता निदेशालय द्वारा निर्गत यह प्रमाण-पत्र कि संबंधित कार्मिक के विरुद्ध कोई अनुशासनात्मक, भ्रष्टाचार या आपराधिक जांच लंबित नहीं है।',
    secretariatContext: 'Mandatory prerequisite for promotions, foreign postings, empanelment, and voluntary retirement (VRS).',
    sampleNotingUsage: '"कार्मिक की पदोन्नति पत्रावली पर सतर्कता अधिष्ठान (UP Vigilance) से सतर्कता अनापत्ति प्राप्त कर ली गई है।"',
    commonMistakes: 'Translating as "सुरक्षा जांच" (security check) instead of "सतर्कता अनापत्ति".',
    category: 'Accountability & Anti-Graft'
  },
  {
    id: 'ro-term-10',
    englishTerm: 'Ex-Gratia Grant',
    hindiTerm: 'अनुग्रह राशि',
    alternativeHindiTerms: ['सहानुभूतिपूर्वक अनुदान'],
    direction: 'EnToHi',
    definition: 'A payment made out of benevolence, moral goodwill, or humanitarian compassion rather than as a legal obligation.',
    hindiDefinition: 'वैधानिक बाध्यता के बिना, विशुद्ध मानवीय करुणा या सहानुभूति के आधार पर प्रदान की जाने वाली वित्तीय सहायता।',
    secretariatContext: 'Sanctioned from Chief Minister Relief Fund or State Disaster Response Fund to victims of accidents or communal violence.',
    sampleNotingUsage: '"दुर्घटना में दिवंगत नागरिकों के आश्रितों को ₹2,00,000/- की अनुग्रह राशि तत्काल प्रभाव से स्वीकृत की जाती है।"',
    commonMistakes: 'Confusing with "मुआवजा" (compensation). Compensation is a legal right; ex-gratia is a compassionate grant.',
    category: 'Administrative Discretion'
  },
  {
    id: 'ro-term-11',
    englishTerm: 'De-Facto',
    hindiTerm: 'वस्तुतः / तथ्यतः',
    alternativeHindiTerms: ['वास्तविक'],
    direction: 'EnToHi',
    definition: 'Existing in fact or reality, whether legally recognized or not.',
    hindiDefinition: 'वास्तविकता में विद्यमान, चाहे उसे विधिक मान्यता प्राप्त हो या न हो।',
    secretariatContext: 'Refers to actual control over an administrative post or asset.',
    sampleNotingUsage: '"यद्यपि चार्ज विधिवत हस्तांतरित नहीं हुआ था, तथापि कार्यालय का वस्तुतः नियंत्रण कनिष्ठ अधिकारी के पास था।"',
    commonMistakes: 'Writing "कानूनी रूप से" (which is De-Jure, विधिक रूप से).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-12',
    englishTerm: 'De-Jure',
    hindiTerm: 'विधितः / विधिक रूप से',
    alternativeHindiTerms: ['कानूनी दृष्टि से'],
    direction: 'EnToHi',
    definition: 'Existing by right or according to law, regardless of practical reality.',
    hindiDefinition: 'विधि के अनुसार या कानूनी अधिकार द्वारा स्थापित स्थिति।',
    secretariatContext: 'Designation and statutory authority held officially.',
    sampleNotingUsage: '"पत्रावली पर अंतिम हस्ताक्षर करने का अधिकार विधितः (De-jure) केवल प्रमुख सचिव महोदय को है।"',
    commonMistakes: 'Confusing with De-Facto (तथ्यतः).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-13',
    englishTerm: 'Nepotism',
    hindiTerm: 'भाई-भतीजावाद',
    alternativeHindiTerms: ['स्वजन-पक्षपात', 'कुनबापरस्ती'],
    direction: 'EnToHi',
    definition: 'The practice among those with power or influence of favoring relatives, friends, or associates in appointments or contracts.',
    hindiDefinition: 'सार्वजनिक पद पर आसीन व्यक्ति द्वारा अपने पद या प्रभाव का उपयोग करके सगे-संबंधियों को अनुचित लाभ या पद प्रदान करना।',
    secretariatContext: 'A primary violation under the Uttar Pradesh Government Servants Conduct Rules, 1956.',
    sampleNotingUsage: '"संबंधित चयन प्रक्रिया में भाई-भतीजावाद एवं पक्षपात के गंभीर आरोप हैं, अतः चयन परिणाम तत्काल प्रभाव से स्थगित रखा जाए।"',
    commonMistakes: 'Using "भ्रष्टाचार" without distinguishing nepotism as specifically kinship-based favoritism.',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-14',
    englishTerm: 'Sine Qua Non',
    hindiTerm: 'अपरिहार्य शर्त',
    alternativeHindiTerms: ['अनिवार्य शर्त', 'मूलभूत आवश्यकता'],
    direction: 'EnToHi',
    definition: 'An essential or indispensable condition or element without which something cannot exist or proceed.',
    hindiDefinition: 'एक अत्यंत अनिवार्य या आवश्यक शर्त जिसके बिना कोई कार्य या समझौता संभव नहीं हो सकता।',
    secretariatContext: 'Used in administrative circulars regarding prerequisite clearances and statutory compliances.',
    sampleNotingUsage: '"सुशासन की स्थापना हेतु प्रशासनिक अधिकारियों में सत्यनिष्ठा एवं निष्पक्षता एक अपरिहार्य शर्त (Sine Qua Non) है।"',
    commonMistakes: 'Translating as "महत्वपूर्ण" (important); it means absolutely non-negotiable/essential.',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-15',
    englishTerm: 'Sub Judice',
    hindiTerm: 'न्यायाधीन / न्यायाधीन मामला',
    alternativeHindiTerms: ['विचाराधीन'],
    direction: 'EnToHi',
    definition: 'A matter currently under judicial consideration and therefore prohibited from public discussion or parallel executive interference.',
    hindiDefinition: 'ऐसा मामला जो वर्तमान में किसी न्यायालय में विचाराधीन है और जिस पर समानांतर कार्यकारी टिप्पणी वर्जित है।',
    secretariatContext: 'Routine reply in RTI requests or legislative assembly queries (विधानसभा प्रश्न) regarding court disputes.',
    sampleNotingUsage: '"प्रकरण मा. उच्च न्यायालय के समक्ष न्यायाधीन (Sub Judice) होने के कारण वर्तमान स्तर पर कोई प्रशासनिक आदेश पारित करना उचित नहीं होगा।"',
    commonMistakes: 'Using "लंबित" (pending) without specifying that it is pending before a judicial court.',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-16',
    englishTerm: 'Suo Motu',
    hindiTerm: 'स्वप्रेरणा से / स्वतः संज्ञान',
    alternativeHindiTerms: ['अपनी ही पहल पर'],
    direction: 'EnToHi',
    definition: 'An action taken by an authority, tribunal, or court on its own initiative without a formal complaint or petition.',
    hindiDefinition: 'किसी प्राधिकारी या न्यायालय द्वारा बिना किसी औपचारिक याचिका या शिकायत के अपने विवेक से की गई कार्यवाही।',
    secretariatContext: 'Used when the Lokayukta, Human Rights Commission, or District Magistrate initiates an inquiry after press reports.',
    sampleNotingUsage: '"समाचार पत्रों में प्रकाशित समाचार के आधार पर मा. लोकायुक्त महोदय ने मामले का स्वतः संज्ञान (Suo Motu) लिया है।"',
    commonMistakes: 'Using "स्वेच्छा से" (voluntarily); "स्वप्रेरणा से" is the correct administrative translation.',
    category: 'Administrative Discretion'
  },
  {
    id: 'ro-term-17',
    englishTerm: 'Prima Facie',
    hindiTerm: 'प्रथम दृष्टया',
    alternativeHindiTerms: ['पहली नजर में'],
    direction: 'EnToHi',
    definition: 'Based on the first impression; accepted as correct until proved otherwise.',
    hindiDefinition: 'प्रथम दृष्टि में या प्रारंभिक साक्ष्यों के आधार पर सत्य प्रतीत होने वाला।',
    secretariatContext: 'Crucial in issuing charge-sheets and suspending errant officials pending formal departmental inquiry.',
    sampleNotingUsage: '"लेखा परीक्षण आख्या के अवलोकन से प्रथम दृष्टया वित्तीय अनियमितता के प्रमाण मिलते हैं।"',
    commonMistakes: 'Writing "स्पष्ट रूप से" (clearly/conclusively); prima facie means provisional based on initial look.',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-18',
    englishTerm: 'Natural Justice',
    hindiTerm: 'प्राकृतिक न्याय / नैसर्गिक न्याय',
    alternativeHindiTerms: ['नैसर्गिक न्याय के सिद्धांत'],
    direction: 'EnToHi',
    definition: 'Fundamental legal principles ensuring fairness in procedure: Audi alteram partem (hear the other side) and Nemo judex in causa sua (no one can be judge in their own case).',
    hindiDefinition: 'निष्पक्ष प्रक्रिया की मूल अवधारणा: दूसरे पक्ष को सुनने का अवसर (ऑडी अल्टरम पार्टम) और कोई अपने ही मामले में न्यायाधीश नहीं हो सकता।',
    secretariatContext: 'Mandatory in all departmental inquiries, disciplinary actions, and contract terminations.',
    sampleNotingUsage: '"अपचारी कार्मिक को अपना पक्ष रखने का युक्तिसंगत अवसर दिए बिना दंडित करना नैसर्गिक न्याय के सिद्धांतों का उल्लंघन होगा।"',
    commonMistakes: 'Translating as "प्राकृतिक कानून" (Natural Law) instead of "नैसर्गिक न्याय".',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-19',
    englishTerm: 'Locus Standi',
    hindiTerm: 'वाद का अधिकार / सुनवाई का अधिकार',
    alternativeHindiTerms: ['अधिकारिता स्थिति', 'स्थायी स्थिति'],
    direction: 'EnToHi',
    definition: 'The legal right of a specific party to bring an action or appear in a court/tribunal on an issue.',
    hindiDefinition: 'किसी व्यक्ति या संस्था का वह विधिक अधिकार जिसके आधार पर वह न्यायालय में याचिका दाखिल करने का पात्र बनता है।',
    secretariatContext: 'Invoked in service litigation and PIL disputes in High Court Allahabad and Lucknow Bench.',
    sampleNotingUsage: '"याचिकाकर्ता इस विवाद में प्रत्यक्ष प्रभावित पक्ष नहीं है, अतः उसे वाद का अधिकार (Locus Standi) प्राप्त नहीं है।"',
    commonMistakes: 'Confusing with "अधिकार क्षेत्र" (Jurisdiction).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-20',
    englishTerm: 'Malafide',
    hindiTerm: 'दुर्भावनापूर्ण / असद्भावी',
    alternativeHindiTerms: ['कपटपूर्ण', 'बदनियती से किया गया'],
    direction: 'EnToHi',
    definition: 'Done with dishonest intentions, ill will, ulterior motives, or malice.',
    hindiDefinition: 'बुरे इरादे, कपट, व्यक्तिगत शत्रुता या अनैतिक उद्देश्य से किया गया प्रशासनिक कार्य।',
    secretariatContext: 'Appeals filed against punitive administrative transfers or selective disciplinary charges.',
    sampleNotingUsage: '"कार्मिक द्वारा अपने स्थानांतरण आदेश को दुर्भावनापूर्ण एवं व्यक्तिगत द्वेष से प्रेरित बताया गया है।"',
    commonMistakes: 'Translating as simply "गलत" (wrong); malafide implies malice and intentional wrongdoing.',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-21',
    englishTerm: 'Whistleblower',
    hindiTerm: 'सचेतक / भेदिया',
    alternativeHindiTerms: ['सचेतक (व्हिसलब्लोअर)', 'सच्चाई उजागरकर्ता'],
    direction: 'EnToHi',
    definition: 'An employee or insider who exposes illegal, corrupt, or unethical practices within an organization to public authorities or the public.',
    hindiDefinition: 'संगठन का वह कर्मचारी या अंदरूनी व्यक्ति जो संस्था के भीतर होने वाली अवैध, भ्रष्ट या अनैतिक गतिविधियों की जानकारी सक्षम प्राधिकारी को देता है।',
    secretariatContext: 'Protection under Whistle Blowers Protection Act and state anti-corruption portals.',
    sampleNotingUsage: '"शिकायतकर्ता सचेतक (Whistleblower) संरक्षण नियमावली के अंतर्गत अपनी पहचान गोपनीय रखे जाने का अधिकारी है।"',
    commonMistakes: 'Translating pejoratively as "मुखबिर" (police informant); the standard dignified administrative term is "सचेतक".',
    category: 'Accountability & Anti-Graft'
  },
  {
    id: 'ro-term-22',
    englishTerm: 'Favouritism',
    hindiTerm: 'पक्षपात',
    alternativeHindiTerms: ['तरफदारी'],
    direction: 'EnToHi',
    definition: 'The unfair practice of treating some people better than others, especially in distributing public resources or positions.',
    hindiDefinition: 'सार्वजनिक पदों या संसाधनों के आवंटन में कुछ व्यक्तियों को अनुचित रूप से दूसरों की तुलना में प्राथमिकता देना।',
    secretariatContext: 'Violates Rule 3 of Government Servants Conduct Rules requiring strict impartiality.',
    sampleNotingUsage: '"जांच में पाया गया कि समिति ने खुली प्रतिस्पर्धा को दरकिनार कर पक्षपात के आधार पर चयन किया।"',
    commonMistakes: 'Using "पूर्वाग्रह" (Prejudice/Bias); favouritism is preferential action, whereas prejudice is internal bias.',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-23',
    englishTerm: 'Embezzlement',
    hindiTerm: 'गबन',
    alternativeHindiTerms: ['खयानत', 'अमानत में खयानत'],
    direction: 'EnToHi',
    definition: 'The fraudulent theft or misappropriation of funds or property entrusted to one’s care by virtue of official employment.',
    hindiDefinition: 'अपने पदीय अधिकार या विश्वास के आधार पर सौंपी गई धनराशि या संपत्ति को बेईमानी से हड़प लेना।',
    secretariatContext: 'Invoked in FIRs and disciplinary actions involving cashiers, treasurers, and procurement officers.',
    sampleNotingUsage: '"कोषागार से जाली देयकों के माध्यम से ₹15 लाख के गबन का प्रकरण प्रकाश में आया है।"',
    commonMistakes: 'Writing "लूट" (robbery); embezzlement occurs when money lawfully entrusted is fraudulently kept.',
    category: 'Financial & Audit'
  },
  {
    id: 'ro-term-24',
    englishTerm: 'Bribery',
    hindiTerm: 'रिश्वतखोरी / घूसखोरी',
    alternativeHindiTerms: ['उत्कोच', 'रिश्वत'],
    direction: 'EnToHi',
    definition: 'The offering, giving, receiving, or soliciting of something of value to influence the actions of an official in charge of a public or legal duty.',
    hindiDefinition: 'किसी लोक सेवक को उसके पदीय कर्तव्यों के निर्वहन या उपेक्षा हेतु किसी मूल्यवान वस्तु या धन का लेन-देन।',
    secretariatContext: 'Actionable under Prevention of Corruption Act, 1988 (Sections 7, 7A).',
    sampleNotingUsage: '"एंटी-करप्शन ट्रैप टीम द्वारा संबंधित बाबू को रिश्वत लेते हुए रंगे हाथों गिरफ्तार किया गया।"',
    commonMistakes: 'Using colloquial terms without mentioning statutory term "उत्कोच" or "रिश्वत".',
    category: 'Accountability & Anti-Graft'
  },
  {
    id: 'ro-term-25',
    englishTerm: 'Dereliction of Duty',
    hindiTerm: 'कर्तव्य में शिथिलता / कर्तव्य की उपेक्षा',
    alternativeHindiTerms: ['कर्तव्य हीनता'],
    direction: 'EnToHi',
    definition: 'The shameful failure to perform one’s official duty or obligations with expected diligence and care.',
    hindiDefinition: 'अपने पदीय कर्तव्यों एवं जिम्मेदारियों के निर्वहन में जानबूझकर की गई गंभीर लापरवाही अथवा असफलता।',
    secretariatContext: 'Standard disciplinary charge sheet heading under UP Civil Services Rules.',
    sampleNotingUsage: '"बाढ़ राहत कार्य के दौरान मुख्यालय से अनुपस्थित रहना कर्तव्य में घोर शिथिलता का परिचायक है।"',
    commonMistakes: 'Translating as "काम न करना" (not working); official term is "कर्तव्य में शिथिलता/उपेक्षा".',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-26',
    englishTerm: 'Breach of Trust',
    hindiTerm: 'विश्वासघात / आपराधिक न्यासभंग',
    alternativeHindiTerms: ['न्यासभंग'],
    direction: 'EnToHi',
    definition: 'Violation of a duty, law, or promise where trust was legally placed in the individual.',
    hindiDefinition: 'उस विधिक दायित्व या विश्वास का उल्लंघन जो किसी व्यक्ति पर आधिकारिक रूप से रखा गया था।',
    secretariatContext: 'Charged under Criminal Breach of Trust (Sec 409 IPC / Sec 316 BNS for public servants).',
    sampleNotingUsage: '"राजकीय संपत्तियों के रिकॉर्ड नष्ट करना आपराधिक न्यासभंग की श्रेणी में आता है।"',
    commonMistakes: 'Using casual term "धोखा" instead of legal administrative term "आपराधिक न्यासभंग".',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-27',
    englishTerm: 'De-Jure Recognition',
    hindiTerm: 'विधिक मान्यता',
    alternativeHindiTerms: ['कानूनी स्वीकृति'],
    direction: 'EnToHi',
    definition: 'Formal legal acceptance of an association, union, or entity in accordance with law.',
    hindiDefinition: 'विधि के औपचारिक नियमों के अंतर्गत किसी संघ या निकाय को प्रदान की गई मान्यता।',
    secretariatContext: 'Used in files recognizing employee associations and unions in UP Secretariat.',
    sampleNotingUsage: '"संबंधित कर्मचारी संगठन को सेवा नियमावली के अधीन विधिक मान्यता प्रदान की जाती है।"',
    commonMistakes: 'Translating as "सहमति" (consent).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-28',
    englishTerm: 'Statutory Obligation',
    hindiTerm: 'सांविधिक दायित्व',
    alternativeHindiTerms: ['विधिक बाध्यता'],
    direction: 'EnToHi',
    definition: 'A legal requirement specified in a statute or legislative act that an individual or authority is compelled to perform.',
    hindiDefinition: 'किसी विधान या अधिनियम द्वारा स्पष्ट रूप से आरोपित कानूनी अनिवार्यता जिसका पालन करना बाध्यकारी है।',
    secretariatContext: 'Refers to obligations under RTI Act, Janhit Guarantee Act, and Environmental Protection Acts.',
    sampleNotingUsage: '"सूचना का अधिकार अधिनियम, 2005 की धारा 4(1)(b) के अंतर्गत स्वतः प्रकटीकरण एक सांविधिक दायित्व है।"',
    commonMistakes: 'Confusing statutory (सांविधिक - passed by legislature) with constitutional (संवैधानिक - present in Constitution).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-29',
    englishTerm: 'Transparency',
    hindiTerm: 'पारदर्शिता',
    alternativeHindiTerms: ['खुलापन'],
    direction: 'EnToHi',
    definition: 'The quality of being open, clear, and visible in administrative decision-making and operational processes.',
    hindiDefinition: 'प्रशासनिक निर्णयों और कार्यप्रणालियों का स्पष्ट, खुला एवं सार्वजनिक समीक्षा हेतु उपलब्ध होना।',
    secretariatContext: 'Core metric for government procurement, e-tendering, and public postings.',
    sampleNotingUsage: '"ई-टेंडरिंग व्यवस्था का मुख्य उद्देश्य क्रय प्रक्रिया में पूर्ण पारदर्शिता सुनिश्चित करना है।"',
    commonMistakes: 'Confusing transparency (information availability) with accountability (answerability).',
    category: 'Accountability & Anti-Graft'
  },
  {
    id: 'ro-term-30',
    englishTerm: 'Accountability',
    hindiTerm: 'जवाबदेही / उत्तरदायित्व',
    alternativeHindiTerms: ['उत्तरदेयता'],
    direction: 'EnToHi',
    definition: 'The obligation of public officials to report, explain, and be answerable for the consequences of decisions and actions taken on behalf of the public.',
    hindiDefinition: 'लोक सेवकों की यह बाध्यता कि वे सार्वजनिक हित में लिए गए अपने निर्णयों एवं कार्यों के परिणामों का स्पष्टीकरण दें और उत्तरदायी रहें।',
    secretariatContext: 'Evaluated in legislative committee appearances (लोक लेखा समिति / प्राक्कलन समिति).',
    sampleNotingUsage: '"लोक धन के प्रत्येक व्यय के प्रति विभाग की विधायिका के प्रति प्रत्यक्ष जवाबदेही है।"',
    commonMistakes: 'Using "जिम्मेदारी" (responsibility). Responsibility is the duty to act; accountability is the liability to answer.',
    category: 'Accountability & Anti-Graft'
  },
  {
    id: 'ro-term-31',
    englishTerm: 'Collusive Corruption',
    hindiTerm: 'मिलीभगत वाला भ्रष्टाचार / सांठगांठ युक्त भ्रष्टाचार',
    alternativeHindiTerms: ['सांठगांठ'],
    direction: 'EnToHi',
    definition: 'Corruption where both the bribe-giver and bribe-taker benefit at the expense of the public exchequer or general public.',
    hindiDefinition: 'ऐसा भ्रष्टाचार जिसमें रिश्वत देने वाला और लेने वाला दोनों आपस में मिलकर सरकारी खजाने या जनता को नुकसान पहुंचाते हैं।',
    secretariatContext: 'Identified by 2nd ARC as the most dangerous form of corruption in public works and tax evasion.',
    sampleNotingUsage: '"ठेकेदार और अभियंताओं के मध्य सांठगांठ युक्त भ्रष्टाचार के कारण पुल निर्माण में घटिया सामग्री प्रयुक्त हुई।"',
    commonMistakes: 'Confusing collusive corruption with coercive/extortive corruption (जबरन वसूली).',
    category: 'Accountability & Anti-Graft'
  },
  {
    id: 'ro-term-32',
    englishTerm: 'Judicial Review',
    hindiTerm: 'न्यायिक पुनरावलोकन / न्यायिक समीक्षा',
    alternativeHindiTerms: ['न्यायिक समीक्षा'],
    direction: 'EnToHi',
    definition: 'The power of the judiciary to examine the constitutionality and legality of legislative enactments and executive orders.',
    hindiDefinition: 'न्यायपालिका की वह शक्ति जिसके द्वारा वह विधायिका के कानूनों और कार्यपालिका के आदेशों की संवैधानिकता की जांच करती है।',
    secretariatContext: 'Invoked under Articles 226/227 in High Court against administrative orders violating Fundamental Rights.',
    sampleNotingUsage: '"नीतिगत निर्णयों पर भी यदि वे मनमाने हैं, तो माननीय उच्च न्यायालय न्यायिक पुनरावलोकन का प्रयोग कर सकता है।"',
    commonMistakes: 'Using "न्यायिक पुनरीक्षण" (which is Judicial Revision). "पुनरावलोकन" is the correct term for Review.',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-33',
    englishTerm: 'Departmental Proceedings',
    hindiTerm: 'विभागीय कार्यवाही',
    alternativeHindiTerms: ['अनुशासनात्मक कार्यवाही'],
    direction: 'EnToHi',
    definition: 'Formal internal inquiry initiated against a government servant for misconduct or violation of service conduct rules.',
    hindiDefinition: 'सरकारी कर्मचारी द्वारा सेवा नियमावली के उल्लंघन या कदाचार पर विभाग द्वारा की जाने वाली आंतरिक जांच प्रक्रिया।',
    secretariatContext: 'Initiated under Rule 7 of UP Government Servants (Discipline and Appeal) Rules, 1999.',
    sampleNotingUsage: '"कदाचार के आरोपी कार्मिक के विरुद्ध विभागीय कार्यवाही संस्थित करने का निर्णय लिया गया है।"',
    commonMistakes: 'Confusing departmental inquiry with criminal trial (आपराधिक मुकदमा).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-34',
    englishTerm: 'Charge Sheet',
    hindiTerm: 'आरोप पत्र',
    alternativeHindiTerms: ['दोषारोपण पत्र'],
    direction: 'EnToHi',
    definition: 'A formal document listing specific charges and allegations framed against an employee in disciplinary or criminal matters.',
    hindiDefinition: 'अनुशासनात्मक या आपराधिक मामले में आरोपी कार्मिक के विरुद्ध लगाए गए विशिष्ट आरोपों को सूचीबद्ध करने वाला आधिकारिक दस्तावेज।',
    secretariatContext: 'Drafted by the Section Officer and approved by the Disciplinary Authority before inquiry.',
    sampleNotingUsage: '"अपचारी अधिकारी को आरोप पत्र तामील कराकर 15 दिवस के भीतर लिखित उत्तर प्रस्तुत करने का निर्देश दिया जाए।"',
    commonMistakes: 'Translating as "दोष पत्र". Official secretariat term is "आरोप पत्र".',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-35',
    englishTerm: 'Show Cause Notice',
    hindiTerm: 'कारण बताओ नोटिस',
    alternativeHindiTerms: ['स्पष्टीकरण पत्र'],
    direction: 'EnToHi',
    definition: 'A formal written order requiring an individual to explain or justify why a proposed punitive action should not be taken against them.',
    hindiDefinition: 'एक औपचारिक लिखित नोटिस जिसमें संबंधित व्यक्ति से यह स्पष्ट करने को कहा जाता है कि उसके विरुद्ध प्रस्तावित दंडात्मक कार्रवाई क्यों न की जाए।',
    secretariatContext: 'Mandatory procedural step in administrative discipline to ensure Audi Alteram Partem.',
    sampleNotingUsage: '"अनाधिकृत अवकाश पर रहने के संबंध में कार्मिक को कारण बताओ नोटिस निर्गत किया गया है।"',
    commonMistakes: 'Translating as "चेतावनी" (Warning); Show Cause is a notice to explain before action is finalized.',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-36',
    englishTerm: 'Public Interest Immunity',
    hindiTerm: 'लोकहित उन्मुक्ति',
    alternativeHindiTerms: ['सार्वजनिक हित उन्मुक्ति'],
    direction: 'EnToHi',
    definition: 'The legal privilege claimed by the state to withhold certain sensitive official documents from production in court when disclosure would harm public interest.',
    hindiDefinition: 'राज्य द्वारा प्राप्त वह विधिक विशेषाधिकार जिसके तहत वह संवेदनशील सरकारी दस्तावेजों को न्यायालय में प्रस्तुत करने से रोक सकता है यदि प्रकटीकरण से लोकहित की क्षति हो।',
    secretariatContext: 'Claimed under Indian Evidence Act Section 123/124 for cabinet papers and national security records.',
    sampleNotingUsage: '"मंत्रिमंडल के आंतरिक विचार-विमर्श की पत्रावलियों पर राज्य सरकार द्वारा लोकहित उन्मुक्ति का दावा किया गया है।"',
    commonMistakes: 'Confusing with sovereign immunity (संप्रभु उन्मुक्ति).',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-37',
    englishTerm: 'Misconduct',
    hindiTerm: 'कदाचार',
    alternativeHindiTerms: ['अनुचित आचरण', 'दुराचरण'],
    direction: 'EnToHi',
    definition: 'Unacceptable or improper behavior by an employee in violation of the prescribed code of conduct and discipline.',
    hindiDefinition: 'सरकारी कर्मचारी द्वारा सेवा आचार संहिता के विपरीत किया गया अनुचित, अस्वीकार्य या अमर्यादित आचरण।',
    secretariatContext: 'Defined under Rule 3 of UP Government Servants Conduct Rules, 1956.',
    sampleNotingUsage: '"वरिष्ठ अधिकारियों के आदेशों की अवज्ञा करना गंभीर कदाचार की श्रेणी में आता है।"',
    commonMistakes: 'Using "बदमाशी" or casual Hindi words. The statutory term is "कदाचार".',
    category: 'Probity & Conduct'
  },
  {
    id: 'ro-term-38',
    englishTerm: 'Ex-Officio',
    hindiTerm: 'पदेन',
    alternativeHindiTerms: ['पद के कारण'],
    direction: 'EnToHi',
    definition: 'Holding a position or role automatically by virtue of holding another office.',
    hindiDefinition: 'किसी मुख्य पद पर आसीन होने के कारण स्वतः ही किसी अन्य समिति या पद का प्रभार प्राप्त होना।',
    secretariatContext: 'e.g. Chief Secretary is ex-officio chairman of various state committees.',
    sampleNotingUsage: '"मुख्य सचिव महोदय राज्य आपदा प्रबंधन प्राधिकरण के पदेन (Ex-Officio) मुख्य कार्यकारी अधिकारी हैं।"',
    commonMistakes: 'Translating as "अतिरिक्त" (additional); it specifically denotes status attached to the primary office.',
    category: 'Administrative Discretion'
  },
  {
    id: 'ro-term-39',
    englishTerm: 'In-Camera Proceedings',
    hindiTerm: 'बंद कमरे में कार्यवाही / गुप्त कार्यवाही',
    alternativeHindiTerms: ['अवरुद्ध कक्ष कार्यवाही'],
    direction: 'EnToHi',
    definition: 'Legal or departmental proceedings held in private, excluding the public and the press.',
    hindiDefinition: 'ऐसी न्यायिक या विभागीय सुनवाई जो आम जनता और मीडिया की अनुपस्थिति में एकांत में संचालित होती है।',
    secretariatContext: 'Conducted in sensitive inquiries involving sexual harassment (Internal Complaints Committee under PoSH Act).',
    sampleNotingUsage: '"मामले की संवेदनशीलता और पीड़िता की गरिमा की रक्षा हेतु आंतरिक परिवाद समिति की कार्यवाही बंद कमरे में संचालित की गई।"',
    commonMistakes: 'Confusing with video camera recording; "In-Camera" comes from Latin "camera" meaning chamber/room.',
    category: 'Legal & Procedural'
  },
  {
    id: 'ro-term-40',
    englishTerm: 'Clemency',
    hindiTerm: 'दया / क्षमादान',
    alternativeHindiTerms: ['कृपा', 'अनुग्रह'],
    direction: 'EnToHi',
    definition: 'Mercy, leniency, or pardon exercised by the executive authority towards an offender.',
    hindiDefinition: 'सक्षम कार्यपालिका प्राधिकारी द्वारा किसी दंडित व्यक्ति के प्रति दिखाई गई करुणा, क्षमा या दंड की कमी।',
    secretariatContext: 'Exercised by the Governor under Article 161 of the Constitution.',
    sampleNotingUsage: '"संविधान के अनुच्छेद 161 के अधीन महामहिम राज्यपाल महोदय के समक्ष क्षमादान याचिका प्रस्तुत की गई है।"',
    commonMistakes: 'Using "छूट" (discount/exemption) instead of "क्षमादान".',
    category: 'Administrative Discretion'
  }
];

export const RO_ARO_ESSAY_TOPICS: RoAroEssayItem[] = [
  {
    id: 'ro-essay-1',
    theme: 'साहित्य और संस्कृति',
    title: 'साहित्य और नैतिक मूल्य: समाज का दर्पण और दीपस्तंभ',
    hindiTitle: 'साहित्य और नैतिक मूल्य: समाज का दर्पण और दीपस्तंभ (Literature & Moral Values: Mirror & Beacon of Society)',
    corePremise: 'Literature is not mere aesthetic escapism; it is the moral conscience of civilization. From Kabir’s fearlessness to Premchand’s social realism and Dinkar’s heroic conscience, literature exposes ethical decay and inspires humanistic values in public life.',
    moralPhilosophicalAnchor: 'Gandhian moral aesthetics and Tolstoy’s view of art as a spiritual contagion of moral unity.',
    famousLiteraryQuotes: [
      {
        quote: 'कबीरा खड़ा बज़ार में, मांगे सबकी खैर। ना काहू से दोस्ती, ना काहू से बैर॥',
        author: 'संत कबीर दास',
        context: 'Universal impartiality and courage to speak truth to power without partisan attachment.'
      },
      {
        quote: 'साहित्य समाज के आगे चलने वाली मशाल है, पीछे चलने वाली महरी नहीं।',
        author: 'मुंशी प्रेमचंद',
        context: 'The role of literature in leading social reform and moral enlightenment.'
      },
      {
        quote: 'सच है, विपत्ति जब आती है, कायर को ही दहलाती है। सूरमा नहीं विचलित होते, क्षण एक नहीं धीरज खोते॥',
        author: 'रामधारी सिंह "दिनकर"',
        context: 'Fortitude and resilience under ethical and administrative crises.'
      }
    ],
    threePartOutline: {
      introduction: 'Define the organic link between literature (साहित्य = स + हित, i.e., "that which embodies collective welfare") and societal morality. Contrast literature as a mere passive reflection (दर्पण) with literature as an active moral beacon (दीपस्तंभ) that guides human conscience during moral darkness.',
      bodyDimensions: [
        'Historical Evolution of Moral Literature: Bhakti Movement in UP (Kabir attacking caste hypocrisy, Tulsidas providing Ramrajya as a benchmark of ethical governance).',
        'Modern Social Realism: Premchand (Kafan, Godan, Panch Parmeshwar) illuminating administrative corruption, social exclusion, and grassroots justice.',
        'Nationalist Moral Awakening: Dinkar (Rashmirathi), Maithili Sharan Gupt (Bharat Bharati) awakening civic duty and sacrifice.',
        'Contemporary Crisis of Consumerism: Erosion of reading culture and moral literature in the era of sensational 30-second digital algorithms; literature as an antidote to cynicism.'
      ],
      ethicalSynthesisAndConclusion: 'A nation without ethical literature is like a ship without a moral rudder. Civil servants and citizens must cultivate literary sensitivity to keep administrative empathy alive. Conclude with a call for integrating literary humanities into civic upbringing.'
    },
    keyDataAndConstitutionalArticles: [
      'Article 51A(e) & (f): Duty to promote harmony and value the rich heritage of composite culture.',
      'Article 19(1)(a): Freedom of artistic and literary expression as the lifeblood of democracy.',
      'Second ARC 4th Report: Recommending humanities and ethical case literature in administrative training.'
    ],
    modelEssayDraft: `साहित्य और नैतिक मूल्य: समाज का दर्पण और दीपस्तंभ

"साहित्य समाज के आगे चलने वाली मशाल है, पीछे चलने वाली महरी नहीं।"
— मुंशी प्रेमचंद

भूमिका:
व्युत्पत्ति की दृष्टि से 'साहित्य' शब्द 'सहित' के भाव से उद्भूत हुआ है, जिसका तात्पर्य है—वह रचना जिसमें लोक-कल्याण (सर्वजन हिताय) का उदात्त भाव समाहित हो। मानव सभ्यता के इतिहास में साहित्य कभी केवल बौद्धिक विलास अथवा मनोरंजन का साधन मात्र नहीं रहा; यह प्रत्येक युग में समाज की अंतरात्मा का सजग प्रहरी रहा है। जब-जब समाज नैतिक पतन, शोषण और पाखंड के गर्त में गिरा, तब-तब साहित्य ने एक 'दर्पण' बनकर यथार्थ की कुरूपता का साक्षात्कार कराया और एक 'दीपस्तंभ' बनकर कर्तव्यविमूढ़ मानवता को सत्य, न्याय एवं करुणा का मार्ग दिखाया।

भक्ति साहित्य: सामाजिक समरसता और नैतिक शुचिता का शंखनाद:
उत्तर प्रदेश की पुण्यभूमि इस दृष्टि से अत्यंत समृद्ध रही है। मध्यकाल में जब सामाजिक विषमताएं और धार्मिक आडंबर चरम पर थे, तब संत कबीर ने किसी राजसत्ता के भय के बिना निष्पक्षता और सत्यनिष्ठा का आदर्श प्रस्तुत किया:
"कबीरा खड़ा बज़ार में, मांगे सबकी खैर।
ना काहू से दोस्ती, ना काहू से बैर॥"
यह उक्ति आधुनिक लोक सेवक के लिए निष्पक्षता (Impartiality) और अनासक्ति का सर्वोच्च पाठ है। वहीं दूसरी ओर, गोस्वामी तुलसीदास ने 'रामचरितमानस' के माध्यम से 'रामराज्य' की जो संकल्पना दी, वह नैतिक सुशासन (Good Governance) का शाश्वत प्रतिमान है—
"मुखिया मुखु सो चाहिऐ खान पान कहुँ एक।
पालइ पोषइ सकल अँग तुलसी सहित बिबेक॥"

सामाजिक यथार्थवाद और प्रेमचंद की अंतर्दृष्टि:
आधुनिक काल में कथासम्राट मुंशी प्रेमचंद ने ग्रामीण भारत के शोषण, साहूकारी पाखंड और प्रशासनिक उदासीनता को अपनी रचनाओं का विषय बनाया। 'पंच परमेश्वर' में अल्गू चौधरी और जुम्मन शेख की कहानी यह स्थापित करती है कि "पंच के आसन पर बैठकर किसी का कोई मित्र या शत्रु नहीं होता, वहां केवल न्याय की आवाज होती है।" यह प्रशासनिक स्वविवेक और निष्पक्षता का सबसे सहज व प्रभावी नैतिक दृष्टांत है। 'गोदान' का होरी संपूर्ण भारतीय कृषक वर्ग की असहायता का सजीव दस्तावेज है, जो व्यवस्था के कर्णधारों को सामाजिक न्याय (Article 38) की अनिवार्यता का स्मरण कराता है।

राष्ट्रकवि दिनकर और कर्तव्य-निष्ठा:
रामधारी सिंह 'दिनकर' ने 'रश्मिरथी' के माध्यम से वंचित वर्ग के स्वाभिमान और कर्तव्य-संकट (Moral Dilemma) का जो चित्रण किया, वह अद्वितीय है:
"सच है, विपत्ति जब आती है, कायर को ही दहलाती है।
सूरमा नहीं विचलित होते, क्षण एक नहीं धीरज खोते॥"
प्रशासनिक जीवन में आने वाले अप्रत्याशित संकटों, दवाबों और तनावों के बीच यह साहित्यिक पंक्तियां एक लोक सेवक को मानसिक दृढ़ता (Fortitude) और भावनात्मक समझ (Emotional Intelligence) प्रदान करती हैं।

समकालीन चुनौतियां एवं साहित्य की प्रासंगिकता:
आज का डिजिटल युग त्वरित सूचनाओं, सतही रील्स और संवेदनहीन उपभोक्तावाद से ग्रस्त है। ऐसे समय में जब समाज में असहिष्णुता, स्वार्थ और संवेदनहीनता बढ़ रही है, साहित्य ही वह संजीवनी है जो मनुष्य को मनुष्य बनाए रख सकती है। साहित्य हमें 'परदुःखकातरता' (Empathy) सिखाता है। एक संवेदनशील प्रशासक वही हो सकता है जिसने साहित्य के माध्यम से समाज के अंतिम पंक्ति के व्यक्ति की पीड़ा को महसूस किया हो।

निष्कर्ष:
साहित्य और नैतिक मूल्य एक-दूसरे के पूरक हैं। जिस समाज का साहित्य मर जाता है, उसकी संवेदनशीलता और न्याय-चेतना भी समाप्त हो जाती है। अतः आवश्यक है कि हमारी शिक्षा प्रणाली और प्रशासनिक प्रशिक्षण में साहित्य को केवल एक भाषा-विषय न मानकर मूल्य-निर्माण का अनिवार्य स्रोत माना जाए। साहित्य की मशाल ही अज्ञान और भ्रष्टाचार के अंधकार को चीरकर एक समतामूलक, नैतिक एवं प्रबुद्ध भारत के निर्माण का मार्ग प्रशस्त करेगी।`
  },
  {
    id: 'ro-essay-2',
    theme: 'सामाजिक क्षेत्र',
    title: 'भ्रष्टाचार मुक्त शासन और सामाजिक न्याय: एक दूसरे के पूरक',
    hindiTitle: 'भ्रष्टाचार मुक्त शासन और सामाजिक न्याय: एक दूसरे के पूरक (Corruption-Free Governance & Social Justice: Inseparable Complements)',
    corePremise: 'Corruption is not merely a financial leakage; it is a direct assault on the fundamental rights of the poorest citizen. When a grain of wheat or a welfare rupee is diverted, social justice is murdered.',
    moralPhilosophicalAnchor: 'Amartya Sen’s Capability Approach, Dr. B.R. Ambedkar’s Constitutional Morality, and John Rawls’s Justice as Fairness.',
    famousLiteraryQuotes: [
      {
        quote: 'दीन सबन को लखत है, दीनहिं लखै न कोय। जो रहीम दीनहिं लखै, दीनबंधु सम होय॥',
        author: 'रहीम',
        context: 'Empathetic focus on the most destitute as the highest duty of authority.'
      },
      {
        quote: 'भ्रष्टाचार देश के विकास को दीमक की तरह चाट रहा है; यह सबसे अधिक उसी निर्धन को चोट पहुंचाता है जिसका कोई सहारा नहीं होता।',
        author: 'डॉ. ए.पी.जे. अब्दुल कलाम',
        context: 'Direct impact of corruption on social vulnerability.'
      }
    ],
    threePartOutline: {
      introduction: 'Unpack the definition of Social Justice (Articles 14, 15, 38, 46) and explain how systemic corruption disproportionately levies an invisible regressive tax on the underprivileged.',
      bodyDimensions: [
        'Anatomy of Leakage: Diversion in PDS, MGNREGA, PM Awas Yojana turning affirmative action into an illusion.',
        'Structural Inequality: Rich and influential bypass queues via speed money (सुविधा शुल्क); the marginalized are left without voice.',
        'Institutional Shields: UP Lokayukta Act 1975, Anti-Bhoo Mafia Task Force, DBT (Direct Benefit Transfer), and e-District eliminating human rent-seeking.',
        'Moral Culture of the Bureaucracy: Transforming from colonial patronage (माई-बाप संस्कृति) to constitutional trusteeship (न्यास भाव).'
      ],
      ethicalSynthesisAndConclusion: 'Social justice cannot survive in an environment where probity is compromised. Zero tolerance for corruption is not an administrative choice but a constitutional mandate for human dignity. Conclude with Ambedkar’s warning about social democracy.'
    },
    keyDataAndConstitutionalArticles: [
      'Preamble: Social, Economic, and Political Justice.',
      'Article 21: Right to live with human dignity free from administrative extortion.',
      'CVC Guidelines & 2nd ARC 4th Report: Ethics in Governance and preventive vigilance.'
    ],
    modelEssayDraft: `भ्रष्टाचार मुक्त शासन और सामाजिक न्याय: एक दूसरे के पूरक

"यदि हम एक सामाजिक लोकतंत्र के रूप में जीवित रहना चाहते हैं, तो हमें अपने सामाजिक और आर्थिक जीवन में मौजूद अंतर्विरोधों को दूर करना ही होगा।"
— डॉ. बी.आर. अम्बेडकर

भूमिका:
स्वतंत्र भारत के संविधान निर्माताओं ने प्रस्तावना में जिस 'सामाजिक न्याय' को सर्वोच्च स्थान प्रदान किया था, वह केवल एक राजनीतिक नारा नहीं अपितु प्रत्येक नागरिक के मानवीय स्वाभिमान और गरिमा की सुरक्षा का संकल्प था। सामाजिक न्याय का सीधा अर्थ है—जाति, धर्म, लिंग अथवा आर्थिक स्थिति के आधार पर किसी भी प्रकार के भेदभाव का उन्मूलन और वंचित वर्ग को मुख्यधारा में लाने हेतु अनुकूल अवसर प्रदान करना। किंतु विगत दशकों के अनुभव यह सिद्ध करते हैं कि सामाजिक न्याय का यह पावन लक्ष्य तब तक एक मरीचिका बना रहेगा, जब तक कि शासन तंत्र से 'भ्रष्टाचार' रूपी दीमक का समूल विनाश न हो जाए। भ्रष्टाचार और सामाजिक न्याय एक ही सिक्के के दो पहलू हैं—एक की उपस्थिति दूसरे के अस्तित्व को नकारती है।

भ्रष्टाचार: निर्धनों पर अप्रत्यक्ष क्रूर कर:
प्रायः भ्रष्टाचार को केवल वित्तीय अनियमितता अथवा राजकोषीय नुकसान के रूप में देखा जाता है, किंतु इसका सबसे भयावह आयाम इसका सामाजिक प्रभाव है। नोबेल पुरस्कार विजेता अर्थशास्त्री अमर्त्य सेन के अनुसार, "भ्रष्टाचार केवल धन का हस्तांतरण नहीं है, यह निर्धनतम व्यक्ति की क्षमताओं (Capabilities) का अपहरण है।" 
जब सार्वजनिक वितरण प्रणाली (PDS) का खाद्यान्न कालाबाजारी में बिक जाता है, जब प्राथमिक स्वास्थ्य केंद्र की जीवनरक्षक दवाएं बाजार में बेच दी जाती हैं, या जब प्रधानमंत्री आवास योजना में अनुदान प्राप्त करने हेतु एक भूमिहीन दलित से रिश्वत की मांग की जाती है, तब यह केवल कानून का उल्लंघन नहीं, बल्कि संविधान के अनुच्छेद 21 (गरिमापूर्ण जीवन का अधिकार) की हत्या है। संपन्न व्यक्ति तो घूस देकर अथवा निजी विकल्पों के माध्यम से अपना कार्य करवा लेता है, किंतु निर्धन के पास न तो घूस देने का सामर्थ्य होता है और न ही कोई समानांतर विकल्प। अतः भ्रष्टाचार समाज के सबसे कमजोर वर्ग पर लगाया गया सर्वाधिक प्रतिगामी (Regressive) कर है।

उत्तर प्रदेश में सुशासन एवं संस्थागत सुधार:
उत्तर प्रदेश जैसे विशाल राज्य में, जहाँ 24 करोड़ से अधिक आबादी निवास करती है, भ्रष्टाचार मुक्त शासन की स्थापना सामाजिक न्याय की अनिवार्य पूर्व-शर्त है। इस दिशा में हाल के वर्षों में कई संरचनात्मक कदम उठाए गए हैं:
1. प्रत्यक्ष लाभ अंतरण (DBT): बिचौलियों और 'दलालों' की संस्कृति को समाप्त कर छात्रवृत्ति, वृद्धावस्था पेंशन और किसान सम्मान निधि सीधे लाभार्थियों के बैंक खातों में पहुंचाई जा रही है।
2. जनहित गारंटी अधिनियम एवं आईजीआरएस (जनसुनवाई): नागरिक सेवाओं के समयबद्ध निस्तारण ने सरकारी दफ्तरों के चक्कर काटने की विवशता को कम किया है।
3. एंटी-भूमाफिया टास्क फोर्स: गरीब, ग्राम सभा और तालाबों की भूमि पर वर्षों से काबिज माफियाओं पर नकेल कसकर सार्वजनिक संपत्तियों को मुक्त कराया गया है।
4. लोकायुक्त संस्था का सशक्तिकरण: उत्तर प्रदेश लोकायुक्त तथा उप-लोकायुक्त अधिनियम, 1975 उच्च प्रशासनिक एवं राजनीतिक पदों पर बैठे व्यक्तियों की जवाबदेही तय करने का महत्वपूर्ण वैधानिक अस्त्र है।

प्रशासनिक सत्यनिष्ठा और नैतिक रूपांतरण:
द्वितीय प्रशासनिक सुधार आयोग (Second ARC) ने अपनी चौथी रिपोर्ट 'शासन में नैतिकता' में स्पष्ट रेखांकित किया है कि केवल कानूनों और डिजिटल पोर्टलों से भ्रष्टाचार समाप्त नहीं हो सकता। इसके लिए लोक सेवकों के अंतःकरण (Conscience) में नैतिक रूपांतरण आवश्यक है। सिविल सेवक को स्वयं को शासक नहीं, अपितु लोक-न्यासी (Public Trustee) समझना होगा। महात्मा गांधी का 'जंतर' (Talisman) आज भी हर निर्णय की कसौटी होना चाहिए—"जो कदम तुम उठाने जा रहे हो, क्या उससे उस सबसे गरीब और कमजोर व्यक्ति को कोई लाभ पहुंचेगा?"

निष्कर्ष:
सामाजिक न्याय की अट्टालिका भ्रष्टाचार की दलदल पर नहीं खड़ी की जा सकती। भ्रष्टाचार मुक्त शासन कोई उपकार नहीं, बल्कि नागरिक का जन्मसिद्ध संवैधानिक अधिकार है। जब तक शासन में शुचिता (Probity), पारदर्शिता (Transparency) और त्वरित जवाबदेही (Accountability) को प्रशासनिक संस्कृति का अभिन्न अंग नहीं बनाया जाएगा, तब तक अंतिम पंक्ति में खड़े व्यक्ति के आंसू नहीं पोंछे जा सकेंगे। भ्रष्टाचार के विरुद्ध 'जीरो टॉलरेंस' ही समतामूलक, न्यायपूर्ण और आत्मनिर्भर भारत के निर्माण का एकमात्र राजमार्ग है।`
  },
  {
    id: 'ro-essay-3',
    theme: 'राष्ट्रीय विकास योजनाएं एवं समस्याएं',
    title: 'डिजिटल सुशासन: नागरिक सशक्तिकरण या तकनीकी विषमता?',
    hindiTitle: 'डिजिटल सुशासन: नागरिक सशक्तिकरण या तकनीकी विषमता? (Digital Governance: Citizen Empowerment or Technological Divide?)',
    corePremise: 'Technology is an exceptional force multiplier for transparency and speed, but when biometric mismatch, digital illiteracy, or network failures exclude the poorest citizen from ration or healthcare, technology itself becomes an instrument of systemic violence.',
    moralPhilosophicalAnchor: 'Rawlsian Minimax Principle, Gandhian Antyodaya, and Hans Jonas’s Ethics of Responsibility for Technology.',
    famousLiteraryQuotes: [
      {
        quote: 'तकनीक मनुष्य के कल्याण के लिए एक उत्तम सेवक हो सकती है, किंतु यदि वह दया और करुणा से शून्य हो जाए तो सबसे क्रूर स्वामी बन जाती है।',
        author: 'अज्ञात विचारक / लोक-प्रशासन सूत्र',
        context: 'Technology without empathy becomes an instrument of exclusion.'
      }
    ],
    threePartOutline: {
      introduction: 'Chart the meteoric rise of Digital Governance in India (India Stack, Aadhaar, UPI, DigiLocker, e-District UP) and set up the ethical tension between speed/transparency and human exclusion.',
      bodyDimensions: [
        'The Empowerment Matrix: Dismantling bureaucratic gatekeepers, eliminating ghost beneficiaries, real-time grievance tracking.',
        'The Dark Side: Biometric authentication failure denying elderly pensions; digital illiteracy forcing reliance on cyber-cafe middlemen (डिजिटल दलाल).',
        'Ethical Dilemma for the Administrator: Should an SDM or BDO strictly enforce software algorithm rejections, or invoke administrative discretion with compassionate manual overrides?',
        'Bridging the Divide: Assisted digital services (Common Service Centres - CSCs), offline fallback mechanisms, multilingual interfaces.'
      ],
      ethicalSynthesisAndConclusion: 'Technology must serve human dignity, not override it. Digital governance must be married with humane discretion. Emphasize that no genuine citizen should be denied constitutional survival rights due to a technical server timeout.'
    },
    keyDataAndConstitutionalArticles: [
      'Puttaswamy Judgment (2017): Informational privacy as a fundamental right under Article 21.',
      'Supreme Court Ruling in Aadhaar Case: Biometric failure cannot be grounds for denying food grain under Right to Food.',
      'Digital India Vision & UP e-Governance Policy.'
    ],
    modelEssayDraft: `डिजिटल सुशासन: नागरिक सशक्तिकरण या तकनीकी विषमता?

"विज्ञान और तकनीक जब तक अंतिम व्यक्ति के आंसुओं को पोंछने में सक्षम नहीं होते, तब तक वे अधूरे हैं।"
— महात्मा गांधी

भूमिका:
इक्कीसवीं सदी के भारत में शासन और नागरिक के संबंधों में सर्वाधिक युगांतरकारी परिवर्तन 'डिजिटल क्रांति' के माध्यम से घटित हुआ है। 'डिजिटल इंडिया' अभियान के अंतर्गत भारत ने आधार, यूपीआई (UPI), डिजिलॉकर, कोविन और प्रत्यक्ष लाभ अंतरण (DBT) के रूप में एक विश्वस्तरीय 'डिजिटल पब्लिक इंफ्रास्ट्रक्चर' (DPI) का निर्माण किया है। उत्तर प्रदेश जैसे विशाल राज्य में भी 'ई-डिस्ट्रिक्ट' पोर्टल, 'भूलेख' कंप्यूटरीकरण, 'आईजीआरएस' (जनसुनवाई) और 'मानव संपदा' पोर्टल ने प्रशासनिक कार्यप्रणाली को अभूतपूर्व गति, पारदर्शिता और सुगमता प्रदान की है। किंतु इस चकाचौंध के बीच एक गंभीर नैतिक और विकासात्मक प्रश्न निरंतर सिर उठा रहा है—क्या डिजिटल सुशासन वास्तव में समाज के सबसे कमजोर वर्ग को सशक्त कर रहा है, अथवा यह एक नए प्रकार के 'डिजिटल बहिष्कार' (Digital Exclusion) को जन्म दे रहा है?

सशक्तिकरण का उज्ज्वल पक्ष: बिचौलियों का अंत:
डिजिटल शासन का सबसे बड़ा नैतिक योगदान यह है कि इसने पारंपरिक नौकरशाही के उस 'गेटकीपर' सिंड्रोम पर करारा प्रहार किया है, जो आम नागरिक को एक अदद प्रमाण-पत्र अथवा पेंशन के लिए सरकारी दफ्तरों के अनगिनत चक्कर लगाने को विवश करता था। 
1. पारदर्शिता और गति: सरकारी योजनाओं के लाभार्थियों की सूची अब सार्वजनिक डोमेन में उपलब्ध है। राशन कार्ड में फर्जी नामों (Ghost Beneficiaries) की छंटनी से राजकोषीय अपव्यय थमा है।
2. भ्रष्टाचार पर प्रहार: प्रत्यक्ष लाभ अंतरण (DBT) ने 'सुविधा शुल्क' (Speed Money) की संस्कृति को लगभग समाप्त कर दिया है। आज छात्रवृत्ति और वृद्धावस्था पेंशन सीधे लाभार्थी के बैंक खाते में बिना किसी कटौती के पहुंचती है।
3. शिकायत निवारण की सुगमता: मुख्यमंत्री हेल्पलाइन 1076 और आईजीआरएस पोर्टल के माध्यम से सुदूर ग्रामीण अंचल का नागरिक भी सीधे लखनऊ मुख्यालय तक अपनी शिकायत दर्ज कराने में समर्थ हुआ है।

तकनीकी विषमता और बहिष्करण की त्रासदी:
किंतु सिक्के का दूसरा पहलू अत्यंत चिंताजनक है। जब तक समाज में व्यापक डिजिटल साक्षरता और सुदृढ़ इंटरनेट कनेक्टिविटी नहीं होती, तब तक तकनीक सशक्तिकरण के स्थान पर वंचना का माध्यम बन जाती है।
1. बायोमेट्रिक विफलता और राशन से वंचना: सुदूर ग्रामीण क्षेत्रों में वृद्ध महिलाओं अथवा शारीरिक श्रम करने वाले मजदूरों की उंगलियों के निशान (फिंगरप्रिंट्स) घिस जाने या सर्वर डाउन होने के कारण पीओएस (PoS) मशीनें उनकी पहचान प्रमाणित नहीं कर पातीं। सर्वोच्च न्यायालय ने स्पष्ट निर्देश दिया है कि केवल बायोमेट्रिक विफलता के आधार पर किसी गरीब को राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) के तहत खाद्यान्न से वंचित नहीं किया जा सकता।
2. नए प्रकार के बिचौलिए (डिजिटल दलाल): अनपढ़ और तकनीकी रूप से अशिक्षित ग्रामीण आज भी सहज जनसेवा केंद्रों (CSC) या साइबर कैफे संचालकों के मोहताज हैं। फार्म भरने, प्रिंट निकालने और अंगूठा लगवाने के नाम पर उनसे अनुचित धनराशि वसूली जाती है, जो पुराने बाबू-राज का ही आधुनिक डिजिटल अवतार है।
3. निजता का संकट: डिजिटल डाटा के केंद्रीकरण से नागरिकों के व्यक्तिगत डाटा की सुरक्षा और निगरानी राज्य (Surveillance State) का खतरा भी उत्पन्न हुआ है, जिस पर न्यायमूर्ति पुट्टास्वामी वाद (2017) में सर्वोच्च न्यायालय ने गहरी चिंता व्यक्त की थी।

प्रशासक के सम्मुख नैतिक द्वंद्व एवं समाधान:
एक संवेदनशील प्रशासनिक अधिकारी के सामने अक्सर यह द्वंद्व खड़ा होता है कि वह पोर्टल के अल्गोरिदम और नियमों की कठोरता का पालन करे, अथवा मानवीय संवेदना के आधार पर अपने स्वविवेक (Administrative Discretion) का प्रयोग करे। प्रशासनिक नैतिकता का तकाजा यह है कि "नियम मनुष्य के लिए बने हैं, मनुष्य नियमों के लिए नहीं।" 
तकनीकी खराबी की स्थिति में मैनुअल सत्यापन (Offline Override) और भौतिक निरीक्षण का विकल्प सदैव खुला रहना चाहिए। ग्राम पंचायतों में मोबाइल डिजिटल वैन और आशा/आंगनवाड़ी कार्यकर्ताओं के माध्यम से घर-घर जाकर सेवाएं उपलब्ध कराई जानी चाहिए।

निष्कर्ष:
डिजिटल सुशासन केवल कंप्यूटर स्क्रीन और डैशबोर्ड पर हरे-लाल सिग्नल देखने का नाम नहीं है। तकनीक एक अत्यंत शक्तिशाली औजार है, किंतु इसका दिल और दिमाग नहीं होता। यदि तकनीक में करुणा, संवेदनशीलता और समावेशिता (Inclusiveness) का समावेश न किया जाए, तो यह एक निर्दयी मशीन बन जाती है। डिजिटल इंडिया का वास्तविक स्वप्न तभी साकार होगा जब अंतिम पंक्ति में खड़ा अशिक्षित और असहाय व्यक्ति भी आत्मविश्वास से कह सके कि यह तकनीक उसके स्वाभिमान की रक्षक है, वंचना का कारण नहीं।`
  }
];

export const UP_LOKAYUKTA_ACT_1975 = {
  statuteName: 'Uttar Pradesh Lokayukta and Up-Lokayuktas Act, 1975',
  hindiStatuteName: 'उत्तर प्रदेश लोकायुक्त तथा उप-लोकायुक्त अधिनियम, 1975',
  historicalOrigin: 'Enacted in 1975 following the recommendations of the First Administrative Reforms Commission (1966) to create an autonomous statutory ombudsman for investigating corruption and administrative grievances in Uttar Pradesh.',
  appointmentProcess: {
    appointingAuthority: 'Governor of Uttar Pradesh',
    collegiumMembers: [
      'Chief Justice of the Allahabad High Court (Mandatory consultation)',
      'Leader of Opposition in the UP Legislative Assembly (Mandatory consultation)',
      'Chief Minister (Executive recommendation)'
    ],
    eligibility: 'Must be a former Judge of the Supreme Court of India or a former Chief Justice/Judge of a High Court.'
  },
  tenureAndConditions: {
    tenure: '8 years (Extended from 6 years by UP Amendment Act, 2012; confirmed by Supreme Court in Justice Virendra Singh case)',
    reappointment: 'Barred from reappointment or holding any office of profit under the Government of UP after demitting office.',
    removal: 'Can only be removed by the Governor on grounds of proved misbehavior or incapacity following an address passed by a two-thirds majority in the UP Legislature.'
  },
  jurisdiction: {
    included: [
      'All Ministers of the Government of Uttar Pradesh (excluding Chief Minister)',
      'Members of Legislative Assembly (MLAs) and Legislative Council (MLCs)',
      'Chairpersons and Members of Zila Panchayats and Nagar Palikas',
      'Officers of Public Corporations, Apex Cooperatives, and State Universities',
      'Senior Civil Servants (Secretaries, Directors, Engineers-in-Chief)'
    ],
    excluded: [
      'Chief Minister of Uttar Pradesh',
      'Judges of the Supreme Court and High Court, and members of subordinate judiciary',
      'Public Service Commission Chairman and Members (UPPSC)',
      'Accountant General (CAG establishment)',
      'Matters pending before courts or inquiry commissions'
    ]
  },
  powersAndProcedures: [
    'Power of a Civil Court under CPC 1908: Summoning witnesses, examining under oath, requiring production of official files.',
    'Independent Investigation Wing: Can requisition state police or conduct direct departmental search and seizure.',
    'Suo Motu Inquiries: Can take cognisance of press reports regarding massive public fund misappropriations.',
    'Annual Report: Submits an annual report to the Governor, which must be placed before both houses of the UP State Legislature along with an Action Taken Report (ATR).'
  ],
  institutionalLimitationsAndReforms: [
    'Recommendatory Power Only: The Lokayukta cannot directly prosecute or punish; it can only submit a report and recommendation to the Competent Authority (Governor/CM).',
    'Exclusion of Chief Minister: In contrast to the central Lokpal Act 2013 and Karnataka Lokayukta Act, UP Lokayukta does not have jurisdiction over the Chief Minister.',
    'Lack of Autonomous Prosecution Wing: Must rely on the state government’s vigilance or prosecution wing to file formal court charges.',
    'Second ARC Recommendation: Empower state Lokayuktas with direct sanction powers and their own specialized anti-corruption police stations.'
  ]
};

export const COMPARATIVE_EXAM_MATRIX = {
  title: 'Tri-Partite Ethical Evaluation Matrix (UPSC CSE vs UPPSC PCS vs UP RO/ARO)',
  hindiTitle: 'त्रिपक्षीय नैतिक मूल्यांकन मैट्रिक्स: यूपीएससी vs यूपीपीएससी vs यूपी समीक्षा अधिकारी',
  columns: ['Evaluation Dimension', 'UPSC CSE (GS-IV)', 'UPPSC PCS (GS-IV)', 'UP RO/ARO (Mains)'],
  rows: [
    {
      dimension: 'Total Marks & Structure',
      upsc: '250 Marks | Section A (13 Theory Qs = 125M) + Section B (6 Case Studies = 125M)',
      uppsc: '200 Marks | Section A (10 Qs @ 8M = 80M) + Section B (10 Qs @ 12M = 120M)',
      roAro: 'Integrated Ethical Convergence | Hindi Essay (120M) + Admin Vocabulary (20M) + GS Anti-Graft'
    },
    {
      dimension: 'Philosophical vs Direct Focus',
      upsc: 'Deep analytical synthesis, conceptual dilemmas, quote expansions, Western/Indian thinkers applied to complex meta-ethical policy issues.',
      uppsc: 'Crisp definitions, precise distinctions between similar terms (e.g. Attitude vs Aptitude, Empathy vs Sympathy), UP regional thinkers.',
      roAro: 'Strict grammatical and administrative bilingual accuracy; high-context literary and moral essays; procedural secretariat noting.'
    },
    {
      dimension: 'Case Study Typology',
      upsc: 'Nuanced 250-word scenarios involving multi-stakeholder trade-offs, technology dilemmas, political-administrative ethics, whistleblowing.',
      uppsc: '200-word situational problems frequently rooted in UP ground realities (Kumbh crowd stampedes, illicit mining, communal tensions, PDS leakage).',
      roAro: 'File-based secretariat disputes, discretionary relief sanctioning, noting errors, disciplinary procedure compliance.'
    },
    {
      dimension: 'Thinker & Cultural Grounding',
      upsc: 'Socrates, Kant, Rawls, Bentham, Mill, Gandhi, Amartya Sen, Tagore, Haidt.',
      uppsc: 'Sant Kabir, Goswami Tulsidas, Gautama Buddha, Deendayal Upadhyaya, Ram Manohar Lohia, Acharya Narendra Deva, Sardar Patel.',
      roAro: 'Literary giants (Premchand, Dinkar, Nirala, Tulsidas, Kabir) embedded in Hindi essays; constitutional provisions in GS.'
    },
    {
      dimension: 'Ideal Answer Writing Strategy',
      upsc: 'Introduction with philosophical hook → Stakeholder flowchart → Pointwise body with 2nd ARC / Law / SC judgment → Balanced forward-looking conclusion.',
      uppsc: 'Direct 1-line definition → 4-5 numbered bullet points with UP administrative examples (Janhit, IGRS, Anti-Bhoo Mafia) → Sharp crisp conclusion.',
      roAro: 'Flowing literary Hindi prose with authentic couplets and quotations; flawless administrative terminology translations.'
    }
  ]
};
