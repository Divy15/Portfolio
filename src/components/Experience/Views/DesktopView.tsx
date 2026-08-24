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
  // Color configuration per node
  theme: {
    nodeBg: string;        // Inner node color
    glowColor: string;     // Outer box-shadow / radial glow
    accentText: string;    // Text/icon highlights
    borderActive: string;  // Card border on hover
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
    location: 'Ahmedabad, Gujrat, India',
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
    location: 'Ahmedabad, Gujrat, India',
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
    location: 'Ahmedabad, Gujrat, India',
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

export const DesktopView = () => {
  const { theme } = useThemeContext();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isLight = theme === 'light';

  return (
    <section className="w-full px-8 lg:px-16 xl:px-24 py-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* Terminal Header */}
        <div className="mb-16 flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold border bg-orange-500/10 border-orange-500/30 text-orange-400">
            <Terminal size={14} className="animate-pulse" />
            <span>~$ history --career</span>
          </div>

          <div className="flex items-center justify-between w-full pt-1">
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight font-mono text-gray-900 dark:text-gray-400 flex items-center gap-2">
              <span>Work Experience</span>
              <span className="text-orange-400">[]</span>
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono opacity-60 text-stone-700 dark:text-gray-400">
              <Briefcase size={14} />
              <span>2024 - 2026</span>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full my-8">
          
          {/* Vertical Timeline Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/40 via-cyan-500/40 to-amber-500/40 dark:bg-gray-800" />

          {/* Cards List */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredId === exp.id;
              const nodeTheme = exp.theme;

              return (
                <div 
                  key={exp.id}
                  className="relative flex items-center w-full"
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  
                  {/* MULTI-COLOR GLOWING NODE */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    
                    {/* Animated Pulsing Halo */}
                    <span className={`absolute w-8 h-8 rounded-full ${nodeTheme.nodeBg} opacity-40 animate-ping`} />
                    
                    {/* Soft Radiant Glow Aura */}
                    <span className={`absolute w-10 h-10 rounded-full blur-md transition-opacity duration-300 ${nodeTheme.nodeBg} ${isHovered ? 'opacity-80 scale-125' : 'opacity-40'}`} />

                    {/* Central Glowing Orb */}
                    <div 
                      className={`relative z-10 w-6 h-6 rounded-full border-2 ${nodeTheme.nodeBg} ${
                        isLight ? 'border-white' : 'border-gray-950'
                      } transition-all duration-300 shadow-lg ${nodeTheme.glowColor} ${
                        isHovered ? 'scale-125 ring-4' : 'ring-2'
                      }`}
                    />
                  </div>

                  {/* Card Element */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full flex ${isEven ? 'justify-start pr-12' : 'justify-end pl-12'}`}
                  >
                    <div className={`w-full max-w-125 lg:max-w-135 p-6 lg:p-8 rounded-2xl border transition-all duration-300 shadow-md ${
                      isHovered 
                        ? `${isLight ? 'bg-white/90 shadow-xl' : 'bg-gray-900 shadow-2xl'} ${nodeTheme.borderActive} scale-[1.02]`
                        : `${isLight ? 'bg-white/50 border-gray-200' : 'bg-gray-900/60 border-gray-800'}`
                    }`}>
                      
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 pb-4 border-b border-black/5 dark:border-white/10">
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className="text-lg lg:text-xl font-bold font-sans tracking-tight text-stone-900 dark:text-gray-400">
                              {exp.role}
                            </h3>
                            
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border bg-stone-100 dark:bg-gray-800/80 border-stone-200 dark:border-gray-700 ${nodeTheme.accentText}`}>
                              {exp.statusText}
                            </span>
                          </div>

                          <p className={`text-sm font-semibold font-mono mt-1 ${nodeTheme.accentText}`}>
                            {exp.company}
                          </p>
                        </div>

                        {/* Metadata */}
                        <div className="flex flex-col items-start text-xs font-mono text-stone-600 dark:text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="opacity-70" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={13} className="opacity-70" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="mt-4 space-y-2.5">
                        {exp.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-stone-700 dark:text-gray-400 leading-relaxed font-sans">
                            <Sparkles size={14} className={`mt-0.5 shrink-0 ${nodeTheme.accentText}`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
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