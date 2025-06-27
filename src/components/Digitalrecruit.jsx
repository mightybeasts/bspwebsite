import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import {styles} from "../style"
import { link } from "../assets"
import {SectionWrapper} from "../hoc"
import {digitalrecruitdata} from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import { useNavigate } from "react-router-dom"


const TournamentCard = ({index,name,description,tags,image,source_code_link  })=>{
 

  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div onClick={()=> window.open(source_code_link,"_blank")} className="relative w-full h-[230px] cursor-pointer">
             <img src={image} alt='project_image' 
             className="w-full h-full object-cover rounded-2xl"/>
             <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={link} alt="link" className="w-1/2 h1/2 object-contain" />
                </div>
             </div>

          </div>
          <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] text-center'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
          

        </Tilt>
    </motion.div>
  )
}

const Recruitments = () => {
  return (
    <>
      

      <div className='w-full flex'>
        
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {digitalrecruitdata.map((digital, index) => (
          <TournamentCard key={`project-${index}`} index={index} {...digital} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Recruitments, "");