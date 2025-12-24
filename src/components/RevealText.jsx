import React from 'react';
import { motion } from 'framer-motion';

export const RevealText = ({ children, className, delay = 0 }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
};
