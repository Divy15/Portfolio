import { useState } from 'react';
import { motion, type Variants } from 'motion/react'; 
import { Sun, Moon, FileText } from 'lucide-react';
import { useThemeContext } from "../../../contexts/ThemeContext";

export const DesktopView = () => {
    const { theme, toggleTheme } = useThemeContext();
    const [activeTab, setActiveTab] = useState('Home');

    // Map each label to its section HTML ID
    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Tech stack', id: 'tech-stack' },
    ];

    // Helper function to handle smooth scrolling
    const handleScroll = (label: string, id: string) => {
        setActiveTab(label);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const wordContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 5, filter: 'blur(4px)' },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { 
                duration: 0.2, 
                ease: 'easeOut'
            }
        },
    };

    return (
        <div className="sticky top-4 z-50 flex justify-center w-full px-4">
            <div 
                className={`flex items-center justify-between px-6 py-3 w-full max-w-7xl rounded-full shadow-lg border backdrop-blur-md transition-colors duration-300 ${
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
                    Divy <span className={`${theme === 'light' ? 'text-[#760031]' : 'text-orange-500'}`}>Gandhi</span>
                </div>

                {/* Animated Menu Links */}
                <nav>
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative">
                                <button
                                    onClick={() => handleScroll(item.label, item.id)}
                                    className={`px-4 py-2 text-sm font-medium transition-colors relative z-10 ${
                                        activeTab === item.label ? `${theme === 'light' ? 'text-[#760031]' : 'text-orange-500'}` : `${theme === 'light' ? 'hover:text-[#760031]' : 'hover:text-orange-500'}`
                                    }`}
                                >
                                    {/* Animated Letter Reveal */}
                                    <motion.span
                                        variants={wordContainerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="inline-flex"
                                    >
                                        {item.label.split('').map((char, index) => (
                                            <motion.span key={`${char}-${index}`} variants={letterVariants}>
                                                {char === ' ' ? '\u00A0' : char}
                                            </motion.span>
                                        ))}
                                    </motion.span>
                                </button>

                                {/* Active Tab Orange Underline */}
                                {activeTab === item.label && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className={`absolute bottom-1 left-3 right-3 h-0.5 ${theme === 'light' ? 'bg-[#760031]' : 'bg-orange-500'} rounded-full`}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Action Items */}
                <div className="flex items-center gap-3">
                    <a
                        href="/resume.pdf"
                        download="Divy_Gandhi_Resume.pdf"
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold ${
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

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full border ${theme === 'light' ? 'border-[#dac680]' : 'border-gray-700'} ${theme === 'light' ? 'hover:border-[#760031]' : 'hover:border-orange-500'} ${theme === 'light' ? 'text-[#760031]' : 'text-orange-500'} transition-colors`}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                    </button>
                </div>
            </div>
        </div>
    );
};