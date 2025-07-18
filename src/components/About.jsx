import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import {textVariant,fadeIn} from '../utils/motion'
import { SectionWrapper } from '../hoc'




const Servicecard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div 
          variants={fadeIn("right","spring",0.5*index,0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
           <div 
              options={{
                max:45,
                scale:1,
                speed:450
              }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                  
                  <img src={icon} alt={title} 
                  className='w-16 h-16 object-contain ' />
                  <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>   
        </motion.div>
    </Tilt>
  )
}


const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>
      <motion.div variants={fadeIn("","",0,1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      "We are all passionate for gaming but we really started taking it seriously when we founded Black Spades Esports. 
      Our vision is to help talented and passionate gamers and bring them to next level."
      </motion.div>

   
      
      <div className='mt-20 flex flex-wrap gap-10 '> 
      
        {services.map((service,index)=>(
          <Servicecard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About,"about")