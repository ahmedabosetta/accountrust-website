import type { Localized } from "./types";

export type AccountingService = {
  id: string;
  name: Localized<string>;
  price: string; // shown as "Starting at ..."
  unit: Localized<string>; // "1 hour", "1 hr" etc.
  description: Localized<string>;
  items: Localized<string[]>;
};

// Service list, descriptions and starting prices copied from accountrustsvcs.com
// (/book and each /service-page/*).
export const accountingServices: AccountingService[] = [
  {
    id: "corporate",
    name: { en: "Corporate", fr: "Entreprises (sociétés)" },
    price: "$1,000",
    unit: { en: "1 hour", fr: "1 heure" },
    description: {
      en: "Business set up, incorporation and corporate tax, with the compliance work that follows.",
      fr: "Constitution d’entreprise, incorporation et impôts des sociétés, avec les obligations de conformité qui en découlent.",
    },
    items: {
      en: [
        "Business set up, incorporation and registration with government bodies",
        "Bookkeeping",
        "GST returns",
        "Corporate tax return",
        "Consultation",
        "CRA compliance",
        "Payroll",
      ],
      fr: [
        "Constitution d’entreprise, incorporation et inscription auprès des organismes gouvernementaux",
        "Tenue de livres",
        "Déclarations de TPS",
        "Déclaration de revenus des sociétés",
        "Consultation",
        "Conformité avec l’ARC",
        "Paie",
      ],
    },
  },
  {
    id: "partnership",
    name: {
      en: "Partnership & Sole Proprietor",
      fr: "Sociétés de personnes et entreprises individuelles",
    },
    price: "$175",
    unit: { en: "1 hour", fr: "1 heure" },
    description: {
      en: "Yearly tax returns for business, rental and sub-contractor income, with GST where needed.",
      fr: "Déclarations de revenus annuelles pour les revenus d’entreprise, de location et de sous-traitance, avec la TPS au besoin.",
    },
    items: {
      en: [
        "Yearly tax return for business, rental and sub-contractor income",
        "Bookkeeping",
        "GST returns if needed",
        "Consultations",
      ],
      fr: [
        "Déclaration annuelle pour les revenus d’entreprise, de location et de sous-traitance",
        "Tenue de livres",
        "Déclarations de TPS au besoin",
        "Consultations",
      ],
    },
  },
  {
    id: "personal",
    name: { en: "Personal Accounting Services", fr: "Services fiscaux personnels" },
    price: "$49.99",
    unit: { en: "1 hour", fr: "1 heure" },
    description: {
      en: "Yearly personal tax returns, prepared with the documents we list below.",
      fr: "Déclarations de revenus personnelles annuelles, préparées à partir des documents indiqués ci-dessous.",
    },
    items: {
      en: ["Yearly tax returns"],
      fr: ["Déclarations de revenus annuelles"],
    },
  },
  {
    id: "bookkeeping",
    name: { en: "Bookkeeping", fr: "Tenue de livres" },
    price: "$60/hr",
    unit: { en: "1 hour", fr: "1 heure" },
    description: {
      en: "Ongoing bookkeeping so your records are current and ready for tax time.",
      fr: "Tenue de livres continue afin que vos registres soient à jour et prêts pour la période des impôts.",
    },
    items: {
      en: ["Bookkeeping for your business records"],
      fr: ["Tenue de livres pour les registres de votre entreprise"],
    },
  },
];

export type Faq = { q: Localized<string>; a: Localized<string[]> };

// Existing FAQ answers from accountrustsvcs.com/faqs, translated.
export const taxFaqs: Faq[] = [
  {
    q: {
      en: "What do I need to bring to my appointment for partnership, sole proprietor or personal taxes?",
      fr: "Que dois-je apporter à mon rendez-vous pour mes impôts de société de personnes, d’entreprise individuelle ou personnels?",
    },
    a: {
      en: [
        "All your T slips for the year: T3, T4, T4A, T5, charitable donations, RRSP, T2200 and any other relevant information.",
        "Sole proprietor: your annual revenue and expenses, plus vehicle and home office expenses if applicable (see T2125).",
        "Rental property: your annual revenue and expenses (see T776).",
        "If you are not sure whether a document is relevant, bring it anyway.",
      ],
      fr: [
        "Tous vos feuillets T pour l’année : T3, T4, T4A, T5, dons de bienfaisance, REER, T2200 et tout autre renseignement pertinent.",
        "Entreprise individuelle : vos revenus et dépenses annuels, ainsi que les dépenses de véhicule et de bureau à domicile, le cas échéant (voir T2125).",
        "Immeuble locatif : vos revenus et dépenses annuels (voir T776).",
        "Si vous n’êtes pas certain qu’un document est pertinent, apportez-le quand même.",
      ],
    },
  },
  {
    q: {
      en: "Can the information be provided by email or other electronic form?",
      fr: "Les renseignements peuvent-ils être fournis par courriel ou sous une autre forme électronique?",
    },
    a: {
      en: ["Yes. We accept documents in electronic formats."],
      fr: ["Oui. Nous acceptons les documents sous forme électronique."],
    },
  },
  {
    q: {
      en: "What do I need to provide if I claim vehicle expenses?",
      fr: "Que dois-je fournir si je réclame des dépenses de véhicule?",
    },
    a: {
      en: [
        "A copy of the bill of sale showing make, model, year, purchase price and year purchased.",
        "Total kilometres driven for the year and total kilometres driven for business purposes.",
        "Full cost of fuel, insurance, repairs and maintenance, and registration for the year.",
        "Copy of loan documents, to calculate the interest paid on a vehicle loan.",
        "Undepreciated capital cost (UCC) ending balance from the prior year, if the vehicle was claimed previously.",
      ],
      fr: [
        "Une copie de l’acte de vente indiquant la marque, le modèle, l’année, le prix d’achat et l’année d’achat.",
        "Le total des kilomètres parcourus dans l’année et le total des kilomètres parcourus pour l’entreprise.",
        "Le coût complet du carburant, des assurances, des réparations et de l’entretien, et de l’immatriculation pour l’année.",
        "Une copie des documents de prêt, pour calculer les intérêts payés sur un prêt auto.",
        "Le solde de fin de l’année précédente du coût en capital non amorti (FNACC), si le véhicule a déjà été réclamé.",
      ],
    },
  },
  {
    q: {
      en: "What do I need to bring for my corporate tax return?",
      fr: "Que dois-je apporter pour ma déclaration de revenus de société?",
    },
    a: {
      en: [
        "Your incorporation documents.",
        "Your business number for the Canada Revenue Agency (CRA).",
        "The prior year’s Notices of Assessment from the CRA and the Province of Alberta.",
        "If bookkeeping has been done, a backup copy of the file. Otherwise, documents showing income and expenses, such as bank and credit card statements, expense receipts and a list of assets purchased during the year.",
        "An initial consultation is the best way to confirm whether other documents are needed.",
      ],
      fr: [
        "Vos documents de constitution en société.",
        "Votre numéro d’entreprise de l’Agence du revenu du Canada (ARC).",
        "Les avis de cotisation de l’année précédente de l’ARC et de la province de l’Alberta.",
        "Si la tenue de livres a été faite, une copie de sauvegarde du dossier. Sinon, les documents qui montrent les revenus et dépenses, comme les relevés bancaires et de carte de crédit, les reçus de dépenses et la liste des actifs achetés pendant l’année.",
        "Une consultation initiale est le meilleur moyen de confirmer si d’autres documents sont nécessaires.",
      ],
    },
  },
  {
    q: {
      en: "What do I need to provide if I claim meals and entertainment expenses?",
      fr: "Que dois-je fournir si je réclame des dépenses de repas et de divertissement?",
    },
    a: {
      en: [
        "Make sure the meal or entertainment was to build up or maintain your business.",
        "Note who the meal or entertainment was with.",
        "Write down the relationship, such as potential client, banker or existing client.",
        "Make sure the date is legible.",
        "More information is available on the CRA website.",
      ],
      fr: [
        "Assurez-vous que le repas ou le divertissement servait à développer ou à maintenir votre entreprise.",
        "Notez avec qui le repas ou le divertissement a eu lieu.",
        "Notez la nature de la relation, par exemple client potentiel, banquier ou client existant.",
        "Assurez-vous que la date est lisible.",
        "Plus de renseignements sont disponibles sur le site de l’ARC.",
      ],
    },
  },
];
