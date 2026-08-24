import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, Terminal } from 'lucide-react';
import { useThemeContext } from "../../../contexts/ThemeContext";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: 'current' | 'past';
  statusText: string;
  highlights: string[];
  theme: {
    nodeBg: string;
    glowColor: string;
    accentText: string;
    borderActive: string;
  };
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'next-role',
    role: 'Open to New Opportunities',
    company: 'Next Adventure',
    location: 'Remote / On-site',
    period: 'Aug 2026 – Present',
    status: 'current',
    statusText: 'Actively Interviewing',
    highlights: [
      'Taking a short career break to recharge, sharpen skills, and explore high-impact backend & full-stack roles.',
      'Building open-source projects, experimenting with new system design patterns, and preparing for the next chapter.'
    ],
    theme: {
      nodeBg: 'bg-emerald-500',
      glowColor: 'shadow-emerald-500/50 ring-emerald-500/40',
      accentText: 'text-emerald-500 dark:text-emerald-400',
      borderActive: 'border-emerald-500'
    }
  },
  {
    id: 'shree-backend',
    role: 'Backend Developer',
    company: 'Shree Info Solutions',
    location: 'Ahmedabad, Gujrat',
    period: 'Mar 2025 – Aug 2026',
    status: 'past',
    statusText: 'Full-time',
    highlights: [
      'Engineered high-concurrency microservices using Go and Node.js with PostgreSQL for data persistence.',
      'Optimized database queries and API response latencies, improving overall backend performance by reducing response overhead.',
      'Designed scalable RESTful APIs and managed backend architecture to support production workloads.'
    ],
    theme: {
      nodeBg: 'bg-cyan-500',
      glowColor: 'shadow-cyan-500/50 ring-cyan-500/40',
      accentText: 'text-cyan-500 dark:text-cyan-400',
      borderActive: 'border-cyan-500'
    }
  },
  {
    id: 'shree-intern',
    role: 'Backend Developer Intern',
    company: 'Shree Info Solutions',
    location: 'Ahmedabad, Gujrat',
    period: 'Oct 2024 – Mar 2025',
    status: 'past',
    statusText: 'Internship',
    highlights: [
      'Collaborated on full-stack feature development with React and Express.',
      'Built reusable frontend UI components and integrated them with backend endpoints.'
    ],
    theme: {
      nodeBg: 'bg-purple-500',
      glowColor: 'shadow-purple-500/50 ring-purple-500/40',
      accentText: 'text-purple-500 dark:text-purple-400',
      borderActive: 'border-purple-500'
    }
  },
  {
    id: 'brainybeam-intern',
    role: 'MERN Stack Developer Intern',
    company: 'BrainyBeam Info-Tech Pvt. Ltd.',
    location: 'Ahmedabad, Gujrat',
    period: 'Jan 2024 – Apr 2024',
    status: 'past',
    statusText: 'Internship',
    highlights: [
      'Gained hands-on experience with the MERN stack (MongoDB, Express, React, Node.js) through practical application development.',
      'Learned web development fundamentals, component lifecycle management, and REST API integration in an agile environment.'
    ],
    theme: {
      nodeBg: 'bg-amber-500',
      glowColor: 'shadow-amber-500/50 ring-amber-500/40',
      accentText: 'text-amber-500 dark:text-amber-400',
      borderActive: 'border-amber-500'
    }
  }
];

export const MobileView = () => {
  const { theme } = useThemeContext();
  const [activeId, setActiveId] = useState<string | null>(null);
  const isLight = theme === 'light';

  return (
    <section className="w-full px-4 flex flex-col items-center">
      <div className="w-full">

        {/* Terminal Header */}
        <div className="mb-8 flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold border bg-orange-500/10 border-orange-500/30 text-orange-400">
            <Terminal size={13} className="animate-pulse" />
            <span>~$ history --career</span>
          </div>

          <div className="flex items-center justify-between w-full pt-1">
            <h2 className="text-xl font-extrabold tracking-tight font-mono text-gray-900 dark:text-gray-400 flex items-center gap-1.5">
              <span>Work Experience</span>
              <span className="text-orange-400">[]</span>
            </h2>

            <div className="flex items-center gap-1 text-[11px] font-mono opacity-60 text-stone-700 dark:text-gray-400">
              <Briefcase size={12} />
              <span>2024-2026</span>
            </div>
          </div>
        </div>

        {/* Left-Aligned Timeline Wrapper */}
        <div className="relative w-full pl-7 my-4">
          
          {/* Vertical Track Gradient */}
          <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/40 via-cyan-500/40 to-amber-500/40 dark:bg-gray-800" />

          {/* Experience Cards */}
          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => {
              const isActive = activeId === exp.id;
              const nodeTheme = exp.theme;

              return (
                <div 
                  key={exp.id}
                  className="relative w-full"
                  onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
                >
                  
                  {/* MULTI-COLOR GLOWING NODE (LEFT ALIGNED) */}
                  <div className="absolute -left-7 top-5 z-10 flex items-center justify-center w-5 h-5">
                    
                    {/* Pulsing Radar Ring */}
                    <span className={`absolute w-6 h-6 rounded-full ${nodeTheme.nodeBg} opacity-40 animate-ping`} />
                    
                    {/* Ambient Radial Aura */}
                    <span className={`absolute w-8 h-8 rounded-full blur-sm transition-opacity duration-300 ${nodeTheme.nodeBg} ${isActive ? 'opacity-80 scale-110' : 'opacity-40'}`} />

                    {/* Central Orb */}
                    <div 
                      className={`relative z-10 w-4 h-4 rounded-full border ${nodeTheme.nodeBg} ${
                        isLight ? 'border-white' : 'border-gray-950'
                      } transition-all duration-300 shadow-md ${nodeTheme.glowColor} ${
                        isActive ? 'scale-125 ring-2' : 'ring-1'
                      }`}
                    />
                  </div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`w-full p-4 rounded-xl border transition-all duration-200 shadow-sm ${
                      isActive 
                        ? `${isLight ? 'bg-white/90 shadow-md' : 'bg-gray-900 shadow-lg'} ${nodeTheme.borderActive}`
                        : `${isLight ? 'bg-white/50 border-gray-200' : 'bg-gray-900/60 border-gray-800'}`
                    }`}
                  >
                    
                    {/* Header */}
                    <div className="flex flex-col gap-1 pb-3 border-b border-black/5 dark:border-white/10">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border bg-stone-100 dark:bg-gray-800/80 border-stone-200 dark:border-gray-700 ${nodeTheme.accentText}`}>
                          {exp.statusText}
                        </span>

                        <div className="flex items-center gap-1 text-[11px] font-mono opacity-70 text-stone-600 dark:text-gray-400">
                          <Calendar size={11} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold font-sans tracking-tight text-stone-900 dark:text-gray-400 mt-0.5">
                        {exp.role}
                      </h3>

                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={`font-semibold ${nodeTheme.accentText}`}>
                          {exp.company}
                        </span>
                        
                        <span className="flex items-center gap-1 opacity-70 text-stone-600 dark:text-gray-400">
                          <MapPin size={11} />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="mt-3 space-y-2">
                      {exp.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-gray-400 leading-relaxed font-sans">
                          <Sparkles size={12} className={`mt-0.5 shrink-0 ${nodeTheme.accentText}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};