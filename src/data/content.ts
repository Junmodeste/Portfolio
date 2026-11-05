// Tout le contenu du site est ici : textes FR/EN, projets, liens.
// Pour ajouter un projet ou une expérience, modifier ce fichier uniquement.

export type Lang = 'fr' | 'en';
type Text = Record<Lang, string>;

export const profile = {
  name: 'Modeste Junior Koffi',
  github: 'https://github.com/Junmodeste',
  email: 'modestekoffi005@gmail.com',
  // Laisser vide pour masquer le lien.
  linkedin: 'https://www.linkedin.com/in/modeste-koffi-odoo/',
};

export interface Project {
  name: string;
  repo: string;
  // Site en ligne : remplace le lien vers le code (repo privé par exemple).
  site?: string;
  description: Text;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Griot-Comptoir',
    repo: 'https://github.com/Junmodeste/Griot-Comptoir',
    featured: true,
    description: {
      fr: "Agent IA qui transforme les cahiers manuscrits, photos de rayons et notes vocales des petits commerçants d'Afrique de l'Ouest en stocks, ventes et dettes vérifiés, synchronisés avec Odoo.",
      en: "AI agent that turns West African small traders' handwritten ledgers, shelf photos and voice notes into verified stock, sales and debt records synced to Odoo.",
    },
    tags: ['IA', 'OCR', 'Odoo', 'Voice'],
  },
  {
    name: 'odoo-amount-to-text-fr',
    repo: 'https://github.com/Junmodeste/odoo-amount-to-text-fr',
    description: {
      fr: 'Montant total en toutes lettres, en français, sur les factures et devis. Gère le FCFA (XOF).',
      en: 'Total amount in French words on invoices and quotations, with FCFA (XOF) support.',
    },
    tags: ['Odoo 17 · 18 · 19', 'Python', 'QWeb', 'FCFA'],
  },
  {
    name: 'odoo-partner-ncc',
    repo: 'https://github.com/Junmodeste/odoo-partner-ncc',
    description: {
      fr: 'Identifiants ivoiriens NCC et RCCM sur les contacts, contrôlés et imprimés sur les factures PDF.',
      en: 'Ivorian NCC and RCCM identifiers on contacts, validated and printed on invoice PDFs.',
    },
    tags: ['Odoo 17 · 18 · 19', 'Python', 'Côte d’Ivoire'],
  },
  {
    name: 'odoo-module-generator',
    repo: 'https://github.com/Junmodeste/odoo-module-generator',
    description: {
      fr: "CLI `odoo-gen` : un squelette de module Odoo 17, 18 ou 19 complet et testé en une commande.",
      en: 'The `odoo-gen` CLI: a complete, tested Odoo 17, 18 or 19 module skeleton in one command.',
    },
    tags: ['Odoo 17 · 18 · 19', 'Python', 'Jinja2', 'CLI', 'CI'],
  },
  {
    name: 'odoo-owl-widgets-demo',
    repo: 'https://github.com/Junmodeste/odoo-owl-widgets-demo',
    description: {
      fr: 'Widgets de champ OWL pédagogiques (compteur, badge de statut), commentés en français et testés (hoot, QUnit en 17).',
      en: 'Educational OWL field widgets (counter, status badge), commented in French and tested (hoot, QUnit on 17).',
    },
    tags: ['Odoo 17 · 18 · 19', 'OWL', 'JavaScript'],
  },
  {
    name: 'odoo-snippets',
    repo: 'https://github.com/Junmodeste/odoo-snippets',
    description: {
      fr: 'Aide-mémoire Odoo 17, 18 et 19 commenté en français, sous forme de module installable et testé.',
      en: 'A commented Odoo 17, 18 and 19 cheat sheet (in French) shipped as an installable, tested module.',
    },
    tags: ['Odoo 17 · 18 · 19', 'Python', 'Formation'],
  },
  {
    name: 'Divine Providence de Daloa',
    repo: '',
    site: 'https://www.divine-providence-daloa.com/',
    description: {
      fr: 'Site web du Groupe Scolaire Privé Divine Providence de Daloa : cycles de la garderie au collège, actualités, galerie photo et préinscription en ligne.',
      en: 'Website of the Divine Providence private school group in Daloa: classes from daycare to middle school, news, photo gallery and online pre-registration.',
    },
    tags: ['Site web', 'Python', 'JavaScript', 'Éducation'],
  },
  {
    name: 'odoo-docker-quickstart',
    repo: 'https://github.com/Junmodeste/odoo-docker-quickstart',
    description: {
      fr: 'Odoo 17, 18 ou 19 et PostgreSQL 16 avec Docker Compose, prêts en une commande.',
      en: 'Odoo 17, 18 or 19 and PostgreSQL 16 with Docker Compose, ready in one command.',
    },
    tags: ['Docker', 'Odoo 17 · 18 · 19', 'PostgreSQL'],
  },
];

// Parcours : raconté comme une progression, pas comme une liste de postes.
export interface Career {
  period: Text;
  org: string;
  city: string;
  // Étapes successives dans la même structure, de la plus ancienne à l'actuelle.
  steps: Text[];
  story: Text;
  highlights: Text[];
}
export const career: Career = {
  period: { fr: 'Depuis oct. 2024', en: 'Since Oct 2024' },
  org: 'Thalys Conseil & Associés',
  city: 'Abidjan',
  steps: [
    { fr: 'Stagiaire', en: 'Intern' },
    { fr: 'Ingénieur junior', en: 'Junior engineer' },
    { fr: 'Ingénieur logiciel', en: 'Software engineer' },
  ],
  story: {
    fr: 'Entré en stage, aujourd’hui ingénieur logiciel : je mets Odoo en production chez les clients du cabinet, de l’installation au module sur mesure.',
    en: 'Started as an intern, now a software engineer: I put Odoo into production for the firm’s clients, from installation to custom modules.',
  },
  highlights: [
    { fr: 'Bases Odoo déployées et paramétrées pour des entreprises clientes', en: 'Odoo databases rolled out and configured for client companies' },
    { fr: 'Modules et contrôleurs sur mesure selon les processus métier', en: 'Custom modules and controllers built around business processes' },
    { fr: 'Stock multi-entrepôts, actions automatisées, intégration de la paie', en: 'Multi-warehouse inventory, automated actions, payroll integration' },
    { fr: 'Serveurs Odoo et PostgreSQL sous Docker, intégrations API', en: 'Odoo and PostgreSQL servers on Docker, API integrations' },
  ],
};

// Premiers pas, résumés en une ligne sous le parcours principal.
export const earlySteps: Text = {
  fr: 'Avant : stages chez Ivoirephoenix (back-end PHP, 2024) et à l’Institut Ivoirien de Technologie (premiers modules Odoo en Python, 2022).',
  en: 'Before that: internships at Ivoirephoenix (PHP back end, 2024) and Institut Ivoirien de Technologie (first Odoo modules in Python, 2022).',
};

export interface Degree {
  year: string;
  title: Text;
  school: string;
  note: Text;
}
export const education: Degree[] = [
  {
    year: '2026',
    title: { fr: 'Master en informatique', en: "Master's in Computer Science" },
    school: 'Institut Ivoirien de Technologie',
    note: { fr: 'Mention Très Bien · vice-président des Alumni', en: 'Highest honours · Alumni Association vice-president' },
  },
  {
    year: '2024',
    title: { fr: 'Licence en informatique', en: "Bachelor's in Computer Science" },
    school: 'Institut Ivoirien de Technologie',
    note: { fr: 'Vice-président du Club informatique', en: 'Computer Club vice-president' },
  },
  {
    year: '2023',
    title: { fr: 'Échange universitaire (5 mois)', en: 'University exchange (5 months)' },
    school: 'Sun Moon University, Corée du Sud',
    note: { fr: 'React et React Native', en: 'React and React Native' },
  },
];

export const ui = {
  fr: {
    metaTitle: 'Modeste Junior Koffi — Ingénieur logiciel, développeur intégrateur Odoo',
    metaDescription:
      "Développeur Odoo : modules, outils et agents IA pour les consultants, intégrateurs et PME d'Afrique de l'Ouest francophone.",
    skip: 'Aller au contenu',
    nav: { projects: 'Projets', expertise: 'Expertise', experience: 'Parcours', contact: 'Contact' },
    themeToggle: 'Changer de thème',
    langSwitch: 'English',
    langSwitchLabel: 'Read this site in English',
    role: 'Ingénieur logiciel · Développeur intégrateur Odoo',
    pitch:
      "Je conçois des modules Odoo, des outils et des agents IA pour les consultants, intégrateurs et PME d'Afrique de l'Ouest francophone.",
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    facts: ['Odoo 17 · 18 · 19', 'Testé dans Docker', 'Open source LGPL-3'],
    projectsTitle: 'Projets',
    projectsIntro: 'Code ouvert, testé, documenté en français et en anglais.',
    featured: 'Projet phare',
    viewCode: 'Voir le code',
    viewSite: 'Voir le site',
    expertiseTitle: 'Ce que je fais',
    expertise: [
      {
        icon: 'rocket',
        title: 'Déploiement Odoo pour entreprises et PME',
        text: "Installation et configuration de votre base Odoo selon vos processus, puis contrat d'assistance et de formation pour vos équipes, avec paramétrage sur mesure si besoin après la mise en service.",
      },
      {
        icon: 'blocks',
        title: 'Modules Odoo sur mesure',
        text: 'Modèles, vues, rapports QWeb et widgets OWL, suivant les conventions OCA, avec tests automatisés.',
      },
      {
        icon: 'map',
        title: "Localisation Afrique de l'Ouest",
        text: 'NCC et RCCM ivoiriens, FCFA, montants en lettres en français : ce qui manque à Odoo pour nos entreprises.',
      },
      {
        icon: 'sparkles',
        title: 'IA & automatisation',
        text: "Agents IA, OCR et reconnaissance vocale branchés sur Odoo pour supprimer la saisie manuelle.",
      },
      {
        icon: 'wrench',
        title: 'Outillage & qualité',
        text: 'Docker, intégration continue GitHub Actions et générateur de modules pour livrer vite et sans régression.',
      },
    ],
    experienceTitle: 'Parcours',
    educationTitle: 'Formation',
    current: 'Aujourd’hui',
    contactTitle: 'Travaillons ensemble',
    contactText:
      'Un projet Odoo, une localisation ou une automatisation à mettre en place ? Écrivez-moi, je réponds rapidement.',
    contactEmail: 'Écrire un email',
    footer: 'Site construit avec Astro et Tailwind CSS.',
    source: 'Code source',
  },
  en: {
    metaTitle: 'Modeste Junior Koffi — Software Engineer, Odoo Developer & Integrator',
    metaDescription:
      'Odoo developer: modules, tools and AI agents for Odoo consultants, integrators and small businesses in French-speaking West Africa.',
    skip: 'Skip to content',
    nav: { projects: 'Projects', expertise: 'Expertise', experience: 'Background', contact: 'Contact' },
    themeToggle: 'Toggle theme',
    langSwitch: 'Français',
    langSwitchLabel: 'Lire ce site en français',
    role: 'Software Engineer · Odoo Developer & Integrator',
    pitch:
      'I build Odoo modules, tools and AI agents for consultants, integrators and small businesses in French-speaking West Africa.',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    facts: ['Odoo 17 · 18 · 19', 'Tested in Docker', 'Open source LGPL-3'],
    projectsTitle: 'Projects',
    projectsIntro: 'Open, tested code, documented in French and English.',
    featured: 'Featured project',
    viewCode: 'View code',
    viewSite: 'Visit site',
    expertiseTitle: 'What I do',
    expertise: [
      {
        icon: 'rocket',
        title: 'Odoo rollout for companies and SMEs',
        text: 'Installation and configuration of your Odoo database around your processes, followed by a support and training contract for your teams, with custom configuration when needed after go-live.',
      },
      {
        icon: 'blocks',
        title: 'Custom Odoo modules',
        text: 'Models, views, QWeb reports and OWL widgets, following OCA conventions, with automated tests.',
      },
      {
        icon: 'map',
        title: 'West African localization',
        text: 'Ivorian NCC and RCCM, FCFA, amounts in French words: what Odoo lacks for businesses in the region.',
      },
      {
        icon: 'sparkles',
        title: 'AI & automation',
        text: 'AI agents, OCR and speech recognition connected to Odoo to remove manual data entry.',
      },
      {
        icon: 'wrench',
        title: 'Tooling & quality',
        text: 'Docker, GitHub Actions CI and a module generator to ship fast without regressions.',
      },
    ],
    experienceTitle: 'Background',
    educationTitle: 'Education',
    current: 'Today',
    contactTitle: "Let's work together",
    contactText: 'Need an Odoo project, a localization or an automation? Write to me, I answer quickly.',
    contactEmail: 'Send an email',
    footer: 'Built with Astro and Tailwind CSS.',
    source: 'Source code',
  },
} as const;
