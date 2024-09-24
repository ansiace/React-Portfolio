import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

 const Navbar = () => {
     return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Animesh</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ListStyleType: 'none '}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Experiences</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
     )
 }

 export default Navbar