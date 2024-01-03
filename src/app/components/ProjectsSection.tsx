import { projectData } from "@/data";
import React from "react";
import PopInAnimate from "./PopInAnimate";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
    return (
        <section className="min-h-screen pt-20 bg-neutral-900">
            <div className="w-10/12 mx-auto gap-5 grid md:grid-cols-2 md:grid-flow-row-dense ">
                {projectData.map((project, index) => (
                    <React.Fragment key={index}>
                        <PopInAnimate>
                            <ProjectCard {...project} />
                        </PopInAnimate>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
