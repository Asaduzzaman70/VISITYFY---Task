import { FaSearch } from "react-icons/fa";
import hero_bg from "../assets/Uniformes profissionais.png";

const Hero = () => {
    return (
        <div className="h-screen relative flex flex-col items-center justify-center">
            {/* Pseudo-element for background image */}
            <div
                className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-bottom bg-no-repeat"
                style={{
                    backgroundImage: `url(${hero_bg})`,
                    filter: "saturate(0%)",
                    backgroundSize: "88%",
                }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative text-center text-light-white px-4 sm:px-8">
                {/* Title */}
                <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold capitalize mb-4">
                    Find the perfect service provider
                </h1>
                {/* Subtitle */}
                <p className="tracking-wide lg:tracking-[9px] text-sm sm:text-base uppercase">
                    Lorem ipsum, dolor sit amet consectetur.
                </p>

                {/* Search Form */}
                <div className="mt-8 bg-light-white rounded-lg py-3 px-4 w-full max-w-4xl mx-auto">
                    <form
                        className="flex flex-col md:flex-row md:items-center justify-center text-dark-emperor space-y-4 md:space-y-0 md:space-x-4"
                    >
                        {/* First Input */}
                        <div className="flex-1 border-b-2 md:border-r-2 md:border-b-0 pr-4 md:pr-6 space-y-2">
                            <p className="text-sm font-semibold text-gray-500 text-left">
                                What are you looking for?
                            </p>
                            <input
                                type="text"
                                placeholder="Search by Service"
                                className="focus:outline-none text-base font-bold py-1 w-full"
                            />
                        </div>
                        {/* Second Input */}
                        <div className="flex-1 border-b-2 md:border-r-2 md:border-b-0 pr-4 md:pr-6 space-y-2">
                            <p className="text-sm font-semibold text-gray-500 text-left">Where?</p>
                            <input
                                type="text"
                                placeholder="Search by Location"
                                className="focus:outline-none text-base font-bold py-1 w-full"
                            />
                        </div>
                        {/* Third Input */}
                        <div className="flex-1 space-y-2 pr-4 md:pr-0">
                            <p className="text-sm font-semibold text-gray-500 text-left">When?</p>
                            <input
                                type="text"
                                placeholder="Search by Provider"
                                className="focus:outline-none text-base font-bold py-1 w-full"
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full md:w-auto rounded-xl transition-all duration-200 bg-dark-mine_shaft text-light-white flex items-center justify-center py-3 px-4 gap-2 hover:bg-dark-emperor"
                        >
                            <FaSearch />
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;