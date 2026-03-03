# Détail des Fonctionnalités

Ce document regroupe les rôles et comportements des principales fonctionnalités de l'application.

## Liste des Fonctionnalités (résumé)

- **Exploration des destinations** : interface catalogue + pages détail.
- **Réservation** : formulaire intelligent avec calcul de prix et webhook.
- **Chatbot IA (Chronos)** : agent conversationnel pour assister les utilisateurs.
- **Questionnaire personnalisé** : quiz pour orienter vers une destination.
- **Formulaire de contact** : envoi via webhook N8N.

## Fonctionnalités en détails

### Réservation
Le composant `BookingForm` gère la saisie des informations (destination, date, voyageurs, nom, email) et calcule automatiquement le prix total avant d'envoyer les données à un webhook N8N.

### Chatbot Chronos
Basé sur `src/services/gemini.ts`, le chatbot maintient l'historique de la conversation et formate les réponses Markdown. Le prompt système décrit le rôle de Chronos en tant que guide temporel mystérieux, et des liens sont rendus sous forme de boutons stylisés.

### Questionnaire
Le quiz (3 questions) collecte les réponses de l'utilisateur, associe chaque option à une destination puis détermine la destination la plus adaptée en comptant les occurrences.

### Formulaire de contact
Simple formulaire retournant un POST vers N8N. Le traitement côté N8N peut envoyer des emails et notifier les administrateurs.

## Génération avec l'IA

La création du projet a été assistée par des outils IA :

- **Google Studio** a généré les bases du code, la structure et certains assets.
- **Anti-Gravity** a servi de pair-programming pour améliorer le front-end, corriger des bugs et itérer sur les prompts.
- Les prompts sont versionnés dans `prompt_history/` (`chatbot_bot.md`, `antigravity.md`).


