import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

 const Navbar = () => {
     return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">ansiace</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ListStyleType: 'none '}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Experiences' smooth={true} activeClass="activeClass">
                        <li>Experiences</li>
                        </Link>                        
                        <Link spy={true} to='Testimonials' smooth={true} activeClass="activeClass">
                        <li>Testimonials</li>
                        </Link>
                        
                    </ul>
                </div>
                <button className="button n-button">
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                    Contact
                </Link>
                </button>
            </div>
        </div>
     )
 }

 export default Navbar