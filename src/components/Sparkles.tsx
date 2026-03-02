import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export default function Sparkles() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const { scrollY } = useScroll();

    // Parallax effects tied to main window scroll
    const y1 = useTransform(scrollY, [0, 2000], [0, -300]);
    const y2 = useTransform(scrollY, [0, 2000], [0, -600]);

    useEffect(() => {
        // Generate particles spanning 200vh so they stay visible when scrolling via parallax
        const newParticles = Array.from({ length: 60 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 200,
            size: Math.random() * 6 + 2,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 3,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Slow layer */}
            <motion.div style={{ y: y1 }} className="absolute inset-0">
                {particles.slice(0, 30).map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-white blur-[0.5px] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size * 0.8,
                            height: p.size * 0.8,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>

            {/* Fast, larger, glowing layer */}
            <motion.div style={{ y: y2 }} className="absolute inset-0">
                {particles.slice(30).map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-yellow-100 blur-[1px] shadow-[0_0_12px_rgba(255,230,150,0.6)]"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.2, 0.9, 0.2],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration: p.duration * 1.5,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
