import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../constants';

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = DESTINATIONS.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-bold font-display mb-4">Destination Non Trouvée</h1>
          <p className="text-gray-400 mb-8">Il semble que cette ligne temporelle n'existe pas.</p>
          <Link to="/" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
            Retour à l'Accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#050505] z-10"></div>
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-1 text-gray-300 text-sm font-mono">
                <Calendar className="w-4 h-4" /> {destination.year}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-4 text-white">
              {destination.name}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-display mb-4 text-white">À propos de cette époque</h2>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {destination.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display mb-4 text-white">Points Forts de l'Expérience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display mb-4 text-white">Informations Pratiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h3 className="text-amber-400 text-sm font-bold mb-1">Climat</h3>
                <p className="text-gray-300">{destination.details.climate}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h3 className="text-amber-400 text-sm font-bold mb-1">Monnaie</h3>
                <p className="text-gray-300">{destination.details.currency}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h3 className="text-amber-400 text-sm font-bold mb-1">Langue</h3>
                <p className="text-gray-300">{destination.details.languages}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Prix par voyageur</p>
                <span className="text-3xl font-bold text-white">{destination.price.toLocaleString()} €</span>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                <CheckCircle className="w-4 h-4" /> Disponible
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Départ immédiat depuis le QG</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Durée flexible (Temps relatif)</span>
              </div>
            </div>

            <Link
              to={`/booking?destination=${destination.id}`}
              className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Réserver Maintenant <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-center text-xs text-gray-500 mt-4">
              Inclus : Assurance Chrono-Shield™, Guide IA, et équipement d'époque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
