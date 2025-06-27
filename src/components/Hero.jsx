import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { logo } from '../assets'


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto  '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w7x1 mx-auto flex flex-row  items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#42556a]'/>
          <div className='w-1 sm:h-80 h-40 grey-gradient'/>
        </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white `}>Hi, <span className='text-[#3b5475]'>Black Spades</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>welcomes you <br className='sm:block hidden' /> to our Deck Of Spades</p>
          </div>
      </div>
      {isMobile ? '': <ComputersCanvas/>}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4  border-[#bec7d4] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero