import React from 'react'

import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'

import { styles } from '../style'
import { Partnersdetails } from '../constants'
import {textVariant,fadeIn} from '../utils/motion'
import { SectionWrapper } from '../hoc'



const Partnerscard = ({ index, title, icon, url }) => {
    const handleClick = () => {
      window.open(url, '_blank');
    };
  
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
          onClick={handleClick} // Add onClick event
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[15px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

function Partners() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-white font-bold`}>Our Partners</p>
       
      </motion.div>
      

   
      
      <div className='mt-20 flex flex-wrap gap-10 '> 
      
        {Partnersdetails.map((Partnerdetail,index)=>(
          <Partnerscard key={Partnerdetail.title} index={index} {...Partnerdetail}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Partners,"")