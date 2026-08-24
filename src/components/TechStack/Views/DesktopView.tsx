import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';
import { useThemeContext } from "../../../contexts/ThemeContext";
import { TECH_STACK } from '../Data/TechStack';

// Brand colors for dynamic background ambient glow
const TECH_COLORS: Record<string, string> = {
  'Node.js': '#68A063',
  'Express.js': '#68A063',
  'Go': '#00ADD8',
  'PostgreSQL': '#4169E1',
  'React.js': '#61DAFB',
  'TypeScript': '#3178C6',
  'Tailwind CSS': '#06B6D4',
  'Docker': '#2496ED',
  'Redis': '#DC382D',
  'AWS': '#FF9900',
};

export const DesktopView = () => {
  const { theme } = useThemeContext();
  const isLight = theme === 'light';

  const [activeIndex, setActiveIndex] = useState(0);

  const accentText = isLight ? 'text-[#760031]' : 'text-orange-400';
  const accentBorder = isLight ? 'border-[#760031]/20' : 'border-orange-500/30';
  const accentBg = isLight ? 'bg-[#760031]/10' : 'bg-orange-500/10';

  // Automatic cycle: shifts active highlighted tech every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TECH_STACK.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentTech = TECH_STACK[activeIndex];
  const activeColor = TECH_COLORS[currentTech.name] || (isLight ? '#760031' : '#FB923C');

  return (
    <section className="w-full px-8 lg:px-16 xl:px-24 pt-4 pb-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* Terminal Header */}
        <div className="mb-8 flex flex-col items-start gap-2">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold border ${accentBg} ${accentBorder} ${accentText}`}>
            <Terminal size={14} className="animate-pulse" />
            <span>~$ cat stack.auto-cycle.json</span>
          </div>

          <div className="flex items-center justify-between w-full pt-1">
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight font-mono text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <span>Core Technologies</span>
              <span className={accentText}>()</span>
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono opacity-60 text-stone-700 dark:text-gray-400">
              <Cpu size={14} />
              <span>v2.0.26</span>
            </div>
          </div>

          <p className="text-xs lg:text-sm font-mono text-stone-600 dark:text-gray-400">
            <span className="opacity-50">//</span> Primary stack powering active production builds
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-5">
          {TECH_STACK.map((tech, index) => {
            const Icon = tech.icon;
            const isActive = activeIndex === index;
            const brandColor = TECH_COLORS[tech.name] || (isLight ? '#760031' : '#FB923C');

            return (
              <motion.div
                key={tech.name}
                animate={{
                  scale: isActive ? 1.05 : 1,
                  y: isActive ? -6 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border pointer-events-none overflow-hidden transition-colors duration-500 ${
                  isLight 
                    ? 'bg-[#E3DBBB]/30 text-stone-800' 
                    : 'bg-gray-900/60 text-gray-200'
                }`}
                style={{
                  borderColor: isActive ? brandColor : isLight ? 'rgba(118, 0, 49, 0.15)' : 'rgba(31, 41, 55, 1)',
                }}
              >
                {/* Automatic Ambient Glow Background */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 0.25, scale: 1.4 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                      style={{ backgroundColor: brandColor }}
                    />
                  )}
                </AnimatePresence>

                {/* Tech Icon */}
                <div 
                  className="p-3 rounded-xl transition-all duration-500"
                  style={{ color: isActive ? brandColor : 'currentColor' }}
                >
                  <Icon className="w-10 h-10" />
                </div>

                {/* Tech Name */}
                <span 
                  className="mt-3 text-sm font-mono font-semibold transition-colors duration-500 text-center truncate w-full"
                  style={{ color: isActive ? brandColor : 'currentColor' }}
                >
                  {tech.name}
                </span>

                {/* Bottom Active Beam Indicator */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500"
                  animate={{
                    width: isActive ? '60%' : '0%',
                  }}
                  style={{ backgroundColor: brandColor }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Live Auto Status Banner */}
        <div className="w-full mt-6 h-8 flex items-center justify-center">
          <motion.div 
            key={currentTech.name}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold border flex items-center gap-2 ${accentBg} ${accentBorder} ${accentText}`}
          >
            <span 
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: activeColor }}
            />
            <span>Active Pulse: {currentTech.name}</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};