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
                            <p className="text-xl font-body text-gray-300 text-center">Born out of the holy spirit of the rubber ducky, our Bdome emerged from where the Zuari River meets the Arabian Sea. A little bit of a rebellion with the maggie revolution laid down the bricks to what our campus has become today.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-900/20 to-transparent">
                            <h3 className="text-5xl font-display text-bits-cyan mb-4">The Culture</h3>
                            <p className="text-xl font-body text-gray-300 text-center">Playing football in central lawns all sem, or ghoting in the library during exams, rushing to labs and workshops in the morning or chilling with friends at INS or FK all evening. Here life is about 0% attendance and taking 100% lite.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-600/20 to-transparent">
                            <h3 className="text-5xl font-display text-white mb-4">The Innovation</h3>
                            <p className="text-xl font-body text-gray-300 text-center">Whether it be a life-like robot head or arm from ERC, the robust Mars rover of Kratos, the wild hacking culture at BITSKrieg, the crazy development culture at DevSoc or the creative flow of art organizations like Kala, Dance Club, Drama Club, and Mime. There is never a shortage of spectacular innovation here. Just take a look at our 3 annual fully student run fests!</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-bits-gold/10 to-transparent">
                            <h3 className="text-5xl font-display text-bits-gold mb-4">The Deities</h3>
                            <p className="text-xl font-body text-gray-300 text-center">The gods you pray to when you gotta compre pull and save that subject from going to hell below av, choose your pantheon.</p>
                        </div>
                    </div>
                    <div className="group relative h-[70vh] w-[60vh] flex-shrink-0 overflow-hidden bg-neutral-900 rounded-2xl border border-white/10">
                        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.15] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-teal-900/20 to-transparent">
                            <h3 className="text-5xl font-display text-bits-cyan mb-4">The Vision</h3>
                            <p className="text-xl font-body text-gray-300 text-center">The idea is to live up to our limitless potential. Be better, stronger, and smarter for the future. We build what comes next. We are the future.</p>
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
