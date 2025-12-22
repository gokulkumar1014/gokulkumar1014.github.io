import React from 'react';
import { motion } from 'framer-motion';

const ThoughtBubble: React.FC = () => {
    return (
        <div className="relative inline-block mt-6 lg:mt-0 lg:ml-8 z-10">
            {/* Main Thought Cloud */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="bg-white p-6 rounded-[2rem] shadow-xl border border-blue-100 max-w-xs relative"
            >
                <div className="relative z-10 text-center">
                    <p className="text-gray-700 font-medium italic leading-relaxed">
                        "Work hard.. Be kind and Amazing things will happen to you 🦋"
                    </p>
                </div>

                {/* Cloud Bumps (Decorative) */}
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-white rounded-full border-t border-l border-blue-50" />
                <div className="absolute -bottom-3 -right-2 w-12 h-12 bg-white rounded-full border-b border-r border-blue-50" />
            </motion.div>

            {/* Connecting Dots */}
            <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                }}
                className="absolute -bottom-4 left-1/2 lg:left-0 lg:-bottom-2 lg:-translate-x-full flex flex-col items-center lg:items-end gap-1"
            >
                <div className="w-4 h-4 bg-white rounded-full border border-blue-100 shadow-sm" />
                <div className="w-2.5 h-2.5 bg-white rounded-full border border-blue-100 shadow-sm mr-2 lg:mr-4" />
                <div className="w-1.5 h-1.5 bg-white rounded-full border border-blue-100 shadow-sm mr-4 lg:mr-8" />
            </motion.div>
        </div>
    );
};

export default ThoughtBubble;
