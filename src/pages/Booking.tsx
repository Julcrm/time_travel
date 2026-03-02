import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <div className="container mx-auto px-6 py-12 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
            Réservez Votre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Place dans l'Histoire
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Prêt à embarquer pour le voyage d'une vie ? Remplissez le formulaire pour réserver votre place dans la chronologie.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">Service Tout Compris</h3>
                <p className="text-sm text-gray-500">Vol temporel, hébergement d'époque et équipement furtif inclus.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <Link to="/about#chrono-shield" className="font-bold text-white hover:text-purple-400 flex items-center gap-1 transition-colors">
                  Assurance Chrono-Shield™
                </Link>
                <p className="text-sm text-gray-500">Zéro paradoxe garanti. Notre bulle temporelle vous protège de toute altération causale.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">Dépaysé ou Remboursé</h3>
                <p className="text-sm text-gray-500">Si le frisson n'est pas au rendez-vous, nous annulons votre voyage (et vos souvenirs) sans frais.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
        >
          <BookingForm />
        </motion.div>
      </div>
    </div>
  );
}
