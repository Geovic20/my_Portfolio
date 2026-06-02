# ⚡ Portfolio Néo-Brutaliste

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Géofolio** est un portfolio moderne, ludique et haut de gamme, conçu avec une esthétique **Néo-Brutaliste** (style dessin/papier). Il se distingue par des contrastes élevés, des bordures noires affirmées, des ombres géométriques plates et une colorimétrie dynamique.

---

## 🎨 Fonctionnalités Principales

*   **Esthétique Unique** : Design néo-brutaliste de caractère inspiré de la presse papier (bordures épaisses, couleurs pop vibrantes et ombres nettes).
*   **Barre de Chargement Rétro (Intro Loader)** : Un écran de chargement d'introduction temporisé à 2 secondes qui anime une barre de progression segmentée rétro, tout en chargeant les images et assets du site en arrière-plan.
*   **Composants Dynamiques** :
    *   *Orbiting Skills* : Un système de gravitation d'icônes 3D fluide pour présenter vos compétences techniques.
    *   *Logo Marquee* : Un bandeau défilant à l'infini avec ajustements responsives.
*   **Support Multilingue** : Intègre un contexte global de traduction (français/anglais) prêt pour un site bilingue.
*   **Responsive Design** : Entièrement optimisé pour tous les écrans, du smartphone à l'ordinateur de bureau.

---

## 🛠️ Stack Technique

*   **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
*   **Styles** : [Tailwind CSS v4](https://tailwindcss.com/) & [tailwindcss-animate](https://github.com/tailwindcss/tailwindcss-animate)
*   **Langage** : [TypeScript](https://www.typescriptlang.org/)
*   **Gestionnaire de paquets** : [pnpm](https://pnpm.io/)
*   **Bibliothèque d'Icônes** : [Lucide React](https://lucide.dev/)

---

## 🚀 Démarrage Rapide

### Prérequis
Vérifiez que vous avez [Node.js](https://nodejs.org/) (version 18+) et [pnpm](https://pnpm.io/) installés sur votre machine.

### Installation
Installez les dépendances du projet :
```bash
pnpm install
```

### Lancement en mode Développement
Démarrez le serveur local de développement :
```bash
pnpm dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le rendu en direct.

### Compilation pour la Production
Pour compiler et optimiser les assets du projet pour le déploiement :
```bash
pnpm build
```

### Lancement du Serveur de Production
Une fois le build terminé, lancez le serveur optimisé :
```bash
pnpm start
```

---

## 📂 Structure des Fichiers Clés

```text
├── app/
│   ├── globals.css         # Styles globaux & Animations CSS (Marquees, Keyframes)
│   ├── layout.tsx          # Layout racine intégrant l'Intro Loader et la gestion multilingue
│   ├── loading.tsx         # Écran de chargement fallback natif pour les routes
│   └── page.tsx            # Page d'accueil assemblant les sections du portfolio
├── components/
│   ├── intro-loader.tsx    # Gère le minuteur et la transition de fondu du chargement initial
│   ├── ui/
│   │   ├── loader.tsx      # Composant graphique de la barre de progression segmentée
│   │   ├── button.tsx      # Bouton néo-brutaliste interactif
│   │   └── card.tsx        # Composant de carte avec ombres géométriques
│   ├── orbiting-skills.tsx # Stack technique rotatif interactif
│   └── logo-marquee.tsx    # Bandeau infini défilant
└── contexts/
    └── language-context.tsx# Contexte et dictionnaire de traductions (FR/EN)
```
