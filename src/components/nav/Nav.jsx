import React, {useState} from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "./nav.scss"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaWindowClose} from "react-icons/fa"

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
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
    <Outlet />
    </>
  )
}

export default Nav

