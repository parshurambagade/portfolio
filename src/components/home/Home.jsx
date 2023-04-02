import React from 'react'
import CTA from './cta/CTA'
import me from '../../img/bg2-rb.png'
import HomeSocials from './homeSocials/HomeSocials'
import "../home/home.scss"

const Home = () => {
  return (
   <section id="home">
    <div className='content-container'>
      <div className="heading-text">
        <h5>Hey! I am</h5>
        <h2>Parshuram Bagade</h2>
        <div className='roles'>
          <span id="heading-1">Fullstack Web Developer</span>
        </div>
      </div>
      <div className="socials">
        <HomeSocials />
      </div>
      <div className="cta-container">
        <CTA />
      </div>  
    </div>
      

    <div className='me'>
      <img src={me} alt='my profile picture' />
    </div>
    
   </section>
  )
}

export default Home
