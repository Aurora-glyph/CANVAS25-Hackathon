import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from './RevealText';

const merchItems = [
    { id: 1, name: 'Digital Tide Hoodie', price: '₹1499', color: 'bg-cyan-900' },
    { id: 2, name: 'Storm Warden Tee', price: '₹899', color: 'bg-purple-900' },
    { id: 3, name: 'Abyss Oversized', price: '₹1199', color: 'bg-orange-900' },
];

const collection = [
    { id: 'varsity', name: 'The Varsity Jacket', subtitle: 'Embroidery Edition', span: 'col-span-2 row-span-2' },
    { id: 'tote', name: 'Campus Tote', subtitle: 'Heavy Canvas', span: 'col-span-1 row-span-1' },
    { id: 'cap', name: 'B-Dome Cap', subtitle: 'Dad Hat', span: 'col-span-1 row-span-1' },
    { id: 'bottle', name: 'Hydration Vessel', subtitle: 'Matte Black', span: 'col-span-1 row-span-2' },
    { id: 'sticker', name: 'Holo Stickers', subtitle: 'Die-cut Pack', span: 'col-span-1 row-span-1' },
    { id: 'notebook', name: 'Lab Records', subtitle: 'Grid Paper', span: 'col-span-1 row-span-1' },
    { id: 'keychain', name: 'Dept. Tags', subtitle: 'Metal Cast', span: 'col-span-1 row-span-1' },
    { id: 'beanie', name: 'Winter Watch', subtitle: 'Knit Blend', span: 'col-span-1 row-span-1' },
    { id: 'scarf', name: 'Wave Pattern', subtitle: 'Silk Print', span: 'col-span-1 row-span-1' },
    { id: 'socks', name: 'Crew Socks', subtitle: '3-Pack', span: 'col-span-1 row-span-1' },
    { id: 'patch', name: 'Iron-on Sigils', subtitle: 'Set of 4', span: 'col-span-1 row-span-1' },
    { id: 'sleeve', name: 'Laptop Fort', subtitle: 'Neoprene', span: 'col-span-1 row-span-1' },
];

const MerchSection = () => {
    const [selected, setSelected] = useState(merchItems[0]);

    return (
        <section className="py-32 px-4 bg-black relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="text-center mb-24">
                    <RevealText>
                        <h2 className="text-6xl md:text-8xl font-display text-white mb-4 tracking-tighter">THE <span className="text-bits-gold">COLLECTION</span></h2>
                    </RevealText>
                    <RevealText delay={0.2}>
                        <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">Fall / Winter 2025 • Coastal Core</p>
                    </RevealText>
                </div>

                {/* Featured Item (Interactive) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40 border-b border-white/10 pb-20">
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="space-y-2">
                            <p className="text-bits-gold text-xs font-bold tracking-widest uppercase mb-2">Featured Drop</p>
                            <h3 className="text-5xl font-display text-white leading-tight">{selected.name}</h3>
                            <p className="text-2xl text-gray-400 font-light">{selected.price}</p>
                        </div>

                        <div className="flex gap-4">
                            {merchItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setSelected(item)}
                                    className={`w-12 h-12 rounded-full border-2 transition-all ${item.color} ${selected.id === item.id ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                />
                            ))}
                        </div>

                        <p className="text-gray-400 max-w-md leading-relaxed">
                            Constructed from heavy-weight french terry cotton.
                            Featuring puff-print graphics and localized embroidery.
                            Designed to weather the coastal breeeze.
                        </p>

                        <button className="w-full md:w-auto px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-bits-gold transition-colors">
                            Add to Cart
                        </button>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[600px] w-full flex items-center justify-center bg-white/5 rounded-none border border-white/5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className={`w-[400px] h-[500px] ${selected.color} shadow-2xl flex items-center justify-center relative`}
                            >
                                <span className="text-white/20 font-display text-9xl absolute -right-10 -bottom-10 rotate-90">BITS</span>
                                {/* Placeholder for Product Image */}
                                <div className="text-center">
                                    <span className="font-display text-4xl text-white mix-blend-overlay">IMAGE SLOT</span>
                                    <p className="text-white/50 text-xs mt-2 uppercase tracking-widest">Ratio 4:5</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* The Lookbook Grid */}
                <div className="space-y-12">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <h3 className="text-3xl font-display text-white">Accessories & Layers</h3>
                        <span className="text-gray-500 text-xs uppercase tracking-widest">View All</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[300px]">
                        {collection.map((item) => (
                            <div key={item.id} className={`${item.span} group relative bg-neutral-900 border border-white/5 overflow-hidden transition-colors hover:border-white/20`}>
                                {/* Placeholder Area */}
                                <div className="absolute inset-0 flex items-center justify-center bg-white/0 group-hover:bg-white/5 transition-colors duration-500">
                                    <span className="font-display text-white/10 text-xl group-hover:text-white/30 transition-colors uppercase">
                                        [ {item.name} Image ]
                                    </span>
                                </div>

                                {/* Label */}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h4 className="text-white font-display text-xl">{item.name}</h4>
                                    <p className="text-bits-gold text-xs uppercase tracking-widest mt-1">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Mark */}
                <div className="mt-32 text-center opacity-60">
                    <h1 className="text-[12rem] font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent leading-none select-none">BITS</h1>
                </div>
            </div>
        </section>
    );
};

export default MerchSection;
