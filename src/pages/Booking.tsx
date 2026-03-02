import { motion } from 'motion/react';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <div className="container mx-auto px-6 py-12 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">1</div>
              <div>
                <h3 className="font-bold text-white">Choisissez Votre Destination</h3>
                <p className="text-sm text-gray-500">Choisissez parmi notre liste d'époques sélectionnées.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">2</div>
              <div>
                <h3 className="font-bold text-white">Choisissez une Date</h3>
                <p className="text-sm text-gray-500">Quand voulez-vous quitter le présent ?</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">3</div>
              <div>
                <h3 className="font-bold text-white">Préparez-vous</h3>
                <p className="text-sm text-gray-500">Recevez votre briefing et équipez-vous.</p>
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
