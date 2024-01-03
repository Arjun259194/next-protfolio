import { ArrowRight, ChevronDown } from "lucide-react";

function HeroSection() {
    return (
        <section className="min-h-screen pt-10 w-full flex flex-col items-center justify-center">
            <div className="w-10/12 mx-auto space-y-6 flex-col flex items-center">
                <div className="md:flex-row flex flex-col md:space-x-4 space-y-4 items-center">
                    <img
                        src="/profile-pic.png"
                        className="aspect-square pop-in-1 w-52 rounded-full border-8 border-blue-300 shadow-lg shadow-blue-300"
                    />
                    <div className="space-y-4 pop-in-2 text-center md:text-left ">
                        <h1 className="md:text-6xl text-4xl font-bold capitalize text-gray-800">
                            Arjun R. Mistry
                        </h1>
                        <p className="md:text-lg ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Deserunt minima amet ab unde vitae a est, quis adipisci
                            voluptatum illo? Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Rerum quos, incidunt sunt ea blanditiis
                            debitis, similique consectetur commodi corrupti odit laborum?
                            Voluptatem enim reprehenderit rem laudantium accusamus
                            tenetur.
                        </p>
                    </div>
                </div>
                <div className="flex space-x-10 mx-10">
                    <button className="pop-in-3 font-semibold shadow-xl bg-gray-800 text-gray-200 flex gap-2 items-center px-4 py-2 rounded-full">
                        Contact
                        <ArrowRight color="white" size={22} />
                    </button>
                    <button className="pop-in-4 font-semibold text-blue-500 border-2 border-blue-300 shadow-xl py-2 px-4 rounded-full">
                        About
                    </button>
                </div>
                <ChevronDown className="animate-bounce" color="black" size={40} />
            </div>
        </section>
    );
}

export default HeroSection;
