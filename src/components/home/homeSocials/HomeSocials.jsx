import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
import "../homeSocials/homeSocials.scss"

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/parshuram-bagade-77049725a/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/musical_parshh/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/parshurambagade/" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials