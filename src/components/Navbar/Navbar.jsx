import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <div className='navbar'>
        
        <div className="wrapper">
        <Sidebar/>
            {/* <div className='head'> */} 
            {/* <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:1}}
            className='logo'><img src="/mylogo.png" alt="logo" /></motion.span> */}
           
            <motion.span 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:1}}
            className='name'><img className='img' src="/initials.png" alt="initials" />
              Tanisha Saxena</motion.span>
        
            <motion.div
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:1}}
            className="link">
                <a href="https://www.linkedin.com/in/tanishasaxena2412"><img src='/linkedin.png' alt="linkedin" /></a>
                <a href="https://github.com/Tanishasaxena24"><img src='/github.png' alt="github" /></a>
               
            </motion.div>
        </div>
        </div>
  )
}

export default Navbar
