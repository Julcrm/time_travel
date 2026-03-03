import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video/Animation Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505] z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="/asset/destinations/testimagedepart2.png"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 leading-tight">
            Voyagez à Travers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
              le Temps & l'Espace
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Vivez l'effervescence de Paris 1889, la grandeur sauvage du Crétacé ou l'âge d'or de la Renaissance à Florence. Votre voyage vous attend.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/destinations"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Explorer les Époques <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/booking"
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Réserver Votre Voyage
            </Link>
          </div>
          <div className="mt-8">
            <Link
              to="/questionnaire"
              className="text-amber-400 hover:text-amber-300 font-medium flex items-center justify-center gap-2 group transition-colors"
            >
              Vous hésitez ? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
