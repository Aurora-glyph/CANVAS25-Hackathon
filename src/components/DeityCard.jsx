import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 25,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.15,   // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const DeityCard = ({ name, title, lore, image, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-4"
        >
            <Tilt options={defaultOptions} className="w-full max-w-sm mx-auto">
                <div className={`relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-${color}-500/30 group`}>
                    {/* Image Container with Gradient Overlay */}
                    <div className="relative h-96 w-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 transition-opacity duration-300 group-hover:opacity-80`} />
                        <img
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className={`text-${color}-400 text-sm tracking-widest uppercase mb-1 font-bold`}>{name}</h3>
                        <h2 className="text-3xl text-white mb-2 font-display">{title}</h2>
                        <p className="text-gray-300 text-sm italic font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">
                            "{lore}"
                        </p>
                    </div>

                    {/* Glowing Border Effect */}
                    <div className={`absolute inset-0 border-2 border-${color}-500/20 rounded-xl pointer-events-none group-hover:border-${color}-500/80 transition-colors duration-300`} />
                </div>
            </Tilt>
        </motion.div>
    );
};

export default DeityCard;
