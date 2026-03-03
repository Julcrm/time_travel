# TimeTravel Agency - Voyagez au-delà de l'Histoire 🚀🕰️

Bienvenue dans le dépôt du projet **TimeTravel Agency**, une plateforme immersive et futuriste permettant de réserver des voyages dans le temps. Ce projet a été réalisé dans le cadre de l'évaluation du **Projet Supervisé IA M1/M2**.

## 🎯 Critères d'Évaluation

Ce README est structuré pour démontrer comment le projet répond aux exigences de la grille de notation.

### 1. Technique (8 Pts / 20)
* **Webapp fonctionnelle et déployée** : L'application est développée avec l'écosystème moderne React (Vite), TypeScript et TailwindCSS. Elle est entièrement fonctionnelle, avec un routage complet (Accueil, Destinations, À Propos, Contact, Réservation, Questionnaire).
* **Qualité du code généré et structure** : L'architecture du projet est modulaire. L'utilisation de composants réutilisables (ex: `DestinationCard`, `Sparkles`, `Carousel`), la centralisation des données (fichier `constants.ts`), et le typage strict avec TypeScript assurent un code robuste, clair et maintenable.
* **Intégration réussie des assets Session 1** : Les assets (images, logos, vidéo) ont été soigneusement intégrés et combinés aux ressources externes pour enrichir l'immersion (logo dans le Header/Footer, images dans les fiches de destinations, intégration d'une vidéo YouTube en Hero).
* **Utilisation pertinente des outils IA** : Le développement de cette application a été activement assisté par une IA de pair-programming, permettant d'accélérer la construction de l'interface complexe (animations Framer Motion, effet parallaxe), de restructurer le code et de gérer la connexion API avec des webhooks n8n.

### 2. Fonctionnalités IA (6 Pts / 20)
* **Agent conversationnel opérationnel et pertinent** : Le Chatbot "Chronos" est directement intégré au site (bulle persistante) et consomme l'API `@google/genai` (modèle Flash). Il maintient l'historique de la conversation pour accompagner les utilisateurs.
* **Feature d'automatisation/personnalisation** : 
  * Un questionnaire narratif ("Vous hésitez ?") détermine le profil de l'utilisateur (par ex. Amateur de Nature, Passionné d'Art) grâce à un algorithme de score pour recommander la destination temporelle la plus pertinente.
  * Les formulaires (Contact, Réservation) sont branchés sur des **Webhooks n8n**. Par exemple, le prix total est calculé automatiquement (prix de l'époque × voyageurs) "sous le capot" avant envoi à n8n pour les facturations.
* **Cohérence des réponses IA avec le contexte** : Le System Prompt de Chronos lui impose un ton spécifique ("Mystérieux mais rassurant"). Il transforme pertinemment les liens en "boutons markdown" stylisés en React grâce aux consignes données dans son prompt local.

### 3. UX/UI & Créativité (4 Pts / 20)
* **Design professionnel et cohérent** : Le site adopte une charte "Dark Mode / Cyberpunk chic" avec des dégradés (violet/rose), la technologie "Glassmorphism", et un grand soin apporté à la colorimétrie et aux polices pour plonger le visiteur dans l'imaginaire du voyage temporel.
* **Navigation intuitive** : Header réactif transparent, ancres fluides (`scroll-content` pour éviter de se cacher sous la navbar) et boutons Call-To-Action directs rendent la consultation évidente. Menu optimisé pour terminaux mobiles.
* **Animations subtiles et pertinentes** : Massive utilisation de `framer-motion`. Apparition des éléments au scroll (fade-in, slide-up), transitions progressives d'arrière-plan, et la pièce maîtresse : le composant **Sparkles parallax** (paillettes élégantes réagissant à la vitesse de défilement de l'utilisateur).
* **Expérience utilisateur fluide** : Les retours d'actions (messages "Success" suite aux requêtes formulaires), la remise à zéro de la barre de défilement (scroll-to-top lors d'un changement de route) et l'IA en support limitent toute friction ou confusion.

### 4. Documentation & Open Source (2 Pts / 20)
* **README complet et clair** : Le présent document répond explicitement à cette exigence, listant ce qui a été produit et justifiant les notes attendues.
* **Prompts documentés** : Les différentes versions itératives du prompt système du chatbot sont stockées dans le fichier `prompt_history/chatbot_bot.md`. Cela offre une trace de l'évolution des consignes (v1 à v3) pour raffiner son comportement.
* **Crédits et transparence** : Code généré et assisté via Google Deepmind Antigravity. Toutes les suggestions UX/UI ont été co-réfléchies avec l'IA.
* **Réflexion sur le processus** : L'utilisation de l'IA dépasse la simple génération : elle a servi pour debugger le rendu des ancres React, adapter dynamiquement le "Markdown" injecté dans le Chat, et paramétrer les appels Webhook distants. Travailler la directive contextuelle de l'IA du Chat (Prompt Engineering) s'est révélé indispensable pour obtenir de l'agent l'attitude d'un véritable "commercial temporel" de notre agence.

---

## 🛠️ Instructions Locales / Run Locally

**Prérequis :** Node.js installé sur votre machine.

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Configuration des clés d'API :
   Créez un fichier `.env.local` à la racine du projet et ajoutez votre clé API Gemini :
   ```env
   VITE_GEMINI_API_KEY=votre_cle_api_ici
   ```

3. Lancez l'application en mode développement :
   ```bash
   npm run dev
   ```

*(Démarrez cette commande et rendez-vous sur le localhost indiqué !)*
