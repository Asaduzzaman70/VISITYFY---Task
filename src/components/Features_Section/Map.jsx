// Import Swiper core and required modules
import { Pagination, FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { useEffect, useState } from 'react';

const Map = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('/slide.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchSlides();
    }, []);

    return (
        <div className='my-7 md:my-14 lg:my-24' data-aos="fade-up">
            <div>
                <h1 className="text-4xl font-bold">Found Distend</h1>
                <p className="text-base text-gray-700 my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum sunt harum unde porro minima eum voluptas tempore molestias, error beatae quam. Magnam eveniet iure repudiandae reiciendis explicabo dolorum placeat, saepe natus quas odit consectetur, deserunt laborum voluptatibus beatae consequatur.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 bg-light-white p-3 rounded-xl">
                <div className="h-full md:w-1/4">
                    <Swiper
                        direction="vertical"
                        slidesPerView={3}
                        spaceBetween={5}
                        freeMode={true}
                        freeModeMomentum={true}
                        freeModeMomentumRatio={0.7}
                        freeModeMomentumBounce={false}
                        freeModeMomentumVelocityRatio={0.5}
                        mousewheel={{
                            forceToAxis: true,
                            sensitivity: 0.3
                        }}

                        modules={[FreeMode, Pagination, Mousewheel]}
                        className="mySwiper w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-xl"
                    >
                        {
                            slides.map(slide =>
                                <SwiperSlide key={slide.id} className="rounded-lg bg-no-repeat bg-cover bg-center flex items-end justify-start text-base lg:text-2xl font-bold text-light-white relative" style={{ backgroundImage: `url(${slide.placeImage})`, backgroundSize: "100%" }}>
                                    <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-end justify-start pl-3 pb-2 lg:pl-6 lg:pb-4 capitalize">
                                        <p>{slide.placeName}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
                <div className="w-full md:flex-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89087.0395181313!2d-71.16759387467557!3d42.38681478729181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e1!3m2!1sen!2sbd!4v1728834210539!5m2!1sen!2sbd"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-300px md:h-[400px] lg:h-[600px]"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;