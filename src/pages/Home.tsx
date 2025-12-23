import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Brain, Bot, FileText, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { expertise, projects } from '../data';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-12 gap-8 md:gap-16">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1 relative z-10 w-full"
                >
                    <span className="text-accent-dark font-bold tracking-wide uppercase text-xs bg-white/60 backdrop-blur-md border border-white/50 px-4 py-2 rounded-full inline-block shadow-sm">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1]">
                        Hi, I'm <span className="text-accent">Gokul Kumar Kesavan.</span>
                        <br />
                        <span className="text-secondary/80 text-3xl md:text-4xl lg:text-5xl block mt-2">I build decision-ready analytics systems.</span>
                    </h1>
                    <p className="text-lg text-secondary/90 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium">
                        I’m an MS in Business Analytics graduate focused on designing products that people actually use. My work spans data engineering, machine learning and agentic AI - designing systems that move beyond charts to clear, decision-ready outputs.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start pt-4">
                        <a
                            href="https://drive.google.com/file/d/1-bpAzb634Qqf9jy-wmgcnmMRrx08BspV/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            <FileText size={20} className="mr-2" />
                            Resume
                        </a>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/gokul-kumar-kesavan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full bg-white text-blue-600 border border-blue-100 shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/gokulkumar1014"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-full bg-white text-gray-800 border border-gray-100 shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 max-w-[280px] sm:max-w-sm md:max-w-md w-full order-1 md:order-2 relative"
                >
                    {/* Background Blob */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-125 -z-10"
                    />

                    {/* Floating Image Wrapper */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="relative aspect-[3/4] md:aspect-square rounded-[3rem] rounded-br-[6rem] overflow-hidden shadow-2xl border-4 border-white/60 bg-white/30">
                            <img
                                src="/My%20pic.jpeg"
                                alt="Gokul Kumar Kesavan"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-overlay pointer-events-none" />
                        </div>

                        {/* Decorative Pill */}
                        <motion.div
                            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 max-w-[280px]"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0" />
                            <span className="text-xs font-bold text-primary leading-tight">
                                Open to full-time roles: <br />
                                <span className="font-medium text-secondary">Business Analyst • AI/ML Analytics • Data Analyst</span>
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* "What I Do" Section */}
            <Section className="bg-white/40 backdrop-blur-xl rounded-3xl md:rounded-[3rem] my-10 mx-auto shadow-sm border border-white/50 p-6 md:p-16 relative overflow-hidden">

                {/* Decorative background Elements for Section */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                    <div className="space-y-4 group">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <BarChart3 size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Analytics Engineering</h3>
                        <p className="text-secondary leading-relaxed">I build clean, reliable pipelines and metrics that people can trust - turning raw data into decision-ready outputs.</p>
                    </div>
                    <div className="space-y-4 group">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-500 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Brain size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Machine Learning & Modeling</h3>
                        <p className="text-secondary leading-relaxed">I design ML workflows end-to-end from feature engineering to evaluation - with models that hold up in the real world.</p>
                    </div>
                    <div className="space-y-4 group">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-500 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Bot size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Agentic AI Systems</h3>
                        <p className="text-secondary leading-relaxed">I build deterministic, debuggable AI agents that combine structured SQL analytics with RAG for grounded, explainable answers.</p>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-lg font-bold mb-8 text-primary uppercase tracking-wider opacity-70 text-center">Tech Stack</h3>
                    <div className="relative w-full overflow-hidden pt-8 pb-12">
                        {/* Gradient Masks for edges */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#e0f2fe] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#e0f2fe] to-transparent z-10 pointer-events-none" />

                        {/* Row 1 */}
                        <motion.div
                            className="flex gap-4 md:gap-6 mb-6 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                        >
                            {[...expertise.slice(0, 12), ...expertise.slice(0, 12)].map((tech, idx) => (
                                <motion.div
                                    key={`${tech.name}-${idx}`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border backdrop-blur-sm min-w-max transition-shadow shadow-sm hover:shadow-lg cursor-default"
                                    style={{
                                        backgroundColor: `${tech.color}15`, // ~8% opacity
                                        borderColor: `${tech.color}30`,     // ~20% opacity
                                        color: tech.color
                                    }}
                                >
                                    {tech.logo && (
                                        <img
                                            src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color.replace('#', '')}`}
                                            alt=""
                                            className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 inline-block"
                                            onError={(e) => e.currentTarget.style.display = 'none'}
                                        />
                                    )}
                                    <span className="font-bold text-sm md:text-base">{tech.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Row 2 */}
                        <motion.div
                            className="flex gap-4 md:gap-6 w-max"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                        >
                            {[...expertise.slice(12), ...expertise.slice(12)].map((tech, idx) => (
                                <motion.div
                                    key={`${tech.name}-${idx}`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border backdrop-blur-sm min-w-max transition-shadow shadow-sm hover:shadow-lg cursor-default"
                                    style={{
                                        backgroundColor: `${tech.color}15`,
                                        borderColor: `${tech.color}30`,
                                        color: tech.color
                                    }}
                                >
                                    {tech.logo && (
                                        <img
                                            src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color.replace('#', '')}`}
                                            alt=""
                                            className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 inline-block"
                                            onError={(e) => e.currentTarget.style.display = 'none'}
                                        />
                                    )}
                                    <span className="font-bold text-sm md:text-base">{tech.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Featured Projects Preview */}
            <Section className="py-20 px-4">
                <div className="flex justify-between items-end mb-12 max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-4 text-primary">Featured Work</h2>
                        <p className="text-secondary text-lg max-w-md">A glimpse into my recent development projects.</p>
                    </div>
                    <Link to="/projects" className="hidden md:flex items-center text-accent font-bold hover:underline hover:text-accent-dark text-lg transition-colors">
                        View all projects <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    {projects.slice(0, 2).map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer block"
                        >
                            <div className="aspect-video bg-white rounded-3xl overflow-hidden mb-6 shadow-md border-4 border-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors text-primary mb-2">{project.title}</h3>
                            <p className="text-secondary text-base line-clamp-2">{project.description}</p>
                        </a>
                    ))}
                </div>
                <div className="mt-12 md:hidden flex justify-center">
                    <Link to="/projects" className="flex items-center text-accent font-bold hover:underline text-lg">
                        View all projects <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default Home;
