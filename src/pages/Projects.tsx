import React, { useState, useMemo } from 'react';
import { Github, Search, Star, ExternalLink } from 'lucide-react';
import { projects } from '../data';
import { clsx } from 'clsx';
import PageWithSideImage from '../components/PageWithSideImage';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const levels = ["ALL", "GRAD", "UNDERGRAD"];

    // Filter and Sort Logic
    const filteredAndSortedProjects = useMemo(() => {
        let result = projects;

        // 1. Level Filter
        if (filter !== "ALL") {
            result = result.filter(p => p.level === filter);
        }

        // 2. Search Query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.technologies.some(t => t.toLowerCase().includes(query))
            );
        }

        // 3. Sorting: Featured First
        return result.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });
    }, [filter, searchQuery]);

    return (
        <PageWithSideImage
            imageSrc="/My%20pic%20project.png"
            imageAlt="Working on a project"
            imageSide="right"
            variant="organic2"
        >
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4 text-primary">Projects</h1>
                <p className="text-secondary text-lg">Showcase of my academic and technical work.</p>
            </div>

            {/* Controls: Filter & Search */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-start md:items-center">
                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                        <button
                            key={level}
                            onClick={() => setFilter(level)}
                            className={clsx(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm tracking-wider",
                                filter === level
                                    ? "bg-white text-black border-2 border-black shadow-md scale-105 font-extrabold"
                                    : "bg-white text-slate-600 hover:bg-white/80 hover:text-black shadow-sm border border-transparent"
                            )}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm text-sm"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {filteredAndSortedProjects.length > 0 ? (
                    filteredAndSortedProjects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/60 hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1 block cursor-pointer relative"
                        >
                            {/* Image / Fallback Container */}
                            <div className={clsx(
                                "relative overflow-hidden border-b border-gray-50 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/30",
                                project.image ? "aspect-video" : "h-32"
                            )}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="text-accent/20 group-hover:text-accent/40 transition-colors transform group-hover:scale-110 duration-500">
                                        <Github size={48} />
                                    </div>
                                )}

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-400/90 text-yellow-950 px-2 py-1 rounded-md text-[10px] font-bold shadow-sm backdrop-blur-sm z-10">
                                        <Star size={10} fill="currentColor" />
                                        FEATURED
                                    </div>
                                )}

                                {/* Hover Overlay with Github Icon */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-start justify-end p-3">
                                    {/* Desktop: Visible on hover / Mobile: Always visible (handled via opacity classes usually, but here we keep it subtle) */}
                                    <div className="p-2 bg-white rounded-full text-accent shadow-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all transform translate-y-0 md:translate-y-2 group-hover:translate-y-0">
                                        <Github size={18} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <span className={clsx(
                                        "text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded",
                                        project.level === 'GRAD'
                                            ? 'bg-purple-100 text-purple-600'
                                            : 'bg-blue-100 text-accent'
                                    )}>
                                        {project.level}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-primary mb-2 leading-tight group-hover:text-accent transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                                </h3>

                                <p className="text-secondary/80 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100/50">
                                    {project.technologies.slice(0, 6).map(tech => (
                                        <span key={tech} className="text-[10px] font-bold text-secondary/70 bg-white/50 px-2 py-1 rounded border border-gray-200">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 6 && (
                                        <span className="text-[10px] font-bold text-secondary/70 bg-white/50 px-2 py-1 rounded border border-gray-200">
                                            +{project.technologies.length - 6}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="col-span-2 text-center py-20 bg-white/40 rounded-3xl border border-dashed border-gray-300">
                        <p className="text-secondary/60 italic text-lg">No projects found matching your criteria.</p>
                        <button onClick={() => { setFilter("ALL"); setSearchQuery("") }} className="mt-2 text-accent text-sm font-bold hover:underline">
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </PageWithSideImage>
    );
};

export default Projects;
