import React from 'react'
import {Link} from 'react-router-dom'
import "./projects.scss"

import portfolioImg from "../../img/portfolioImg.png"
import keepNoteImg from "../../img/keepNoteImg.png"
import friendBookImg from "../../img/friendBookImg.png"
import todoImg from "../../img/todoImg.png"

const Projects = () => {
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="project">
          <div className="project-img">
            <img src={portfolioImg} alt="Portfolio screenshot" />
          </div>
          <div className="project-details">
            <h4>Personal Portfolio</h4>
            <p>This is the portfolio website which is built using HTML, CSS, JavaScript and ReactJS.</p>
          </div>
          <div className="project-btns">
            <Link to="https://parshu-portfolio.web.app" target="_blank" className='btn-primary'>Live demo</Link>
            <Link to="/about" target="_blank" className='btn'>Check code</Link>
          </div>
        </div>

        <div className="project">
          <div className="project-img">
            <img src={friendBookImg} alt="Friendbook screenshot" />
          </div>
          <div className="project-details">
            <h4>FriendBook</h4>
            <p>This is a clone of facebook. I have built this project using HTML,CSS, JavaScript and ReactJS.</p>
          </div>
          <div className="project-btns">
            <Link to="https://parshu-social.web.app" target="_blank" className='btn-primary'>Live demo</Link>
            <Link to="https://github.com/parshurambagade/social" target="_blank" className='btn'>Check code</Link>
          </div>
        </div>

        <div className="project">
          <div className="project-img">
            <img src={keepNoteImg} alt="Keep note screenshot" />
          </div>
          <div className="project-details">
            <h4>Keep Note</h4>
            <p>This is a simple note taking web application which is built using simple HTML, CSS, JavaScript and ReactJS</p>
          </div>
          <div className="project-btns">
            <Link to="https://parshurambagade.github.io/keep-note/" target="_blank" className='btn-primary'>Live demo</Link>
            <Link to="https://github.com/parshurambagade/keep-note" target="_blank" className='btn'>Check code</Link>
          </div>
        </div>
        
        <div className="project">
          <div className="project-img">
            <img src={todoImg} alt="todo screenshot" />
          </div>
          <div className="project-details">
            <h4>ToDo List</h4>
            <p>This is a ToDo List app which is built using Node.js and express js</p>
          </div>
          <div className="project-btns">
            <Link to="/about" target="_blank" className='btn-primary'>Live demo</Link>
            <Link to="https://github.com/parshurambagade/to-do-list" target="_blank" className='btn'>Check code</Link>
          </div>
        </div>

        {/* <div className="project">
          <div className="project-img">
            <img src={portfolioImg} alt="Portfolio screenshot" />
          </div>
          <div className="project-details">
            <h4>My Personal Portfolio</h4>
            <p>This is the portfolio website that is built using MERN stack.</p>
          </div>
          <div className="project-btns">
            <Link to="/about" target="_blank" className='btn-primary'>Live demo</Link>
            <Link to="/about" target="_blank" className='btn'>Check code</Link>
          </div>
        </div>

        <div className="project">
          <div className="project-img">
            <img src={portfolioImg} alt="Portfolio screenshot" />
          </div>
          <div className="project-details">
            <h4>My Personal Portfolio</h4>
            <p>This is the portfolio website that is built using MERN stack.</p>
          </div>
          <div className="project-btns">
            <Link to="/about" target="_blank" className='btn-primary'>Live demo</Link>
            <Link to="/about" target="_blank" className='btn'>Check code</Link>
          </div>
        </div> */}

    
      </div>
      </section>
  )
}

export default Projects
