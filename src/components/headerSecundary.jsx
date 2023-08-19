import React from 'react'
import Nav from './nav'
import img from '../assets/lasvegas.jpg';
const HeaderSecundary = ({title,subtitle}) => {
  return (

    <div className={`${img ? "HeaderSecundary-background" : "HeaderSecundary" }`} style={{ backgroundImage: `url(${img})` }}>
      <Nav Fontcolor="#fff"/>
        <div className="HeaderSecundary-title">
          <h2 className='HeaderSecundary-h2'> {title} </h2>        
          <p className='HeaderSecundary-subtitle'> { subtitle } </p>
        </div>
    </div>
  )
}

export default HeaderSecundary