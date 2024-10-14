import { LuUsers2, LuCalendarClock, LuCalendarRange, LuTimerReset } from "react-icons/lu";
import { SlBriefcase } from "react-icons/sl";
import Progressbar from "../Shared/Progressbar";

const ServiceProgress = () => {
    const serviceData = [
        {
            icon: LuUsers2,
            number: 50,
            symbol: "%",
            title: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
            icon: SlBriefcase,
            number: 80,
            symbol: "K",
            title: "Sit amet, consectetur adipisicing elit."
        },
        {
            icon: LuCalendarClock,
            number: 60,
            symbol: "%",
            title: "Consectetur adipisicing elit. Lorem ipsum"
        },
        {
            icon: LuCalendarRange,
            number: 5,
            symbol: "x",
            title: "Dolor sit amet, consectetur adipisicing."
        },
        {
            icon: LuTimerReset,
            number: 8,
            symbol: "+",
            title: "Lorem ipsum dolor sit amet adipisicing."
        }
    ]

    return (
        <div data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-light-white my-9 rounded-xl p-3">
                {
                    serviceData.map((data, idx) =>
                        <div key={idx} className={`flex flex-col justify-center items-center p-5 md:p-10 ${idx === 4 && "md:col-span-2 lg:col-span-1"}`}>
                            <data.icon className="text-2xl md:text-3xl lg:text-4xl mb-4" />
                            <Progressbar number={data.number} symbol={data.symbol} />
                            <p className="text-center text-sm md:text-base text-gray-700 mt-auto">{data.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ServiceProgress;