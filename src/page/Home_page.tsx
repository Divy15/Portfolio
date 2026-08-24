import { Experience } from "../components/Experience/Experience";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";
import { TechStack } from "../components/TechStack/TechStack";
import { useThemeContext } from "../contexts/ThemeContext";

export const Home_page = () => {
    const { theme } = useThemeContext();

    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F8F3E1] text-black' : 'bg-gray-800 text-white'}`}>
            <Navbar />
            <main className="flex flex-col gap-4">
                <section id="home" className="scroll-mt-130">
                    <HeroSection />
                </section>
                <section id="experience" className="scroll-mt-90">
                    <Experience />
                </section>
                <section id="projects" className="scroll-mt-90">
                    <Projects />
                </section>
                <section id="tech-stack" className="scroll-mt-90">
                    <TechStack />
                </section>
            </main>
        </div>
    );
};