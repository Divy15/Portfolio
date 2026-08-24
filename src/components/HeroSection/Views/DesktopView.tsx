import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Copy, Check, Terminal } from 'lucide-react';
import { useThemeContext } from "../../../contexts/ThemeContext";

export const DesktopView = () => {
  const { theme } = useThemeContext();
  const [copied, setCopied] = useState(false);

  const isLight = theme === 'light';
  const accentText = isLight ? 'text-[#760031]' : 'text-orange-500';
  const accentBg = isLight ? 'bg-[#760031]' : 'bg-orange-500';
  const accentBorder = isLight ? 'border-[#760031]' : 'border-orange-500';

  const myEmail = "gandhidivy1511@gmail.com";

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(myEmail);
      } else {
        // Fallback for non-HTTPS or legacy environments
        const textArea = document.createElement("textarea");
        textArea.value = myEmail;
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <section className="w-full  px-8 lg:px-16 xl:px-24 pt-6 pb-6 flex items-center">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <span className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-medium border ${
              isLight 
                ? 'bg-[#E3DBBB]/70 border-[#760031]/30 text-[#760031]' 
                : 'bg-gray-800/80 border-orange-500/30 text-orange-400'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Full-Stack & Backend Roles
            </span>
          </motion.div>

          {/* Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.12] tracking-tight">
              Building <span className={accentText}>Full-Stack Apps</span> <br />
              Powered by High-Scale <br />
              Backend Systems.
            </h1>

            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 font-sans leading-relaxed max-w-xl">
              Full-Stack Developer bridging <span className="font-semibold text-gray-900 dark:text-gray-400">React UIs</span> with high-scale <span className="font-semibold text-gray-900 dark:text-gray-300">Node.js, Go, and PostgreSQL</span> backends. 
              I focus on building intuitive frontends backed by resilient microservices built for performance.
            </p>
          </motion.div>

          {/* Action Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base text-gray- shadow-md ${accentBg} hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
            >
              <span>Explore My Work</span>
              <ArrowUpRight size={20} />
            </a>

            <a
              href={`mailto:${myEmail}?subject=Opportunity%20via%20Portfolio&body=Hi%20Divy,`}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-base border ${accentBorder} ${accentText} hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
            >
              <Mail size={18} />
              <span>Say Hello</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className={`p-3.5 rounded-full border ${accentBorder} ${accentText} hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200`}
              title="Copy Email Address"
              aria-label="Copy Email Address"
            >
              {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
            </button>
          </motion.div>

        </div>

        {/* Right Column: Code Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-5 w-full flex justify-end"
        >
          <div className={`w-full p-6 xl:p-8 rounded-3xl border font-mono text-sm shadow-xl transition-all ${
            isLight 
              ? 'bg-[#E3DBBB]/60 border-[#760031]/20 text-stone-900 shadow-[#760031]/5' 
              : 'bg-gray-900/90 border-gray-800 text-gray-200 shadow-black/50'
          }`}>
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Terminal size={16} className={accentText} />
                <span className="text-xs font-semibold opacity-70">divy.config.ts</span>
              </div>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block" />
              </div>
            </div>

            <pre className="space-y-2.5 text-xs xl:text-sm leading-relaxed overflow-x-auto">
              <code>
                <span className={accentText}>const</span> developer = &#123;{"\n"}
                {"  "}name: <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Divy Gandhi"</span>,{"\n"}
                {"  "}focus: <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Full-Stack Architecture"</span>,{"\n"}
                {"  "}stack: [{"\n"}
                {"    "}<span className="text-emerald-700 dark:text-emerald-400 font-semibold">"React"</span>, <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Node.js"</span>, <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Express"</span>,{"\n"}
                {"    "}<span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Go"</span>, <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"PostgreSQL"</span>, <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Docker"</span>{"\n"}
                {"  "}],{"\n"}
                {"  "}status: <span className="text-emerald-700 dark:text-emerald-400 font-semibold">"Ready to build"</span>{"\n"}
                &#125;;
              </code>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
};