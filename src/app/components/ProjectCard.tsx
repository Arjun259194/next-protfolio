import { Project } from "@/data";
import { ArrowRightCircle } from "lucide-react";
import { FC } from "react";

const ProjectCard: FC<Project> = ({ description, snippet, title, link }) => {
    return (
        <article className="group h-full hover:shadow-sm w-full transition-all flex border-2 border-gray-300  duration-200 relative rounded-2xl shadow-md ">
            <div className="relative z-30 bg-gray-200 min-h-56 flex p-5 w-full overflow-hidden rounded-2xl">
                <div className="w-2/3 space-y-4 flex flex-col justify-evenly">
                    <h2 className="text-2xl md:text-4xl font-semibold md:font-bold">
                        {title}
                    </h2>
                    <p className="md:text-lg capitalize md:font-semibold">
                        {description}
                    </p>
                    <a
                        target="_blank"
                        className="w-min flex bg-gray-900 text-gray-200 px-4 py-2 rounded-full font-semibold space-x-2 items-center"
                        href={link}>
                        <span>Go</span> <ArrowRightCircle size={22} color="white" />
                    </a>
                </div>
                <img
                    className="absolute group-hover:-rotate-3 group-hover:shadow-lg top-5 rounded-xl left-2/3 transition-all duration-100  shadow-sm"
                    src={snippet}
                />
            </div>
        </article>
    );
};

export default ProjectCard;
