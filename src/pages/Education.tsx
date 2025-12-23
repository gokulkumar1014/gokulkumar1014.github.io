import React from 'react';
import { Calendar, GraduationCap, ChevronDown } from 'lucide-react';
import { education } from '../data';
import PageWithSideImage from '../components/PageWithSideImage';

const Education: React.FC = () => {
    return (
        <PageWithSideImage
            imageSrc="/My%20pic%20Education.png"
            imageAlt="Education background"
            imageSide="right"
            variant="organic1"
        >
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 text-primary">Education</h1>
                <p className="text-secondary text-lg">My academic journey.</p>
            </div>

            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.id} className="bg-gradient-to-br from-white/95 via-blue-50/40 to-indigo-50/40 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-black/80 hover:border-black hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 group/card relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-2xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="flex flex-col md:flex-row gap-5 md:items-start mb-4">
                            {/* Logo Left */}
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 border border-blue-100 p-2 shadow-sm order-1">
                                {/* @ts-ignore */}
                                {edu.logoUrl ? (
                                    /* @ts-ignore */
                                    <img src={edu.logoUrl} alt={edu.institution} className="w-full h-full object-contain" />
                                ) : (
                                    <GraduationCap size={28} className="text-accent" />
                                )}
                            </div>

                            {/* Content Right */}
                            <div className="flex-grow order-2">
                                {/* Header Row: Institution + Location */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                    <div>
                                        <h3 className="text-lg font-bold text-primary">{edu.institution}</h3>
                                        <div className="flex items-center gap-2 text-primary/80 font-medium mt-0.5">
                                            <span className="text-lg">🎓</span>
                                            {edu.degree}
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start md:items-end gap-2 mt-3 md:mt-0 shrink-0">
                                        <p className="text-secondary/70 text-xs font-medium bg-blue-50/50 px-3 py-1 rounded-full border border-blue-100 flex items-center">
                                            📍 {edu.location}
                                        </p>
                                        <div className="flex items-center text-accent/80 text-xs font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 whitespace-nowrap">
                                            <Calendar size={14} className="mr-1.5" />
                                            {edu.year}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-3">
                                    {/* @ts-ignore */}
                                    {edu.story?.map((section, idx) => (
                                        <div key={idx} className="bg-white/40 rounded-xl border border-white/60 overflow-hidden transition-all duration-300 hover:bg-white/60">
                                            <details className="group">
                                                <summary className="flex items-center justify-between p-3.5 cursor-pointer list-none text-primary font-bold text-sm uppercase tracking-wide select-none hover:text-accent transition-colors">
                                                    <span>{section.title}</span>
                                                    <span className="transition-transform group-open:rotate-180">
                                                        <ChevronDown size={18} className="text-secondary/60" />
                                                    </span>
                                                </summary>
                                                <div className="px-4 pb-4 text-secondary/90 text-base leading-relaxed border-t border-white/20 pt-2">
                                                    <ul className="space-y-2 mt-1">
                                                        {/* @ts-ignore */}
                                                        {section.items.map((item, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <span className="mr-2.5 mt-0.5 shrink-0 text-sm text-accent">⚡</span>
                                                                <span dangerouslySetInnerHTML={{ __html: item }} />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </details>
                                        </div>
                                    ))}
                                </div>

                                {/* Creative Coursework Section - Glass Tag Cloud */}
                                {/* @ts-ignore */}
                                {edu.coursework && (
                                    <div className="mt-5 pt-5 border-t border-primary/5">
                                        <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider opacity-90">Key Coursework</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {/* @ts-ignore */}
                                            {edu.coursework.map((course, idx) => <span
                                                key={idx}
                                                className="px-4 py-1.5 rounded-lg text-[13px] font-bold bg-red-100 text-red-950 border border-red-200 border-b-[3px] border-b-red-300 hover:border-b-red-400 hover:text-red-900 hover:-translate-y-0.5 transition-all duration-200 cursor-default shadow-sm"
                                            >
                                                {course}
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageWithSideImage>
    );
};

export default Education;
