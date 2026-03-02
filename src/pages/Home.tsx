import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { DESTINATIONS } from '../constants';
import Carousel from '../components/Carousel';
import Sparkles from '../components/Sparkles';
import { ArrowRight, ShieldCheck, Clock, Globe } from 'lucide-react';

export default function Home() {
  const featuredDestinations = DESTINATIONS.slice(0, 3);

  return (
    <div className="relative">
      <Sparkles />
      <Hero />
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-black/60 to-transparent relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Voyage Temporel Sécurisé</h3>
              <p className="text-gray-400 text-sm">
                Notre technologie brevetée Chrono-Shield™ assure votre sécurité à travers toutes les lignes temporelles.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Transport Instantané</h3>
              <p className="text-gray-400 text-sm">
                Pas de longs vols. Entrez dans notre portail et arrivez à votre destination en quelques secondes.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors backdrop-blur-sm">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Global & Au-delà</h3>
              <p className="text-gray-400 text-sm">
                Évadez-vous du présent. Plongez dans des atmosphères uniques et des mondes oubliés où le dépaysement est total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Carousel */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Époques Populaires</h2>
              <p className="text-gray-400">Des expériences sélectionnées pour le voyageur exigeant.</p>
            </div>
            <Link to="/destinations" className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Voir Tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <Carousel destinations={featuredDestinations} />

          <div className="mt-12 text-center md:hidden">
            <Link to="/destinations" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Voir Tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Agency Presentation */}
      <section className="py-20 bg-gradient-to-b from-transparent via-black/80 to-[#1a1a1a] relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10">
                <iframe
                  src="https://www.youtube.com/embed/pSp9idycDeY?autoplay=1&mute=1&loop=1&playlist=pSp9idycDeY&controls=0&modestbranding=1&rel=0"
                  title="TimeTravel Agency Presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Voyagez au-delà de l'Histoire</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Depuis 2026, TimeTravel Agency réinvente le tourisme. Ne lisez plus l'histoire, vivez-la.
                Grâce à nos Chrono-Portails, marchez aux côtés des dinosaures ou flânez dans le Paris de la Belle Époque en toute sécurité.
              </p>
              <Link to="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors">
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
