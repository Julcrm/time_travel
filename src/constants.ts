
export interface Destination {
  id: string;
  name: string;
  era: 'Passé' | 'Présent' | 'Futur';
  year: string;
  shortDescription: string;
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
    shortDescription: 'Vivez l\'Exposition Universelle et l\'inauguration de la Tour Eiffel. Plongez au cœur de la Belle Époque.',
    description: 'Plongez dans l\'effervescence de la Belle Époque lors de l\'Exposition Universelle de 1889. Paris est alors la capitale mondiale de l\'innovation et des arts.\n\nVous assisterez en exclusivité à l\'inauguration de la toute nouvelle Tour Eiffel, une prouesse architecturale qui défie l\'imagination de ses contemporains. Promenez-vous sur le Champ de Mars électrique, émerveillez-vous devant la Galerie des Machines et dînez dans les cabarets mythiques de Montmartre.\n\nNotre équipe vous fournira les tenues adéquates (robes à tournure ou costumes trois pièces) ainsi que les documents d\'époque nécessaires pour une immersion totale dans cette période d\'optimisme et de progrès sans précédent.',
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
    shortDescription: 'Les derniers jours des dinosaures. Une aventure sauvage avant l\'extinction massive.',
    description: 'Vivez le frisson absolu en remontant 65 millions d\'années dans le passé, à la toute fin de l\'ère du Crétacé, juste avant l\'impact météoritique qui changera la face du monde.\n\nÉquipé de notre dôme d\'observation furtif Chrono-Shield™, vous pourrez observer de très près les créatures les plus majestueuses et terrifiantes ayant jamais foulé la Terre. Admirez la puissance brute du Tyrannosaurus Rex en chasse, observez les paisibles troupeaux de Tricératops et écoutez les chants complexes des Parasaurolophus dans une jungle luxuriante et immaculée.\n\nCette expédition est encadrée par nos paléontologues experts. Vous sentirez vibrer la Terre sous les pas des géants lors de ce véritable safari préhistorique.',
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
    shortDescription: 'L\'âge d\'or artistique. Rencontrez Michel-Ange et Léonard de Vinci dans les rues de Florence.',
    description: 'Voyagez en plein cœur de la Renaissance italienne, en l\'an de grâce 1504, l\'année où le chef-d\'œuvre de Michel-Ange, le célèbre David, est dévoilé au public sur la Piazza della Signoria.\n\nBattez le pavé des ruelles florentines parfumées aux épices et au cuir poli. Vous aurez l\'opportunité unique d\'apercevoir les légendaires Léonard de Vinci et Michel-Ange débattant d\'art et de philosophie à l\'ombre du Duomo. Imprégnez-vous de l\'effervescence intellectuelle, admirez la création artistique en direct dans les botteghe (ateliers) des maîtres, et goûtez aux banquets fastueux de la famille Médicis.\n\nUne expérience culturelle inégalée, conçue pour les esthètes et les passionnés d\'Histoire de l\'Art.',
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
