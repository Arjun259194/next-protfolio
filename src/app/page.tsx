import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SecondSection from "./components/SecondSection";

export default function Home() {
    return (
        <main className="w-full">
            <HeroSection />
            <SecondSection />
            <ProjectsSection />
        </main>
    );
}
