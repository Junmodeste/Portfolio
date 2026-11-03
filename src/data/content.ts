// Tout le contenu du site est ici : textes FR/EN, projets, liens.
// Pour ajouter un projet ou une expérience, modifier ce fichier uniquement.

export type Lang = 'fr' | 'en';
type Text = Record<Lang, string>;

export const profile = {
  name: 'Koffi Modeste Junior',
  github: 'https://github.com/Junmodeste',
  email: 'modestekoffi005@gmail.com',
  // Laisser vide pour masquer le lien.
  linkedin: '',
};

export interface Project {
  name: string;
  repo: string;
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
    tags: ['Odoo 19', 'Python', 'QWeb', 'FCFA'],
  },
  {
    name: 'odoo-partner-ncc',
    repo: 'https://github.com/Junmodeste/odoo-partner-ncc',
    description: {
      fr: 'Identifiants ivoiriens NCC et RCCM sur les contacts, contrôlés et imprimés sur les factures PDF.',
      en: 'Ivorian NCC and RCCM identifiers on contacts, validated and printed on invoice PDFs.',
    },
    tags: ['Odoo 19', 'Python', 'Côte d’Ivoire'],
  },
  {
    name: 'odoo-module-generator',
    repo: 'https://github.com/Junmodeste/odoo-module-generator',
    description: {
      fr: "CLI `odoo-gen` : un squelette de module Odoo 19 complet et testé en une commande.",
      en: 'The `odoo-gen` CLI: a complete, tested Odoo 19 module skeleton in one command.',
    },
    tags: ['Python', 'Jinja2', 'CLI', 'CI'],
  },
  {
    name: 'odoo-owl-widgets-demo',
    repo: 'https://github.com/Junmodeste/odoo-owl-widgets-demo',
    description: {
      fr: 'Widgets de champ OWL pédagogiques (compteur, badge de statut), commentés en français et testés avec hoot.',
      en: 'Educational OWL field widgets (counter, status badge), commented in French and tested with hoot.',
    },
    tags: ['Odoo 19', 'OWL', 'JavaScript'],
  },
  {
    name: 'odoo-snippets',
    repo: 'https://github.com/Junmodeste/odoo-snippets',
    description: {
      fr: 'Aide-mémoire Odoo 19 commenté en français, sous forme de module installable et testé.',
      en: 'A commented Odoo 19 cheat sheet (in French) shipped as an installable, tested module.',
    },
    tags: ['Odoo 19', 'Python', 'Formation'],
  },
  {
    name: 'odoo-docker-quickstart',
    repo: 'https://github.com/Junmodeste/odoo-docker-quickstart',
    description: {
      fr: 'Odoo 19 et PostgreSQL 16 avec Docker Compose, prêts en une commande.',
      en: 'Odoo 19 and PostgreSQL 16 with Docker Compose, ready in one command.',
    },
    tags: ['Docker', 'Odoo 19', 'PostgreSQL'],
  },
];

// Parcours : laisser vide pour masquer la section.
export interface Experience {
  period: Text;
  title: Text;
  place: string;
  summary: Text;
}
export const experience: Experience[] = [];

export const ui = {
  fr: {
    metaTitle: 'Koffi Modeste Junior — Développeur Odoo',
    metaDescription:
      "Développeur Odoo : modules, outils et agents IA pour les consultants, intégrateurs et PME d'Afrique de l'Ouest francophone.",
    skip: 'Aller au contenu',
    nav: { projects: 'Projets', expertise: 'Expertise', experience: 'Parcours', contact: 'Contact' },
    themeToggle: 'Changer de thème',
    langSwitch: 'English',
    langSwitchLabel: 'Read this site in English',
    role: 'Développeur Odoo · IA & automatisation',
    pitch:
      "Je conçois des modules Odoo, des outils et des agents IA pour les consultants, intégrateurs et PME d'Afrique de l'Ouest francophone.",
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    facts: ['Odoo 17 · 18 · 19', 'Testé dans Docker', 'Open source LGPL-3'],
    projectsTitle: 'Projets',
    projectsIntro: 'Code ouvert, testé, documenté en français et en anglais.',
    featured: 'Projet phare',
    viewCode: 'Voir le code',
    expertiseTitle: 'Ce que je fais',
    expertise: [
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
    contactTitle: 'Travaillons ensemble',
    contactText:
      'Un projet Odoo, une localisation ou une automatisation à mettre en place ? Écrivez-moi, je réponds rapidement.',
    contactEmail: 'Écrire un email',
    footer: 'Site construit avec Astro et Tailwind CSS.',
    source: 'Code source',
  },
  en: {
    metaTitle: 'Koffi Modeste Junior — Odoo Developer',
    metaDescription:
      'Odoo developer: modules, tools and AI agents for Odoo consultants, integrators and small businesses in French-speaking West Africa.',
    skip: 'Skip to content',
    nav: { projects: 'Projects', expertise: 'Expertise', experience: 'Experience', contact: 'Contact' },
    themeToggle: 'Toggle theme',
    langSwitch: 'Français',
    langSwitchLabel: 'Lire ce site en français',
    role: 'Odoo Developer · AI & automation',
    pitch:
      'I build Odoo modules, tools and AI agents for consultants, integrators and small businesses in French-speaking West Africa.',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    facts: ['Odoo 17 · 18 · 19', 'Tested in Docker', 'Open source LGPL-3'],
    projectsTitle: 'Projects',
    projectsIntro: 'Open, tested code, documented in French and English.',
    featured: 'Featured project',
    viewCode: 'View code',
    expertiseTitle: 'What I do',
    expertise: [
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
    experienceTitle: 'Experience',
    contactTitle: "Let's work together",
    contactText: 'Need an Odoo project, a localization or an automation? Write to me, I answer quickly.',
    contactEmail: 'Send an email',
    footer: 'Built with Astro and Tailwind CSS.',
    source: 'Source code',
  },
} as const;
