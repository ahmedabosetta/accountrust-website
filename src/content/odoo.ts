import type { Faq } from "./accounting";
import type { Localized } from "./types";

// Odoo offer written for this site. These are service descriptions drafted for
// review; they make no certification, partner-tier or project-count claims.

export type OdooService = {
  id: string;
  title: Localized<string>;
  text: Localized<string>;
};

export const odooServices: OdooService[] = [
  {
    id: "implementation",
    title: { en: "Odoo implementation", fr: "Mise en œuvre d’Odoo" },
    text: {
      en: "We map how sales, purchasing, inventory and approvals flow through your business, then configure Odoo to match.",
      fr: "Nous cartographions la façon dont les ventes, les achats, l’inventaire et les approbations circulent dans votre entreprise, puis nous configurons Odoo en conséquence.",
    },
  },
  {
    id: "canadian-accounting",
    title: { en: "Odoo accounting for Canada", fr: "Comptabilité Odoo pour le Canada" },
    text: {
      en: "GST and tax setup, payroll, bank feeds and reports that your accountant and CRA filings can rely on.",
      fr: "Configuration de la TPS et des taxes, paie, flux bancaires et rapports sur lesquels votre comptable et vos déclarations à l’ARC peuvent s’appuyer.",
    },
  },
  {
    id: "migration",
    title: {
      en: "Migration from QuickBooks, Sage or Xero",
      fr: "Migration depuis QuickBooks, Sage ou Xero",
    },
    text: {
      en: "We map your chart of accounts, customers, vendors and opening balances, check totals, and reconcile before go-live.",
      fr: "Nous cartographions votre plan comptable, vos clients, vos fournisseurs et vos soldes d’ouverture, vérifions les totaux et réconcilions avant la mise en service.",
    },
  },
  {
    id: "training",
    title: { en: "Training and support", fr: "Formation et soutien" },
    text: {
      en: "Training for your team and ongoing support so the system stays accurate after go-live.",
      fr: "Formation de votre équipe et soutien continu afin que le système reste exact après la mise en service.",
    },
  },
  {
    id: "integrations",
    title: { en: "Integrations", fr: "Intégrations" },
    text: {
      en: "Connect Odoo to your bank, payment, e-commerce and shipping tools so data is not typed twice.",
      fr: "Reliez Odoo à vos outils bancaires, de paiement, de commerce électronique et d’expédition pour ne pas ressaisir les données.",
    },
  },
  {
    id: "rescue",
    title: { en: "Project rescue", fr: "Sauvetage de projet" },
    text: {
      en: "Implementation stalled or set up incorrectly? We review what is there, fix the foundations and get the project back on track.",
      fr: "Mise en œuvre au point mort ou mal configurée? Nous examinons ce qui est en place, corrigeons les fondations et remettons le projet sur la bonne voie.",
    },
  },
];

export const odooMethod: OdooService[] = [
  {
    id: "discover",
    title: { en: "Discover", fr: "Découvrir" },
    text: {
      en: "We review your current processes, books and reports, and agree on the goals and a realistic first phase.",
      fr: "Nous examinons vos processus, vos livres et vos rapports actuels, et nous convenons des objectifs et d’une première phase réaliste.",
    },
  },
  {
    id: "configure",
    title: { en: "Configure", fr: "Configurer" },
    text: {
      en: "We build Odoo around your workflows, with Canadian tax and reporting set up from the start.",
      fr: "Nous construisons Odoo autour de vos flux de travail, avec la fiscalité et les rapports canadiens configurés dès le départ.",
    },
  },
  {
    id: "migrate",
    title: { en: "Migrate", fr: "Migrer" },
    text: {
      en: "We move your data, reconcile it against your existing books, and test with real transactions.",
      fr: "Nous transférons vos données, les réconcilions avec vos livres existants et testons avec de vraies transactions.",
    },
  },
  {
    id: "support",
    title: { en: "Support", fr: "Soutenir" },
    text: {
      en: "We train your team, go live, and keep the books on track with ongoing support.",
      fr: "Nous formons votre équipe, passons en production et gardons les livres à jour grâce à un soutien continu.",
    },
  },
];

export const odooWhy: OdooService[] = [
  {
    id: "books",
    title: { en: "Set up by people who read the books", fr: "Configuré par des gens qui lisent les livres" },
    text: {
      en: "Reconciliation, ledgers and tax are everyday work for us. The reports your system produces will make sense to your accountant.",
      fr: "La réconciliation, les grands livres et la fiscalité sont notre travail quotidien. Les rapports produits par votre système auront du sens pour votre comptable.",
    },
  },
  {
    id: "one-team",
    title: { en: "One team, one contact", fr: "Une équipe, un seul contact" },
    text: {
      en: "The people configuring your system can also handle bookkeeping, payroll and filings, so nothing falls between two vendors.",
      fr: "Les personnes qui configurent votre système peuvent aussi gérer la tenue de livres, la paie et les déclarations. Rien ne tombe entre deux fournisseurs.",
    },
  },
  {
    id: "canada",
    title: { en: "Canadian requirements from day one", fr: "Exigences canadiennes dès le premier jour" },
    text: {
      en: "GST, payroll and CRA requirements are planned during setup, not patched in after go-live.",
      fr: "La TPS, la paie et les exigences de l’ARC sont planifiées pendant la configuration, et non ajoutées après la mise en service.",
    },
  },
];

export type Industry = {
  id: string;
  title: Localized<string>;
  text: Localized<string>;
};

export const industries: Industry[] = [
  {
    id: "retail",
    title: { en: "Retail and e-commerce", fr: "Commerce de détail et en ligne" },
    text: {
      en: "Sales channels, stock levels, invoicing and reporting in one system, so your numbers match what you sold.",
      fr: "Canaux de vente, niveaux de stock, facturation et rapports dans un seul système, pour que vos chiffres correspondent à vos ventes.",
    },
  },
  {
    id: "distribution",
    title: { en: "Distribution and wholesale", fr: "Distribution et vente en gros" },
    text: {
      en: "Multi-location inventory, purchasing, pricing and receivables set up around how orders actually move.",
      fr: "Inventaire multi-sites, achats, prix et comptes clients configurés selon la façon dont les commandes circulent réellement.",
    },
  },
  {
    id: "manufacturing",
    title: { en: "Manufacturing", fr: "Fabrication" },
    text: {
      en: "Bills of materials, production steps and costing, with the accounting entries that come from them.",
      fr: "Nomenclatures, étapes de production et coûts, avec les écritures comptables qui en découlent.",
    },
  },
  {
    id: "services",
    title: { en: "Professional services", fr: "Services professionnels" },
    text: {
      en: "Time tracking, project billing, expenses and payroll connected, so work performed becomes revenue you can see.",
      fr: "Suivi du temps, facturation de projets, dépenses et paie reliés, pour que le travail effectué devienne un revenu visible.",
    },
  },
  {
    id: "construction",
    title: { en: "Construction and trades", fr: "Construction et métiers" },
    text: {
      en: "Job costing, subcontractor bills and holdbacks tracked per project, with clear reporting for each job.",
      fr: "Coûts par chantier, factures de sous-traitants et retenues suivis par projet, avec des rapports clairs pour chaque chantier.",
    },
  },
];

export const odooFaqs: Faq[] = [
  {
    q: {
      en: "Can you move our data from QuickBooks or Sage?",
      fr: "Pouvez-vous transférer nos données depuis QuickBooks ou Sage?",
    },
    a: {
      en: [
        "Yes. We map your chart of accounts, customers, vendors and opening balances, then reconcile totals before go-live.",
      ],
      fr: [
        "Oui. Nous cartographions votre plan comptable, vos clients, vos fournisseurs et vos soldes d’ouverture, puis nous réconcilions les totaux avant la mise en service.",
      ],
    },
  },
  {
    q: {
      en: "How long does an Odoo project take?",
      fr: "Combien de temps dure un projet Odoo?",
    },
    a: {
      en: [
        "It depends on the scope. We agree on a plan with milestones at the start, so you know the timeline before work begins.",
      ],
      fr: [
        "Cela dépend de la portée du projet. Nous convenons d’un plan avec des jalons au départ, afin que vous connaissiez l’échéancier avant le début des travaux.",
      ],
    },
  },
  {
    q: {
      en: "Can AccounTrust also handle our bookkeeping and tax?",
      fr: "AccounTrust peut-il aussi s’occuper de notre tenue de livres et de nos impôts?",
    },
    a: {
      en: [
        "Yes. Many clients use us for both. Odoo holds your daily records, and our accounting team reviews the books and keeps your filings on time.",
      ],
      fr: [
        "Oui. Plusieurs clients nous confient les deux. Odoo conserve vos registres quotidiens, et notre équipe comptable examine les livres et veille à ce que vos déclarations soient produites à temps.",
      ],
    },
  },
  {
    q: {
      en: "Do you work with clients outside Edmonton?",
      fr: "Travaillez-vous avec des clients à l’extérieur d’Edmonton?",
    },
    a: {
      en: [
        "Our office is in Edmonton. Odoo projects can be delivered remotely, so we can work with clients elsewhere in Canada.",
      ],
      fr: [
        "Notre bureau est à Edmonton. Les projets Odoo peuvent être réalisés à distance, nous pouvons donc travailler avec des clients ailleurs au Canada.",
      ],
    },
  },
];
