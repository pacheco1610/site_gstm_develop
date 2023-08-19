import React from 'react'
import HeaderSecundary from '../components/headerSecundary'

const Landing = () => {
  return (
    <div className='landing'>
        <HeaderSecundary title="Cirque Du Solei" subtitle="Las Vegas, NV, USA"/>
        <section className='landing-container'>
            <div className='landing-info'></div>
            <div className='landing-precio'></div>
        </section>
    </div>
  )
}

export default Landing