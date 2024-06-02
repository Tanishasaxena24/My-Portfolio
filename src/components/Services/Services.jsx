import React from 'react'
import {motion, transform} from 'framer-motion'
import './services.scss'


const variants = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

function Services() {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.p> I excel in articulating ideas,fostering more
impactful and clear communication. <br /> I outshine in collaborative motion.environments and contribute
actively to team success.
</motion.p>
<motion.hr />
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <motion.div className="title">
                <img src="dev.jpeg" alt="dev" />
                <h1><motion.b whileHover={{color:"rgb(17, 112, 213)"}}>Vision </motion.b> to</h1>
            </motion.div>
            <motion.div className="title">
                <motion.h1><motion.b whileHover={{color:"rgb(17, 112, 213)"}}>Innovate </motion.b></motion.h1>
                <motion.button>WHAT AM I GOOD AT?</motion.button>
            </motion.div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
            <motion.div className="box" whileHover={{backgroundColor:"rgb(15, 49, 79)" }}>
                <motion.h2>Programming Languages</motion.h2>
                <motion.p>Java , Python</motion.p>
                
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"rgb(15, 49, 79)" }}>
                <motion.h2>Frontend Development</motion.h2>
                <motion.p>HTML,CSS,<br />JavaScript,React</motion.p>
               
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"rgb(15, 49, 79)" }}>
                <motion.h2>Styling & Animations</motion.h2>
                <motion.p>Bootstrap,Tailwind CSS,Framer motion</motion.p>
               
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"rgb(15, 49, 79)" }}>
                <motion.h2>Non-Technical Skills</motion.h2>
                <motion.p>Presentation,Communication, 
                     <br />
                   Adaptability, <br /> Effective scheduling,Prioritization</motion.p>
                
            </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
