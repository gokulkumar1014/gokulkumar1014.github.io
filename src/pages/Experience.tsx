import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { experiences } from '../data';
import PageWithSideImage from '../components/PageWithSideImage';

const ExperienceSection: React.FC<{ title: string; items: typeof experiences }> = ({ title, items }) => {
    if (items.length === 0) return null;

    return (
        <div className="mb-12">
            <h2 className="text-xl font-bold text-primary mb-6 uppercase tracking-wider border-b border-primary/10 pb-2">
                {title}
            </h2>
            <div className="relative border-l-2 border-accent/20 ml-2 md:ml-4 space-y-12">
                {items.map((exp) => (
                    <div key={exp.id} className="relative pl-6 md:pl-10 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-4 border-accent shadow-[0_0_8px_rgba(var(--accent),0.4)] transition-all group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.6)]" />

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                                    {exp.title}
                                </h3>
                                <div className="flex flex-col gap-1 text-sm text-secondary font-medium mt-1">
                                    <span className="flex items-center text-secondary/90">
                                        <Building2 size={14} className="mr-1.5 text-accent" />
                                        {exp.org}
                                    </span>
                                    <span className="flex items-center text-secondary/70">
                                        <MapPin size={14} className="mr-1.5" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center text-xs font-bold text-accent-dark bg-white/80 backdrop-blur-sm border border-accent/20 px-3 py-1.5 rounded-full mt-3 sm:mt-0 w-fit shrink-0 shadow-sm group-hover:border-accent/50 transition-colors">
                                <Calendar size={12} className="mr-1.5" />
                                {exp.dates}
                            </div>
                        </div>



                        <div className="bg-gradient-to-br from-white/95 to-blue-50/40 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-xl hover:scale-[1.005] hover:border-accent/30 transition-all duration-300 group-hover:bg-white/90">
                            <ul className="space-y-4 mb-4">
                                {exp.bullets.map((bullet, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                                        className="flex items-start text-base text-secondary/90 leading-relaxed group/item cursor-default"
                                    >
                                        <div className="relative mr-4 mt-[-2px] shrink-0">
                                            <div className="absolute inset-0 bg-accent/30 rounded-full blur-[8px] opacity-0 group-hover/item:opacity-100 group-hover/item:animate-pulse transition-opacity duration-300 scale-150" />
                                            <motion.div
                                                whileHover={{ scale: 1.15, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                className="relative w-8 h-8 rounded-full bg-gradient-to-br from-white to-blue-50 border border-blue-100/60 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center group-hover/item:border-accent transition-colors duration-300"
                                            >
                                                <motion.div
                                                    whileHover={{ x: 2 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <ChevronRight size={16} className="text-primary/80 group-hover/item:text-accent transition-colors duration-300" />
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                        <span className="group-hover/item:text-primary transition-colors duration-300">{bullet}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Recommendation Link */}
                            {exp.recommendation && (
                                <div className="mt-4 pt-4 border-t border-accent/10">
                                    <a
                                        href={exp.recommendation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark group/link transition-colors"
                                    >
                                        <ExternalLink size={14} className="mr-2 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                        View Recommendation Letter
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    const professional = experiences.filter(e => e.section === 'Professional');
    const onCampus = experiences.filter(e => e.section === 'OnCampus');
    const leadership = experiences.filter(e => e.section === 'Leadership');

    return (
        <PageWithSideImage
            imageSrc="/My%20pic%20prof%20relection.png"
            imageAlt="Professional Experience"
            imageSide="left"
            variant="organic3"
        >
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-3 text-primary">Experience & Leadership</h1>
                <p className="text-secondary text-lg max-w-2xl">
                    My professional journey, campus involvement, and leadership initiatives.
                </p>
            </div>

            <div className="mt-8 space-y-2">
                <ExperienceSection title="Professional Experience" items={professional} />
                <ExperienceSection title="University & On-Campus Experience" items={onCampus} />
                <ExperienceSection title="Leadership & Volunteer Experience" items={leadership} />
            </div>
        </PageWithSideImage>
    );
};

export default Experience;
