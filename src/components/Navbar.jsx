import { useState, useEffect } from "react";
import { LuBox } from "react-icons/lu";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={`fixed w-full z-10 py-5 transition-all duration-700 ease-in-out shadow-2xl bg-dark-mine_shaft ${isScrolled ? '' : 'bg-opacity-50'}`}>
            <div className="container mx-auto flex items-center justify-between px-5" data-aos="fade-down">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img className="w-6 md:w-8 lg:w-10" src={logo} alt="Logo" />
                    <h1 className="uppercase text-xl md:text-2xl lg:text-3xl text-light-white font-extralight">isityfy</h1>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-light-white text-2xl">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Menu Items */}
                <div className={`space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row md:items-center absolute md:static top-[50px] left-0 w-full md:w-auto bg-dark-mine_shaft md:bg-transparent p-5 md:p-0 transition-all duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none ${isScrolled ? '' : 'bg-opacity-50'}`}>
                    {/* Button 1 */}
                    <button className="bg-light-white text-dark-black py-1 px-3 md:py-2 md:px-4 rounded-md border-2 border-light-white uppercase text-xs md:text-sm lg:text-base tracking-wider transition-all duration-200 hover:bg-transparent hover:text-light-white">
                        Explore Services
                    </button>
                    {/* Button 2 */}
                    <button className="bg-transparent text-light-white py-1 px-3 md:py-2 md:px-4 rounded-md border-2 border-light-white uppercase text-xs md:text-sm lg:text-base tracking-wider transition-all duration-200 hover:bg-light-white hover:text-dark-black">
                        Login
                    </button>
                    {/* Button 3 */}
                    <div className="text-center">
                        <button className="bg-dark-black text-white py-2 px-3 md:py-3 md:px-4 rounded-md">
                            <LuBox />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;