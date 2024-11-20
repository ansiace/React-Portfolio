import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from "react";
// import { motion } from "framer-motion";
const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return(
       <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hi! I'm </span>
                <span>Animesh Raj</span>
                <span>I am a Passionate Front-end Developer from India </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href='https://github.com/ansiace'>
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/rajanimesh/'>
                
                <img src={Linkedin} alt="" />
                </a>

                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt=""/> 
            <div style={{top: '-4%', left:'58%' }}
            className='floating-div'
            >
                <FloatingDiv image ={Crown} txt1='Web' txt2='Developer' />
            </div>
            <div style={{top: '18.1rem', left: '1rem'}}
            className='floating-div'
            >
                <FloatingDiv image={thumbup} txt1='Best Photography'  txt2='Award'/>
            </div>
            {/* blur divs */}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>

            <div className="blur"
            
            style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}

            ></div>    

        </div>
    </div>
    )
}

export default Intro