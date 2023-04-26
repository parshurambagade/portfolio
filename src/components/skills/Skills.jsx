import React from 'react'
import "./skills.scss"
// import {AiFillHtml5} from "react-icons/ai"
import htmlImg from "../../img/html.png";
import cssImg from "../../img/css.png";
import jsImg from "../../img/js.png";
import reactImg from "../../img/react.png";
import bootstrapImg from "../../img/bootstrap.png";
import scssImg from "../../img/scss.png";
import nodeImg from "../../img/node.png";
import expressImg from "../../img/express.png";
import mongodbImg from "../../img/mongodb.png";
import mysqlImg from "../../img/mysql.png";
import phpImg from "../../img/php.png";
import pythonImg from "../../img/python.png";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="skills-container">
        <div className="frontend-container">
          <h3>Frontend Skills</h3>
          <div className="frontend-skills">
            <div className="frontend-skill">
              <div className="skill-icon">
                <img src={htmlImg} alt="html icon"/>
              </div>
              <div className="skill-content">
                <h4>HTML</h4>
                <p>Experienced</p>
              </div>
            </div>

            <div className="frontend-skill">
              <div className="skill-icon">
                <img src={cssImg} alt="css icon"/>  
              </div>
              <div className="skill-content">
                <h4>CSS</h4>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="frontend-skill">
              <div className="skill-icon">
                <img src={jsImg} alt="js icon"/>  
              </div>
              <div className="skill-content">
                <h4>JavaScript</h4>
                <p>Intermediate</p>
              </div>
            </div>
            
            <div className="frontend-skill">
              <div className="skill-icon">
                <img src={reactImg} alt="react icon"/>  
              </div>
              <div className="skill-content">
                <h4>ReactJs</h4>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="frontend-skill">
              <div className="skill-icon">
                <img src={bootstrapImg} alt="bootstrap icon"/>  
              </div>
              <div className="skill-content">
                <h4>Bootstrap</h4>
                <p>Experienced</p>
              </div>
            </div>

            <div className="frontend-skill">
              <div className="skill-icon">
                <img src={scssImg} alt="scss icon"/>  
              </div>
              <div className="skill-content">
                <h4>SCSS</h4>
                <p>Intermediate</p>
              </div>
            </div>

          </div>
        </div>


        <div className="backend-container">
          <h3>Backend Skills</h3>
          <div className="backend-skills">
            <div className="backend-skill">
              <div className="skill-icon">
                <img src={nodeImg} alt="node icon"/>
              </div>
              <div className="skill-content">
                <h4>Node.js</h4>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="backend-skill">
              <div className="skill-icon">
                <img src={expressImg} alt="express icon"/>  
              </div>
              <div className="skill-content">
                <h4>Express</h4>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="backend-skill">
              <div className="skill-icon">
                <img src={mongodbImg} alt="mongodb icon"/>  
              </div>
              <div className="skill-content">
                <h4>MongoDB</h4>
                <p>Intermediate</p>
              </div>
            </div>
            
            <div className="backend-skill">
              <div className="skill-icon">
                <img src={mysqlImg} alt="mysql icon"/>  
              </div>
              <div className="skill-content">
                <h4>MySQL</h4>
                <p>Experienced</p>
              </div>
            </div>

            <div className="backend-skill">
              <div className="skill-icon">
                <img src={phpImg} alt="php icon"/>  
              </div>
              <div className="skill-content">
                <h4>PHP</h4>
                <p>Beginner</p>
              </div>
            </div>

            <div className="backend-skill">
              <div className="skill-icon">
                <img src={pythonImg} alt="python icon"/>  
              </div>
              <div className="skill-content">
                <h4>Python</h4>
                <p>Beginner</p>
              </div>
            </div>

          </div>
        </div>
    
      </div>
    </section>
  )
}

export default Skills
