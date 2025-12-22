import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

const Section: React.FC<SectionProps> = ({ id, className, children, delay = 0 }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={twMerge("py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto", className)}
        >
            {children}
        </motion.section>
    );
};

export default Section;
