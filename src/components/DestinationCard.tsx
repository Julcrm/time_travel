import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Destination } from '../constants';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link
            to={`/destinations/${destination.id}`}
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Explorer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors">
            {destination.name}
          </h3>
          <span className="text-amber-400 font-bold font-mono">
            {destination.price.toLocaleString()} €
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{destination.year}</span>
          </div>

        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {destination.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {destination.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">
              {feature}
            </span>
          ))}
          {destination.features.length > 2 && (
            <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">
              +{destination.features.length - 2} autres
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
