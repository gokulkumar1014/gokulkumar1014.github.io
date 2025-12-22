import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

export type ImageVariant = 'default' | 'organic1' | 'organic2' | 'organic3' | 'organic4';

interface PageWithSideImageProps {
    imageSrc: string;
    imageAlt: string;
    imageSide?: 'left' | 'right';
    variant?: ImageVariant;
    children: React.ReactNode;
}

const PageWithSideImage: React.FC<PageWithSideImageProps> = ({
    imageSrc,
    imageAlt,
    imageSide = 'left',
    variant = 'default',
    children
}) => {

    // Define unique border-radius combinations
    const getRadiusClass = (v: ImageVariant, side: 'left' | 'right') => {
        switch (v) {
            case 'organic1': // Education style
                return "rounded-[40px] rounded-tr-[100px] rounded-bl-[80px]";
            case 'organic2': // Projects style
                return "rounded-[50px] rounded-tl-[30px] rounded-br-[120px] rounded-bl-[40px]";
            case 'organic3': // Experience style - Simpler shape to avoid cutting mirror
                return "rounded-[2rem]";
            case 'organic4': // Extra option
                return "rounded-full aspect-square";
            default:
                return side === 'left'
                    ? "rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[4rem]"
                    : "rounded-[2.5rem] rounded-tl-[5rem] rounded-br-[4rem]";
        }
    };

    const radiusClass = getRadiusClass(variant, imageSide);

    return (
        <div className={clsx(
            "flex flex-col gap-12 lg:gap-20 pt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            imageSide === 'left' ? "lg:flex-row" : "lg:flex-row-reverse"
        )}>
            {/* Image Column */}
            <div className="w-full lg:w-5/12 flex-shrink-0 relative">
                <div className="sticky top-32">
                    {/* Decorative organic blob behind */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-110 -z-10"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className={clsx(
                                "relative overflow-hidden shadow-2xl bg-white/50 border border-white/40 transition-all duration-300 hover:shadow-3xl",
                                radiusClass
                            )}>
                                <div className={clsx(
                                    "w-full relative",
                                    // Enhanced aspect ratio for Experience page (organic3) to fit full height
                                    variant === 'organic3' ? "aspect-[9/16]" : "aspect-[3/4] lg:aspect-[4/5]"
                                )}>
                                    <img
                                        src={imageSrc}
                                        alt={imageAlt}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    {/* Gradient Overlay for seamless blend */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative floating elements based on variant */}
                        <motion.div
                            animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className={clsx(
                                "absolute w-24 h-24 bg-accent/10 backdrop-blur-md rounded-full -z-10",
                                imageSide === 'left' ? "-bottom-8 -right-8" : "-bottom-8 -left-8"
                            )}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-7/12">
                <motion.div
                    initial={{ opacity: 0, x: imageSide === 'left' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default PageWithSideImage;
