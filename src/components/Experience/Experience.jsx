import React from 'react'
import './experience.scss'
import {animate, easeOut, motion} from 'framer-motion'


   const scrollImg={
    initial:{
      opacity:0,
      x:10,
    },
    animate:{
    opacity:1,
      transition:{
        opacity:1,
        duration:2,
        repeat:Infinity,
      }
    }
  }



function Experience() {
  return (
    <motion.div className='experience' variants={scrollImg}  animate="scrollImg">
    </motion.div>
  )
}

export default Experience
