import React from 'react'
import './Experience.css'

const Experience = () =>  {
    return(
        <div className="experience" id='Experiences'>
        <div className="achievement">
          <div className="circle">2+</div>
          <span>years</span>
          <span>Experience</span> 
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">1+</div>
            <span>companies</span>
            <span>work</span>
          </div>
        </div>
    )
}

export default Experience