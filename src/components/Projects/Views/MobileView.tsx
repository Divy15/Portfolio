import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Layers, Sparkles, Terminal } from 'lucide-react';
import { useThemeContext } from "../../../contexts/ThemeContext";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  highlights: string[];
  theme: {
    badgeBg: string;
    accentText: string;
    borderGlow: string;
    glowBg: string;
  };
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'resume-broadcast',
    title: 'Resume Bulk Broadcast',
    category: 'Full-Stack / Automation',
    description: 'Automated platform to streamline bulk resume distribution to recruiters with personalized email dynamic templates and delivery tracking.',
    techStack: ['Node.js', 'Express', 'React', 'Typescript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker', 'AWS S3'],
    githubUrl: 'https://github.com/Divy15/resume-broadcast-system', // Replace with your GitHub URL
    highlights: [
      'Built automated queue engine for dynamic mail delivery.',
      'Designed responsive dashboard to track application response metrics.'
    ],
    theme: {
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
      accentText: 'text-emerald-500 dark:text-emerald-400',
      borderGlow: 'hover:border-emerald-500/60 focus:border-emerald-500',
      glowBg: 'bg-emerald-500'
    }
  },
  {
    id: 'sleeper-bus-booking',
    title: 'Sleeper Bus Booking System',
    category: 'Full-Stack / High-Concurrency',
    description: 'High-concurrency bus seat reservation system managing double-decker sleeper layouts, real-time lock allocation, and transaction safety.',
    techStack: ['Node.js', 'Express', 'React', 'Typescript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/Divy15/sleeper_bus_booking', // Replace with your GitHub URL
    highlights: [
      'Implemented Redis locks to eliminate concurrent seat double-booking.',
      'Optimized SQL queries for fast seat availability checking under load.'
    ],
    theme: {
      badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
      accentText: 'text-cyan-500 dark:text-cyan-400',
      borderGlow: 'hover:border-cyan-500/60 focus:border-cyan-500',
      glowBg: 'bg-cyan-500'
    }
  }
];

export const MobileView = () => {
  const { theme } = useThemeContext();
  const isLight = theme === 'light';

  return (
    <section className="w-full px-4 py-8 flex flex-col items-center">
      <div className="w-full">

        {/* Section Header */}
        <div className="mb-6 flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold border bg-orange-500/10 border-orange-500/30 text-orange-400">
            <Terminal size={13} className="animate-pulse" />
            <span>~$ ls --projects</span>
          </div>

          <div className="flex items-center justify-between w-full pt-1">
            <h2 className="text-xl font-extrabold tracking-tight font-mono text-gray-900 dark:text-gray-400 flex items-center gap-1.5">
              <span>Featured Projects</span>
              <span className="text-orange-400">[]</span>
            </h2>

            <div className="flex items-center gap-1 text-[11px] font-mono opacity-60 text-stone-700 dark:text-gray-400">
              <Layers size={12} />
              <span>02 Builds</span>
            </div>
          </div>
        </div>

        {/* Projects Card Deck */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => {
            const projectTheme = project.theme;

            return (
              <motion.a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative block w-full p-5 rounded-2xl border transition-all duration-300 shadow-sm ${
                  isLight 
                    ? 'bg-white/70 border-gray-200 hover:shadow-md' 
                    : 'bg-gray-900/70 border-gray-800 hover:shadow-xl'
                } ${projectTheme.borderGlow}`}
              >
                
                {/* Glowing Corner Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className={`relative flex h-2.5 w-2.5`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${projectTheme.glowBg} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${projectTheme.glowBg}`} />
                  </span>
                  
                  <div className="p-1.5 rounded-lg bg-stone-100 dark:bg-gray-800 text-stone-600 dark:text-gray-300 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Card Header & Category Tag */}
                <div className="pr-12">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${projectTheme.badgeBg} ${projectTheme.accentText}`}>
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold font-sans tracking-tight text-stone-900 dark:text-gray-400 mt-2 flex items-center gap-2">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="mt-2 text-xs font-sans text-stone-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-3 space-y-1.5">
                  {project.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-gray-400 leading-normal">
                      <Sparkles size={11} className={`mt-0.5 shrink-0 ${projectTheme.accentText}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Chips */}
                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-stone-100 dark:bg-gray-800/80 text-stone-700 dark:text-gray-300 border border-stone-200 dark:border-gray-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center gap-1 text-[11px] font-mono font-semibold ${projectTheme.accentText}`}>
                    <FolderGit2 size={13} />
                    <span>Code</span>
                  </div>
                </div>

              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};