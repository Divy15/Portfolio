import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { useThemeContext } from "../../../contexts/ThemeContext";

export const MobileView = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    // Map each label to its corresponding section element ID
    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Tech stack', id: 'tech-stack' },
    ];

    const accentColor = theme === 'light' ? 'text-[#760031]' : 'text-orange-500';
    const accentBg = theme === 'light' ? 'bg-[#760031]' : 'bg-orange-500';

    // Smooth scroll handler
    const handleScroll = (label: string, id: string) => {
        setActiveTab(label);
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Dropdown animation variants
    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: { duration: 0.2, ease: 'easeInOut' }
        },
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.25, ease: 'easeOut' }
        }
    };

    return (
        <div className="sticky top-4 z-50 w-full px-4">
            {/* Top Bar Floating Pill */}
            <div 
                className={`flex items-center justify-between px-5 py-3 w-full rounded-full shadow-lg border backdrop-blur-md transition-colors duration-300 ${
                    theme === 'light' 
                        ? 'bg-[#E3DBBB]/60 border-gray-200/50 text-black shadow-gray-200/50' 
                        : 'bg-gray-900/60 border-gray-800/50 text-white shadow-black/40'
                }`}
            >
                {/* Brand Name */}
                <div 
                    className="text-lg font-bold tracking-tight cursor-pointer"
                    onClick={() => handleScroll('Home', 'home')}
                >
                    Divy <span className={accentColor}>Gandhi</span>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full border ${theme === 'light' ? 'border-[#dac680]' : 'border-gray-700'} ${accentColor} transition-colors`}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                    </button>

                    {/* Hamburger Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 rounded-full border ${theme === 'light' ? 'border-[#dac680]' : 'border-gray-700'} ${accentColor} transition-colors`}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className={`mt-2 p-4 w-full rounded-2xl shadow-xl border backdrop-blur-md ${
                            theme === 'light' 
                                ? 'bg-[#E3DBBB]/95 border-gray-300 text-black' 
                                : 'bg-gray-900/95 border-gray-800 text-white'
                        }`}
                    >
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => handleScroll(item.label, item.id)}
                                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                        activeTab === item.label 
                                            ? `${accentBg} text-white shadow-md` 
                                            : `hover:bg-black/5 dark:hover:bg-white/5`
                                    }`}
                                >
                                    <span>{item.label}</span>
                                    {activeTab === item.label && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                    )}
                                </button>
                            ))}

                            <div className="my-1 border-t border-black/10 dark:border-white/10" />

                            {/* Resume CTA */}
                            <a
                                href="/resume.pdf"
                                download="Divy_Gandhi_Resume.pdf"
                                className={`flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold ${
                                    theme === 'light' ? 'text-[#760031]' : 'text-orange-500'
                                } border ${
                                    theme === 'light' ? 'border-[#760031]/50' : 'border-orange-500/50'
                                } rounded-full hover:${
                                    theme === 'light' ? 'bg-[#760031]' : 'bg-orange-500'
                                } hover:text-white transition-all duration-200`}
                            >
                                <FileText size={14} />
                                <span>Resume</span>
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};