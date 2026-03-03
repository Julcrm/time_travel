# TimeTravel Agency - Voyagez au-delà de l'Histoire

Bienvenue dans le dépôt du projet **TimeTravel Agency**, une plateforme web immersive et futuriste permettant de réserver des voyages dans le temps. Ce projet a été réalisé comme évaluation en **Projet IA M1 Data/IA** par Romain Collery, Charly Fournet, Rémi Meson et Julien Castellano.

---

## 🌍 Vue d'Ensemble

**TimeTravel Agency** est une application Web moderne construite avec **React 19**, **TypeScript**, et **Vite**. Elle offre une expérience utilisateur immersive pour :

- **Explorer** 3 destinations temporelles uniques (Paris 1889, Crétacé -65M années, Florence 1504)
- **Réserver** des voyages via un formulaire intelligent
- **Interagir** avec un chatbot IA (Chronos) basé sur Google Gemini
- **Découvrir** sa destination idéale via un questionnaire personnalisé
- **Gérer** automatiquement les réservations via webhooks N8N

---

## 🛠️ Tech Stack

| Domaine | Technologies |
|---------|-------------|
| **Frontend** | React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4 |
| **Animations** | Framer Motion, Motion (Framer Motion v2 API) |
| **UI & Icons** | Lucide React, React Markdown |
| **Build & Dev** | Vite, TSC (TypeScript Compiler) |
| **IA & Chat** | Google Generative AI (Gemini 2.5 Flash Lite) |
| **Infrastructure** | Hetzner (VPS), Coolify (Déploiement), N8N (Automatisation) |

---

## 📁 Architecture du Projet

La structure complète du code et des composants est détaillée dans le fichier de documentation : [documentation/architecture.md](./documentation/architecture.md).

---

## 📊 Détail des Fonctionnalités

Un résumé des rôles principaux est donné ci-dessous, les explications détaillées sont disponibles dans : [documentation/features.md](./documentation/features.md).

- **Exploration des destinations** : catalogue et fiches détaillées
- **Réservation** : envoie un formulaire de confirmation avec prix calculé
- **Chatbot IA (Chronos)** : assistant conversationnel intégré
- **Questionnaire** : quiz pour orienter l'utilisateur vers une destination
- **Formulaire de contact** : envoi via webhook N8N

---

### 🤖 1. Chatbot IA (Chronos)

**Prompt System** (voir `documentation/prompt_history/chatbot_bot.md`)

- Rôle : Guide IA de l'agence TimeTravel
- Ton : Mystérieux, sophistiqué, rassurant
- Directives : Concision (< 100 mots), réponses en français, liens stylisés
- Contexte : Connaît les 3 destinations + tarifs + technologie Chrono-Shield™
- hi

### 📋 2. Questionnaire Personnalisé

- Chaque réponse enregistre la destination cible
- À la fin, compte les occurrences
- Recommande celle avec le max d'occurrences
- Affiche résultat avec info complète + CTA vers réservation


### 📝 3. Formulaire de Réservation

**Flow** :
- Utilisateur remplit : Destination, Date, Voyageurs, Nom, Email

**N8N Processing** :
- Reçoit le webhook
- Envoie email de confirmation au client

---

## 🌐 Outils utilisés

### 1. **Google Studio**
- Génération initiale de la structure du projet

### 2. **Hetzner (VPS)**
- Hébergement du serveur production

### 3. **Coolify**
- Orchestration et déploiement de l'infrastructure
- Gestion des conteneurs

### 4. **N8N (Automatisation)**
- Webhooks pour réservations et contacts
- Intégration email

### 5. **Google Gemini API**
- Modèle : `gemini-2.5-flash-lite`
- Chatbot conversationnel temps réel
- Coût optimisé (lite/flash)

### 6. **Antigravity**
- Amélioration du frontend
- Bug fixes et optimisations
- Intégration des webhooks N8N
- Amélioration animations et UX

---


## 👥 Équipe

Julien Castellano,
Romain Collery, 
Charly Fournet, 
Rémi Meson 


**Assisté par** : Google Studio, Antigravity




