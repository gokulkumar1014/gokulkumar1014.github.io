import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all",
                isOpen
                    ? "bg-white duration-0 shadow-sm"
                    : (isScrolled
                        ? "bg-white/60 backdrop-blur-md shadow-sm border-b border-white/50 duration-300"
                        : "bg-white/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none shadow-sm md:shadow-none duration-300")
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary group">
                        <span className="font-sans text-secondary group-hover:text-accent transition-colors">{"<"}</span>
                        <span className="font-signature text-3xl group-hover:text-accent transition-colors pt-2">Gokul Kumar Kesavan</span>
                        <span className="font-sans text-secondary group-hover:text-accent transition-colors">{"/>"}</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-lg font-medium transition-colors hover:text-accent",
                                    location.pathname === link.path ? "text-accent" : "text-secondary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform pt-20",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Optional: Add an explicit close button inside the menu header if they want it 'in the pop up', but the main one usually suffices. 
                    I increased the icon size to 28 and added hover bg for better feedback. 
                */}
                <div className="flex flex-col space-y-4 px-6 h-full overflow-y-auto pb-10">
                    <div className="flex justify-end pt-4 pb-2 md:hidden">
                        {/* Redundant close for clarity if needed, but keeping clean for now as main button toggles. */}
                    </div>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "text-xl font-medium py-4 border-b border-gray-100 transition-colors flex justify-between items-center",
                                location.pathname === link.path ? "text-accent" : "text-primary"
                            )}
                        >
                            {link.name}
                            {/* Arrow for visual affordance */}
                            <span className="text-gray-300">→</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
