import hero_bg from "../assets/Uniformes profissionais.png"

const Hero = () => {
    return (
        <div className="h-screen bg-cover bg-bottom bg-no-repeat relative mb-36" style={{ backgroundImage: `url(${hero_bg})`, filter: 'saturate(0%)', backgroundSize: "88%" }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-45"></div>
            <h1 className="text-white">Hero section</h1>
        </div>
    );
};

export default Hero;