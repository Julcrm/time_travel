# Architecture du Projet

Ce document détaille la structure technique et l'organisation du code.

## Structure des Fichiers

```
src/
├── App.tsx                      # Composant racine avec routing React Router
├── main.tsx                     # Point d'entrée (Vite + React)
├── index.css                    # Styles globaux et variables CSS
├── constants.ts                 # Données centralisées (destinations)
│
├── components/                  # Composants réutilisables
│   ├── Layout.tsx               # En-tête, navigation, footer, chatbot
│   ├── Hero.tsx                 # Section Hero avec vidéo et CTA
│   ├── Chatbot.tsx              # Dialogue IA intégré (bulle flottante)
│   ├── BookingForm.tsx          # Formulaire de réservation
│   ├── DestinationCard.tsx      # Carte destination (galerie)
│   ├── Carousel.tsx             # Carrousel de destinations
│   └── Sparkles.tsx             # Effet parallaxe (paillettes animées)
│
├── pages/                       # Pages complètes (routes)
│   ├── Home.tsx                 # Accueil avec Hero, features, carousel
│   ├── Destinations.tsx         # Grille complète des destinations
│   ├── DestinationDetail.tsx    # Détails d'une destination
│   ├── Booking.tsx              # Page de réservation
│   ├── Questionnaire.tsx        # Quiz pour recommander une destination
│   ├── Contact.tsx              # Formulaire de contact
│   └── About.tsx                # À propos et infos légales
│
├── services/
│   └── gemini.ts                # Service API Gemini (chatbot)
│
└── lib/
    └── utils.ts                 # Utilitaires (clsx + tailwind merge)
```

## Pages et Composants

- `Layout.tsx` : shell global, navigation responsive, intégration du chatbot et gestion du scroll.
- `Hero.tsx` : section d'accueil avec vidéo et CTA.
- `Chatbot.tsx` : agent IA Chronos déployé dans une bulle.
- `BookingForm.tsx` : formulaire avancé avec calcul de prix et webhook.
- `DestinationCard.tsx` & `Carousel.tsx` : composants visuels pour afficher les destinations.
- `Sparkles.tsx` : effet visuel parallèle pour la page d'accueil.

## Services

- `services/gemini.ts` : encapsulation de l'API Google Generative AI (Gemini) avec gestion du prompt système.

