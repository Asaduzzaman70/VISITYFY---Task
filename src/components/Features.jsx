import Offering from "./Features_Section/Offering";
import ServiceProgress from "./Features_Section/ServiceProgress";

const Features = () => {
    return (
        <div className="container mx-auto px-10 md:px-7">
            <ServiceProgress />
            <Offering />
        </div>
    );
};

export default Features;