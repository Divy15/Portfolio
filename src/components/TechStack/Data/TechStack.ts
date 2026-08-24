import { 
    SiNodedotjs, 
    SiExpress, 
    SiPostgresql, 
    SiReact, 
    SiTypescript, 
    SiTailwindcss, 
    SiDocker,
    SiRedis
} from 'react-icons/si';

import { FaGolang } from "react-icons/fa6";

import { FaAws } from "react-icons/fa";

export const TECH_STACK = [
    { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#5FA04E] hover:border-[#5FA04E]/40" },
    { name: "Express.js", icon: SiExpress, color: "hover:text-stone-800 dark:hover:text-white hover:border-stone-400" },
    { name: "Go", icon: FaGolang, color: "hover:text-[#00ADD8] hover:border-[#00ADD8]/40" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1] hover:border-[#4169E1]/40" },
    { name: "React.js", icon: SiReact, color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/40" },
    { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6] hover:border-[#3178C6]/40" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4] hover:border-[#06B6D4]/40" },
    { name: "Docker", icon: SiDocker, color: "hover:text-[#2496ED] hover:border-[#2496ED]/40" },
    { name: "Redis", icon: SiRedis, color: "hover:text-[#DC382D] hover:border-[#DC382D]/40" },
    { name: "AWS", icon: FaAws, color: "hover:text-[#FF9900] hover:border-[#FF9900]/40" },
];