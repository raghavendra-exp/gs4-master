// src/data/quotes/quotesData.ts
// Verified Quotes Bank with strict authentication, context, verification status, and GS-IV usage tips

import { QuoteItem } from '../../types/ethics';

export const QUOTES_DATA: QuoteItem[] = [
  {
    id: 'qt-gandhi-talisman',
    quote: 'Whenever you are in doubt, or when the self becomes too much with you, apply the following test: Recall the face of the poorest and the weakest man whom you may have seen, and ask yourself if the step you contemplate is going to be of any use to him.',
    speaker: 'Mahatma Gandhi',
    context: 'Written as a brief note to his secretary Pyarelal in August 1947, known worldwide as "Gandhi\'s Talisman".',
    theme: 'Compassion',
    verificationStatus: 'Verified Quote',
    source: 'Mahatma: Life of Mohandas Karamchand Gandhi, Vol. 8 by D.G. Tendulkar, p. 89',
    gs4UsageTips: 'Use as a powerful opening or conclusion in case studies on welfare delivery, digital exclusion, or discretionary administrative relief.',
    relatedConcepts: ['Antyodaya', 'Sarvodaya', 'Empathy', 'Social Justice', 'Administrative Discretion']
  },
  {
    id: 'qt-ambedkar-constitutional-morality',
    quote: 'Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it. Democracy in India is only a top-dressing on an Indian soil, which is essentially undemocratic.',
    speaker: 'Dr. B.R. Ambedkar',
    context: 'Delivered in the Constituent Assembly of India during the presentation of the Draft Constitution on November 4, 1948.',
    theme: 'Governance',
    verificationStatus: 'Verified Quote',
    source: 'Constituent Assembly Debates, Official Report, Vol. VII, p. 38',
    gs4UsageTips: 'Crucial for questions on majoritarian pressures, civil service neutrality, and upholding constitutional values against orthodox social prejudices.',
    relatedConcepts: ['Constitutional Morality', 'Rule of Law', 'Social Democracy', 'Pluralism']
  },
  {
    id: 'qt-patel-steelframe',
    quote: 'You will not have a united India if you do not have a good all-India service which has the independence to speak out its mind, which has a sense of security that you will stand by your work.',
    speaker: 'Sardar Vallabhbhai Patel',
    context: 'Address to the Constituent Assembly defending Article 311 and the creation of the All India Services on October 10, 1949.',
    theme: 'Service',
    verificationStatus: 'Verified Quote',
    source: 'Constituent Assembly Debates, Vol. X, Official Report',
    gs4UsageTips: 'The definitive quotation for defending civil service autonomy, speaking truth to power, and institutional integrity under Article 311.',
    relatedConcepts: ['All India Services', 'Steel Frame', 'Integrity', 'Fearlessness', 'Article 311']
  },
  {
    id: 'qt-kautilya-prajasukhe',
    quote: 'In the happiness of his subjects lies the king’s happiness; in their welfare his welfare. He shall not consider as good only that which pleases him but treat as beneficial to him whatever pleases his subjects.',
    speaker: 'Kautilya (Chanakya)',
    context: 'Arthashastra, Book 1, Chapter 19 (Duties of the King), Verse 34.',
    theme: 'Leadership',
    verificationStatus: 'Verified Quote',
    source: 'The Kautiliya Arthasastra, Part II, translation by R.P. Kangle, University of Bombay',
    gs4UsageTips: 'Use to establish the ancient Indian tradition of citizen-centric governance, public interest supremacy, and Rajdharma.',
    relatedConcepts: ['Citizen-Centric Administration', 'Yogakshema', 'Public Interest', 'Accountability']
  },
  {
    id: 'qt-kant-humanity',
    quote: 'Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end.',
    speaker: 'Immanuel Kant',
    context: 'Groundwork of the Metaphysics of Morals (1785), Second Section, Formulation of the Categorical Imperative.',
    theme: 'Human Dignity',
    verificationStatus: 'Verified Quote',
    source: 'Kant: Groundwork of the Metaphysics of Morals (Cambridge Texts in the History of Philosophy)',
    gs4UsageTips: 'Mandatory in questions critiquing custodial violence, human clinical trials without consent, encounter killings, and treating citizens as disposable statistical tools.',
    relatedConcepts: ['Human Dignity', 'Deontology', 'Categorical Imperative', 'Rights-Based Ethics']
  },
  {
    id: 'qt-rawls-justice',
    quote: 'Justice is the first virtue of social institutions, as truth is of systems of thought. A theory however elegant and economical must be rejected or revised if it is untrue; likewise laws and institutions no matter how efficient and well-arranged must be reformed or abolished if they are unjust.',
    speaker: 'John Rawls',
    context: 'Opening paragraph of A Theory of Justice (1971), Chapter 1.',
    theme: 'Justice',
    verificationStatus: 'Verified Quote',
    source: 'John Rawls: A Theory of Justice, Harvard University Press, 1971, p. 3',
    gs4UsageTips: 'Use when arguing that administrative efficiency cannot trump basic fairness and justice towards the marginalized.',
    relatedConcepts: ['Justice as Fairness', 'Difference Principle', 'Veil of Ignorance', 'Substantive Equality']
  },
  {
    id: 'qt-aristotle-anger',
    quote: 'Anybody can become angry—that is easy. But to be angry with the right person, and to the right degree, and at the right time, and for the right purpose, and in the right way—that is not within everybody\'s power and is not easy.',
    speaker: 'Aristotle',
    context: 'Nicomachean Ethics, Book II, Chapter 9, on the difficulty of hitting the Golden Mean.',
    theme: 'Leadership',
    verificationStatus: 'Verified Quote',
    source: 'Aristotle: Nicomachean Ethics, translated by W.D. Ross',
    gs4UsageTips: 'The classic opening quotation for questions on Emotional Intelligence, crowd control, and anger management in public administration.',
    relatedConcepts: ['Emotional Intelligence', 'Self-Regulation', 'Golden Mean', 'Crisis Leadership']
  },
  {
    id: 'qt-kalam-righteousness',
    quote: 'Where there is righteousness in the heart, there is beauty in the character. When there is beauty in the character, there is harmony in the home. When there is harmony in the home, there is order in the nation. When there is order in the nation, there is peace in the world.',
    speaker: 'Dr. APJ Abdul Kalam',
    context: 'Address to the European Parliament, Strasbourg, France on April 25, 2007 (citing an ancient hymn).',
    theme: 'Duty',
    verificationStatus: 'Verified Quote',
    source: 'Official Address Archives, Office of the President of India (2007)',
    gs4UsageTips: 'Use in questions exploring the linkage between personal morality, family role, national character, and world order.',
    relatedConcepts: ['Character Building', 'Role of Family and Society', 'Moral Development', 'National Order']
  }
];
