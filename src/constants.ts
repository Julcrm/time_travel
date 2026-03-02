
export interface Destination {
  id: string;
  name: string;
  era: 'Passé' | 'Présent' | 'Futur';
  year: string;
  description: string;
  imageUrl: string;
  price: number;
  features: string[];
  details: {
    climate: string;
    currency: string;
    languages: string;
  };
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'paris-1889',
    name: 'Paris 1889',
    era: 'Passé',
    year: '1889',
    description: 'Vivez l\'Exposition Universelle et l\'inauguration de la Tour Eiffel. Plongez au cœur de la Belle Époque.',
    imageUrl: '/asset/destinations/paris.png',
    price: 4500,
    features: ['Tour Eiffel', 'Exposition Universelle', 'Cabarets'],
    details: {
      climate: 'Tempéré, automne doux',
      currency: 'Franc Français (Or/Argent)',
      languages: 'Français (Vieux François)'
    }
  },
  {
    id: 'cretaceous',
    name: 'Crétacé',
    era: 'Passé',
    year: '-65 Millions d\'années',
    description: 'Les derniers jours des dinosaures. Une aventure sauvage avant l\'extinction massive.',
    imageUrl: '/asset/destinations/cretace.png',
    price: 6500,
    features: ['T-Rex', 'Tricératops', 'Nature Sauvage'],
    details: {
      climate: 'Tropical et Humide',
      currency: 'Troc / Aucune',
      languages: 'Aucune (Rugissements)'
    }
  },
  {
    id: 'florence-1504',
    name: 'Florence Renaissance',
    era: 'Passé',
    year: '1504',
    description: 'L\'âge d\'or artistique. Rencontrez Michel-Ange et Léonard de Vinci dans les rues de Florence.',
    imageUrl: '/asset/destinations/florence.png',
    price: 4000,
    features: ['Art', 'Architecture', 'Rencontre avec les Maîtres'],
    details: {
      climate: 'Méditerranéen',
      currency: 'Florin Florentin',
      languages: 'Italien (Toscan), Latin'
    }
  }
];
