# TimeTravel Agency - Voyagez au-delà de l'Histoire 🚀🕰️

Bienvenue dans le dépôt du projet **TimeTravel Agency**, une plateforme web immersive et futuriste permettant de réserver des voyages dans le temps. Ce projet a été réalisé comme évaluation en **Projet IA M1 Data/IA** par Romain Collery, Charly Fournet, Rémi Meson et Julien Castellano.

## 📋 Table des Matières

- [Vue d'ensemble](#vue-densemble)
- [Tech Stack](#tech-stack)
- [Architecture du Projet](#architecture-du-projet)
- [Détail des Fonctionnalités](#détail-des-fonctionnalités)
- [Intégrations Externes](#intégrations-externes)
- [Installation et Déploiement](#installation-et-déploiement)
- [Support](#support)

---

## 🌍 Vue d'Ensemble

**TimeTravel Agency** est une application Web moderne construite avec **React 19**, **TypeScript**, et **Vite**. Elle offre une expérience utilisateur immersive pour :

- **Explorer** 3 destinations temporelles uniques (Paris 1889, Crétacé -65M années, Florence 1504)
- **Réserver** des voyages via un formulaire intelligent
- **Interagir** avec un chatbot IA (Chronos) basé sur Google Gemini
- **Découvrir** sa destination idéale via un questionnaire personnalisé
- **Gérer** automatiquement les réservations via webhooks N8N

Le design adopte une charte **Dark Mode / Cyberpunk** avec animations fluides en **Framer Motion** et un style glassmorphism via **Tailwind CSS v4**.

---

## 🛠️ Tech Stack

| Domaine | Technologies |
|---------|-------------|
| **Frontend** | React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4 |
| **Animations** | Framer Motion, Motion (Framer Motion v2 API) |
| **UI & Icons** | Lucide React, React Markdown |
| **Routing** | React Router 7 |
| **Build & Dev** | Vite, TSC (TypeScript Compiler) |
| **IA & Chat** | Google Generative AI (Gemini 2.5 Flash) |
| **Infrastructure** | Hetzner (VPS), Collify (Orchestration), N8N (Automatisation) |

---

## 📁 Architecture du Projet

La structure complète du code et des composants est détaillée dans le fichier de documentation : [documentation/architecture.md](./documentation/architecture.md).

---

## 📊 Détail des Fonctionnalités

Un résumé des rôles principaux est donné ci-dessous, les explications détaillées sont disponibles dans : [documentation/features.md](./documentation/features.md).

- **Exploration des destinations** : catalogue et fiches détaillées
- **Réservation** : formulaire intelligent qui calcule le prix et déclenche un webhook
- **Chatbot IA (Chronos)** : assistant conversationnel intégré
- **Questionnaire** : quiz pour orienter l'utilisateur vers une époque
- **Formulaire de contact** : envoi via webhook N8N

---

### 🎯 1. Gestion des Destinations (constants.ts)

**Interface `Destination`** :
```typescript
interface Destination {
  id: string;          // paris-1889, cretaceous, florence-1504
  name: string;        // Paris 1889, Crétacé, Florence 1504
  era: 'Passé' | 'Présent' | 'Futur';
  year: string;        // 1889, -65 Millions d'années
  shortDescription: string;
  description: string;
  imageUrl: string;    // /asset/destinations/...
  price: number;       // 4500, 6500, etc. (en €)
  features: string[];  // [Tour Eiffel, Exposition, Cabarets]
  details: {
    climate: string;
    currency: string;
    languages: string;
  };
}
```

**Array `DESTINATIONS`** : 3 destinations hardcodées, alimentant toute l'app.

### 🤖 2. Chatbot IA (Chronos)

**Prompt System** (versions itérées, voir `prompt_history/chatbot_bot.md`) :
- Rôle : Guide IA de l'agence TimeTravel
- Ton : Mystérieux, sophistiqué, rassurant
- Directives : Concision (< 100 mots), réponses en français, liens stylisés
- Contexte : Connaît les 3 destinations + tarifs + technologie Chrono-Shield™

**Flux de conversation** :
1. Message utilisateur → `handleSend()`
2. Historique formé en `Content[]` (format Gemini)
3. Appel `sendMessageToGemini(message, history)`
4. Réponse parsée en Markdown → affichée

**Rendu Markdown** :
- `<a>` tags transformés en boutons stylisés (gradient purple→pink)
- Supports des liens hypertextes vers les pages du site

### 📋 3. Questionnaire Personnalisé

**3 questions** (defined in `Questionnaire.tsx`) :
1. "Quel objet glisseriez-vous ?" → Florence, Paris, Crétacé
2. "Ambiance sonore préférée ?" → Florence, Paris, Crétacé
3. "Figure marquante ?" → Florence, Paris, Crétacé

**Algorithme** :
- Chaque réponse enregistre la destination cible
- À la fin, compte les occurrences
- Recommande celle avec le max d'occurrences
- Affiche résultat avec info complète + CTA vers réservation

**UI/UX** :
- Animation entre écrans (fade-in/fade-out)
- Barre de progression visuelle
- Boutons "Commencer le Test" et options réponse interactive

### 📝 4. Formulaire de Réservation

**Flow** :
1. Utilisateur remplit : Destination, Date, Voyageurs, Nom, Email
2. Sur submit :
   - Validation des champs
   - Lookup du prix destination dans `DESTINATIONS`
   - Calcul : `totalPrice = unitPrice × travelers`
   - POST vers webhook N8N
   ```json
   {
     "destinationId": "paris-1889",
     "date": "2026-03-15",
     "travelers": 2,
     "name": "Jean Dupont",
     "email": "jean@example.com",
     "unitPrice": 4500,
     "totalPrice": 9000
   }
   ```
3. Réponse succès → Écran de confirmation
4. Option : Réserver un autre voyage (reset form)

**N8N Processing** :
- Reçoit le webhook
- Envoie email de confirmation au client
- Notifie les administrateurs
- Gère la facturation automatique

---

## 🌐 Intégrations Externes

### 1. **Google Studio** (Fondations IA)
- Génération initiale de la structure du projet
- Prompt engineering pour les assets
- Documentation de l'architecture IA

### 2. **Hetzner (VPS)**
- Hébergement du serveur production
- Domaine : `timetravel.46.224.33.190.sslip.io`

### 3. **Collify**
- Orchestration et déploiement de l'infrastructure
- Gestion des conteneurs (Dockerfile inclus)
- Scaling automatique

### 4. **N8N (Automatisation)**
- Webhooks pour réservations et contacts
- Intégration email
- Notification administrateurs
- Facturation et gestion de commandes
- Endpoint : `https://n8n.julien-castellano.fr/webhook/booking`

### 5. **Google Gemini API**
- Modèle : `gemini-2.5-flash-lite`
- Chatbot conversationnel temps réel
- Coût optimisé (lite/flash)

### 6. **Anti-Gravity (IA Pair-Programming)**
- Amélioration du frontend
- Bug fixes et optimisations
- Intégration des webhooks N8N
- Refinements animations et UX

---

## 🚀 Installation et Déploiement

### **Prérequis**
- Node.js 16+ 
- npm ou yarn
- Clé API Google Gemini

### **Installation Locale**

1. Clone et dépendances :
   ```bash
   git clone <repo>
   cd time_travel-main
   npm install
   ```

2. Configuration des variables d'environnement :
   ```bash
   # Créer .env.local
   VITE_GEMINI_API_KEY=sk-xyz...
   ```

3. Lancer le serveur dev :
   ```bash
   npm run dev
   ```
   Accédez via `http://localhost:3000`

4. Build de production :
   ```bash
   npm run build
   npm run preview
   ```

### **Déploiement Production**

- **Conteneur** : `Dockerfile` inclus pour Hetzner/Collify
- **CI/CD** : Via Collify orchestration
- **DNS** : `.sslip.io` pour self-hosting

---

---

## 📄 Licence

Apache License 2.0 - Voir fichier `LICENSE`

---

## 👥 Équipe

Julien Castellano,
Romain Collery, 
Charly Fournet, 
Rémi Meson 


**Assisté par** : Google Studio, Anti-Gravity (IA Pair-Programming)

---

## Support

Pour questions ou bugs :
- Email : contact@timetravel-agency.fr
- Formulaire de contact : `/contact`
- Chatbot Chronos : Disponible 24/7 sur le site
