import { motion } from 'motion/react';
import { ShieldCheck, Users, Zap, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Notre Mission</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Chez TimeTravel Agency, nous croyons que le passé n'est pas seulement un souvenir, mais une destination. 
              Notre but est de connecter l'humanité à son héritage d'une manière jamais vue auparavant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Grid */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-500 font-display mb-2">2026</div>
              <div className="text-sm text-gray-400">Année de Fondation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 font-display mb-2">10k+</div>
              <div className="text-sm text-gray-400">Voyageurs Temporels</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 font-display mb-2">100%</div>
              <div className="text-sm text-gray-400">Taux de Sécurité</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 font-display mb-2">3</div>
              <div className="text-sm text-gray-400">Époques Exclusives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/lab/800/800" 
              alt="Laboratoire Temporel" 
              className="rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/10"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display">La Technologie Chrono-Shield™</h2>
            <p className="text-gray-300 leading-relaxed">
              Le voyage dans le temps comportait autrefois des risques incalculables. Paradoxes, altérations de la réalité, dangers biologiques... 
              Tout cela appartient au passé grâce au Dr. Elena Vasquez et son équipe.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Notre technologie brevetée <strong>Chrono-Shield™</strong> crée une bulle de causalité autour de nos voyageurs. 
              Vous pouvez observer, interagir et explorer, mais vos actions n'auront aucun impact permanent sur la ligne temporelle. 
              C'est le tourisme sans conséquences, la liberté totale.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                <span className="font-medium">Protection Biologique</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="font-medium">Anti-Paradoxe</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="font-medium">Guides Experts</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Award className="w-6 h-6 text-purple-400" />
                <span className="font-medium">Certifié ISO-9001T</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
