import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
x:0,
opacity:1,
transition:{
  duration:1,
  staggerChildren:0.1,
}
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  }
}

const slideVariants={
  initial:{
    x:0,
  },
  animate:{
x:"-220%",
transition:{
  duration:20,
  repeat:Infinity,
  repeatType:"mirrormotion."
}
  },
}

function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>TANISHA SAXENA</motion.h2>
        <motion.h1 variants={textVariants}>Web Developer</motion.h1>
        <motion.p variants={textVariants}>I am a young dynamic Web Developer,deeply committed to achieving excellence driven by genuine passion for my work. </motion.p>

        <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
       </motion.div>
<motion.div className="sliding" variants={slideVariants} initial="initial" animate="animate">
React Developer Java Coder 
</motion.div>

      <div className="imageContainer">
        <img src="/PhotoMe.png" alt="hero" />
      </div>
      </div>
    </div>

  )
}

export default Hero
