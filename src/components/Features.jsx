import Faq from "./Features_Section/Faq";
import Map from "./Features_Section/Map";
import Offering from "./Features_Section/Offering";
import ServiceProgress from "./Features_Section/ServiceProgress";

const Features = () => {
    return (
        <div className="container mx-auto px-5 md:px-7">
            <ServiceProgress />
            <Offering />
            <Map />
            <Faq />
        </div>
    );
};

export default Features;