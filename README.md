# Rudra Waste Management

Sustainable, compliant, and reliable waste management services. This repository contains the Rudra Waste Management website built with React, TypeScript, and Vite, showcasing our services, regulations guidance, and contact information.

## Overview

The site presents a clear, modern experience with simple navigation and brand-consistent styling. It includes an About menu with two focused pages, a 3D gallery with lightbox, and an accessible, keyboard-friendly header.

## Key Features

- Branded header with dropdown: `About Us → Who We Are`, `Laws & Regulations`
- Pages: Home, Who We Are, Laws & Regulations, Gallery, Contact Us
- 3D Circular Gallery with lightbox image viewer
- Clean, readable legal content with structured sections
- Accessible navigation (keyboard focus, ARIA labels)
- Green brand palette and responsive design

## Tech Stack

- React + TypeScript + Vite
- Styling with CSS (page-scoped styles)
- framer-motion for subtle text/CTA animations
- ogl (WebGL) for the circular 3D gallery

## Getting Started

Prerequisites: Node.js 18+

```sh
npm install
npm run dev
```

Build and preview:

```sh
npm run build
npm run preview
```

## Project Highlights

- About menu split into two dedicated pages to improve clarity:
  - `Who We Are` — our story, mission, and services
  - `Laws & Regulations` — essential definitions, duties, and procedures
- Logo-first hero on `Who We Are` for stronger brand presence
- `Gallery` with an interactive circular layout and click-to-enlarge lightbox

## Content & Customization

- Update copy in `src/pages/*.tsx` (e.g., `WhoWeAre.tsx`, `LawsRegulations.tsx`)
- Update header navigation in `src/components/Header.tsx`
- Adjust styles in page/component CSS files under `src/pages` and `src/components`
- Brand assets live in `src/assets/` (logo: `rudra-removebg-preview.png`)

## Contact

For inquiries and service requests, please use the `Contact Us` page on the site.

— Rudra Waste Management

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
