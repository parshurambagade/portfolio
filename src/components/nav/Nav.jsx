import React, {useState} from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "./nav.scss"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaWindowClose} from "react-icons/fa"
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {FaLaptopCode} from 'react-icons/fa';
import {BiMessageSquareDetail} from 'react-icons/bi';


const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  // const [activeNav, setActiveNav] = useState("#header");
  return (
    <>
    <section id='nav'>
      <div className='nav-left'>
        <div className="nav-logo">Parshu.B</div>
        <div className='toggle-icon' onClick={()=> setToggleNav(!toggleNav)}>{toggleNav ? <FaWindowClose /> : <GiHamburgerMenu />}</div>
      </div>
      <div className={toggleNav ? "toggle-links-container" : "links-container"}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link" id="contact-link">Contact</NavLink>
      </div>
    </section>


    {/* //******************Mobile Navbar**************************** */}
    <section id="mobile-nav">
      <NavLink to="/" className="nav-link"><AiOutlineHome/></NavLink>
      <NavLink to="/about" className="nav-link"><AiOutlineUser/></NavLink>
      <NavLink to="/skills" className="nav-link"><FaLaptopCode/></NavLink>
      <NavLink to="/projects" className="nav-link"><BiBookAlt/></NavLink>
      {/* <NavLink to="/testimonials" onClick={()=> setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}>Testimonials</NavLink> */}
      <NavLink to="/contact" className="nav-link"><BiMessageSquareDetail/></NavLink>
    </section>
    <Outlet />
    </>
  )
}

export default Nav

