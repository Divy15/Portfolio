import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Copy, Check, Terminal } from 'lucide-react';
import { useThemeContext } from "../../../contexts/ThemeContext";

export const MobileView = () => {
    const { theme } = useThemeContext();
    const [copied, setCopied] = useState(false);

    const isLight = theme === 'light';
    const accentText = isLight ? 'text-[#760031]' : 'text-orange-500';
    const accentBg = isLight ? 'bg-[#760031]' : 'bg-orange-500';
    const accentBorder = isLight ? 'border-[#760031]' : 'border-orange-500';

    const myEmail = "gandhidivy1511@gmail.com";

    const handleCopyEmail = async () => {
    try {
        // Primary modern API
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(myEmail);
        } else {
            // Mobile / iOS Fallback method
            const textArea = document.createElement("textarea");
            textArea.value = myEmail;
            
            // Prevent auto-scroll/zoom on mobile
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            document.execCommand('copy');
            textArea.remove();
        }

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
};

    return (
        <section className="px-5 pt-5 pb-6 min-h-[85vh] flex flex-col justify-start">

            {/* 1. Status Badge */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-3"
            >
                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border ${
                    isLight 
                        ? 'bg-[#E3DBBB]/70 border-[#760031]/30 text-[#760031]' 
                        : 'bg-gray-800/80 border-orange-500/30 text-orange-400'
                }`}>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Full-Stack & Backend Roles
                </span>
            </motion.div>

            {/* 2. Main Headline & Bio */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
            >
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
                    Building <span className={accentText}>Full-Stack Apps</span> <br />
                    Powered by High-Scale <br />
                    Backend Systems.
                </h1>

                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400 font-sans leading-relaxed">
                    Full-Stack Developer bridging <span className="font-semibold">React UIs</span> with high-scale <span className="font-semibold">Node.js, Go, and PostgreSQL</span> backends. 
                    I focus on building intuitive frontends backed by resilient microservices built for performance.
                </p>
            </motion.div>

            {/* 3. Personal Developer Snippet Card (Uniquely You) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`my-5 p-4 rounded-2xl border font-mono text-xs overflow-hidden shadow-sm ${
                    isLight 
                        ? 'bg-[#E3DBBB]/50 border-[#760031]/20 text-stone-900' 
                        : 'bg-gray-900/80 border-gray-800 text-gray-200'
                }`}
            >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10 dark:border-white/10">
                    <div className="flex items-center gap-1.5">
                        <Terminal size={14} className={accentText} />
                        <span className="text-[11px] font-semibold opacity-70">divy.config.ts</span>
                    </div>
                    <div className="flex gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                    </div>
                </div>

                <div className="space-y-1 text-[11px] leading-relaxed">
                    <p><span className={accentText}>const</span> developer = &#123;</p>
                    <p className="pl-4">name: <span className="text-emerald-600 dark:text-emerald-400">"Divy Gandhi"</span>,</p>
                    <p className="pl-4">focus: <span className="text-emerald-600 dark:text-emerald-400">"Full-Stack Architecture"</span>,</p>
                    <p className="pl-4">stack: [<span className="text-emerald-600 dark:text-emerald-400">"React"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Node"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Express"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Go"</span>, <span className="text-emerald-600 dark:text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Docker"</span>],</p>
                    <p className="pl-4">status: <span className="text-emerald-600 dark:text-emerald-400">"Ready to build"</span></p>
                    <p>&#125;;</p>
                </div>
            </motion.div>

            {/* 4. Action Buttons (Direct Gmail Link + Copy Option) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-3 mt-2"
            >
                {/* Explore Work CTA */}
                <a
                    href="#projects"
                    className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white shadow-md ${accentBg} hover:opacity-95 transition-all`}
                >
                    <span>Explore My Work</span>
                    <ArrowUpRight size={18} />
                </a>

                {/* Email Direct Trigger & Quick Copy Row */}
                <div className="flex items-center gap-2">
                    {/* Opens Gmail / Mail App */}
                    <a
                        href={`mailto:${myEmail}?subject=Opportunity%20via%20Portfolio&body=Hi%20Divy,`}
                        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm border ${accentBorder} ${accentText} hover:bg-black/5 dark:hover:bg-white/5 transition-all`}
                    >
                        <Mail size={16} />
                        <span>Say Hello</span>
                    </a>

                    {/* Quick Copy Button */}
                    <button
                        onClick={handleCopyEmail}
                        className={`p-3 rounded-full border ${accentBorder} ${accentText} hover:bg-black/5 dark:hover:bg-white/5 transition-all`}
                        title="Copy Email Address"
                    >
                        {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                    </button>
                </div>
            </motion.div>

        </section>
    );
};