import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Progressbar = ({ number, symbol }) => {
    const [progress, setProgress] = useState(0); // Initial progress is 0
    

    // Animate the progress
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress < parseInt(number)) {
                    return oldProgress + 1; // Increase progress by 1
                }
                clearInterval(interval); // Stop animation when progress reaches 50%
                return oldProgress;
            });
        }, 40); // Speed of the animation (adjust as needed)
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [number]);

    return (
        <div className="mt-auto mb-auto">
            <p className="text-center lg:mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold">{progress}{symbol}</p>
        </div>
    );
};

Progressbar.propTypes = {
    number: PropTypes.number.isRequired, // Validate that 'number' is a required prop of type number
    symbol: PropTypes.string, // Validate that 'symbol' is a prop of type string
};


export default Progressbar;