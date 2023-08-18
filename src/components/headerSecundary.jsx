import React from 'react'

const HeaderSecundary = ({title,subtitle}) => {
  return (
    <div className='headerSecundary'>
        <div className='headerSecundary-container'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    </div>
  )
}

export default HeaderSecundary