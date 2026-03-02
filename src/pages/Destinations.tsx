import { motion } from 'motion/react';
import { DESTINATIONS } from '../constants';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-display mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Choisissez Votre Époque
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          De l'aube des temps aux confins de l'univers. Où irez-vous ensuite ?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}
