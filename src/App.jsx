import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import loadingImage from "../public/loading.gif"
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from 'react-animated-cursor'

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [])

  useEffect(() => {
    Aos.init({
      duration: 900
    });
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color='17, 17, 17'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      {
        loading === false ? (
          <div>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
          </div>
        ) :
          (
            <div className='h-screen w-screen flex flex-col justify-center items-center bg-white'>
              <img src={loadingImage} alt="loading" className='w-16 md:w-32' />
              <h1 className='text-2xl md:text-5xl uppercase font-extrabold text-dark-emperor font-playfair'>Welcome</h1>
            </div>
          )
      }
    </div>
  )
}

export default App
