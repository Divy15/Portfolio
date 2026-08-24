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
    githubUrl: 'https://github.com/Divy15/resume-broadcast-system',
    highlights: [
      'Built automated queue engine for dynamic mail delivery.',
      'Designed responsive dashboard to track application response metrics.'
    ],
    theme: {
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
      accentText: 'text-emerald-500 dark:text-emerald-400',
      borderGlow: 'hover:border-emerald-500/60 focus:border-emerald-500 hover:shadow-emerald-500/10',
      glowBg: 'bg-emerald-500'
    }
  },
  {
    id: 'sleeper-bus-booking',
    title: 'Sleeper Bus Booking System',
    category: 'Full-Stack / High-Concurrency',
    description: 'High-concurrency bus seat reservation system managing double-decker sleeper layouts, real-time lock allocation, and transaction safety.',
    techStack: ['Node.js', 'Express', 'React', 'Typescript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/Divy15/sleeper_bus_booking',
    highlights: [
      'Implemented Redis locks to eliminate concurrent seat double-booking.',
      'Optimized SQL queries for fast seat availability checking under load.'
    ],
    theme: {
      badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
      accentText: 'text-cyan-500 dark:text-cyan-400',
      borderGlow: 'hover:border-cyan-500/60 focus:border-cyan-500 hover:shadow-cyan-500/10',
      glowBg: 'bg-cyan-500'
    }
  }
];

export const DesktopView = () => {
  const { theme } = useThemeContext();
  const isLight = theme === 'light';

  return (
    <section className="w-full px-8 lg:px-16 xl:px-24 py-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* Terminal Header */}
        <div className="mb-12 flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold border bg-orange-500/10 border-orange-500/30 text-orange-400">
            <Terminal size={14} className="animate-pulse" />
            <span>~$ ls --projects</span>
          </div>

          <div className="flex items-center justify-between w-full pt-1">
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight font-mono text-gray-900 dark:text-gray-400 flex items-center gap-2">
              <span>Featured Projects</span>
              <span className="text-orange-400">[]</span>
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono opacity-60 text-stone-700 dark:text-gray-400">
              <Layers size={14} />
              <span>02 Builds</span>
            </div>
          </div>
        </div>

        {/* Desktop 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {PROJECTS.map((project, index) => {
            const projectTheme = project.theme;

            return (
              <motion.a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-between w-full p-7 lg:p-8 rounded-2xl border transition-all duration-300 shadow-sm ${
                  isLight 
                    ? 'bg-white/70 border-gray-200 hover:shadow-xl hover:bg-white' 
                    : 'bg-gray-900/70 border-gray-800 hover:shadow-2xl hover:bg-gray-900'
                } ${projectTheme.borderGlow}`}
              >
                <div>
                  {/* Top Bar: Glowing Node & Link Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border ${projectTheme.badgeBg} ${projectTheme.accentText}`}>
                      {project.category}
                    </span>

                    <div className="flex items-center gap-3">
                      {/* Pulse Status Orb */}
                      <span className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${projectTheme.glowBg} opacity-75`} />
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${projectTheme.glowBg}`} />
                      </span>

                      <div className="p-2 rounded-lg bg-stone-100 dark:bg-gray-800 text-stone-600 dark:text-gray-300 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl lg:text-2xl font-bold font-sans tracking-tight text-stone-900 dark:text-gray-400 group-hover:underline decoration-2 underline-offset-4">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm font-sans text-stone-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Bullets */}
                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-stone-700 dark:text-gray-400 leading-normal">
                        <Sparkles size={13} className={`mt-0.5 shrink-0 ${projectTheme.accentText}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech Stack Badges & GitHub Button */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-100 dark:bg-gray-800/80 text-stone-700 dark:text-gray-300 border border-stone-200 dark:border-gray-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center gap-1.5 text-xs font-mono font-semibold ${projectTheme.accentText}`}>
                    <FolderGit2 size={15} />
                    <span>View Code</span>
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