import { LuChevronRight } from "react-icons/lu";
import chair from "../../assets/chair.jpg";

const Offering = () => {
    return (
        <div data-aos="fade-up" className="flex flex-col-reverse md:flex-row bg-light-white rounded-xl p-5 md:px-10 md:py-9 gap-9 md:gap-3 mb-10">
            <div className="flex-1 space-y-14">
                <h1 className="text-4xl font-bold">Offering</h1>
                <p className="text-base font-medium text-gray-700 capitalize font-playfair">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem tenetur quae nihil deleniti molestiae impedit.
                </p>
                <button
                    type="submit"
                    className="w-full md:w-auto rounded-xl transition-all duration-200 bg-dark-mine_shaft text-light-white flex items-center justify-center py-3 px-4 gap-2 hover:bg-dark-emperor"
                >
                    Offer Services
                    <LuChevronRight className="text-2xl"/>
                </button>
            </div>
            <div>
                <img src={chair} alt="Chair" className="w-80 rounded-2xl" style={{filter: "saturate(0%)"}}/>
            </div>
        </div>
    );
};

export default Offering;