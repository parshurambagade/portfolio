import React from 'react';
import './mobileNav.scss';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {useState} from 'react';
import { NavLink, Outlet } from "react-router-dom"

const MobileNav = () => {

  const [activeNav, setActiveNav] = useState("#header");
  return (
    <>
    <nav>
      <div className="nav-logo">Parshu.B</div>
      <div className="links-container">
        <NavLink to="/header" onClick={()=>setActiveNav("#header")} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></NavLink>
        <NavLink to="/about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></NavLink>
        <NavLink to="/skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><BiBookAlt/></NavLink>
        <NavLink to="/projects" onClick={()=>setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><BiBookAlt/></NavLink>
        {/* <NavLink to="/testimonials" onClick={()=> setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}>Testimonials</NavLink> */}
        <NavLink to="/contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></NavLink>
  
        {/* <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/testimonials" className="nav-link">Testimonials</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink> */}
      </div>
    </nav>
    <Outlet />
    </>
  )
}

export default MobileNav
