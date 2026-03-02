import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Menu, X } from 'lucide-react';
import Chatbot from './Chatbot';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  if (isMenuOpen) {
    // This is a side effect during render, but for simplicity in this context 
    // we can just use a useEffect or handle it in the Link onClick.
    // Let's use a click handler on Links instead to be cleaner.
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white font-sans overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-display tracking-tighter hover:text-purple-400 transition-colors" onClick={closeMenu}>
            <Clock className="w-8 h-8 text-purple-500" />
            <span>TimeTravel<span className="text-purple-500">Agency</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-purple-400 transition-colors">Accueil</Link>
            <Link to="/destinations" className="text-sm font-medium hover:text-purple-400 transition-colors">Destinations</Link>
          </nav>

          <Link to="/booking" className="hidden md:block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-medium transition-colors">
            Réserver
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              <Link to="/" className="text-2xl font-bold hover:text-purple-400 transition-colors" onClick={closeMenu}>Accueil</Link>
              <Link to="/destinations" className="text-2xl font-bold hover:text-purple-400 transition-colors" onClick={closeMenu}>Destinations</Link>
              <Link to="/booking" className="text-2xl font-bold hover:text-purple-400 transition-colors" onClick={closeMenu}>Réservation</Link>
              <Link to="/about" className="text-2xl font-bold hover:text-purple-400 transition-colors" onClick={closeMenu}>À Propos</Link>
              <Link to="/booking" className="mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-bold transition-colors inline-block mx-auto" onClick={closeMenu}>
                Réserver Maintenant
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      
      <Chatbot />

      <footer className="bg-black border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold font-display mb-4">
              <Clock className="w-6 h-6 text-purple-500" />
              <span>TimeTravel</span>
            </div>
            <p className="text-gray-400 text-sm">
              Explorer les frontières du temps et de l'espace. Votre voyage commence ici.
            </p>
          </div>

          <div className="md:text-center">
            <h3 className="font-bold mb-4">À Propos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-purple-400">Notre Histoire</Link></li>
            </ul>
          </div>

          <div className="md:text-center">
            <h3 className="font-bold mb-4">Projet IA M1 Data/IA</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Romain Collery</li>
              <li>Charly Fournet</li>
              <li>Rémi Meson</li>
              <li>Julien Castellano</li>
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">
              2 place de l'europe<br />
              31000 Toulouse<br />
              contact@timetravel.agency
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © 2050 TimeTravel Agency. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
