import { ChevronDown } from "lucide-react";
import PopInAnimate from "./PopInAnimate";

function SecondSection() {
    return (
        <section className="flex flex-col justify-between min-h-screen relative text-gray-200 bg-blue-900">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#dbeafe"
                        fill-opacity="1"
                        d="M0,192L80,160C160,128,320,64,480,74.7C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            <div className="flex flex-col items-center text-center w-10/12 mx-auto space-y-5">
                <PopInAnimate>
                    <h2 className="text-4xl font-semibold capitalize">About me</h2>
                </PopInAnimate>
                <PopInAnimate>
                    <p className="md:w-3/4 md:mx-auto md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                        quis blanditiis quisquam exercitationem eaque veniam quos,
                        deserunt repellat mollitia voluptate.
                    </p>
                </PopInAnimate>
                <PopInAnimate>
                    <p className="md:w-3/4 md:mx-auto md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                        quis blanditiis quisquam exercitationem eaque veniam quos,
                        deserunt repellat mollitia voluptate.
                    </p>
                </PopInAnimate>
                <PopInAnimate>
                    <p className="md:w-3/4 md:mx-auto md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                        quis blanditiis quisquam exercitationem eaque veniam quos,
                        deserunt repellat mollitia voluptate.
                    </p>
                </PopInAnimate>
                <ChevronDown className="animate-bounce" color="white" size={40} />
            </div>
            <div className="rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#171717"
                        fill-opacity="1"
                        d="M0,192L80,160C160,128,320,64,480,74.7C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
        </section>
    );
}

export default SecondSection;
