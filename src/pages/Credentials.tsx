import React from 'react';
import { ExternalLink, Award, BookOpen, GraduationCap, Building2, CheckCircle2, Medal } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { certifications, publications, awards } from '../data';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Credentials: React.FC = () => {
    return (
        <div className="mb-20">
            <Section className="py-6 md:py-10">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Credentials</h1>
                    <p className="text-gray-500 text-lg">Academic papers, certifications, and professional awards.</p>
                </div>

                {/* Certifications Section */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-red-50 text-red-600 rounded-lg shadow-sm border border-red-100">
                        <Award size={24} />
                    </div>
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Certifications</h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid gap-4"
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={item}
                            className="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-5 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Decorative gradient blob on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Left: Icon Badge */}
                            <div className={`relative z-10 p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center h-16 w-16 ${
                                // @ts-ignore
                                cert.logo ? 'bg-white shadow-sm border border-gray-100' :
                                    cert.issuer.includes('IBM') ? 'bg-blue-50 text-blue-600' :
                                        cert.issuer.includes('DeepLearning') ? 'bg-yellow-50 text-yellow-600' :
                                            cert.issuer.includes('Google') ? 'bg-green-50 text-green-600' :
                                                cert.issuer.includes('Tableau') ? 'bg-purple-50 text-purple-600' :
                                                    'bg-gray-50 text-gray-600'
                                }`}>
                                {/* @ts-ignore */}
                                {cert.logo ? (
                                    /* @ts-ignore */
                                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                                ) : (
                                    cert.issuer.includes('University') ? <GraduationCap size={24} /> :
                                        cert.issuer.includes('Chase') ? <Building2 size={24} /> :
                                            <Award size={24} />
                                )}
                            </div>

                            {/* Middle: Content */}
                            <div className="flex-grow relative z-10">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                    <span className="text-gray-700 font-medium flex items-center gap-1.5">
                                        {cert.issuer}
                                        <CheckCircle2 size={14} className="text-blue-500/80" fill="currentColor" color="white" />
                                    </span>
                                    {cert.date && (
                                        <>
                                            <span className="text-gray-300">•</span>
                                            <span className="text-gray-400 text-sm font-medium">Issued {cert.date}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Right: Button */}
                            <div className="shrink-0 relative z-10 pt-2 sm:pt-0">
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-700 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-200 transition-all duration-300 group/btn"
                                >
                                    <span>Show credential</span>
                                    <ExternalLink size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Publications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 pt-8 border-t border-gray-100"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 bg-red-50 text-red-600 rounded-lg shadow-sm border border-red-100">
                            <BookOpen size={24} />
                        </div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Publications</h2>
                    </div>

                    <div className="grid gap-4">
                        {publications.map((pub) => (
                            <div
                                key={pub.id}
                                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                                            {pub.title}
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-3 text-sm">
                                            <span className="font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                                                {pub.journal}
                                            </span>
                                            <span className="text-gray-400 font-medium flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                                {pub.date}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="shrink-0 pt-1">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group/link"
                                        >
                                            <span>Read Paper</span>
                                            <ExternalLink size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Honors & Awards Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-gray-100"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 bg-red-50 text-red-600 rounded-lg shadow-sm border border-red-100">
                            <Medal size={24} />
                        </div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Honors & Awards</h2>
                    </div>

                    <div className="grid gap-4">
                        {awards.map((award) => (
                            <div
                                key={award.id}
                                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-700 transition-colors mb-2">
                                            {award.title}
                                        </h3>
                                        <p className="text-gray-600 mb-3">{award.description}</p>

                                        <div className="flex flex-wrap items-center gap-3 text-sm">
                                            <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                                                <GraduationCap size={14} className="text-gray-400" />
                                                {award.institution}
                                            </span>
                                            <span className="text-gray-400 font-medium flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                                {award.date}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="shrink-0 pt-1">
                                        <div className="inline-flex flex-col items-end">
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Value</span>
                                            <span className="text-lg font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg border border-green-100">
                                                {award.amount}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>
        </div>
    );
};

export default Credentials;
