import React from 'react'
import HeaderSecundary from '../components/headerSecundary'
import Gallery from '../components/gallery'
import Questions from '../components/questions'

const About = () => {
  return (
    <div className='about'>
      <HeaderSecundary title="Nosotros" subtitle="Receptivo Oficial del Estado de Nevada" />
      <section className='about-ContentTexto'>
          <div className='about-title'>
            <span>ABOUT</span>
            <h3>Somos receptivo<br/> OFICIAL</h3>
          </div>
          <div className='about-parrafos'>
            <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
            <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          </div>
      </section>
      <Gallery/>
      <Questions/>
    </div>
  )
}

export default About