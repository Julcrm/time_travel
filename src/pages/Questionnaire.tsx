import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ClipboardList, Sparkles, MapPin } from 'lucide-react';
import { DESTINATIONS } from '../constants';

interface Question {
    id: number;
    text: string;
    options: {
        id: string;
        text: string;
        target: string; // Destination ID it points to
    }[];
}

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "Quel est l'objet que vous glisseriez absolument dans votre valise ?",
        options: [
            { id: 'A', text: "Un carnet de croquis et un fusain pour capturer la beauté du monde.", target: 'florence-1504' },
            { id: 'B', text: "Un appareil photo dernier cri pour immortaliser des prouesses d'ingénierie.", target: 'paris-1889' },
            { id: 'C', text: "Une trousse de survie robuste et une paire de jumelles puissantes.", target: 'cretaceous' },
        ]
    },
    {
        id: 2,
        text: "Quel genre d'ambiance sonore préférez-vous pour vos vacances ?",
        options: [
            { id: 'A', text: "Le brouhaha créatif des ateliers d'artistes et les débats passionnés.", target: 'florence-1504' },
            { id: 'B', text: "L'effervescence d'une ville moderne, le bruit du métal et les orchestres de rue.", target: 'paris-1889' },
            { id: 'C', text: "Le silence sauvage interrompu par des cris d'animaux inconnus.", target: 'cretaceous' },
        ]
    },
    {
        id: 3,
        text: "Si vous deviez rencontrer une figure marquante, qui choisiriez-vous ?",
        options: [
            { id: 'A', text: "Un génie visionnaire qui peint aussi bien qu'il invente des machines.", target: 'florence-1504' },
            { id: 'B', text: "Un ingénieur audacieux capable de construire une tour de fer géante.", target: 'paris-1889' },
            { id: 'C', text: "Aucun humain, je veux voir les prédateurs les plus impressionnants de l'histoire.", target: 'cretaceous' },
        ]
    }
];

export default function Questionnaire() {
    const [currentStep, setCurrentStep] = useState(0); // 0: Start, 1-3: Questions, 4: Result
    const [answers, setAnswers] = useState<string[]>([]);

    const handleStart = () => setCurrentStep(1);
    const handleAnswer = (target: string) => {
        const newAnswers = [...answers, target];
        setAnswers(newAnswers);
        if (currentStep < QUESTIONS.length) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(QUESTIONS.length + 1);
        }
    };

    const getResult = () => {
        // Count occurrences of each target
        const counts: { [key: string]: number } = {};
        answers.forEach(target => {
            counts[target] = (counts[target] || 0) + 1;
        });

        // Find the one with the max count
        let bestTarget = answers[0];
        let maxCount = 0;
        for (const target in counts) {
            if (counts[target] > maxCount) {
                maxCount = counts[target];
                bestTarget = target;
            }
        }

        return DESTINATIONS.find(d => d.id === bestTarget);
    };

    const resultDestination = currentStep > QUESTIONS.length ? getResult() : null;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050505]">
            <div className="container mx-auto max-w-3xl">
                <AnimatePresence mode="wait">
                    {currentStep === 0 && (
                        <motion.div
                            key="start"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-8">
                                <div className="p-4 bg-purple-500/10 rounded-full border border-purple-500/20">
                                    <ClipboardList className="w-16 h-16 text-purple-500" />
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Trouvez Votre Époque Idéale</h1>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                Répondez à 3 questions rapides pour découvrir quelle destination temporelle est faite pour vous.
                            </p>
                            <button
                                onClick={handleStart}
                                className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full text-lg shadow-xl shadow-purple-500/20 transition-all transform hover:scale-105"
                            >
                                Commencer le Test
                            </button>
                        </motion.div>
                    )}

                    {currentStep >= 1 && currentStep <= QUESTIONS.length && (
                        <motion.div
                            key={`question-${currentStep}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: `${(currentStep - 1) * 33}%` }}
                                        animate={{ width: `${(currentStep) * 33.33}%` }}
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                    />
                                </div>
                                <span className="text-sm font-mono text-gray-500 whitespace-nowrap">
                                    0{currentStep} / 0{QUESTIONS.length}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
                                {QUESTIONS[currentStep - 1].text}
                            </h2>

                            <div className="grid grid-cols-1 gap-4">
                                {QUESTIONS[currentStep - 1].options.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAnswer(option.target)}
                                        className="group text-left p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition-all flex items-center justify-between"
                                    >
                                        <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                            {option.text}
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {currentStep > QUESTIONS.length && resultDestination && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-8">
                                <div className="p-4 bg-green-500/10 rounded-full border border-green-500/20">
                                    <Sparkles className="w-16 h-16 text-green-500" />
                                </div>
                            </div>
                            <p className="text-purple-400 font-bold tracking-widest uppercase mb-4">Votre destination idéale est :</p>
                            <h2 className="text-5xl md:text-7xl font-bold font-display mb-12">
                                {resultDestination.name}
                            </h2>

                            <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-purple-500/10 border border-white/10 group">
                                <img
                                    src={resultDestination.imageUrl}
                                    alt={resultDestination.name}
                                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                                        <MapPin className="w-4 h-4 text-purple-400" /> {resultDestination.year}
                                    </div>
                                    <p className="text-lg text-gray-200 line-clamp-2 max-w-xl">
                                        {resultDestination.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to={`/destinations/${resultDestination.id}`}
                                    className="px-12 py-5 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-all transform hover:scale-105"
                                >
                                    Découvrir cette époque
                                </Link>
                                <button
                                    onClick={() => {
                                        setCurrentStep(0);
                                        setAnswers([]);
                                    }}
                                    className="px-12 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/5 transition-all"
                                >
                                    Recommencer le test
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
