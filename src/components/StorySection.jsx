import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-bits-dark bg-noise">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 pl-20">
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-bits-ocean/20 to-transparent">
                            <h3 className="text-5xl font-display text-bits-gold mb-4">The Beginning</h3>
                            <p className="text-xl font-body text-gray-300 text-center">Where the Zuari meets the Arabian Sea. A campus carved from the coast.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-900/20 to-transparent">
                            <h3 className="text-5xl font-display text-bits-cyan mb-4">The Culture</h3>
                            <p className="text-xl font-body text-gray-300 text-center">Nights at Bogmalo, dawn at the Dome. The 0% attendance, 100% life philosophy.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-600/20 to-transparent">
                            <h3 className="text-5xl font-display text-white mb-4">The Innovation</h3>
                            <p className="text-xl font-body text-gray-300 text-center">Code that flows like the tide. Hardware built to weather the storm.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-bits-gold/10 to-transparent">
                            <h3 className="text-5xl font-display text-bits-gold mb-4">The Deities</h3>
                            <p className="text-xl font-body text-gray-300 text-center">Guardians of every discipline. Find yours in the Pantheon.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-teal-900/20 to-transparent">
                            <h3 className="text-5xl font-display text-bits-cyan mb-4">The Vision</h3>
                            <p className="text-xl font-body text-gray-300 text-center">Beyond the horizon lies the infinite. We build what comes next.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-neutral-800/50">
                            <h3 className="text-5xl font-display text-gray-500 mb-4 tracking-widest">[Placeholder]</h3>
                            <p className="text-xl font-body text-gray-600 text-center">Reserved for future expansion.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StorySection;
