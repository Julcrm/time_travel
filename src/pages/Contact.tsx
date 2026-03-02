import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, MapPin, Clock as ClockIcon } from 'lucide-react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://n8n.julien-castellano.fr/webhook/utilisateur', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            if (response.ok) {
                setStatus('sent');
                setEmail('');
                setMessage('');
            } else {
                setStatus('idle');
                alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur d'envoi", error);
            setStatus('idle');
            alert("Une erreur réseau s'est produite. Veuillez vérifier votre connexion.");
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Contactez-nous</h1>
                        <p className="text-xl text-gray-400 mb-12">
                            Une question sur une ligne temporelle ? Un besoin spécifique pour votre prochain saut dans le temps ? Notre équipe de Chrono-Conseillers est à votre écoute.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                    <ClockIcon className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Disponibilité</h3>
                                    <p className="text-gray-400">24/7 (Temps relatif supporté)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Votre Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="nom@exemple.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition-colors text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Votre Message
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                                    <textarea
                                        id="message"
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition-colors text-white resize-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg shadow-purple-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:transform-none"
                            >
                                {status === 'idle' && (
                                    <>
                                        Envoyer le message <Send className="w-5 h-5" />
                                    </>
                                )}
                                {status === 'sending' && "Envoi en cours..."}
                                {status === 'sent' && "Message envoyé ! ✅"}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
