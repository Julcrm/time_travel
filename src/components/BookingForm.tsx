import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Users, MapPin, CheckCircle } from 'lucide-react';
import { DESTINATIONS } from '../constants';

export default function BookingForm() {
  const [searchParams] = useSearchParams();
  const initialDestinationId = searchParams.get('destination') || '';

  const [formData, setFormData] = useState({
    destinationId: initialDestinationId,
    date: '',
    travelers: 1,
    name: '',
    email: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (initialDestinationId) {
      setFormData(prev => ({ ...prev, destinationId: initialDestinationId }));
    }
  }, [initialDestinationId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Calculer le prix total
      const selectedDestination = DESTINATIONS.find(d => d.id === formData.destinationId);
      const unitPrice = selectedDestination ? selectedDestination.price : 0;
      const totalPrice = unitPrice * Number(formData.travelers);

      const payload = {
        ...formData,
        unitPrice,
        totalPrice
      };

      const response = await fetch('https://n8n.julien-castellano.fr/webhook/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert("Une erreur s'est produite lors de la réservation. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur de réservation", error);
      setStatus('idle');
      alert("Une erreur réseau s'est produite. Veuillez vérifier votre connexion.");
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-500/10 border border-green-500/30 p-8 rounded-2xl text-center"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-display text-white mb-4">Réservation Confirmée !</h3>
        <p className="text-gray-300 mb-6">
          Votre voyage pour {DESTINATIONS.find(d => d.id === formData.destinationId)?.name} a été programmé.
          Vérifiez votre email pour votre carte d'embarquement.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
        >
          Réserver un Autre Voyage
        </button>
      </motion.div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Destination
          </label>
          <select
            name="destinationId"
            value={formData.destinationId}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="" disabled>Sélectionnez une destination</option>
            {DESTINATIONS.map(dest => (
              <option key={dest.id} value={dest.id} className="bg-gray-900">
                {dest.name} ({dest.year})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-400">Nom Complet</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Jean Dupont"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-400">Adresse Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="jean@exemple.com"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <Users className="w-4 h-4" /> Voyageurs
          </label>
          <input
            type="number"
            name="travelers"
            min="1"
            max="10"
            value={formData.travelers}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Date de Départ
          </label>
          <input
            type="date"
            name="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-lg shadow-lg shadow-amber-500/25 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Traitement...' : 'Confirmer la Réservation'}
      </button>
    </form>
  );
}
