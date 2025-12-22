import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white/50 backdrop-blur-sm border-t border-white/50 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 text-sm font-medium flex items-center gap-1.5 hover:text-gray-700 transition-colors cursor-default">
                        Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Gokul
                    </p>
                </div>
                <div className="flex items-center space-x-8">
                    <a
                        href="https://www.linkedin.com/in/gokul-kumar-kesavan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0077b5] transition-colors flex items-center gap-2 group"
                    >
                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline font-medium text-sm">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/gokulkumar1014"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                    >
                        <Github size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline font-medium text-sm">GitHub</span>
                    </a>
                    <a
                        href="mailto:gokulkumar0639@gmail.com"
                        className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group"
                    >
                        <Mail size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline font-medium text-sm">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
