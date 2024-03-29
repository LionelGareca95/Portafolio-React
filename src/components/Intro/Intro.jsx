import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/codigo.png'
import programador from '../../img/programador.png'
import { themeContext } from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'

const Intro = () => {

        const transition = {duration: 2, type: 'spring'}
    
        const theme = useContext(themeContext)
        const darkMode = theme.state.darkMode;
       
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white' : ''}}>Hy! I am</span>
            <span>Lionel Gareca</span>
            <span>Front-end Developer</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
            <img src={Github} alt="Logo Github" />
            <img src={LinkedIn} alt="Logo Linkedin" />
            <img src={Instagram} alt="Logo Instagram" />
        </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView= {{left: '-24%'}}
            transition={transition}
            src={programador} 
            alt="Imagen Programador" 
            />
            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView= {{left: '68%'}}
            transition={transition}
            className='floating-div'
            style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={crown} txt1="web" txt2="Developer"/>
            </motion.div>
            <motion.div 
                initial={{left: '9rem', top: '18rem'}}
                whileInView= {{left: '0rem'}}
                transition={transition}
                className='floating-div'
                style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Design' text2='Award'/>
            </motion.div>
            {/* blur divs */}
            <div className='blur' style={{background: "rgb (238 210 255)"}}></div>
            <div className='blur'
            style={{background: '#C1F5FF', top: '17rem', height: '11rem', left: '-9rem'}}>

            </div>
        </div>
    </div>
  )
}

export default Intro