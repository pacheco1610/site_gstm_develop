import React from 'react'
import Nav from './nav'

const HeaderSecundary = ({title,subtitle,img}) => {
  return (

    <div className={`${img ? "HeaderSecundary-background" : "HeaderSecundary" }`} style={{ backgroundImage: `url(${img})` }}>
      <Nav Fontcolor="#fff"/>
        <div className="HeaderSecundary-title">
          <h2 className='HeaderSecundary-h2'> {title} </h2>        
          <h3 className='HeaderSecundary-subtitle'> { subtitle } </h3>
        </div>
    </div>
  )
}

export default HeaderSecundary