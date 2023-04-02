import React from 'react'
import "./cta.scss"

const CTA = () => {
  return (
    <div className='cta'>
        <a href='#' className='btn' download={true} id="downloadCv">Download CV</a>
        <a href='#contact' className='btn btn-primary' id="letsTalk">Let's Talk</a>
    </div>
  )
}

export default CTA 