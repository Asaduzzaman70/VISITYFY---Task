import logo from "../assets/logo.png";
import iOS from "../assets/Ios App store.webp";
import android from "../assets/android google play.png";
import apple_pay from "../assets/pament_gateway/apple-pay.png";
import cirrus from "../assets/pament_gateway/cirrus.png";
import ebay from "../assets/pament_gateway/ebay.png";
import google from "../assets/pament_gateway/google-pay.png";
import maestro from "../assets/pament_gateway/maestro.png";
import paypal from "../assets/pament_gateway/paypal.png";
import stripe from "../assets/pament_gateway/stripe.png";
import visa from "../assets/pament_gateway/visa.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedin.png";
import award_1 from "../assets/award_1.png";
import award_2 from "../assets/award_2.png";
import award_3 from "../assets/award_3.png";

const Footer = () => {
    return (
        <div className="bg-dark-mine_shaft relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
            <div className="container mx-auto pt-12 pb-24 px-4 md:px-5 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-light-white border-b-[1px] border-gray-500 pb-6">
                    <div className="md:row-span-2 md:col-span-2 ">
                        <div className="flex items-center">
                            <img className="w-10 lg:w-12" src={logo} alt="Logo" />
                            <h1 className="uppercase text-4xl lg:text-5xl text-light-white font-extralight">isityfy</h1>
                        </div>
                        <div className="flex flex-col space-y-4 mt-6">
                            <div className="flex space-x-4">
                                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                    <img src={iOS} alt="iOS App Store" className="w-20 md:w-28 rounded-sm" />
                                </a>
                                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                    <img src={android} alt="Google Play Store" className="w-24 md:w-32" />
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block lg:hidden pt-12">
                            <p className="mb-4 text-base font-semibold">Stay updated with the latest news and offers.</p>
                            <div className="flex md:flex-row md:gap-6 md:items-center w-full">
                                <input type="email" placeholder="Type Your Email Please" className="md:w-3/5 p-1 bg-transparent border-2 border-light-white border-opacity-70 outline-none rounded-md text-base" />
                                <button type="submit" className="p-1 bg-light-white text-dark-black font-medium uppercase rounded-md hover:bg-light-mercury transition duration-300 text-base">Subscribe</button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 mt-12 lg:pr-40">
                            <h1 className="text-xl uppercase font-semibold">We accept</h1>
                            <div className="flex flex-wrap gap-4 pb-6">
                                <img src={apple_pay} alt="" className="w-9 bg-light-white rounded-full p-1" />
                                <img src={cirrus} alt="" className="w-9 bg-light-white rounded-full p-1" />
                                <img src={ebay} alt="" className="w-9 bg-light-white rounded-full p-1" />
                                <img src={google} alt="" className="w-9 bg-light-white rounded-full p-1" />
                                <img src={maestro} alt="" className="w-9 bg-light-white rounded-full p-1" />
                                <img src={paypal} alt="" className="w-9 bg-light-white rounded-full p-1" />
                                <img src={stripe} alt="" className="w-9 bg-light-white rounded-full p-1" />
                                <img src={visa} alt="" className="w-9 bg-light-white rounded-full p-1" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 md:pt-0 ">
                        <h1 className="text-2xl font-medium uppercase">Partner</h1>
                        <ul className="text-base text-gray-300 mt-6 space-y-1 font-light flex flex-col">
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Task Rabbit</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Thumbtack</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Angi</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Home Advisor</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Yelp</li>
                        </ul>
                    </div>
                    <div className="pt-10 lg:pt-0 ">
                        <h1 className="text-2xl font-medium uppercase">More Visityfy</h1>
                        <ul className="text-base text-gray-300 mt-6 space-y-1 font-light flex flex-col">
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Task Rabbit</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Thumbtack</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Angi</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Home Advisor</li>
                            <li className="hover:text-light-mercury hover:underline hover:cursor-pointer self-start">Yelp</li>
                        </ul>
                    </div>
                    {/* Subscribe Button For Small And Large Device */}
                    <div className="block md:hidden lg:block md:col-span-2 lg:col-span-2 pt-12 ">
                        <p className="mb-4 text-base font-semibold">Stay updated with the latest news and offers.</p>
                        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center w-full">
                            <input type="email" placeholder="Type Your Email Please" className="w-full md:w-3/4 lg:w-3/6 p-2 bg-transparent border-2 border-light-white outline-none rounded-md" />
                            <button type="submit" className="p-2 bg-light-white text-dark-black font-bold rounded-md hover:bg-light-mercury transition duration-300">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-col-reverse md:flex-row justify-between items-center md:px-6 gap-6 md:gap-0 md:space-y-0">
                    <p className="text-light-white md:w-1/2 text-center md:text-left">&copy; 2024 Visityfy. All rights reserved.</p>
                    <div className="flex flex-row flex-wrap items-center justify-around gap-4 w-full md:w-auto md:gap-10">
                        <div className="flex items-center gap-3">
                            <img src={linkedIn} alt="" className="w-7 lg:w-9 cursor-pointer" />
                            <img src={instagram} alt="" className="w-7 lg:w-9 cursor-pointer" />
                            <img src={facebook} alt="" className="w-7 lg:w-9 cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-3 lg:gap-6">
                            <img src={award_1} alt="" className="w-7 lg:w-9" />
                            <img src={award_2} alt="" className="w-7 lg:w-9" />
                            <img src={award_3} alt="" className="w-7 lg:w-9" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;